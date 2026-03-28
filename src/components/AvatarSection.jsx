import { useState } from "react";
import { AVATAR_ALT, AVATAR_PLACEHOLDER_SVG, AVATAR_SRC } from "../constants/content.js";

export function AvatarSection({ tagline }) {
  const [src, setSrc] = useState(AVATAR_SRC);

  return (
    <div className="avatar-wrap">
      <div className="avatar-ring">
        <div className="avatar" aria-hidden="true">
          <img
            alt={AVATAR_ALT}
            src={src || AVATAR_PLACEHOLDER_SVG}
            onError={() => setSrc(AVATAR_PLACEHOLDER_SVG)}
          />
        </div>
      </div>

      <div className="tagline-block">
        <p className="tagline-headline">{tagline.headline}</p>
        <p className="tagline-role">{tagline.role}</p>
        <ul className="tagline-skills" aria-label="Skills and focus areas">
          {tagline.skills.map((item) => (
            <li key={item} className="tagline-chip">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
