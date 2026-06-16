import type { ReactNode } from "react";
import {
  blobby,
  check,
  crescent,
  cross,
  decorStar,
  flame,
  grassFlower,
  type Sprite,
} from "./sprites";

/* The winding centreline of the cobblestone path (viewBox 360 x 820). */
const PATH =
  "M 215 -30 C 215 20 215 120 195 170 C 175 220 145 232 135 280 " +
  "C 125 332 140 345 150 390 C 162 446 200 456 210 500 " +
  "C 222 556 240 575 240 605 C 240 656 195 682 185 715 " +
  "C 178 762 175 805 175 850";

const yellow = grassFlower("#f2c14e", "#e88a3c", "#5fa05f");
const pink = grassFlower("#ef9ab8", "#fff0c0", "#5fa05f");
const blue = grassFlower("#9ec7e6", "#fff0c0", "#5fa05f");

type Flower = { s: Sprite; x: number; y: number };
const flowers: Flower[] = [
  { s: yellow, x: 55, y: 235 },
  { s: pink, x: 300, y: 300 },
  { s: blue, x: 58, y: 470 },
  { s: yellow, x: 305, y: 455 },
  { s: pink, x: 300, y: 650 },
  { s: blue, x: 64, y: 615 },
];

type Node = {
  cx: number;
  cy: number;
  fill: string;
  ring: string;
  icon: Sprite;
  iconPx: number;
  text?: string;
  current?: boolean;
};

const nodes: Node[] = [
  { cx: 215, cy: 60, fill: "#e7b54a", ring: "#c8902a", icon: decorStar("#fff6dd"), iconPx: 3 },
  { cx: 195, cy: 170, fill: "#36a78f", ring: "#247a64", icon: cross("#ffffff"), iconPx: 3 },
  { cx: 135, cy: 280, fill: "#8a7be0", ring: "#5a4bc0", icon: crescent("#f0e9da"), iconPx: 3 },
  { cx: 150, cy: 390, fill: "#e7b54a", ring: "#c8902a", icon: flame, iconPx: 2, text: "14" },
  { cx: 210, cy: 500, fill: "#ec6aa6", ring: "#c44a85", icon: decorStar("#ffffff"), iconPx: 3 },
  { cx: 240, cy: 605, fill: "#8a7be0", ring: "#5a4bc0", icon: blobby, iconPx: 2 },
  { cx: 185, cy: 715, fill: "#8a7be0", ring: "#5a4bc0", icon: blobby, iconPx: 2, current: true },
];

/** Renders a pixel-art sprite as SVG rects at an absolute origin. */
function spriteRects(sprite: Sprite, ox: number, oy: number, px: number, key: string): ReactNode[] {
  const out: ReactNode[] = [];
  sprite.grid.forEach((row, y) => {
    for (let x = 0; x < row.length; x++) {
      const fill = sprite.palette[row[x]];
      if (!fill) continue;
      out.push(
        <rect
          key={`${key}-${x}-${y}`}
          x={ox + x * px}
          y={oy + y * px}
          width={px * 1.04}
          height={px * 1.04}
          fill={fill}
        />,
      );
    }
  });
  return out;
}

/** Centres a sprite's rects on (cx, cy), optionally nudged vertically. */
function centredSprite(sprite: Sprite, cx: number, cy: number, px: number, key: string, dy = 0) {
  const cols = sprite.grid.reduce((m, r) => Math.max(m, r.length), 0);
  const rows = sprite.grid.length;
  return spriteRects(sprite, cx - (cols * px) / 2, cy - (rows * px) / 2 + dy, px, key);
}

export function JourneyPath() {
  return (
    <div className="journey">
      <svg
        className="journey__svg"
        viewBox="0 0 360 820"
        preserveAspectRatio="xMidYMid slice"
        role="img"
        aria-label="A preview of Blobby's journey: a winding path of completed milestones leading to a glowing 'you are here' marker."
      >
        <defs>
          <pattern id="gdots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="6" r="1.3" fill="#97ac84" />
            <circle cx="15" cy="15" r="1.3" fill="#97ac84" />
          </pattern>
          <pattern id="bricks" width="34" height="18" patternUnits="userSpaceOnUse">
            <rect width="34" height="18" fill="#bdb39c" />
            <rect x="1" y="1" width="14" height="7" rx="1.5" fill="#e6dfce" />
            <rect x="17" y="1" width="14" height="7" rx="1.5" fill="#ded6c3" />
            <rect x="-7" y="10" width="14" height="7" rx="1.5" fill="#ded6c3" />
            <rect x="9" y="10" width="14" height="7" rx="1.5" fill="#e6dfce" />
            <rect x="25" y="10" width="14" height="7" rx="1.5" fill="#ded6c3" />
          </pattern>
        </defs>

        {/* grass */}
        <rect width="360" height="820" fill="#a7b994" />
        <rect width="360" height="820" fill="url(#gdots)" opacity="0.6" />

        {/* flowers tucked into the grass */}
        {flowers.map((f, i) => spriteRects(f.s, f.x, f.y, 3, `f${i}`))}

        {/* the cobblestone path */}
        <path d={PATH} fill="none" stroke="#b0a78d" strokeWidth={84} strokeLinecap="round" strokeLinejoin="round" />
        <path d={PATH} fill="none" stroke="url(#bricks)" strokeWidth={76} strokeLinecap="round" strokeLinejoin="round" />

        {/* faint origin stone at the very bottom */}
        <circle cx="178" cy="840" r="46" fill="#d2cbb9" opacity="0.5" />

        {/* milestone medallions */}
        {nodes.map((n, i) => {
          const badgeX = n.cx + 21;
          const badgeY = n.cy + 21;
          return (
            <g key={`n${i}`}>
              <ellipse cx={n.cx} cy={n.cy + 30} rx={24} ry={6} fill="rgba(40,40,30,0.14)" />
              {n.current && (
                <circle
                  className="journey__glow"
                  cx={n.cx}
                  cy={n.cy}
                  r={38}
                  fill="none"
                  stroke="#f0c14e"
                  strokeWidth={3}
                />
              )}
              <circle cx={n.cx} cy={n.cy} r={32} fill={n.ring} />
              <circle cx={n.cx} cy={n.cy} r={28} fill={n.fill} />
              {centredSprite(n.icon, n.cx, n.cy, n.iconPx, `i${i}`, n.text ? -7 : 0)}
              {n.text && (
                <text
                  x={n.cx}
                  y={n.cy + 18}
                  textAnchor="middle"
                  style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
                  fontSize="15"
                  fill="#4a3a18"
                >
                  {n.text}
                </text>
              )}
              {n.current ? (
                <text
                  x={n.cx}
                  y={n.cy + 60}
                  textAnchor="middle"
                  style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, letterSpacing: "1.5px" }}
                  fontSize="10"
                  fill="rgba(42,34,24,0.55)"
                >
                  YOU ARE HERE
                </text>
              ) : (
                <>
                  <circle cx={badgeX} cy={badgeY} r={10} fill="#46b06e" stroke="#ffffff" strokeWidth={2} />
                  {centredSprite(check("#ffffff"), badgeX, badgeY, 1.6, `c${i}`)}
                </>
              )}
            </g>
          );
        })}
      </svg>

      <div className="journey__fade journey__fade--top" />
      <div className="journey__fade journey__fade--bottom" />
    </div>
  );
}
