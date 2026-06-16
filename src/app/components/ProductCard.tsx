'use client';

import { Link } from '@/i18n/routing';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
}

export default function ProductCard({ id, name, description, image }: ProductCardProps) {
  return (
    <Link href={`/products/${id}`} className="product-card">
      <div className="product-image-wrapper">
        <img src={image} alt={name} className="product-image" />
        <div className="image-overlay"></div>
      </div>
      <div className="product-content">
        <h3 className="product-name">{name}</h3>
        <p className="product-desc">{description}</p>
        <div className="product-footer">
          <span className="product-btn">
            查看详情
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="btn-icon">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        </div>
      </div>

      <style jsx>{`
        .product-card {
          display: block;
          background: white;
          border-radius: 16px;
          overflow: hidden;
          text-decoration: none;
          border: 1px solid #e8edf5;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.08);
        }
        .product-image-wrapper {
          position: relative;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          background: #0f172a;
        }
        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .product-card:hover .product-image {
          transform: scale(1.04);
        }
        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.35) 100%);
        }
        .product-content {
          padding: 20px 20px 24px;
        }
        .product-name {
          font-size: 17px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 8px;
        }
        .product-desc {
          font-size: 13px;
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 20px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .product-footer {
          border-top: 1px solid #f1f5f9;
          padding-top: 16px;
        }
        .product-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 500;
          color: #94a3b8;
          transition: color 0.2s, gap 0.2s;
        }
        .product-card:hover .product-btn {
          color: #0f172a;
          gap: 12px;
        }
        .btn-icon {
          width: 14px;
          height: 14px;
        }
        @media (max-width: 768px) {
          .product-image-wrapper { height: 180px; }
          .product-content { padding: 16px 16px 20px; }
        }
      `}</style>
    </Link>
  );
}
