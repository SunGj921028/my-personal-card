import { useEffect, useRef } from "react";
import { attachButtonGlow } from "../utils/buttonGlow.js";
import { SOCIAL_LINKS } from "../constants/content.js";

function GitHubIcon() {
  return (
    <svg className="btn-ico" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 19c-4 1.5-4-2-5-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M14 22v-3.2c0-.8.3-1.5.8-2.1c2.4-.3 4.7-1.2 4.7-5.4c0-1.2-.4-2.2-1.1-3c.1-.3.5-1.6-.1-3.2c0 0-1-.3-3.2 1.2c-1-.3-2-.5-3-.5s-2 .2-3 .5C6.4 3.5 5.4 3.8 5.4 3.8c-.6 1.6-.2 2.9-.1 3.2c-.7.8-1.1 1.8-1.1 3c0 4.2 2.3 5.1 4.7 5.4c.5.6.8 1.3.8 2.1V22"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="btn-ico" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6.5 9.5V19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M6.5 6.2V6.3" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
      <path
        d="M10.5 19v-5.2c0-1.8 1.1-3.1 2.7-3.1c1.6 0 2.5 1.2 2.5 3.1V19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10.5 9.5V19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

const icons = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
};

export function SocialLinks({ emailButton }) {
  const wrapRef = useRef(null);

  useEffect(() => {
    const root = wrapRef.current;
    if (!root) return;
    const cleanups = Array.from(root.querySelectorAll(".btn")).map((btn) => attachButtonGlow(btn));
    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <div className="social" ref={wrapRef} aria-label="Social Links">
      {SOCIAL_LINKS.map(({ id, label, href }) => {
        const Ico = icons[id];
        return (
          <a
            key={id}
            className="btn"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            data-btn={id}
          >
            {Ico ? <Ico /> : null}
            <span className="btn-text">{label}</span>
          </a>
        );
      })}
      {emailButton}
    </div>
  );
}
