'use client';

import { useState } from 'react';
import QuickInquiry from './QuickInquiry';
import { useTranslations } from 'next-intl';

export default function FloatingButton() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('floating_btn');

  return (
    <>
      <button className="floating-btn" onClick={() => setIsOpen(true)}>
        <span>📋</span>
        <span>{t('label')}</span>
      </button>
      <QuickInquiry isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <style jsx>{`
        .floating-btn {
          position: fixed;
          bottom: 24px;
          right: 24px;
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          color: white;
          border: none;
          border-radius: 48px;
          padding: 12px 24px;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          box-shadow: 0 8px 20px rgba(37, 99, 235, 0.3);
          font-weight: 500;
          z-index: 100;
        }
        @media (max-width: 640px) {
          .floating-btn span:last-child {
            display: none;
          }
        }
      `}</style>
    </>
  );
}