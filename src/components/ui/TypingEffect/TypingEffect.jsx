/**
 * TypingEffect
 *
 * Types `text` out one character at a time. With `loop`, it waits two
 * seconds after finishing and starts again. Visitors who prefer reduced
 * motion see the full text immediately.
 */
import { useEffect, useRef, useState } from "react";

import { prefersReducedMotion } from "../../../utils/motion";

/** Pause after the last character before a looped restart. */
const LOOP_PAUSE_MS = 2000;

/**
 * @param {object}  props
 * @param {string}  props.text  Text to type.
 * @param {number}  props.speed Milliseconds per character.
 * @param {boolean} [props.loop=false] Restart after finishing.
 */
const TypingEffect = ({ text, speed, loop = false }) => {
  const [displayedText, setDisplayedText] = useState("");
  const indexRef = useRef(0);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setDisplayedText(text);
      return undefined;
    }

    indexRef.current = 0;
    setDisplayedText("");

    let restartTimeoutId;
    const intervalId = setInterval(() => {
      const nextIndex = indexRef.current + 1;

      // Still typing: reveal one more character.
      if (nextIndex <= text.length) {
        indexRef.current = nextIndex;
        setDisplayedText(text.slice(0, nextIndex));
        return;
      }

      // Finished: either schedule a restart or stop.
      if (loop) {
        restartTimeoutId = setTimeout(() => {
          indexRef.current = 0;
          setDisplayedText("");
        }, LOOP_PAUSE_MS);
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    return () => {
      clearInterval(intervalId);
      clearTimeout(restartTimeoutId);
    };
  }, [text, speed, loop]);

  return <span>{displayedText}</span>;
};

export default TypingEffect;
