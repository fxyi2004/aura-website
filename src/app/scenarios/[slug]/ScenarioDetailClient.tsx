'use client';

import Link from 'next/link';
import type { Product } from '@/lib/products';
import type { ScenarioMeta } from '@/app/data/scenariosMeta';
import ProductCard from '@/app/components/ProductCard';
import { useTranslations } from 'next-intl';
import { Link as I18nLink } from '@/i18n/routing';

const SCENARIO_IDX: { [id: string]: number } = {
  security: 0,
  campus: 1,
  agriculture: 2,
  logistics: 3,
};

interface Props {
  scenario: ScenarioMeta;
  products: Product[];
}

export default function ScenarioDetailClient({ scenario, products }: Props) {
  const nav = useTranslations('nav');
  const sd = useTranslations('scenario_detail');
  const sm = useTranslations('scenariosMeta');
  const pl = useTranslations('products_list');

  const idx = SCENARIO_IDX[scenario.id] ?? 0;
  const title = sm(idx + '.title' as any);
  const subtitle = sm(idx + '.subtitle' as any);
  const description = sm(idx + '.description' as any);
  const highlights: string[] = [
    sm(idx + '.highlights.0' as any),
    sm(idx + '.highlights.1' as any),
    sm(idx + '.highlights.2' as any),
    sm(idx + '.highlights.3' as any),
  ];

  const getProductName = (p: Product) => {
    try { return pl(p.id + '.name' as any); } catch { return p.name; }
  };
  const getProductDesc = (p: Product) => {
    try { return pl(p.id + '.desc' as any); } catch { return p.description; }
  };

  return (
    <div className="scenario-detail">

      {/* Hero */}
      <div className="hero">
        <img src={scenario.image} alt={title} className="hero-img" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-sub">{subtitle}</p>
          <h1 className="hero-title">{title}</h1>
        </div>
      </div>

      <div className="container">

        {/* Breadcrumb */}
        <div className="breadcrumb">
          <I18nLink href="/">{nav('home')}</I18nLink>
          <span>/</span>
          <I18nLink href="/scenarios">{nav('scenarios')}</I18nLink>
          <span>/</span>
          <span>{title}</span>
        </div>

        {/* Description */}
        <section className="section desc-section">
          <p className="desc-text">{description}</p>
          <div className="highlights">
            {highlights.map((h) => (
              <span key={h} className="highlight-tag">{h}</span>
            ))}
          </div>
        </section>

        {/* Products */}
        {products.length > 0 && (
          <section className="section">
            <p className="section-label">RECOMMENDED PRODUCTS</p>
            <h2 className="section-title">{sd('recommended_title')}</h2>
            <div className="products-grid">
              {products.map((p) => (
                <ProductCard key={p.id} id={p.id} name={getProductName(p)} description={getProductDesc(p)} image={p.image_url} />
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="cta-section">
          <h2>{sd('cta_title')}</h2>
          <p>{sd('cta_desc')}</p>
          <div className="cta-btns">
            <I18nLink href="/contact" className="btn-primary">{sd('consult_now')}</I18nLink>
            <I18nLink href="/scenarios" className="btn-secondary">{sd('view_others')}</I18nLink>
          </div>
        </section>

      </div>

      <style jsx>{`
        .scenario-detail { background: #f8fafc; min-height: 100vh; padding-bottom: 80px; }

        .hero { position: relative; height: 420px; overflow: hidden; }
        .hero-img { width: 100%; height: 100%; object-fit: cover; }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(15,23,42,0.75) 0%, rgba(15,23,42,0.2) 60%, transparent 100%); }
        .hero-content { position: absolute; bottom: 48px; left: 50%; transform: translateX(-50%); text-align: center; width: 100%; }
        .hero-sub { font-size: 12px; font-weight: 600; letter-spacing: 0.15em; color: rgba(255,255,255,0.6); margin-bottom: 12px; }
        .hero-title { font-size: 52px; font-weight: 800; color: white; letter-spacing: -0.02em; }

        .container { max-width: 900px; margin: 0 auto; padding: 0 24px; }

        .breadcrumb { display: flex; align-items: center; gap: 8px; padding: 24px 0; font-size: 13px; color: #94a3b8; }
        .breadcrumb a { color: #64748b; text-decoration: none; }
        .breadcrumb a:hover { color: #0f172a; }

        .section { margin-bottom: 64px; }
        .section-label { font-size: 12px; font-weight: 600; letter-spacing: 0.15em; color: #94a3b8; margin-bottom: 10px; }
        .section-title { font-size: 28px; font-weight: 800; color: #0f172a; letter-spacing: -0.02em; margin-bottom: 32px; }

        .desc-section { margin-top: 40px; }
        .desc-text { font-size: 17px; color: #334155; line-height: 1.85; margin-bottom: 32px; }
        .highlights { display: flex; flex-wrap: wrap; gap: 12px; }
        .highlight-tag { padding: 10px 20px; background: white; border: 1px solid #e2e8f0; border-radius: 40px; font-size: 14px; font-weight: 500; color: #0f172a; }

        .products-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }

        .cta-section { text-align: center; padding: 64px 32px; background: white; border-radius: 16px; border: 1px solid #e8edf5; }
        .cta-section h2 { font-size: 28px; font-weight: 800; color: #0f172a; margin-bottom: 12px; letter-spacing: -0.02em; }
        .cta-section p { font-size: 15px; color: #64748b; margin-bottom: 32px; }
        .cta-btns { display: flex; gap: 12px; justify-content: center; }
        .btn-primary { padding: 12px 32px; background: #0f172a; color: white; border-radius: 40px; font-size: 14px; font-weight: 700; text-decoration: none; }
        .btn-secondary { padding: 12px 32px; background: white; color: #0f172a; border-radius: 40px; font-size: 14px; font-weight: 600; text-decoration: none; border: 1.5px solid #e2e8f0; }

        @media (max-width: 768px) {
          .hero { height: 280px; }
          .hero-title { font-size: 36px; }
          .products-grid { grid-template-columns: 1fr; }
          .cta-btns { flex-direction: column; align-items: center; }
        }
      `}</style>
    </div>
  );
}
