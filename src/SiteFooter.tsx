import radicalLogo from "../assets/radical-logo.webp";
import { translations, type Language } from "./translations";

interface SiteFooterProps {
  language: Language;
}

export default function SiteFooter({ language }: SiteFooterProps) {
  const copy = translations[language];
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <a href="/#collection" aria-label={copy.brandHome}>
            <img src={radicalLogo} alt="" loading="lazy" decoding="async" />
          </a>
          <p>{copy.footerPromise}</p>
        </div>

        <nav className="site-footer-nav" aria-label={copy.footerNavLabel}>
          <a href="/#collection">{copy.home}</a>
          <a href="/products">{copy.collection}</a>
          <a href="/contact">{copy.contact}</a>
        </nav>

        <div className="site-footer-contact">
          <h2>{copy.contact}</h2>
          <address>
            <span>{copy.contactAddressLines[0]}</span>
            <span>{copy.contactAddressLines[1]}</span>
            <span>{copy.contactAddressLines[2]}</span>
          </address>
          <a href="mailto:info@radicalplc.com">
            <span>{copy.contactEmailTitle}:</span> info@radicalplc.com
          </a>
          <a href="tel:+251938292929">
            <span>{copy.contactPhoneTitle}:</span> +251938292929
          </a>
          <a href="https://wa.me/251911205133" target="_blank" rel="noopener noreferrer">
            <span>{copy.contactWhatsAppTitle}:</span> +251911205133
          </a>
        </div>
      </div>
      <div className="site-footer-bottom">
        <span>© {year} Radical P.L.C.</span>
      </div>
    </footer>
  );
}
