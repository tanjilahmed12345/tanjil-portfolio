/**
 * ScrollToTopButton
 *
 * Floating round button that appears after the visitor scrolls down
 * SHOW_AFTER_PX and smoothly returns them to the top. The scroll listener is
 * throttled to one check per animation frame.
 */
import { useCallback, useEffect, useState } from "react";

import "./ScrollToTopButton.css";

const SHOW_AFTER_PX = 200;

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const updateVisibility = useCallback(() => {
    setIsVisible(window.scrollY > SHOW_AFTER_PX);
  }, []);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        updateVisibility();
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateVisibility();

    return () => window.removeEventListener("scroll", onScroll);
  }, [updateVisibility]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="scroll-to-top-btn"
      aria-label="Scroll to top"
    >
      <i className="fa fa-arrow-up" aria-hidden="true" />
    </button>
  );
};

export default ScrollToTopButton;
