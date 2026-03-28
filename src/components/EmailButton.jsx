import { useState } from "react";
import { EMAIL } from "../constants/content.js";
import { copyToClipboard } from "../utils/clipboard.js";

export function EmailButton({ onShowToast }) {
  const [label, setLabel] = useState("Email");

  return (
    <button
      className="btn"
      type="button"
      data-email={EMAIL}
      onClick={async () => {
        const prev = label;
        setLabel("Copying...");
        const ok = await copyToClipboard(EMAIL);
        if (ok) onShowToast("Email copied!");
        else onShowToast("Copy failed, please copy manually");
        window.setTimeout(() => setLabel(prev), 900);
      }}
    >
      <svg className="btn-ico" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4.5 7.5l7.5 5l7.5-5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.5 6.5h13a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="btn-text">{label}</span>
    </button>
  );
}
