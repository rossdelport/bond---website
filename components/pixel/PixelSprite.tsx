import type { CSSProperties, ReactNode } from "react";

export type Palette = Record<string, string>;

type PixelSpriteProps = {
  /** Rows of the sprite. Each character maps to a colour in `palette`. */
  grid: string[];
  /** Maps a character to a fill colour. Unmapped characters (incl. " " and ".") are transparent. */
  palette: Palette;
  /** Rendered size, in CSS pixels, of a single sprite cell. */
  pixel?: number;
  className?: string;
  style?: CSSProperties;
  /** When provided, the sprite is exposed to assistive tech with this label. */
  title?: string;
};

/**
 * Renders a hand-authored pixel-art sprite as crisp SVG rectangles.
 * Vector output stays sharp at any scale — no bitmap upscaling artefacts.
 */
export function PixelSprite({
  grid,
  palette,
  pixel = 8,
  className,
  style,
  title,
}: PixelSpriteProps) {
  const rows = grid.length;
  const cols = grid.reduce((max, row) => Math.max(max, row.length), 0);

  const rects: ReactNode[] = [];
  for (let y = 0; y < rows; y++) {
    const row = grid[y];
    for (let x = 0; x < row.length; x++) {
      const fill = palette[row[x]];
      if (!fill) continue;
      // 1.02 overscan hides hairline seams between adjacent cells.
      rects.push(
        <rect key={`${x}:${y}`} x={x} y={y} width={1.02} height={1.02} fill={fill} />,
      );
    }
  }

  return (
    <svg
      className={className}
      style={style}
      width={cols * pixel}
      height={rows * pixel}
      viewBox={`0 0 ${cols} ${rows}`}
      shapeRendering="crispEdges"
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {rects}
    </svg>
  );
}
