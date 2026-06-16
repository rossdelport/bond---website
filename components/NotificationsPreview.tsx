import { PhoneMockup } from "./pixel/PhoneMockup";

export function NotificationsPreview() {
  return (
    <section className="notifs-section">
      <div className="section-head">
        <h2 className="section-head__title">nudges, not nagging.</h2>
        <p className="section-head__sub">
          every notification is about Blobby. never about each other.
        </p>
      </div>
      <div className="notifs-section__phone">
        <PhoneMockup />
      </div>
    </section>
  );
}
