'use client';

import { useState } from 'react';
import { WHATSAPP_LINK } from '@/app/utils/whatsapp';
import { useTranslations } from 'next-intl';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const t = useTranslations('contact_page');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const form = e.currentTarget;
    const checkedScenarios = Array.from(form.querySelectorAll('input[name="scenario"]:checked')).map((el) => (el as HTMLInputElement).value);
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      company: (form.elements.namedItem('company') as HTMLInputElement).value,
      country: (form.elements.namedItem('country') as HTMLSelectElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      scenarios: checkedScenarios.join(', '),
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    setLoading(false);
    if (res.ok) {
      setSubmitted(true);
    } else {
      setError(t('error'));
    }
  };

  return (
    <div className="contact-page">
      <div className="container">

        <div className="layout">
          {/* Sidebar */}
          <div className="sidebar">
            <div className="sidebar-top">
              <p className="sidebar-label">{t('sidebar_label')}</p>
              <h1 className="sidebar-title">{t('sidebar_title')}</h1>
              <p className="sidebar-desc">{t('sidebar_desc')}</p>
            </div>

            <div className="contact-methods">
              <a href="mailto:info@aura-is.com" className="method-item">
                <div className="method-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m2 7 10 7 10-7"/>
                  </svg>
                </div>
                <div>
                  <div className="method-label">Email</div>
                  <div className="method-value">info@aura-is.com</div>
                </div>
              </a>

              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="method-item">
                <div className="method-icon method-icon-green">
                  <svg width="18" height="18" viewBox="0 0 32 32" fill="currentColor">
                    <path d="M16 2C8.28 2 2 8.28 2 16c0 2.46.66 4.76 1.8 6.76L2 30l7.44-1.76A13.9 13.9 0 0016 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.4a11.3 11.3 0 01-5.76-1.58l-.4-.24-4.18 1 .98-4.06-.26-.42A11.36 11.36 0 014.6 16C4.6 9.72 9.72 4.6 16 4.6S27.4 9.72 27.4 16 22.28 27.4 16 27.4zm6.18-8.46c-.34-.17-2-.98-2.3-1.1-.3-.1-.52-.16-.74.18-.22.34-.86 1.1-1.06 1.32-.2.22-.38.24-.72.08-.34-.16-1.42-.52-2.7-1.66-1-.88-1.66-1.98-1.86-2.3-.2-.34-.02-.52.14-.68.16-.16.34-.4.5-.58.18-.2.22-.34.34-.56.1-.22.06-.42-.02-.58-.08-.18-.74-1.8-1.02-2.46-.26-.64-.54-.56-.74-.56h-.64c-.22 0-.58.08-.88.42-.3.32-1.16 1.14-1.16 2.78 0 1.64 1.18 3.22 1.34 3.44.18.22 2.34 3.56 5.66 4.98.8.34 1.42.54 1.9.7.8.26 1.52.22 2.1.14.64-.1 1.96-.8 2.24-1.58.28-.76.28-1.42.2-1.56-.1-.14-.3-.22-.64-.38z"/>
                  </svg>
                </div>
                <div>
                  <div className="method-label">{t('instant_chat')}</div>
                  <div className="method-value">WhatsApp</div>
                </div>
              </a>
            </div>

            <div className="response-badge">
              <div className="badge-dot" />
              {t('response_time')}
            </div>
          </div>

          {/* Form */}
          <div className="form-panel">
            {submitted ? (
              <div className="success-state">
                <div className="success-check">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </div>
                <h3>{t('success_title')}</h3>
                <p>{t('success_desc')}</p>
                <button className="reset-btn" onClick={() => setSubmitted(false)}>{t('submit_again')}</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-header">
                  <h2>{t('form_title')}</h2>
                  <p>{t('form_subtitle')}</p>
                </div>

                <div className="fields">
                  <div className="field-row">
                    <div className="field">
                      <label>{t('field_name')} <span className="required">*</span></label>
                      <input name="name" type="text" placeholder="Your name" required />
                    </div>
                    <div className="field">
                      <label>{t('field_company')}</label>
                      <input name="company" type="text" placeholder="Your company" />
                    </div>
                  </div>

                  <div className="field-row">
                    <div className="field">
                      <label>{t('field_email')} <span className="required">*</span></label>
                      <input name="email" type="email" placeholder="your@email.com" required />
                    </div>
                    <div className="field">
                      <label>{t('field_country')}</label>
                      <input name="country" type="text" placeholder="e.g. Singapore" />
                    </div>
                  </div>

                  <div className="field-row">
                    <div className="field">
                      <label>{t('field_phone')}</label>
                      <input name="phone" type="tel" placeholder="+1 234 567 8900" />
                    </div>
                    <div className="field">
                      <label>{t('field_scenario')}</label>
                      <select name="scenario">
                        <option value="">{t('scenario_placeholder')}</option>
                        <option>{t('scenario_island')}</option>
                        <option>{t('scenario_mountain')}</option>
                        <option>{t('scenario_agriculture')}</option>
                        <option>{t('scenario_emergency')}</option>
                        <option>{t('scenario_water')}</option>
                        <option>{t('scenario_campus')}</option>
                      </select>
                    </div>
                  </div>

                  <div className="field">
                    <label>{t('field_message')} <span className="required">*</span></label>
                    <textarea name="message" placeholder={t('field_message_placeholder')} rows={9} required />
                  </div>
                </div>

                {error && <p className="error-msg">{error}</p>}

                <button type="submit" className="submit-btn" disabled={loading} style={{display:'block',margin:'8px auto 0',padding:'10px 32px',background:'#0f172a',color:'white',border:'none',borderRadius:'40px',fontSize:'13px',fontWeight:600,cursor:'pointer'}}>
                  {loading ? (
                    <span className="btn-loading">
                      <span className="spinner" />
                      {t('submitting')}
                    </span>
                  ) : (
                    <span className="btn-content">
                      {t('submit')}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-page {
          min-height: 100vh;
          background: #f8fafc;
          padding: 60px 0 100px;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .layout {
          display: grid;
          grid-template-columns: 2fr 3fr;
          gap: 64px;
          align-items: start;
        }
        .sidebar {
          position: sticky;
          top: 120px;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        .sidebar-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: #2563eb;
          margin-bottom: 16px;
        }
        .sidebar-title {
          font-size: 38px;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.2;
          margin-bottom: 20px;
        }
        .sidebar-desc {
          font-size: 15px;
          color: #64748b;
          line-height: 1.7;
        }
        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .method-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 20px;
          background: white;
          border-radius: 16px;
          border: 1px solid #e8edf5;
          text-decoration: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .method-item:hover {
          border-color: #2563eb;
          box-shadow: 0 4px 16px rgba(37, 99, 235, 0.08);
        }
        .method-icon {
          width: 40px;
          height: 40px;
          background: #eff6ff;
          color: #2563eb;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .method-icon-green {
          background: #f0fdf4;
          color: #16a34a;
        }
        .method-label {
          font-size: 12px;
          color: #94a3b8;
          font-weight: 500;
          letter-spacing: 0.03em;
          margin-bottom: 4px;
        }
        .method-value {
          font-size: 15px;
          font-weight: 600;
          color: #1e293b;
        }
        .response-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #64748b;
          padding-left: 56px;
        }
        .badge-dot {
          width: 8px;
          height: 8px;
          background: #22c55e;
          border-radius: 50%;
          box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.2);
        }
        .form-panel {
          background: white;
          border-radius: 28px;
          padding: 48px;
          border: 1px solid #e8edf5;
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.04);
        }
        .form-header {
          margin-bottom: 36px;
        }
        .form-header h2 {
          font-size: 24px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 8px;
        }
        .form-header p {
          font-size: 14px;
          color: #94a3b8;
        }
        .fields {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 28px;
        }
        .field-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        label {
          font-size: 13px;
          font-weight: 600;
          color: #374151;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .required {
          color: #ef4444;
        }
        input, textarea {
          padding: 9px 12px;
          border: 1.5px solid #e2e8f0;
          border-radius: 12px;
          font-size: 14px;
          font-family: inherit;
          color: #1e293b;
          background: #fafbfc;
          transition: border-color 0.2s, background 0.2s;
          resize: none;
        }
        input::placeholder, textarea::placeholder {
          color: #c0cad8;
        }
        select {
          width: 100%;
          padding: 11px 14px;
          border: 1.5px solid #e2e8f0;
          border-radius: 10px;
          font-size: 14px;
          color: #0f172a;
          background: #f8fafc;
          transition: border-color 0.2s, box-shadow 0.2s;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
        }
        select:focus {
          outline: none;
          border-color: #2563eb;
          background-color: white;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.08);
        }
        input:focus, textarea:focus {
          outline: none;
          border-color: #2563eb;
          background: white;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.08);
        }
        .error-msg {
          color: #ef4444;
          font-size: 13px;
          margin-bottom: 12px;
        }
        .submit-btn {
          width: 100%;
          padding: 15px;
          background: #0f172a;
          color: white;
          border: none;
          border-radius: 14px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s, transform 0.1s;
        }
        .submit-btn:hover:not(:disabled) {
          background: #1e293b;
          transform: translateY(-1px);
        }
        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .btn-content, .btn-loading {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .success-state {
          text-align: center;
          padding: 60px 24px;
        }
        .success-check {
          width: 72px;
          height: 72px;
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
          box-shadow: 0 8px 24px rgba(37, 99, 235, 0.3);
        }
        .success-state h3 {
          font-size: 24px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 12px;
        }
        .success-state p {
          font-size: 15px;
          color: #64748b;
          line-height: 1.6;
          max-width: 320px;
          margin: 0 auto 32px;
        }
        .reset-btn {
          background: none;
          border: 1.5px solid #e2e8f0;
          padding: 11px 28px;
          border-radius: 40px;
          cursor: pointer;
          color: #64748b;
          font-size: 14px;
          font-weight: 500;
          transition: border-color 0.2s, color 0.2s;
        }
        .reset-btn:hover {
          border-color: #2563eb;
          color: #2563eb;
        }
        @media (max-width: 900px) {
          .layout {
            grid-template-columns: 1fr;
          }
          .sidebar {
            position: static;
          }
          .sidebar-title {
            font-size: 28px;
          }
        }
        @media (max-width: 600px) {
          .form-panel {
            padding: 28px 20px;
          }
          .field-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
