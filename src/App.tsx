import { useEffect, useState } from "react";
import radicalLogo from "../assets/radical-logo.png";
import exerciseBooks from "../assets/radical-exercise-books-cutout.png";
import ContactPage from "./ContactPage";
import ProductsPage from "./ProductsPage";
import SiteFooter from "./SiteFooter";
import { translations, type Language } from "./translations";

export default function App() {
  const [language, setLanguage] = useState<Language>("en");
  const copy = translations[language];
  const pathname = window.location.pathname.replace(/\/+$/, "");
  const isProductsPage = pathname === "/products";
  const isContactPage = pathname === "/contact";

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = isProductsPage
      ? `${copy.featuredProducts} | Radical`
      : isContactPage
        ? `${copy.contactTitle} | Radical`
        : copy.title;

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!description) {
      throw new Error("Page description meta tag was not found.");
    }
    description.content = isProductsPage
      ? copy.productsDescription
      : isContactPage
        ? copy.contactDescription
        : copy.description;
  }, [
    copy.contactDescription,
    copy.contactTitle,
    copy.description,
    copy.featuredProducts,
    copy.productsDescription,
    copy.title,
    isContactPage,
    isProductsPage,
    language,
  ]);

  const toggleLanguage = () => {
    setLanguage((current) => (current === "en" ? "am" : "en"));
  };

  if (isProductsPage) {
    return (
      <>
        <ProductsPage language={language} onToggleLanguage={toggleLanguage} />
        <SiteFooter language={language} />
      </>
    );
  }
  if (isContactPage) {
    return (
      <>
        <ContactPage language={language} onToggleLanguage={toggleLanguage} />
        <SiteFooter language={language} />
      </>
    );
  }

  return (
    <>
      <main className="page-frame">
        <section className="product-landing" id="collection" aria-labelledby="hero-title">
          <header className="site-header">
            <a className="wordmark" href="#collection" aria-label={copy.brandHome}>
              <img className="logo-image" src={radicalLogo} alt="" />
            </a>
            <nav className="main-nav" aria-label={copy.navLabel}>
              <a href="/#collection">{copy.home}</a>
              <a href="/products">{copy.collection}</a>
              <a href="/contact">{copy.contact}</a>
            </nav>
            <div className="header-actions">
              <button
                className="language-toggle"
                type="button"
                onClick={toggleLanguage}
                aria-label={language === "en" ? copy.switchToAmharic : copy.switchToEnglish}
                aria-pressed={language === "am"}
              >
                <span className={language === "en" ? "is-current" : undefined}>EN</span>
                <span aria-hidden="true">/</span>
                <span className={language === "am" ? "is-current" : undefined}>አማ</span>
              </button>
              <a
                className="retailer-link"
                href="https://maps.app.goo.gl/SvKmWUw7aPH8maCQ8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{copy.retailer}</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </header>

          <div className="hero">
            <div className="hero-copy">
              <p className="eyebrow">{copy.collectionEyebrow}</p>
              <h1 id="hero-title">
                <span>{copy.heroTitleFirst}</span>
                <br />
                <em>{copy.heroTitleSecond}</em>
              </h1>
              <p className="hero-description">{copy.heroDescription}</p>
            </div>

            <figure className="hero-art">
              <img className="hero-product" src={exerciseBooks} alt={copy.productAlt} />
              <figcaption className="product-caption">
                <span>{copy.productName}</span>
                <span>{copy.productCaption}</span>
              </figcaption>
            </figure>

          </div>

          <footer className="panel-footer">
            <p>{copy.footerPromise}</p>
          </footer>
        </section>
      </main>

      <section className="local-story" id="local" aria-labelledby="story-title">
        <div className="story-transition" aria-hidden="true">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" focusable="false">
            <path d="M0 40 C360 110 1080 -30 1440 40 V100 H0 Z" />
          </svg>
        </div>
        <div className="story-inner">
          <div className="story-heading">
            <div>
              <p className="eyebrow">{copy.storyEyebrow}</p>
              <h2 id="story-title">
                <span>{copy.storyTitleFirst}</span>
                <br />
                <em>{copy.storyTitleSecond}</em>
              </h2>
            </div>
          </div>

          <div className="story-copy">
            <p>{copy.storyIntroduction}</p>
            <p>{copy.storyManufacturing}</p>
            <p>{copy.storyApproach}</p>
            <p>{copy.storyToday}</p>
          </div>
        </div>
      </section>

      <section className="purpose-section" id="purpose" aria-labelledby="purpose-title">
        <div className="purpose-transition" aria-hidden="true">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" focusable="false">
            <path d="M0 40 C360 110 1080 -30 1440 40 V100 H0 Z" />
          </svg>
        </div>
        <div className="purpose-inner">
          <header className="purpose-heading">
            <p className="eyebrow">{copy.purposeEyebrow}</p>
            <h2 id="purpose-title">{copy.purposeTitle}</h2>
          </header>
          <div className="purpose-pillars">
            <article className="purpose-pillar">
              <span className="purpose-number">01</span>
              <h3>{copy.visionTitle}</h3>
              <p>{copy.visionDescription}</p>
            </article>
            <article className="purpose-pillar">
              <span className="purpose-number">02</span>
              <h3>{copy.missionTitle}</h3>
              <p>{copy.missionDescription}</p>
            </article>
          </div>
        </div>
      </section>
      <SiteFooter language={language} />
    </>
  );
}
