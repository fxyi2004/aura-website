'use client';

import ProductCard from './ProductCard';
import { allProducts } from '@/app/data/products';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function ProductsFeatured() {
  const t = useTranslations('products_featured');
  const pl = useTranslations('products_list');

  return (
    <section className="products-featured">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('title')}</h2>
          <p className="section-subtitle">{t('subtitle')}</p>
        </div>
        <div className="products-grid">
          {allProducts.slice(0, 8).map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={pl(`${product.id}.name`)}
              description={pl(`${product.id}.desc`)}
              image={product.image}
            />
          ))}
        </div>
        <div className="view-all">
          <Link href="/products" className="view-all-link">
            {t('view_all')}
            <svg className="view-all-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .products-featured {
          padding: 70px 0 80px;
          background: #f8fafc;
        }
        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .section-header {
          text-align: center;
          margin-bottom: 48px;
        }
        .section-title {
          font-size: 32px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 12px;
          letter-spacing: -0.02em;
        }
        .section-subtitle {
          font-size: 15px;
          color: #64748b;
        }
        .products-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
          margin-bottom: 48px;
        }
        .view-all {
          text-align: center;
        }
        .view-all-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 32px;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 60px;
          font-size: 14px;
          font-weight: 700;
          color: #2563eb;
          text-decoration: none;
          transition: all 0.3s;
        }
        .view-all-link:hover {
          background: #2563eb;
          color: white;
          border-color: #2563eb;
          gap: 12px;
        }
        .view-all-icon {
          width: 16px;
          height: 16px;
        }
        @media (max-width: 768px) {
          .products-featured {
            padding: 50px 0 60px;
          }
          .section-title {
            font-size: 26px;
          }
          .products-grid {
            gap: 20px;
          }
        }
      `}</style>
    </section>
  );
}