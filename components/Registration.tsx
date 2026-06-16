import { WaitlistForm } from "./WaitlistForm";

export function Registration() {
  return (
    <section className="register" id="register">
      <div className="register__inner">
        <h2 className="register__title">Blobby is almost ready.</h2>
        <p className="register__sub">
          Bond is launching soon. leave your email and we&rsquo;ll tell you the moment the egg
          appears.
        </p>
        <WaitlistForm
          variant="full"
          submitLabel="notify me"
          fineprint="no spam. no marketing fluff. just one email when Bond launches."
        />
      </div>
    </section>
  );
}
