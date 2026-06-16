import { PixelSprite } from "./PixelSprite";
import { blobby } from "./sprites";

const notifications = [
  "Blobby is hungry. that's your job, Ross.",
  "Georgia still hasn't picked up the poo. Blobby is not impressed.",
  "Ross just tucked Blobby in. sweet dreams little guy.",
];

const times = ["now", "2m ago", "11m ago"];

/** A minimal iPhone lock-screen mockup showing Bond notifications. */
export function PhoneMockup() {
  return (
    <div className="phone" role="img" aria-label="An iPhone lock screen showing three Bond notifications.">
      <div className="phone__notch" />
      <div className="phone__screen">
        <div className="phone__clock">
          <span className="phone__date">Tuesday, 16 June</span>
          <span className="phone__time">9:41</span>
        </div>

        <div className="phone__notifications">
          {notifications.map((text, i) => (
            <div className="notif" key={i}>
              <div className="notif__icon">
                <PixelSprite grid={blobby.grid} palette={blobby.palette} pixel={2} />
              </div>
              <div className="notif__body">
                <div className="notif__head">
                  <span className="notif__app">Bond</span>
                  <span className="notif__time">{times[i]}</span>
                </div>
                <p className="notif__text">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
