/**
 * CountUp
 *
 * Counts from 0 up to the number inside `value` (e.g. "2,000+", "8", "2+")
 * the first time it scrolls into view. Keeps any prefix/suffix and the
 * thousands separator from the original string; the suffix fades in once
 * the count lands. Screen readers get the final value via aria-label.
 */
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

import { prefersReducedMotion } from "../../../utils/motion";
import "./CountUp.css";

/**
 * Splits "2,000+" into { prefix: "", target: 2000, useCommas: true, suffix: "+" }.
 * Returns null when the string has no number, so it is shown as-is.
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

/**
 * @param {object} props
 * @param {string|number} props.value Display value containing a number.
 * @param {number} [props.duration=2200] Animation length in ms.
 * @param {string} [props.className]
 */
const CountUp = ({ value, duration = 2200, className }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const parsed = parse(value);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView || !parsed) return;

    if (prefersReducedMotion()) {
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
    // `parsed` is derived from `value`, which is already a dependency.
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
