/**
 * Navbar
 *
 * Fixed top bar with the logo, section links, theme toggle and (on small
 * screens) a hamburger menu.
 *
 * Active-link highlighting: an IntersectionObserver watches every section
 * listed in `navLinks`. Because sections are lazy-mounted (see App.jsx), a
 * MutationObserver also picks up sections that appear after first render.
 */
import { useContext, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdDarkMode, MdLightMode } from "react-icons/md";

import { ThemeContext } from "../../../context/ThemeContext";
import { navLinks, profile, PUBLIC_URL } from "../../../data";
import "./Navbar.css";

/** "#about" -> "about" */
const toId = (href) => href.replace("#", "");

const SECTION_IDS = navLinks.map((link) => toId(link.href));

/**
 * Tracks which section is currently in the reading zone of the viewport.
 * @returns {[string, (id: string) => void]} active id and a manual setter
 */
const useActiveSection = () => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observed = new Set();

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        // Pick the most visible section among those intersecting.
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (mostVisible) setActiveId(mostVisible.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5] },
    );

    const observeNewSections = () => {
      SECTION_IDS.forEach((id) => {
        const el = document.getElementById(id);
        if (el && !observed.has(el)) {
          observed.add(el);
          intersectionObserver.observe(el);
        }
      });
    };

    observeNewSections();

    // Lazy sections mount later; observe them as soon as they exist.
    const mutationObserver = new MutationObserver(observeNewSections);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, []);

  return [activeId, setActiveId];
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useActiveSection();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const menuRef = useRef(null);

  const toggleMenu = () => setMenuOpen((open) => !open);

  const handleLinkClick = (href) => {
    setMenuOpen(false);
    setActiveId(toId(href));
  };

  const handleThemeKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleTheme();
    }
  };

  // Close the mobile menu when clicking anywhere outside it.
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const MenuIcon = menuOpen ? AiOutlineClose : GiHamburgerMenu;

  return (
    <nav className="navbar">
      <a className="logo" href={`${PUBLIC_URL}/`}>
        <img
          src={profile.logo}
          alt={`${profile.name} Portfolio`}
          className="logo-img"
          width={48}
          height={48}
          decoding="async"
          fetchPriority="high"
        />
      </a>

      <div className="navbar-right">
        {/* Section links (a slide-in panel on mobile) */}
        <div className={`navbar-center ${menuOpen ? "active" : ""}`} ref={menuRef}>
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              whileHover={{ scale: 1.05, color: "var(--primary)" }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`nav-link-animated ${activeId === toId(link.href) ? "active-link" : ""}`}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        <div className="navbar-right-icons">
          {/* Theme toggle */}
          <motion.div
            className="theme-toggle"
            role="button"
            tabIndex={0}
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            onClick={toggleTheme}
            onKeyDown={handleThemeKeyDown}
            whileHover={{ rotate: 20, scale: 1.2 }}
            whileTap={{ rotate: -20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {theme === "light" ? (
              <MdDarkMode className="theme-icon" title="Dark Mode" />
            ) : (
              <MdLightMode className="theme-icon" title="Light Mode" />
            )}
          </motion.div>

          {/* Mobile menu button */}
          <MenuIcon
            className="navbar-menu-icon"
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
