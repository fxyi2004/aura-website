'use client';

import { useSearchParams } from 'next/navigation';
import { Link } from '@/i18n/routing';
import { Suspense } from 'react';
import { useTranslations } from 'next-intl';

interface Props {
  params: { param: string };
}

function SpecDetailContent({ paramName }: { paramName: string }) {
  const searchParams = useSearchParams();
  const value = searchParams.get('value') || '';
  const t = useTranslations('specs_page');
  const pd = useTranslations('product_detail');
  const explanation = searchParams.get('explanation') || pd('spec_default');

  return (
    <div className="spec-detail-wrapper">
      <div className="spec-detail-card">
        <div className="spec-icon">📊</div>
        <h1>{paramName}</h1>
        <div className="spec-value-large">{value}</div>
        <div className="spec-explanation-card">
          <h3>{t('details')}</h3>
          <p>{explanation}</p>
        </div>
        <div className="spec-actions">
          <Link href="/contact" className="btn-inquiry">{t('get_spec_sheet')}</Link>
          <a href="https://wa.me/8615001168605" target="_blank" rel="noopener noreferrer" className="btn-wa-small">
            {t('talk_advisor')}
          </a>
        </div>
      </div>

      <style jsx>{`
        .spec-detail-wrapper { display: flex; justify-content: center; align-items: center; min-height: 70vh; }
        .spec-detail-card { background: white; border-radius: 32px; padding: 48px; text-align: center; max-width: 600px; margin: 0 auto; box-shadow: 0 4px 20px rgba(0,0,0,0.05); }
        .spec-icon { font-size: 64px; margin-bottom: 24px; }
        .spec-detail-card h1 { font-size: 28px; font-weight: 700; margin-bottom: 16px; color: #1f2937; }
        .spec-value-large { font-size: 42px; font-weight: 800; color: #2563eb; margin-bottom: 32px; padding: 16px; background: #eef2ff; border-radius: 20px; display: inline-block; min-width: 200px; }
        .spec-explanation-card { text-align: left; margin: 32px 0; padding: 24px; background: #f8fafc; border-radius: 20px; }
        .spec-explanation-card h3 { font-size: 18px; font-weight: 600; margin-bottom: 12px; color: #1f2937; }
        .spec-explanation-card p { font-size: 14px; color: #4b5563; line-height: 1.6; }
        .spec-actions { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; margin-top: 16px; }
        .btn-inquiry { background: #2563eb; color: white; border: none; padding: 12px 28px; border-radius: 40px; cursor: pointer; font-weight: 500; text-decoration: none; display: inline-block; }
        .btn-wa-small { background: #25d366; color: white; padding: 12px 28px; border-radius: 40px; text-decoration: none; font-weight: 500; display: inline-block; }
      `}</style>
    </div>
  );
}

export default function SpecDetailClient({ params }: Props) {
  const paramName = decodeURIComponent(params.param);
  const t = useTranslations('specs_page');

  return (
    <div className="detail-page">
      <div className="container">
        <div className="detail-nav">
          <Link href="/products" className="back-btn">{t('back_products')}</Link>
          <Link href="/" className="back-btn">{t('home')}</Link>
        </div>
        <Suspense fallback={<div>{t('loading')}</div>}>
          <SpecDetailContent paramName={paramName} />
        </Suspense>
      </div>

      <style jsx>{`
        .detail-page { padding: 30px 0 60px; background: #f8fafc; min-height: 100vh; }
        .container { max-width: 1280px; margin: 0 auto; padding: 0 24px; }
        .detail-nav { display: flex; gap: 16px; margin-bottom: 24px; }
        .back-btn { background: white; border: none; padding: 8px 20px; border-radius: 40px; font-size: 14px; text-decoration: none; color: #4b5563; display: inline-block; box-shadow: 0 1px 2px rgba(0,0,0,0.05); }
        .back-btn:hover { background: #f0f0f0; }
      `}</style>
    </div>
  );
}
