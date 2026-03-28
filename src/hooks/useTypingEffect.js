import { useEffect, useState } from "react";

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function useTypingEffect(fullText, { speed = 10, startDelay = 200 } = {}) {
  const [text, setText] = useState(() => (prefersReducedMotion() ? fullText : ""));

  useEffect(() => {
    if (prefersReducedMotion()) {
      setText(fullText);
      return;
    }

    let cancelled = false;
    let i = 0;
    let timeoutId = null;
    setText("");

    const clear = () => {
      if (timeoutId != null) {
        window.clearTimeout(timeoutId);
        timeoutId = null;
      }
    };

    const tick = () => {
      if (cancelled) return;
      setText(fullText.slice(0, i));
      i += 1;
      if (i > fullText.length) return;
      const dynamicSpeed = i > Math.floor(fullText.length * 0.7) ? speed + 10 : speed;
      timeoutId = window.setTimeout(tick, dynamicSpeed);
    };

    const start = window.setTimeout(() => {
      tick();
    }, startDelay);

    return () => {
      cancelled = true;
      window.clearTimeout(start);
      clear();
    };
  }, [fullText, speed, startDelay]);

  return text;
}
