'use client';

export default function Loading() {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <div className="spinner"></div>
        <p>加载中...</p>
      </div>

      <style jsx>{`
        .loading-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 60vh;
          padding: 48px 24px;
        }
        .loading-spinner {
          text-align: center;
        }
        .spinner {
          width: 48px;
          height: 48px;
          border: 4px solid #e5e7eb;
          border-top-color: #2563eb;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
          margin: 0 auto 16px;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        .loading-spinner p {
          font-size: 14px;
          color: #6b7280;
        }
      `}</style>
    </div>
  );
}
