'use client';

import { useState } from 'react';
import ScenarioCard from './ScenarioCard';
import { scenarios } from '@/app/data/scenarios';
import Assistant from './Assistant';
import { useTranslations, useLocale } from 'next-intl';

const SCENARIO_IDX: { [id: string]: number } = {
  security: 0,
  campus: 1,
  agriculture: 2,
  logistics: 3,
};

export default function ScenariosSection() {
  const [assistantOpen, setAssistantOpen] = useState(false);
  const t = useTranslations('scenarios_section');
  const sm = useTranslations('scenariosMeta');
  const locale = useLocale();

  const getTitle = (id: string) => {
    const idx = SCENARIO_IDX[id] ?? 0;
    return sm((idx + '.title') as any);
  };

  const getSubtitle = (id: string) => {
    const idx = SCENARIO_IDX[id] ?? 0;
    return sm((idx + '.subtitle') as any);
  };

  return (
    <div id="scenarios" className="scenarios-section">
      <div className="container">
        <div className="section-header">
          <h1 className="main-title">{t('title')}</h1>
          <p className="sub-title">{t('subtitle')}</p>
          <div className="bounce-arrow">
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
              name={getTitle(scenario.id)}
              description={locale === 'en' ? '' : getSubtitle(scenario.id)}
              image={scenario.image}
              color={scenario.color}
              viewText={t('view_solutions')}
            />
          ))}
        </div>
      </div>
      <Assistant isOpen={assistantOpen} onClose={() => setAssistantOpen(false)} />

      <style jsx>{`
        .bounce-arrow {
          display: flex;
          justify-content: center;
          margin-top: 18px;
          color: #3b82f6;
          opacity: 0.8;
          animation: bounce 2s infinite;
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
        @media (max-width: 768px) {
          .main-title {
            font-size: 28px;
          }
        }
      `}</style>
    </div>
  );
}
