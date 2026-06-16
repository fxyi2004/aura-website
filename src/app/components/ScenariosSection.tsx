'use client';

import { useState } from 'react';
import ScenarioCard from './ScenarioCard';
import { scenarios } from '@/app/data/scenarios';
import Assistant from './Assistant';
import { useTranslations } from 'next-intl';

export default function ScenariosSection() {
  const [assistantOpen, setAssistantOpen] = useState(false);
  const t = useTranslations('scenarios_section');

  return (
    <section id="scenarios" className="scenarios-section">
      <div className="container">
        <div className="section-header">
          <h1 className="main-title">{t('title')}</h1>
          <p className="sub-title">{t('subtitle')}</p>
          <div className="bounce-arrow" onClick={() => {
            const el = document.querySelector('.scenarios-grid');
            if (el) {
              const top = el.getBoundingClientRect().top + window.scrollY - 90;
              window.scrollTo({ top, behavior: 'smooth' });
            }
          }}> 
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </div>
        </div>
        <div className="scenarios-grid">
          {scenarios.map((scenario) => (
            <ScenarioCard
              key={scenario.id}
              id={scenario.id}
              name={scenario.name}
              description={scenario.description}
              image={scenario.image}
              color={scenario.color}
            />
          ))}
        </div>

        {/* 高级咨询入口 - 暂时备注
        <div className="expert-zone">
          <span className="expert-line"></span>
          <div className="expert-center">
            <span className="expert-text">拿不准？</span>
            <span className="expert-link" onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <span className="expert-emoji">🤝</span> 一对一咨询
            </span>
          </div>
          <span className="expert-line"></span>
        </div>
        */}
      </div>
      <Assistant isOpen={assistantOpen} onClose={() => setAssistantOpen(false)} />

      <style jsx>{`
        .bounce-arrow {
          display: flex;
          justify-content: center;
          margin-top: 18px;
          cursor: pointer;
          animation: bounce 2s infinite;
          color: #3b82f6;
          opacity: 0.8;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
        .scenarios-section {
          padding: 30px 0 40px;
          background: #fff;
        }
        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 18px;
        }
        .section-header {
          text-align: center;
          margin-bottom: 50px;
        }
        .main-title {
          font-size: 32px;
          font-weight: 600;
          color: #1f2937;
          margin-top: 0px;
          margin-bottom: 12px;
        }
        .sub-title {
          font-size: 16px;
          color: #6b7280;
        }
        .scenarios-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 32px;
          margin-bottom: 40px;
        }
        .expert-zone {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin: 40px 0 24px;
        }
        .expert-line {
          width: 80px;
          height: 1px;
          background: #e2e8f0;
        }
        .expert-center {
          display: flex;
          align-items: baseline;
          gap: 6px;
        }
        .expert-text {
          font-size: 14px;
          color: #94a3b8;
          font-weight: 400;
        }
        .expert-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          font-weight: 500;
          color: #2563eb;
          cursor: pointer;
          transition: color 0.2s;
        }
        .expert-link:hover {
          color: #2563eb;
        }
        .expert-emoji {
          font-size: 16px;
        }
        @media (max-width: 768px) {
          .main-title {
            font-size: 28px;
          }
        }
      `}</style>
    </section>
  );
}