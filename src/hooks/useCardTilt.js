import { useCallback, useEffect, useRef } from "react";

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function useCardTilt() {
  const cardRef = useRef(null);
  const glareRef = useRef(null);
  const rafId = useRef(0);

  const resetTilt = useCallback(() => {
    const card = cardRef.current;
    const glare = glareRef.current;
    if (!card || !glare) return;
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
    card.style.setProperty("--mx", "50%");
    card.style.setProperty("--my", "50%");
    glare.style.setProperty("--gx", "-20%");
    glare.style.setProperty("--gy", "-10%");
  }, []);

  const applyTilt = useCallback((clientX, clientY) => {
    const card = cardRef.current;
    const glare = glareRef.current;
    if (!card || !glare) return;

    const rect = card.getBoundingClientRect();
    const px = (clientX - rect.left) / rect.width;
    const py = (clientY - rect.top) / rect.height;
    const dx = px - 0.5;
    const dy = py - 0.5;
    const maxDeg = 9;
    const ry = clamp(dx * maxDeg * 1.1, -maxDeg, maxDeg);
    const rx = clamp(-dy * maxDeg, -maxDeg, maxDeg);
    const mx = `${(px * 100).toFixed(1)}%`;
    const my = `${(py * 100).toFixed(1)}%`;
    const gx = `${((px - 0.5) * 40).toFixed(1)}%`;
    const gy = `${((py - 0.5) * 28).toFixed(1)}%`;

    card.style.setProperty("--rx", `${rx.toFixed(2)}deg`);
    card.style.setProperty("--ry", `${ry.toFixed(2)}deg`);
    card.style.setProperty("--mx", mx);
    card.style.setProperty("--my", my);
    glare.style.setProperty("--gx", gx);
    glare.style.setProperty("--gy", gy);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion()) {
      resetTilt();
      return;
    }

    const card = cardRef.current;
    if (!card) return;

    const onMove = (e) => {
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => applyTilt(e.clientX, e.clientY));
    };

    const onEnter = (e) => {
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => applyTilt(e.clientX, e.clientY));
    };

    const onLeave = () => {
      cancelAnimationFrame(rafId.current);
      resetTilt();
    };

    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseenter", onEnter);
    card.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(rafId.current);
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseenter", onEnter);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, [applyTilt, resetTilt]);

  return { cardRef, glareRef };
}
