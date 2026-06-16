import { PixelSprite } from "./PixelSprite";
import { blobby, decorStar } from "./sprites";

/** Blobby drifting in his gentle idle float — the signature Bond animation. */
export function BlobbyIdle({ pixel = 14 }: { pixel?: number }) {
  return (
    <div className="blobby-float" aria-hidden={false}>
      <PixelSprite grid={blobby.grid} palette={blobby.palette} pixel={pixel} title="Blobby, the shared pet" />
    </div>
  );
}

/** A small, happily bouncing Blobby with sparkles — used on signup success. */
export function BlobbyExcited({ pixel = 6 }: { pixel?: number }) {
  const sparkle = decorStar("#e8a020");
  return (
    <span className="blobby-excited" aria-hidden="true">
      <span className="blobby-excited__spark blobby-excited__spark--a">
        <PixelSprite grid={sparkle.grid} palette={sparkle.palette} pixel={3} />
      </span>
      <span className="blobby-excited__spark blobby-excited__spark--b">
        <PixelSprite grid={sparkle.grid} palette={sparkle.palette} pixel={2} />
      </span>
      <span className="blobby-bounce">
        <PixelSprite grid={blobby.grid} palette={blobby.palette} pixel={pixel} />
      </span>
    </span>
  );
}
