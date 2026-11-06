/**
 * Shared framer-motion presets.
 *
 * Several sections animate their cards the same way. Keeping the variants
 * here means one place to tune the feel of the whole site.
 */

/** Card rises 20px and fades in with a soft spring when it enters the viewport. */
export const riseInSpring = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

/** `riseInSpring` plus a small lift on hover (use with whileHover="hover"). */
export const riseInSpringWithHover = {
  ...riseInSpring,
  hover: {
    y: -6,
    transition: { type: "spring", stiffness: 400, damping: 15 },
  },
};

/** Viewport options for cards: trigger once, when 20% of the card is visible. */
export const revealOnce = { amount: 0.2, once: true };

/** Props for a section heading that simply fades in. */
export const headingFadeIn = (duration = 0.8) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration, ease: "easeOut" },
});

/** True when the visitor has asked the OS to minimise motion. */
export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
