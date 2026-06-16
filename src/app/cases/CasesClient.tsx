'use client';

import { Case } from '@/lib/cases';
import FloatingButton from '@/app/components/FloatingButton';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function CasesClient({ cases }: { cases: Case[] }) {
  const t = useTranslations('cases_page');
  const locale = useLocale();

  return (
    <section className="cases-page">
      <div className="page-hero">
        <div className="container">
          <p className="hero-label">{t('hero_label')}</p>
          <h1>{t('hero_title')}</h1>
          <p className="hero-desc">{t('hero_desc')}</p>
        </div>
      </div>

      <div className="container">
        {cases.length === 0 ? (
          <p style={{textAlign:'center',color:'#94a3b8',padding:'64px 0'}}>{t('no_cases')}</p>
        ) : (
          <div className="cases-grid">
            {cases.map((c) => (
              <div className="case-card" key={c.id}>
                <div className="card-top">
                  <span className="scenario-label">{locale === 'zh' ? c.scenario_zh : c.scenario_en}</span>
                </div>
                <h3>{locale === 'zh' ? c.title : locale === 'es' ? (c.title_es || c.title_en || c.title) : (c.title_en || c.title)}</h3>
                <p className="summary">{locale === 'zh' ? c.summary : locale === 'es' ? (c.summary_es || c.summary_en || c.summary) : (c.summary_en || c.summary)}</p>
                <div className="results">
                  {(locale === 'zh' ? c.results : locale === 'es' ? (c.results_es?.length ? c.results_es : c.results_en?.length ? c.results_en : c.results) : (c.results_en?.length ? c.results_en : c.results)).map((r, i) => (
                    <div className="result-item" key={i}>
                      <span className="result-dot" />
                      {r}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="cta-section">
          <h2>{t('cta_title')}</h2>
          <p>{t('cta_desc')}</p>
          <Link href="/contact" style={{display:'inline-block',padding:'12px 32px',background:'#0f172a',color:'white',borderRadius:'40px',fontSize:'14px',fontWeight:700,textDecoration:'none'}}>{t('contact_us')}</Link>
        </div>
      </div>

      <style jsx>{`
        .cases-page { background: #f8fafc; min-height: 100vh; padding-bottom: 80px; }
        .container { max-width: 1280px; margin: 0 auto; padding: 0 24px; }

        .page-hero { background: #f8fafc; padding: 56px 0 48px; text-align: center; border-bottom: 1px solid #e8edf5; margin-bottom: 56px; }
        .hero-label { font-size: 12px; font-weight: 600; letter-spacing: 0.15em; color: #94a3b8; margin-bottom: 12px; }
        .page-hero h1 { font-size: 36px; font-weight: 800; color: #0f172a; letter-spacing: -0.02em; margin-bottom: 12px; }
        .hero-desc { font-size: 15px; color: #64748b; max-width: 480px; margin: 0 auto; line-height: 1.7; }

        .cases-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 64px; align-items: stretch; }

        .case-card {
          background: white;
          border-radius: 12px;
          padding: 28px;
          border: 1px solid #e8edf5;
          display: flex;
          flex-direction: column;
          gap: 14px;
          height: 100%;
          box-sizing: border-box;
          transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
        }
        .case-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,0.07); border-color: #cbd5e1; }

        .card-top { display: flex; align-items: center; justify-content: space-between; }
        .scenario-label { font-size: 10px; font-weight: 700; letter-spacing: 0.12em; color: #94a3b8; }
        .tag { font-size: 11px; font-weight: 600; padding: 3px 10px; border-radius: 40px; background: #f1f5f9; color: #475569; }

        h3 { font-size: 16px; font-weight: 700; color: #0f172a; line-height: 1.4; }
        .summary { font-size: 13px; color: #64748b; line-height: 1.75; flex: 1; }

        .results { display: flex; flex-direction: column; gap: 7px; padding-top: 4px; border-top: 1px solid #f1f5f9; }
        .result-item { display: flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 500; color: #334155; }
        .result-dot { width: 5px; height: 5px; border-radius: 50%; background: #475569; flex-shrink: 0; }

        .cta-section { text-align: center; padding: 56px 32px; }
        .cta-section h2 { font-size: 28px; font-weight: 800; color: #0f172a; margin-bottom: 12px; letter-spacing: -0.02em; }
        .cta-section p { font-size: 15px; color: #64748b; margin-bottom: 28px; }

        @media (max-width: 900px) { .cases-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .cases-grid { grid-template-columns: 1fr; } .page-header h1 { font-size: 26px; } }
      `}</style>
      <FloatingButton />
    </section>
  );
}
