import { BlobbyIdle } from "./pixel/Blobby";
import { Habitat } from "./pixel/Habitat";
import { Decor } from "./pixel/Decor";

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
          <a className="btn btn--primary btn--lg" href="#register">
            get early access
          </a>
          <p className="hero__finepoint">no spam. just Blobby news.</p>
        </div>
      </div>
    </section>
  );
}
