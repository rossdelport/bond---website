import { PixelSprite } from "./pixel/PixelSprite";
import { egg, sharedCare, evolutionStar } from "./pixel/sprites";

const cards = [
  {
    sprite: egg,
    pixel: 7,
    heading: "hatch together",
    copy: "both partners tap the egg to hatch it. Blobby comes into the world knowing you were both there.",
  },
  {
    sprite: sharedCare,
    pixel: 6,
    heading: "care is shared",
    copy: "daily tasks split between you. feed him, bathe him, tuck him in. one subscription covers both phones.",
  },
  {
    sprite: evolutionStar,
    pixel: 8,
    heading: "he becomes what you make him",
    copy: "how well you both show up determines what Blobby evolves into. there are 17 forms. most couples never see them all.",
  },
];

export function Pillars() {
  return (
    <section className="pillars">
      <div className="pillars__grid">
        {cards.map((card) => (
          <article className="card" key={card.heading}>
            <div className="card__icon">
              <PixelSprite grid={card.sprite.grid} palette={card.sprite.palette} pixel={card.pixel} />
            </div>
            <h3 className="card__heading">{card.heading}</h3>
            <p className="card__copy">{card.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
