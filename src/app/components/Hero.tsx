'use client';

import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');

  const scrollToScenarios = () => {
    document.getElementById('scenarios')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              {t('title').split('\n').map((line, i) => (
                i === 0 ? <span key={i}>{line}<br /></span> : <span key={i}>{line}</span>
              ))}
            </h1>
            <div className="hero-tags">
              <span>UAV</span>
              <span>·</span>
              <span>UGV</span>
              <span>·</span>
              <span>USV</span>
              <span>·</span>
              <span>Robot</span>
            </div>
            <button className="hero-btn" onClick={scrollToScenarios}>
              {t('button')}
              <span className="arrow-circle">
                <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          background: url('/images/hero-bg.png') center center / cover no-repeat;
          min-height: 450px;
          display: flex;
          align-items: center;
        }
        .container {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .hero-content {
          width: 100%;
        }
        .hero-text {
          max-width: 700px;
          margin-left: 20px;
          margin-top: -30px;
        }
        .hero-title {
          font-size: 40px;
          font-weight: 700;
          color: white;
          letter-spacing: -0.02em;
          margin-bottom: 20px;
          line-height: 1.3;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }
        .hero-tags {
          display: flex;
          gap: 20px;
          margin-bottom: 30px;
          font-size: 15px;
          font-weight: 500;
          color: white;
          letter-spacing: 0.5px;
          text-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
        }
        .hero-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #1e3a8a;
          color: white;
          padding: 12px 28px;
          border-radius: 40px;
          font-size: 15px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          margin-top: 16px;
          white-space: nowrap;
        }
        .arrow-circle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 18px;
          height: 18px;
          background: white;
          border-radius: 50%;
        }
        .btn-arrow {
          width: 14px;
          height: 14px;
          stroke: #1e3a8a;
        }
        @media (max-width: 768px) {
          .hero {
            min-height: 400px;
          }
          .hero-text {
            margin-left: 0;
          }
          .hero-title {
            font-size: 28px;
          }
          .hero-tags {
            gap: 12px;
            flex-wrap: wrap;
          }
        }
      `}</style>
    </section>
  );
}