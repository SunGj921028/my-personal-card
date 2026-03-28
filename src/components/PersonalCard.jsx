import { AvatarSection } from "./AvatarSection.jsx";
import { SocialLinks } from "./SocialLinks.jsx";
import { useCardTilt } from "../hooks/useCardTilt.js";
import { useTypingEffect } from "../hooks/useTypingEffect.js";
import {
  BADGE_TEXT,
  FULL_NAME,
  TAGLINE,
  TYPING_INTRO,
} from "../constants/content.js";

export function PersonalCard() {
  const { cardRef, glareRef } = useCardTilt();
  const typingText = useTypingEffect(TYPING_INTRO);

  return (
    <div className="card-stage">
      <article className="card" ref={cardRef}>
        <div className="glare" ref={glareRef} />
        <div className="card-inner">
          <div className="content">
            <AvatarSection tagline={TAGLINE} />

            <div className="brand">
              <h1 className="name">
                {FULL_NAME}
                <span className="badge">{BADGE_TEXT}</span>
              </h1>

              <p className="typing-label">Self Introduction</p>

              <p className="intro" aria-live="polite">
                <span>{typingText}</span>
                <span className="cursor" aria-hidden="true" />
              </p>

              <SocialLinks />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
