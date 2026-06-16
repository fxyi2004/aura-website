'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-card">
        <div className="not-found-icon">🔍</div>
        <h1>404</h1>
        <h2>页面未找到</h2>
        <p className="not-found-message">
          抱歉，您访问的页面不存在或已被移动
        </p>
        <div className="not-found-actions">
          <Link href="/" className="btn-home">
            返回首页
          </Link>
          <Link href="/products" className="btn-products">
            浏览产品
          </Link>
        </div>
      </div>

      <style jsx>{`
        .not-found-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: calc(100vh - 200px);
          padding: 48px 24px;
          background: #f8fafc;
        }
        .not-found-card {
          background: white;
          border-radius: 32px;
          padding: 64px 48px;
          text-align: center;
          max-width: 500px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }
        .not-found-icon {
          font-size: 80px;
          margin-bottom: 24px;
        }
        .not-found-card h1 {
          font-size: 72px;
          font-weight: 800;
          color: #2563eb;
          margin-bottom: 8px;
          letter-spacing: -0.02em;
        }
        .not-found-card h2 {
          font-size: 24px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 12px;
        }
        .not-found-message {
          font-size: 16px;
          color: #6b7280;
          margin-bottom: 32px;
          line-height: 1.6;
        }
        .not-found-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .btn-home {
          background: #2563eb;
          color: white;
          padding: 12px 28px;
          border-radius: 40px;
          font-weight: 500;
          text-decoration: none;
          transition: background 0.2s;
        }
        .btn-home:hover {
          background: #1d4ed8;
        }
        .btn-products {
          background: white;
          color: #2563eb;
          padding: 12px 28px;
          border-radius: 40px;
          font-weight: 500;
          border: 1px solid #e5e7eb;
          text-decoration: none;
          transition: all 0.2s;
        }
        .btn-products:hover {
          background: #f8fafc;
          border-color: #2563eb;
        }
      `}</style>
    </div>
  );
}
