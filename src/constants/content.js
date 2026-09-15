/** Site copy and links — single source of truth */
export const AVATAR_SRC = "/image/1.jpg";
export const AVATAR_ALT = "大頭照佔位";

export const TAGLINE = {
  headline: "M.S. in EE @ NTU | S.W Engineer Intern at Garmin",
  role: "Computer Vision & Robotics Researcher",
  skills: [
    "Systems & Software Engineering",
    "Hardware–Software Integration",
    "Architecture Design & Optimization",
    "DevOps & Observability",
    "Full-Stack Development",
    "AI, ML, LLM & RAG",
  ],
};

export const FULL_NAME = "傅靖嘉 (Jing-Jia Fu)";
export const BADGE_TEXT = "My Personal Card";

export const TYPING_INTRO =
  "I am a master's student with a background in computer science, currently exploring research in tactile sensing, robotics, and Vision-Language-Action (VLA) models. My interests span systems software, high-performance computing, AI, and signal processing, with hands-on experience in C/C++, CUDA, concurrent systems, performance profiling, and AI-powered software tools. I enjoy turning algorithms and research ideas into efficient, practical software systems."

export const SOCIAL_LINKS = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/SunGj921028",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sungj/",
  },
];

/** Inline SVG placeholder when image missing or fails — gray background + darker silhouette */
const AVATAR_PLACEHOLDER_MARKUP = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="#d1d5db"/><g fill="#64748b"><circle cx="128" cy="90" r="36"/><path d="M128 134c-42 0-76 26-76 58v48h152v-48c0-32-34-58-76-58z"/></g></svg>`;

export const AVATAR_PLACEHOLDER_SVG = `data:image/svg+xml,${encodeURIComponent(AVATAR_PLACEHOLDER_MARKUP)}`;
