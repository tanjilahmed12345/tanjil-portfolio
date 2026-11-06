/**
 * Hero
 *
 * First screen: availability badge, typed greeting, tagline, sub-line and
 * the résumé / mail buttons, with the 3D TechGlobe on the right.
 *
 * The globe is the heaviest part of the page (three.js), so it is code-split
 * and only requested once the hero is visible and the browser is idle.
 * Text animates in whenever the hero (re)enters the viewport.
 */
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { profile } from "../../../data";
import TypingEffect from "../../ui/TypingEffect/TypingEffect";
import "./Hero.css";

const TechGlobe = lazy(() => import("../../ui/TechGlobe/TechGlobe"));

/** requestIdleCallback with a setTimeout fallback (Safari). */
const requestIdle = window.requestIdleCallback || ((cb) => setTimeout(cb, 120));
const cancelIdle = window.cancelIdleCallback || ((id) => clearTimeout(id));

/** Fade (and optionally rise) in while the hero is on screen. */
const revealWhen = (isInView, { duration, rise = false }) => ({
  initial: rise ? { opacity: 0, y: 50 } : { opacity: 0 },
  animate: rise
    ? { opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }
    : { opacity: isInView ? 1 : 0 },
  transition: rise ? { duration, type: "spring", stiffness: 100 } : { duration },
});

const Hero = () => {
  const heroRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [showGlobe, setShowGlobe] = useState(false);

  // Track whether at least 30% of the hero is visible.
  useEffect(() => {
    const node = heroRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(([entry]) => setIsInView(entry.isIntersecting), {
      threshold: 0.3,
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Load the globe the first time the hero is visible and the main thread is free.
  useEffect(() => {
    if (!isInView) return undefined;
    const idleId = requestIdle(() => setShowGlobe(true), { timeout: 600 });
    return () => cancelIdle(idleId);
  }, [isInView]);

  return (
    <div>
      <div className="hero-section" ref={heroRef}>
        <div className="hero-container">
          <div className="hero-content">
            <div className="availability-badge shine-button">
              <div className="ping-dot" />
              <span>{profile.availability}</span>
            </div>

            <motion.h1 {...revealWhen(isInView, { duration: 1, rise: true })}>
              <TypingEffect text={`Hi, I'm ${profile.firstName}.`} speed={200} loop />
            </motion.h1>

            <motion.h1 {...revealWhen(isInView, { duration: 1.2, rise: true })}>
              {profile.heroTagline}
            </motion.h1>

            <motion.p {...revealWhen(isInView, { duration: 1.5 })}>{profile.heroSubline}</motion.p>

            <motion.div className="hero-buttons" {...revealWhen(isInView, { duration: 1.7 })}>
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="join-button shine-button"
              >
                My Resume
              </a>
              <a href={`mailto:${profile.email}`} className="contact-link shine-button">
                Mail Me
              </a>
            </motion.div>
          </div>

          {showGlobe && (
            <Suspense fallback={<div className="tech-globe-placeholder" aria-hidden="true" />}>
              <TechGlobe />
            </Suspense>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
