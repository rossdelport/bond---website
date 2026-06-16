import { PixelSprite } from "./pixel/PixelSprite";
import { bigHeart } from "./pixel/sprites";

export function EmotionalHook() {
  return (
    <section className="hook">
      <div className="hook__inner">
        <div className="bond-link" aria-hidden="true">
          <span className="bond-link__heart">
            <PixelSprite grid={bigHeart.grid} palette={bigHeart.palette} pixel={6} />
          </span>
          <span className="bond-link__track">
            <span className="bond-link__line" />
            <span className="bond-link__orb" />
          </span>
          <span className="bond-link__heart">
            <PixelSprite grid={bigHeart.grid} palette={bigHeart.palette} pixel={6} />
          </span>
        </div>

        <p className="hook__quote">the pet is the point. the relationship is the side effect.</p>
        <p className="hook__sub">
          Bond doesn&rsquo;t ask you to be more romantic. it just gives you something small to look
          after together.
        </p>
      </div>
    </section>
  );
}
