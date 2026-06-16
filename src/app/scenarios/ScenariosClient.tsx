'use client';

import type { Product } from '@/lib/products';
import { scenariosMeta } from '@/app/data/scenariosMeta';
import FloatingButton from '@/app/components/FloatingButton';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function ScenariosClient({ products }: { products: Product[] }) {
  const t = useTranslations('scenarios_page');
  const scenariosT = useTranslations('scenariosMeta');

  // Build localized scenarios from translation data
  const localizedScenarios = scenariosMeta.map((s, i) => ({
    ...s,
    title: scenariosT(`${i}.title`),
    subtitle: scenariosT(`${i}.subtitle`),
    description: scenariosT(`${i}.description`),
    highlights: [
      scenariosT(`${i}.highlights.0`),
      scenariosT(`${i}.highlights.1`),
      scenariosT(`${i}.highlights.2`),
      scenariosT(`${i}.highlights.3`),
    ],
  }));

  return (
    <div className="scenarios-page">

      <div className="hero">
        <div className="container">
          <p className="hero-label">{t('hero_label')}</p>
          <h1 className="hero-title">{t('hero_title')}</h1>
          <p className="hero-desc">{t('hero_desc')}</p>
        </div>
      </div>

      <div className="container">
        {localizedScenarios.map((scenario, index) => {
          const scenarioProducts = products.filter(p => p.scenarios.includes(scenario.id));
          const isReversed = index % 2 === 1;

          return (
            <section key={scenario.id} className="scenario-section">
              {/* Image — always top, max 50% height of section */}
              <div className={`scenario-image-wrap ${isReversed ? 'order-last' : ''}`}>
                <img src={scenario.image} alt={scenario.title} className="scenario-image" />
                <div className="image-overlay" />
                <div className="image-label">
                  <span className="image-label-sub">{scenario.subtitle}</span>
                  <span className="image-label-title">{scenario.title}</span>
                </div>
              </div>

              {/* Content */}
              <div className="scenario-content">
                <p className="scenario-subtitle">{scenario.subtitle}</p>
                <h2 className="scenario-title">{scenario.title}</h2>
                <p className="scenario-desc">{scenario.description}</p>

                <div className="highlights">
                  {scenario.highlights.map(h => (
                    <div key={h} className="highlight-item">
                      <span className="highlight-dot" />
                      {h}
                    </div>
                  ))}
                </div>

                {scenarioProducts.length > 0 && (
                  <div className="scenario-products">
                    <p className="products-label">{t('recommended_products')}</p>
                    <div className="products-grid">
                      {scenarioProducts.map(p => (
                        <Link href={`/products/${p.id}`} key={p.id} className="product-chip">
                          <div className="chip-img-wrap">
                            <img src={p.image_url} alt={p.name} className="chip-img" />
                          </div>
                          <span className="chip-name">{p.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                <Link href="/contact" className="text-link-hover" style={{fontSize:'12px',fontWeight:500,color:'#1c49c4',textDecoration:'underline',textUnderlineOffset:'3px',marginTop:'auto',alignSelf:'flex-start'}}>
                  {t('get_quote')}
                </Link>
              </div>
            </section>
          );
        })}

      </div>

      <div className="bottom-cta">
        <div className="container">
          <h2 className="cta-title">{t('cta_title')}</h2>
          <p className="cta-desc">{t('cta_desc')}</p>
          <Link href="/contact" style={{display:'inline-block',padding:'12px 32px',background:'#0f172a',color:'white',borderRadius:'40px',fontSize:'14px',fontWeight:700,textDecoration:'none'}}>{t('contact_us')}</Link>
        </div>
      </div>

      <style jsx>{`
        .scenarios-page { background: #f8fafc; min-height: 100vh; padding-bottom: 60px; }

        .hero { background: #f8fafc; padding: 56px 0 48px; text-align: center; border-bottom: 1px solid #e8edf5; }
        .container { max-width: 1280px; margin: 0 auto; padding: 0 24px; }
        .hero-label { font-size: 12px; font-weight: 600; letter-spacing: 0.15em; color: #94a3b8; margin-bottom: 12px; }
        .hero-title { font-size: 42px; font-weight: 800; color: #0f172a; letter-spacing: -0.02em; margin-bottom: 12px; }
        .hero-desc { font-size: 15px; color: #64748b; max-width: 480px; margin: 0 auto; line-height: 1.7; }

        /* Section layout: image left/right + content */
        .scenario-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          margin-top: 40px;
          background: white;
          border-radius: 6px;
          overflow: hidden;
          border: 1px solid #e8edf5;
        }

        .scenario-image-wrap {
          position: relative;
          height: 100%;
          min-height: 360px;
          overflow: hidden;
          background: #0f172a;
        }
        .scenario-image-wrap.order-last { order: 2; }

        .scenario-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.88;
          transition: transform 0.6s ease;
        }
        .scenario-section:hover .scenario-image { transform: scale(1.03); }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(15,23,42,0.6) 0%, transparent 50%);
        }
        .image-label {
          position: absolute;
          bottom: 24px;
          left: 24px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .image-label-sub { font-size: 11px; font-weight: 600; letter-spacing: 0.12em; color: #94a3b8; }
        .image-label-title { font-size: 20px; font-weight: 800; color: white; }

        /* Content column */
        .scenario-content {
          padding: 40px 44px;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
        }
        .scenario-subtitle { font-size: 11px; font-weight: 600; letter-spacing: 0.12em; color: #94a3b8; margin-bottom: 8px; }
        .scenario-title { font-size: 28px; font-weight: 800; color: #0f172a; letter-spacing: -0.02em; margin-bottom: 12px; }
        .scenario-desc { font-size: 13px; color: #64748b; line-height: 1.8; margin-bottom: 24px; }

        .highlights { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px; }
        .highlight-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: #374151;
          font-weight: 500;
          background: #f1f5f9;
          padding: 5px 12px;
          border-radius: 40px;
        }
        .highlight-dot { width: 5px; height: 5px; border-radius: 50%; background: #1e3a8a; flex-shrink: 0; }

        /* Products grid */
        .scenario-products { margin-bottom: 28px; }
        .products-label { font-size: 11px; font-weight: 600; letter-spacing: 0.1em; color: #94a3b8; margin-bottom: 10px; }
        .products-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
        }
        .product-chip {
          display: flex;
          flex-direction: column;
          border-radius: 10px;
          border: 1.5px solid #e2e8f0;
          background: white;
          text-decoration: none;
          overflow: hidden;
          transition: all 0.2s;
          box-shadow: 0 1px 4px rgba(0,0,0,0.06);
        }
        .product-chip:hover { border-color: #1e3a8a; box-shadow: 0 4px 12px rgba(30,58,138,0.1); }
        .chip-img-wrap {
          width: 100%;
          aspect-ratio: 16 / 9;
          background: #0f172a;
          overflow: hidden;
        }
        .chip-img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .chip-name { font-size: 11px; font-weight: 600; color: #0f172a; line-height: 1.3; padding: 6px 8px; text-align: center; display: block; width: 100%; }

        .scenario-cta {
          display: inline-block;
          font-size: 12px;
          font-weight: 500;
          color: #64748b;
          text-decoration: underline;
          text-underline-offset: 3px;
          align-self: flex-start;
          margin-top: auto;
          transition: color 0.2s;
        }
        .scenario-cta:hover { color: #0f172a; }

        /* Bottom CTA */
        .bottom-cta { background: transparent; margin-top: 48px; padding: 48px 0; text-align: center; }
        .cta-title { font-size: 28px; font-weight: 800; color: #0f172a; margin-bottom: 12px; letter-spacing: -0.02em; }
        .cta-desc { font-size: 15px; color: #64748b; margin-bottom: 32px; }
        .cta-card {
          margin-top: 40px;
          padding: 40px;
          background: white;
          border: 1.5px dashed #e2e8f0;
          border-radius: 6px;
          text-align: center;
        }
        .cta-card-title { font-size: 18px; font-weight: 700; color: #0f172a; margin-bottom: 8px; }
        .cta-card-desc { font-size: 13px; color: #64748b; margin-bottom: 16px; }

        @media (max-width: 768px) {
          .hero-title { font-size: 30px; }
          .scenario-section { grid-template-columns: 1fr; }
          .scenario-image-wrap { height: 220px; order: 0 !important; }
          .scenario-image-wrap.order-last { order: 0 !important; }
          .scenario-content { padding: 24px 20px; }
          .scenario-title { font-size: 22px; }
          .products-grid { grid-template-columns: 1fr; }
        }
      `}</style>
      <FloatingButton />
    </div>
  );
}
