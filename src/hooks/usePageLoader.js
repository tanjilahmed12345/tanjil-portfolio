/**
 * usePageLoader
 *
 * Decides how long the intro <LoadingScreen> stays on screen.
 */
import { useEffect, useState } from "react";

/** Long enough for the loader animation to finish. */
const MIN_LOADER_MS = 1400;
/** Hard cap so a slow asset never blocks the page. */
const MAX_LOADER_MS = 3500;

/**
 * Keeps the loader visible for at least MIN_LOADER_MS (animation finish)
 * but dismisses early once the page is ready, and never blocks past MAX_LOADER_MS.
 *
 * @returns {boolean} true while the loader should be shown
 */
export function usePageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const start = performance.now();
    let minTimerId;
    let maxTimerId;
    let finished = false;

    const dismiss = () => {
      if (finished) return;
      finished = true;
      setLoading(false);
    };

    const onReady = () => {
      const elapsed = performance.now() - start;
      const remaining = Math.max(0, MIN_LOADER_MS - elapsed);
      minTimerId = setTimeout(dismiss, remaining);
    };

    maxTimerId = setTimeout(dismiss, MAX_LOADER_MS);

    if (document.readyState === "complete") {
      onReady();
    } else {
      window.addEventListener("load", onReady, { once: true });
    }

    return () => {
      finished = true;
      clearTimeout(minTimerId);
      clearTimeout(maxTimerId);
      window.removeEventListener("load", onReady);
    };
  }, []);

  return loading;
}
