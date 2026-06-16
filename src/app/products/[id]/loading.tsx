'use client';

export default function ProductLoading() {
  return (
    <div className="product-loading">
      <div className="container">
        <div className="loading-nav">
          <div className="skeleton skeleton-btn"></div>
          <div className="skeleton skeleton-btn"></div>
        </div>

        <div className="loading-content">
          <div className="loading-image">
            <div className="skeleton skeleton-emoji"></div>
          </div>
          <div className="loading-info">
            <div className="skeleton skeleton-title"></div>
            <div className="skeleton skeleton-desc"></div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
            <div className="loading-specs">
              <div className="skeleton skeleton-spec"></div>
              <div className="skeleton skeleton-spec"></div>
              <div className="skeleton skeleton-spec"></div>
              <div className="skeleton skeleton-spec"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .product-loading {
          padding: 30px 0 60px;
          background: #f8fafc;
          min-height: 100vh;
        }
        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .loading-nav {
          display: flex;
          gap: 16px;
          margin-bottom: 24px;
        }
        .loading-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          background: white;
          border-radius: 32px;
          padding: 40px;
        }
        .loading-image {
          background: #f1f5f9;
          border-radius: 24px;
          padding: 48px;
          min-height: 250px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .loading-info {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .loading-specs {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 24px;
        }
        .skeleton {
          background: linear-gradient(90deg, #f1f5f9 0%, #e2e8f0 50%, #f1f5f9 100%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 8px;
        }
        .skeleton-btn {
          width: 120px;
          height: 36px;
          border-radius: 40px;
        }
        .skeleton-emoji {
          width: 80px;
          height: 80px;
          border-radius: 16px;
        }
        .skeleton-title {
          width: 60%;
          height: 32px;
        }
        .skeleton-desc {
          width: 80%;
          height: 20px;
        }
        .skeleton-text {
          width: 100%;
          height: 16px;
        }
        .skeleton-spec {
          width: 100%;
          height: 40px;
        }
        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
        @media (max-width: 768px) {
          .loading-content {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
