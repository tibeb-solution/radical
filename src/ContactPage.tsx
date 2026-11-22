import type { FormEvent } from "react";
import radicalLogo from "../assets/radical-logo.png";
import { translations, type Language } from "./translations";

interface ContactPageProps {
  language: Language;
  onToggleLanguage: () => void;
}

export default function ContactPage({ language, onToggleLanguage }: ContactPageProps) {
  const copy = translations[language];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const getFieldValue = (fieldName: string) => {
      const value = formData.get(fieldName);
      if (typeof value !== "string") {
        throw new Error(`Contact form field "${fieldName}" is missing or invalid.`);
      }
      return value.trim();
    };

    const name = getFieldValue("name");
    const email = getFieldValue("email");
    const subject = getFieldValue("subject") || copy.contactDefaultSubject;
    const message = getFieldValue("message");
    const body = `${copy.contactNameField}: ${name}\n${copy.contactEmailField}: ${email}\n\n${message}`;

    window.location.href = `mailto:info@radicalplc.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="contact-page">
      <header className="contact-header">
        <a className="contact-brand" href="/#collection" aria-label={copy.brandHome}>
          <img src={radicalLogo} alt="" />
        </a>
        <nav className="contact-nav" aria-label={copy.navLabel}>
          <a href="/#collection">{copy.home}</a>
          <a href="/products">{copy.collection}</a>
          <a href="/contact">{copy.contact}</a>
        </nav>
        <button
          className="language-toggle contact-language-toggle"
          type="button"
          onClick={onToggleLanguage}
          aria-label={language === "en" ? copy.switchToAmharic : copy.switchToEnglish}
          aria-pressed={language === "am"}
        >
          <span className={language === "en" ? "is-current" : undefined}>EN</span>
          <span aria-hidden="true">/</span>
          <span className={language === "am" ? "is-current" : undefined}>አማ</span>
        </button>
      </header>

      <section className="contact-main" aria-labelledby="contact-title">
        <div className="contact-intro">
          <p className="contact-eyebrow">{copy.contactEyebrow}</p>
          <h1 id="contact-title">{copy.contactTitle}</h1>
          <p>{copy.contactDescription}</p>
        </div>

        <div className="contact-layout">
          <div className="contact-information">
            <div className="contact-details">
              <article className="contact-card contact-address-card">
                <h2>{copy.contactAddressTitle}</h2>
                <address>
                  {copy.contactAddressLines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </address>
              </article>
              <article className="contact-card">
                <h2>{copy.contactEmailTitle}</h2>
                <a href="mailto:info@radicalplc.com">info@radicalplc.com</a>
              </article>
              <article className="contact-card">
                <h2>{copy.contactPhoneTitle}</h2>
                <a href="tel:+251938292929">+251938292929</a>
              </article>
              <article className="contact-card contact-whatsapp-card">
                <h2>{copy.contactWhatsAppTitle}</h2>
                <a href="https://wa.me/251911205133" target="_blank" rel="noopener noreferrer">
                  +251911205133 <span aria-hidden="true">↗</span>
                </a>
              </article>
            </div>

            <section className="contact-how-to" aria-labelledby="contact-how-to-title">
              <h2 id="contact-how-to-title">{copy.contactHowToTitle}</h2>
              {copy.contactHowToParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          </div>

          <section className="contact-form-card" aria-labelledby="contact-form-title">
            <h2 id="contact-form-title">{copy.contactFormTitle}</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="contact-name">{copy.contactNameField}</label>
              <input id="contact-name" name="name" autoComplete="name" required />

              <label htmlFor="contact-email">{copy.contactEmailField}</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
              />

              <label htmlFor="contact-subject">{copy.contactSubjectField}</label>
              <input id="contact-subject" name="subject" />

              <label htmlFor="contact-message">{copy.contactMessageField}</label>
              <textarea id="contact-message" name="message" rows={5} required />

              <button type="submit">{copy.contactSubmitLabel}</button>
              <p>{copy.contactFormNote}</p>
            </form>
          </section>
        </div>
      </section>
    </main>
  );
}
