import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/**
 * Counts from 0 up to the number inside `value` (e.g. "2,000+", "8", "2+")
 * the first time it scrolls into view. Keeps any prefix/suffix and the
 * thousands separator from the original string.
 */
const parse = (value) => {
  const m = String(value).match(/^(\D*)([\d,]+(?:\.\d+)?)(.*)$/);
  if (!m) return null;
  return {
    prefix: m[1],
    target: parseFloat(m[2].replace(/,/g, "")),
    useCommas: m[2].includes(","),
    suffix: m[3],
  };
};

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

const CountUp = ({ value, duration = 2200, className }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const parsed = parse(value);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView || !parsed) return;

    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setCurrent(parsed.target);
      return;
    }

    let raf;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      setCurrent(Math.round(easeOutCubic(t) * parsed.target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value, duration]);

  if (!parsed) return <span className={className}>{value}</span>;

  const shown = parsed.useCommas ? current.toLocaleString("en-US") : String(current);
  const done = current === parsed.target;

  return (
    <span ref={ref} className={className} aria-label={String(value)}>
      <span aria-hidden="true">
        {parsed.prefix}
        {shown}
        <span className={`count-suffix ${done ? "show" : ""}`}>{parsed.suffix}</span>
      </span>
    </span>
  );
};

export default CountUp;
