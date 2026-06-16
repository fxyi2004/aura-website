'use client';

import { useState } from 'react';
import { WHATSAPP_LINK } from '@/app/utils/whatsapp';
import { useTranslations } from 'next-intl';

interface QuickInquiryProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickInquiry({ isOpen, onClose }: QuickInquiryProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const t = useTranslations('quick_inquiry');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value || 'Quick inquiry',
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('send failed');
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2000);
    } catch {
      setError(t('error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="overlay" onClick={onClose} />
      <div className="drawer">
        <div className="drawer-header">
          <span>{t('title')}</span>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        {submitted ? (
          <div className="success">
            <div className="success-icon">✓</div>
            <p>{t('success')}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder={t('name_placeholder')} required />
            <input name="email" type="email" placeholder={t('email_placeholder')} required />
            <input name="phone" type="tel" placeholder={t('phone_placeholder')} />
            <textarea name="message" placeholder={t('message_placeholder')} rows={3}></textarea>
            {error && <p className="error-msg">{error}</p>}
            <button type="submit" disabled={loading}>
              {loading ? t('submitting') : t('submit')}
            </button>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">{t('whatsapp')}</a>
          </form>
        )}
      </div>

      <style jsx>{`
        .overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          z-index: 200;
        }
        .drawer {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 400px;
          max-width: 90vw;
          background: white;
          border-radius: 28px;
          z-index: 201;
          overflow: hidden;
        }
        .drawer-header {
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          color: white;
          padding: 16px 20px;
          display: flex;
          justify-content: space-between;
          font-weight: 600;
        }
        .close-btn {
          background: none;
          border: none;
          color: white;
          font-size: 24px;
          cursor: pointer;
        }
        form {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        input, textarea {
          padding: 12px;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          font-size: 14px;
          font-family: inherit;
        }
        .error-msg {
          color: #ef4444;
          font-size: 13px;
          text-align: center;
        }
        button[type="submit"] {
          background: #2563eb;
          color: white;
          border: none;
          padding: 12px;
          border-radius: 40px;
          cursor: pointer;
          font-weight: 500;
          transition: opacity 0.2s;
        }
        button[type="submit"]:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        a {
          background: #25d366;
          text-align: center;
          padding: 12px;
          border-radius: 40px;
          color: white;
          text-decoration: none;
          display: block;
        }
        .success {
          padding: 48px 24px;
          text-align: center;
        }
        .success-icon {
          width: 56px;
          height: 56px;
          background: #22c55e;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          color: white;
          margin: 0 auto 16px;
        }
      `}</style>
    </>
  );
}
