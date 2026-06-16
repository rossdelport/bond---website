import { PixelSprite } from "./PixelSprite";
import {
  blobby,
  egg,
  evolutionStar,
  grassFlower,
  question,
} from "./sprites";

type Node = {
  top: string;
  left: string;
  state: "done" | "locked";
  label: string;
  sprite: { grid: string[]; palette: Record<string, string> };
  spritePixel: number;
};

const flower = grassFlower("#f2a7a0", "#e8a020", "#2f8f4f");
const flowerBlue = grassFlower("#9ec7e6", "#fff6dd", "#2f8f4f");
const lock = question("#9a8b78");

const nodes: Node[] = [
  { top: "11%", left: "50%", state: "done", label: "first hatch", sprite: egg, spritePixel: 5 },
  { top: "37%", left: "50%", state: "done", label: "Blobby is born", sprite: blobby, spritePixel: 4 },
  { top: "63%", left: "50%", state: "done", label: "first evolution", sprite: evolutionStar, spritePixel: 5 },
  { top: "89%", left: "50%", state: "locked", label: "locked", sprite: lock, spritePixel: 5 },
];

/**
 * A cropped window into Bond's journey page — a pixel-art path winding through
 * grass, with completed milestones up top and locked mystery below.
 */
export function JourneyPath() {
  return (
    <div className="journey" aria-label="A preview of Blobby's journey: completed milestones at the top, locked milestones fading below." role="img">
      <div className="journey__sky" />
      <div className="journey__grass" />
      <div className="journey__path" />

      {/* scattered flowers on the grass */}
      <span className="journey__flower" style={{ top: "18%", left: "12%" }}>
        <PixelSprite grid={flower.grid} palette={flower.palette} pixel={5} />
      </span>
      <span className="journey__flower" style={{ top: "46%", left: "78%" }}>
        <PixelSprite grid={flowerBlue.grid} palette={flowerBlue.palette} pixel={5} />
      </span>
      <span className="journey__flower" style={{ top: "68%", left: "14%" }}>
        <PixelSprite grid={flower.grid} palette={flower.palette} pixel={4} />
      </span>
      <span className="journey__flower" style={{ top: "88%", left: "80%" }}>
        <PixelSprite grid={flowerBlue.grid} palette={flowerBlue.palette} pixel={4} />
      </span>

      {nodes.map((node, i) => (
        <div
          key={i}
          className={`journey__node journey__node--${node.state}`}
          style={{ top: node.top, left: node.left }}
        >
          <div className="journey__medallion">
            <PixelSprite
              grid={node.sprite.grid}
              palette={node.sprite.palette}
              pixel={node.spritePixel}
            />
          </div>
        </div>
      ))}

      {/* fade the bottom edge so it reads as a window into something bigger */}
      <div className="journey__fade journey__fade--bottom" />
      <div className="journey__fade journey__fade--top" />
    </div>
  );
}
