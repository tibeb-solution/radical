import { useEffect, useRef, useState } from "react";
import radicalLogo from "../assets/radical-logo.webp";
import radicalExerciseBook from "../assets/radical-pp-exercise-book-cutout.webp";
import tripleAPaper from "../assets/triple-a-a4-paper-cutout.webp";
import classicTripleAExerciseBook from "../assets/classic-triple-a-exercise-book-cutout.webp";
import radicalIPen from "../assets/radical-i-pen-cutout.webp";
import radicalOnePlus from "../assets/radical-one-plus-cutout.webp";
import radicalTape from "../assets/radical-tape-cutout.webp";
import qualityRedPaper from "../assets/quality-red-paper-cutout.webp";
import { translations, type Language } from "./translations";

interface ProductsPageProps {
  language: Language;
  onToggleLanguage: () => void;
}

export default function ProductsPage({ language, onToggleLanguage }: ProductsPageProps) {
  const copy = translations[language];
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeProduct, setActiveProduct] = useState(1);

  const products = [
    {
      name: copy.radicalExerciseBooksName,
      badge: copy.locallyMadeLabel,
      image: radicalExerciseBook,
      imageAlt: copy.radicalExerciseBooksImageAlt,
      placeholder: "",
      description: copy.radicalExerciseBooksSummary,
    },
    {
      name: copy.tripleAProductName,
      badge: copy.locallyMadeLabel,
      image: tripleAPaper,
      imageAlt: copy.tripleAImageAlt,
      placeholder: "A4",
      description: copy.tripleACardSummary,
    },
    {
      name: copy.classicTripleAExerciseBookName,
      badge: copy.locallyMadeLabel,
      image: classicTripleAExerciseBook,
      imageAlt: copy.classicTripleAExerciseBookImageAlt,
      placeholder: "",
      description: copy.classicTripleAExerciseBookSummary,
    },
    {
      name: copy.radicalIPenName,
      badge: copy.radicalBrandLabel,
      image: radicalIPen,
      imageAlt: copy.radicalIPenImageAlt,
      placeholder: "",
      description: copy.radicalIPenSummary,
    },
    {
      name: copy.radicalOnePlusName,
      badge: copy.radicalBrandLabel,
      image: radicalOnePlus,
      imageAlt: copy.radicalOnePlusImageAlt,
      placeholder: "",
      description: copy.radicalOnePlusSummary,
    },
    {
      name: copy.qualityRedPaperName,
      badge: copy.radicalBrandLabel,
      image: qualityRedPaper,
      imageAlt: copy.qualityRedPaperImageAlt,
      placeholder: "",
      description: copy.qualityRedPaperSummary,
    },
    {
      name: copy.radicalTapeName,
      badge: copy.radicalBrandLabel,
      image: radicalTape,
      imageAlt: copy.radicalTapeImageAlt,
      placeholder: "",
      description: copy.radicalTapeSummary,
    },
  ];

  const centeredProducts = products.map((_, offset) => {
    const index = (activeProduct - 2 + offset + products.length) % products.length;
    return { ...products[index], index };
  });

  useEffect(() => {
    const track = trackRef.current;
    const card = track?.children.item(2);
    if (track && card instanceof HTMLElement) {
      track.scrollLeft = card.offsetLeft - track.offsetLeft - (track.clientWidth - card.offsetWidth) / 2;
    }
  }, [activeProduct]);

  const goToProduct = (index: number) => {
    const nextIndex = (index + products.length) % products.length;
    setActiveProduct(nextIndex);
  };

  return (
    <main className="products-page" id="products">
      <header className="products-header">
        <a className="products-brand" href="/#collection" aria-label={copy.brandHome}>
          <img src={radicalLogo} alt="" decoding="async" />
        </a>
        <nav className="products-nav" aria-label={copy.navLabel}>
          <a href="/#collection">{copy.home}</a>
          <a href="/products">{copy.collection}</a>
          <a href="/contact">{copy.contact}</a>
        </nav>
        <button
          className="language-toggle products-language-toggle"
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

      <section className="products-collection" aria-labelledby="products-title">
        <div className="products-heading">
          <p className="products-eyebrow">{copy.productsEyebrow}</p>
          <h1 id="products-title">{copy.featuredProducts}</h1>
          <p>{copy.productsDescription}</p>
        </div>

        <div className="products-carousel" aria-label={copy.featuredProducts}>
          <button
            className="carousel-arrow carousel-arrow-previous"
            type="button"
            aria-label={copy.previousProducts}
            onClick={() => goToProduct(activeProduct - 1)}
          >
            ‹
          </button>
          <div className="products-track" ref={trackRef}>
            {centeredProducts.map((product) => (
              <article
                className={`product-card${activeProduct === product.index ? " is-active" : ""}`}
                key={product.name}
                aria-current={activeProduct === product.index ? "true" : undefined}
              >
                <div className={`product-card-art${product.image ? " has-image" : ""}`}>
                  <span className="product-card-badge">{product.badge}</span>
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.imageAlt}
                      loading={activeProduct === product.index ? "eager" : "lazy"}
                      decoding="async"
                    />
                  ) : (
                    <span className="product-placeholder" aria-hidden="true">
                      {product.placeholder}
                    </span>
                  )}
                </div>
                <div className="product-card-copy">
                  <h2>{product.name}</h2>
                  <p>{product.description}</p>
                </div>
              </article>
            ))}
          </div>
          <button
            className="carousel-arrow carousel-arrow-next"
            type="button"
            aria-label={copy.nextProducts}
            onClick={() => goToProduct(activeProduct + 1)}
          >
            ›
          </button>
        </div>

        <div className="products-pagination" aria-label={copy.featuredProducts}>
          {products.map((product, index) => (
            <button
              className={activeProduct === index ? "is-active" : undefined}
              type="button"
              key={product.name}
              aria-label={`${copy.showProduct}: ${product.name}`}
              aria-pressed={activeProduct === index}
              onClick={() => goToProduct(index)}
            />
          ))}
        </div>

        {activeProduct === 0 && (
          <section className="product-detail-panel" aria-labelledby="radical-exercise-books-title">
            <div className="product-detail-image">
              <img
                src={radicalExerciseBook}
                alt={copy.radicalExerciseBooksImageAlt}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="product-detail-content">
              <header>
                <p className="products-eyebrow">{copy.productDetailsHeading}</p>
                <h2 id="radical-exercise-books-title">{copy.radicalExerciseBooksName}</h2>
                <p className="product-detail-subtitle">{copy.radicalExerciseBooksSummary}</p>
              </header>
              <p>{copy.radicalExerciseBooksDescription}</p>
              <div className="product-detail-facts">
                <div>
                  <h3>{copy.specificationsHeading}</h3>
                  <ul>
                    {copy.radicalExerciseBooksSpecifications.map((specification) => (
                      <li key={specification}>{specification}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>{copy.packingStandardHeading}</h3>
                  <ul>
                    {copy.radicalExerciseBooksPacking.map((packingDetail) => (
                      <li key={packingDetail}>{packingDetail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}
        {activeProduct === 1 && (
          <section className="product-detail-panel" aria-labelledby="triple-a-title">
            <div className="product-detail-image">
              <img src={tripleAPaper} alt={copy.tripleAImageAlt} loading="lazy" decoding="async" />
            </div>
            <div className="product-detail-content">
              <header>
                <p className="products-eyebrow">{copy.productDetailsHeading}</p>
                <h2 id="triple-a-title">{copy.tripleAProductName}</h2>
                <p className="product-detail-subtitle">{copy.tripleASubtitle}</p>
              </header>
              <p>{copy.tripleADescription}</p>
              <div className="product-detail-facts">
                <div>
                  <h3>{copy.specificationsHeading}</h3>
                  <ul>
                    {copy.tripleASpecifications.map((specification) => (
                      <li key={specification}>{specification}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>{copy.perfectForHeading}</h3>
                  <ul>
                    {copy.tripleAUses.map((use) => (
                      <li key={use}>{use}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="product-detail-assurance">{copy.tripleAAssurance}</p>
            </div>
          </section>
        )}
        {activeProduct === 2 && (
          <section className="product-detail-panel" aria-labelledby="classic-triple-a-title">
            <div className="product-detail-image">
              <img
                src={classicTripleAExerciseBook}
                alt={copy.classicTripleAExerciseBookImageAlt}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="product-detail-content">
              <header>
                <p className="products-eyebrow">{copy.productDetailsHeading}</p>
                <h2 id="classic-triple-a-title">{copy.classicTripleAExerciseBookName}</h2>
                <p className="product-detail-subtitle">{copy.classicTripleAExerciseBookSummary}</p>
              </header>
              <p>{copy.classicTripleAExerciseBookDescription}</p>
              <div className="product-detail-facts">
                <div>
                  <h3>{copy.specificationsHeading}</h3>
                  <ul>
                    {copy.classicTripleAExerciseBookSpecifications.map((specification) => (
                      <li key={specification}>{specification}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>{copy.packingStandardHeading}</h3>
                  <ul>
                    {copy.classicTripleAExerciseBookPacking.map((packingDetail) => (
                      <li key={packingDetail}>{packingDetail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}
        {activeProduct === 3 && (
          <section className="product-detail-panel" aria-labelledby="radical-ipen-title">
            <div className="product-detail-image">
              <img src={radicalIPen} alt={copy.radicalIPenImageAlt} loading="lazy" decoding="async" />
            </div>
            <div className="product-detail-content">
              <header>
                <p className="products-eyebrow">{copy.productDetailsHeading}</p>
                <h2 id="radical-ipen-title">{copy.radicalIPenName}</h2>
                <p className="product-detail-subtitle">{copy.radicalIPenSummary}</p>
              </header>
              <p>{copy.radicalIPenDescription}</p>
              <div className="product-detail-facts">
                <div>
                  <h3>{copy.perfectForHeading}</h3>
                  <ul>
                    {copy.radicalIPenUses.map((use) => (
                      <li key={use}>{use}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>{copy.iPenFeaturesHeading}</h3>
                  <ul>
                    {copy.radicalIPenFeatures.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}
        {activeProduct === 4 && (
          <section className="product-detail-panel" aria-labelledby="radical-one-plus-title">
            <div className="product-detail-image">
              <img src={radicalOnePlus} alt={copy.radicalOnePlusImageAlt} loading="lazy" decoding="async" />
            </div>
            <div className="product-detail-content">
              <header>
                <p className="products-eyebrow">{copy.productDetailsHeading}</p>
                <h2 id="radical-one-plus-title">{copy.radicalOnePlusName}</h2>
                <p className="product-detail-subtitle">{copy.radicalOnePlusSummary}</p>
              </header>
              <p>{copy.radicalOnePlusDescription}</p>
              <div className="product-detail-facts">
                <div>
                  <h3>{copy.perfectForHeading}</h3>
                  <ul>
                    {copy.radicalOnePlusUses.map((use) => (
                      <li key={use}>{use}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>{copy.radicalOnePlusOptionsHeading}</h3>
                  <ul>
                    {copy.radicalOnePlusOptions.map((option) => (
                      <li key={option}>{option}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}
        {activeProduct === 5 && (
          <section className="product-detail-panel" aria-labelledby="quality-red-paper-title">
            <div className="product-detail-image">
              <img
                src={qualityRedPaper}
                alt={copy.qualityRedPaperImageAlt}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="product-detail-content">
              <header>
                <p className="products-eyebrow">{copy.productDetailsHeading}</p>
                <h2 id="quality-red-paper-title">{copy.qualityRedPaperName}</h2>
                <p className="product-detail-subtitle">{copy.qualityRedPaperSummary}</p>
              </header>
              <p>{copy.qualityRedPaperDescription}</p>
              <div className="product-detail-facts">
                <div>
                  <h3>{copy.specificationsHeading}</h3>
                  <ul>
                    {copy.qualityRedPaperSpecifications.map((specification) => (
                      <li key={specification}>{specification}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>{copy.compatibleWithHeading}</h3>
                  <ul>
                    {copy.qualityRedPaperUses.map((use) => (
                      <li key={use}>{use}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="product-detail-assurance">{copy.qualityRedPaperIdealFor}</p>
            </div>
          </section>
        )}
        {activeProduct === 6 && (
          <section className="product-detail-panel" aria-labelledby="radical-tape-title">
            <div className="product-detail-image">
              <img src={radicalTape} alt={copy.radicalTapeImageAlt} loading="lazy" decoding="async" />
            </div>
            <div className="product-detail-content">
              <header>
                <p className="products-eyebrow">{copy.productDetailsHeading}</p>
                <h2 id="radical-tape-title">{copy.radicalTapeName}</h2>
                <p className="product-detail-subtitle">{copy.radicalTapeSummary}</p>
              </header>
              <p>{copy.radicalTapeDescription}</p>
              <div className="product-detail-facts">
                <div>
                  <h3>{copy.specificationsHeading}</h3>
                  <ul>
                    {copy.radicalTapeSpecifications.map((specification) => (
                      <li key={specification}>{specification}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>{copy.perfectForHeading}</h3>
                  <ul>
                    {copy.radicalTapeUses.map((use) => (
                      <li key={use}>{use}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}
      </section>

    </main>
  );
}
