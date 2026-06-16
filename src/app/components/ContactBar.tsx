'use client';

import { WHATSAPP_LINK } from '@/app/utils/whatsapp';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function ContactBar() {
  const t = useTranslations('contact_bar');

  return (
    <section className="contact-bar-section">
      <div className="container">
        <div className="contact-bar">
          <span>{t('text')}</span>
          <Link href="/contact" className="contact-bar-btn">{t('submit')}</Link>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="contact-bar-wa">{t('whatsapp')}</a>
        </div>
      </div>

      <style jsx>{`
        .contact-bar-section {
          padding: 30px 0 50px;
          background: #fff;
        }
        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .contact-bar {
          background: linear-gradient(135deg, #1e3a8a, #2563eb);
          border-radius: 60px;
          padding: 16px 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          flex-wrap: wrap;
          color: white;
        }
        .contact-bar-btn {
          background: white;
          color: #0f172a;
          border: none;
          padding: 8px 24px;
          border-radius: 40px;
          font-weight: 500;
          cursor: pointer;
          text-decoration: none;
        }
        .contact-bar-wa {
          background: #25d366;
          color: white;
          padding: 8px 24px;
          border-radius: 40px;
          text-decoration: none;
        }
        @media (max-width: 768px) {
          .contact-bar {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}