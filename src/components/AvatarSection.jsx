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
      <p className="tagline">{tagline}</p>
    </div>
  );
}
