/**
 * LazyMount
 *
 * Renders an empty placeholder until it comes within `rootMargin` of the
 * viewport, then mounts its children (once, never unmounts). Paired with
 * React.lazy() in App.jsx so below-the-fold sections only download their
 * JavaScript when the visitor scrolls towards them.
 */
import { useEffect, useRef, useState } from "react";

/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.rootMargin="300px 0px"] How early to mount, before the section is visible.
 * @param {string} [props.minHeight="1px"] Space reserved while not yet mounted.
 */
const LazyMount = ({ children, rootMargin = "300px 0px", minHeight = "1px" }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    // Very old browsers: just render everything.
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} style={{ minHeight: visible ? undefined : minHeight }}>
      {visible ? children : null}
    </div>
  );
};

export default LazyMount;
