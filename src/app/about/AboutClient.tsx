'use client';

import Image from 'next/image';
import FloatingButton from '@/app/components/FloatingButton';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

const advantageIcons = [
  <svg key="0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>,
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22"><path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>,
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
];

export default function AboutClient() {
  const t = useTranslations('about_page');
  const stats = (t.raw('stats') as Array<{value: string; label: string}>);
  const advantages = (t.raw('advantages') as Array<{title: string; desc: string}>);
  const industries = (t.raw('industries') as Array<{name: string; desc: string}>);

  return (
    <div className="about-page">

      {/* Hero */}
      <div className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="hero-label">{t('hero_label')}</p>
          <h1 className="hero-title">{t('hero_title')}</h1>
          <p className="hero-desc">{t('hero_desc')}</p>
          <div className="hero-stats">
            {stats.map(s => (
              <div key={s.label} className="hero-stat">
                <span className="hero-stat-value">{s.value}</span>
                <span className="hero-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container">

        {/* Mission */}
        <section className="section mission-section">
          <div className="mission-image">
            <Image src="/images/hero-bg.webp" alt="AURA mission" width={900} height={500} className="mission-img" />
            <div className="mission-overlay" />
            <div className="mission-badge">
              <span className="badge-line1">{t('badge_line1')}</span>
              <span className="badge-line2">{t('badge_line2')}</span>
            </div>
          </div>
          <div className="mission-text">
            <p className="section-label">{t('mission_label')}</p>
            <h2 className="section-title">{t('mission_title')}</h2>
            <p className="section-desc">{t('mission_desc1')}</p>
            <p className="section-desc" style={{marginTop: '16px'}}>{t('mission_desc2')}</p>
            <p className="section-desc" style={{marginTop: '16px'}}>{t('mission_desc3')}</p>
            <Link href="/scenarios" style={{display:'inline-flex',alignItems:'center',gap:'6px',marginTop:'28px',fontSize:'13px',fontWeight:600,color:'#1c49c4',textDecoration:'none'}}>
              {t('mission_link')}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </section>

        {/* Why AURA */}
        <section className="section">
          <p className="section-label centered">{t('why_label')}</p>
          <h2 className="section-title centered">{t('why_title')}</h2>
          <div className="advantages-grid">
            {advantages.map((a, i) => (
              <div key={a.title} className="advantage-card">
                <div className="advantage-icon">{advantageIcons[i]}</div>
                <div>
                  <h3 className="advantage-title">{a.title}</h3>
                  <p className="advantage-desc">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Industries */}
        <section className="section">
          <p className="section-label centered">{t('industries_label')}</p>
          <h2 className="section-title centered">{t('industries_title')}</h2>
          <div className="industries-grid">
            {industries.map(ind => (
              <div key={ind.name} className="industry-card" style={{background: '#f1f5f9', borderColor: '#cbd5e1'}}>
                <h3 className="industry-name" style={{color: '#0f172a'}}>{ind.name}</h3>
                <p className="industry-desc">{ind.desc}</p>
              </div>
            ))}
          </div>
        </section>


      </div>

      {/* Bottom CTA */}
      <div className="bottom-cta">
        <div className="container">
          <h2 className="cta-title">{t('cta_title')}</h2>
          <p className="cta-desc">{t('cta_desc')}</p>
          <Link href="/contact" style={{display:'inline-block',padding:'12px 32px',background:'#0f172a',color:'white',borderRadius:'40px',fontSize:'14px',fontWeight:700,textDecoration:'none'}}>{t('contact_us')}</Link>
        </div>
      </div>

      <style jsx>{`
        .about-page { background: #f8fafc; min-height: 100vh; padding-bottom: 60px; }
        .container { max-width: 1280px; margin: 0 auto; padding: 0 24px; }

        /* Hero */
        .hero { position: relative; padding: 56px 0 48px; text-align: center; border-bottom: 1px solid #e8edf5; background: #f8fafc; }
        .hero-bg { display: none; }
        .hero-overlay { display: none; }
        .hero-content { position: relative; }
        .hero-label { font-size: 12px; font-weight: 600; letter-spacing: 0.15em; color: #94a3b8; margin-bottom: 16px; }
        .hero-title { font-size: 42px; font-weight: 800; color: #0f172a; letter-spacing: -0.02em; margin-bottom: 12px; }
        .hero-desc { font-size: 16px; color: #64748b; max-width: 520px; margin: 0 auto 48px; line-height: 1.7; }
        .hero-stats { display: flex; justify-content: center; gap: 0; border: 1px solid #e8edf5; border-radius: 12px; background: white; overflow: hidden; max-width: 600px; margin: 0 auto; }
        .hero-stat { flex: 1; padding: 20px 16px; border-right: 1px solid #e8edf5; }
        .hero-stat:last-child { border-right: none; }
        .hero-stat-value { display: block; font-size: 28px; font-weight: 800; color: #0f172a; letter-spacing: -0.02em; margin-bottom: 4px; }
        .hero-stat-label { font-size: 12px; color: #94a3b8; font-weight: 500; }

        /* Sections */
        .section { margin-top: 72px; }
        .section-label { font-size: 12px; font-weight: 600; letter-spacing: 0.15em; color: #94a3b8; margin-bottom: 10px; }
        .section-label.centered { text-align: center; }
        .section-title { font-size: 32px; font-weight: 800; color: #0f172a; letter-spacing: -0.02em; margin-bottom: 16px; }
        .section-title.centered { text-align: center; margin-bottom: 40px; }
        .section-desc { font-size: 15px; color: #64748b; line-height: 1.8; }

        /* Mission */
        .mission-section { display: grid; grid-template-columns: 1fr 1fr; gap: 0; background: white; border-radius: 6px; overflow: hidden; border: 1px solid #e8edf5; }
        .mission-image { position: relative; min-height: 400px; overflow: hidden; background: #0f172a; }
        .mission-img { width: 100%; height: 100%; object-fit: cover; opacity: 0.85; }
        .mission-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(15,23,42,0.7) 0%, transparent 60%); }
        .mission-badge { position: absolute; bottom: 28px; left: 28px; }
        .badge-line1 { display: block; font-size: 10px; font-weight: 600; letter-spacing: 0.15em; color: #94a3b8; margin-bottom: 6px; }
        .badge-line2 { display: block; font-size: 20px; font-weight: 800; color: white; }
        .mission-text { padding: 48px 48px; display: flex; flex-direction: column; justify-content: center; }

        /* Why AURA */
        .advantages-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .advantage-card { background: white; border: 1px solid #e8edf5; border-radius: 12px; padding: 28px; display: flex; gap: 18px; align-items: flex-start; transition: box-shadow 0.2s, border-color 0.2s; }
        .advantage-card:hover { border-color: #1e3a8a; box-shadow: 0 4px 16px rgba(30,58,138,0.08); }
        .advantage-icon { color: #1e3a8a; flex-shrink: 0; margin-top: 2px; width: 40px; height: 40px; background: #eff6ff; border-radius: 10px; display: flex; align-items: center; justify-content: center; }
        .advantage-title { font-size: 16px; font-weight: 700; color: #0f172a; margin-bottom: 8px; }
        .advantage-desc { font-size: 13px; color: #64748b; line-height: 1.7; }

        /* Industries */
        .industries-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; grid-auto-rows: 1fr; }
        .industry-card { border: 1px solid #cbd5e1; border-radius: 12px; padding: 20px; text-align: center; transition: box-shadow 0.2s, border-color 0.2s; display: flex; flex-direction: column; justify-content: center; }
        .industry-card:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.1); }
        .industry-name { font-size: 14px; font-weight: 700; margin-bottom: 0; }
        .industry-desc { font-size: 11px; color: #94a3b8; line-height: 1.5; margin-top: 6px; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; }


        /* Bottom CTA */
        .bottom-cta { background: transparent; margin-top: 72px; padding: 48px 0; text-align: center; }
        .cta-title { font-size: 28px; font-weight: 800; color: #0f172a; margin-bottom: 12px; letter-spacing: -0.02em; }
        .cta-desc { font-size: 15px; color: #64748b; margin-bottom: 32px; }

        @media (max-width: 768px) {
          .hero-title { font-size: 36px; }
          .hero-stats { max-width: 100%; }
          .mission-section { grid-template-columns: 1fr; }
          .mission-image { min-height: 220px; }
          .mission-text { padding: 28px 24px; }
          .advantages-grid { grid-template-columns: 1fr; }
          .industries-grid { grid-template-columns: repeat(2, 1fr); }
          .timeline-item, .timeline-item.right { padding: 0 0 0 44px; justify-content: flex-start; }
          .timeline-line { left: 14px; }
          .timeline-dot { left: 14px; }
        }
      `}</style>
      <FloatingButton />
    </div>
  );
}
