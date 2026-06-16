import { JourneyPath } from "./pixel/JourneyPath";

export function JourneyPreview() {
  return (
    <section className="journey-section">
      <div className="section-head">
        <h2 className="section-head__title">every moment, documented.</h2>
        <p className="section-head__sub">
          Blobby&rsquo;s entire life is logged automatically. first hatch, first evolution, first
          sick recovery. it builds itself.
        </p>
      </div>
      <div className="journey-section__window">
        <JourneyPath />
      </div>
    </section>
  );
}
