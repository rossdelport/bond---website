import { PixelSprite } from "./PixelSprite";
import { decorHeart } from "./sprites";

/**
 * A simplified version of Blobby's cosy habitat — warm cream walls and a honey
 * wood floor. Just enough to suggest his world without competing with the
 * headline. Blobby is composited on top by the Hero.
 */
export function Habitat({ children }: { children?: React.ReactNode }) {
  const heart = decorHeart("#e7c39a");
  return (
    <div className="habitat" aria-hidden="true">
      <div className="habitat__wall">
        {/* a single framed pixel heart on the wall — a tiny touch of home */}
        <div className="habitat__frame">
          <PixelSprite grid={heart.grid} palette={heart.palette} pixel={5} />
        </div>
      </div>
      <div className="habitat__floor" />
      <div className="habitat__rug" />
      {children ? <div className="habitat__stage">{children}</div> : null}
    </div>
  );
}
