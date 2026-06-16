'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="error-container">
      <div className="error-card">
        <div className="error-icon">⚠️</div>
        <h1>出错了</h1>
        <p className="error-message">抱歉，页面加载时遇到了问题</p>
        {error.message && (
          <p className="error-detail">{error.message}</p>
        )}
        <div className="error-actions">
          <button onClick={reset} className="btn-retry">
            重试
          </button>
          <Link href="/" className="btn-home">
            返回首页
          </Link>
        </div>
      </div>

      <style jsx>{`
        .error-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 60vh;
          padding: 48px 24px;
          background: #f8fafc;
        }
        .error-card {
          background: white;
          border-radius: 32px;
          padding: 48px;
          text-align: center;
          max-width: 500px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }
        .error-icon {
          font-size: 64px;
          margin-bottom: 24px;
        }
        .error-card h1 {
          font-size: 28px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 12px;
        }
        .error-message {
          font-size: 16px;
          color: #6b7280;
          margin-bottom: 16px;
        }
        .error-detail {
          font-size: 13px;
          color: #9ca3af;
          background: #f8fafc;
          padding: 12px;
          border-radius: 12px;
          margin-bottom: 24px;
          font-family: monospace;
        }
        .error-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
        }
        .btn-retry {
          background: #2563eb;
          color: white;
          padding: 12px 28px;
          border-radius: 40px;
          font-weight: 500;
          cursor: pointer;
          border: none;
          transition: background 0.2s;
        }
        .btn-retry:hover {
          background: #1d4ed8;
        }
        .btn-home {
          background: white;
          color: #2563eb;
          padding: 12px 28px;
          border-radius: 40px;
          font-weight: 500;
          border: 1px solid #e5e7eb;
          text-decoration: none;
          transition: all 0.2s;
        }
        .btn-home:hover {
          background: #f8fafc;
          border-color: #2563eb;
        }
      `}</style>
    </div>
  );
}
