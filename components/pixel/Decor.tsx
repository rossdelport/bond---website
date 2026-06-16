import { PixelSprite } from "./PixelSprite";
import { decorHeart, decorStar, decorFlower } from "./sprites";

type Item = {
  top: string;
  left: string;
  pixel: number;
  sprite: { grid: string[]; palette: Record<string, string> };
};

const star = decorStar("#2aaa8a");
const starAmber = decorStar("#e8a020");
const heart = decorHeart("#e0607a");
const flower = decorFlower("#e8a020", "#2aaa8a");

// A gentle, hand-scattered constellation. Kept barely visible via CSS opacity
// so it reads as wallpaper texture, never as content.
const items: Item[] = [
  { top: "8%", left: "6%", pixel: 3, sprite: star },
  { top: "16%", left: "88%", pixel: 4, sprite: heart },
  { top: "30%", left: "14%", pixel: 3, sprite: flower },
  { top: "24%", left: "70%", pixel: 3, sprite: starAmber },
  { top: "44%", left: "92%", pixel: 3, sprite: star },
  { top: "52%", left: "8%", pixel: 4, sprite: heart },
  { top: "62%", left: "82%", pixel: 3, sprite: flower },
  { top: "70%", left: "20%", pixel: 3, sprite: starAmber },
  { top: "78%", left: "60%", pixel: 3, sprite: star },
  { top: "86%", left: "10%", pixel: 3, sprite: heart },
  { top: "90%", left: "90%", pixel: 4, sprite: flower },
  { top: "38%", left: "48%", pixel: 3, sprite: starAmber },
];

/** Low-opacity scattered pixel wallpaper texture for section backgrounds. */
export function Decor() {
  return (
    <div className="decor" aria-hidden="true">
      {items.map((item, i) => (
        <span className="decor__item" style={{ top: item.top, left: item.left }} key={i}>
          <PixelSprite grid={item.sprite.grid} palette={item.sprite.palette} pixel={item.pixel} />
        </span>
      ))}
    </div>
  );
}
