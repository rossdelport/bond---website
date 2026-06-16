import { BlobbyIdle } from "./pixel/Blobby";
import { Habitat } from "./pixel/Habitat";
import { Decor } from "./pixel/Decor";
import { WaitlistForm } from "./WaitlistForm";

export function Hero() {
  return (
    <section className="hero">
      <Decor />
      <div className="hero__inner">
        <h1 className="hero__headline">a pet you raise together.</h1>
        <p className="hero__sub">
          Bond is a shared virtual pet for couples. care for it together. watch it grow.
        </p>

        <div className="hero__stage">
          <Habitat>
            <BlobbyIdle pixel={14} />
          </Habitat>
          <p className="hero__caption">meet Blobby. he needs both of you.</p>
        </div>

        <div className="hero__cta">
          <WaitlistForm
            variant="hero"
            submitLabel="get early access"
            fineprint="no spam. just Blobby news."
          />
        </div>
      </div>
    </section>
  );
}
