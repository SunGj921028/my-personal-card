/** Site copy and links — single source of truth */
export const AVATAR_SRC = "/image/1.jpg";
export const AVATAR_ALT = "大頭照佔位";

export const TAGLINE = `B.S. in CSIE @ NTNU | Incoming Graduate Student
Computer Vision & Signal Processing Researcher
Data Analysis · Machine Learning · System Design · Automation Testing · LLM & RAG · Software Engineering
`;

export const FULL_NAME = "傅靖嘉 (Jing-Jia Fu)";
export const BADGE_TEXT = "My Personal Card";

export const TYPING_INTRO =
  "As an incoming graduate student passionate about Computer Vision and signal processing, I bridge the gap between AI research and software engineering. Experienced in leveraging LLM and RAG to optimize automated testing, coupled with the ability to independently build end-to-end web applications and software systems. I am driven to turn complex algorithms into real-world applications that create value for the team.";

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
