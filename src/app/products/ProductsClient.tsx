'use client';

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import ProductCard from '@/app/components/ProductCard';
import type { Product } from '@/lib/products';
import FloatingButton from '@/app/components/FloatingButton';
import { useTranslations } from 'next-intl';

export default function ProductsClient({ products }: { products: Product[] }) {
  const t = useTranslations('products_page');
  const pl = useTranslations('products_list');
  const catT = useTranslations('categoryOptions');
  const usecaseT = useTranslations('usecaseLabels');
  const scenarioT = useTranslations('scenarioLabels');

  const categoryOptions = [
    { label: catT('0.label'), value: 'uav' },
    { label: catT('1.label'), value: 'ugv' },
    { label: catT('2.label'), value: 'robot' },
    { label: catT('3.label'), value: 'sensor' },
    { label: catT('4.label'), value: 'usv' },
  ];

  const usecaseLabels: Record<string, string> = {
    inspection: usecaseT('inspection'),
    agriculture: usecaseT('agriculture'),
    security: usecaseT('security'),
    cargo: usecaseT('cargo'),
    logistics: usecaseT('logistics'),
    transport: usecaseT('transport'),
  };

  const scenarioLabels: Record<string, string> = {
    campus: scenarioT('campus'),
    agriculture: scenarioT('agriculture'),
    security: scenarioT('security'),
    logistics: scenarioT('logistics'),
  };

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [activeCategory, setActiveCategory] = useState<string | null>(() => searchParams.get('cat'));
  const [activeUsecase, setActiveUsecase] = useState<string | null>(() => searchParams.get('use'));
  const [activeScenario, setActiveScenario] = useState<string | null>(() => searchParams.get('sc'));

  useEffect(() => {
    const params = new URLSearchParams();
    if (activeCategory) params.set('cat', activeCategory);
    if (activeUsecase) params.set('use', activeUsecase);
    if (activeScenario) params.set('sc', activeScenario);
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }, [activeCategory, activeUsecase, activeScenario, pathname, router]);

  const availableUsecases = useMemo(() => {
    const pool = activeCategory ? products.filter(p => p.category === activeCategory) : products;
    return Array.from(new Set(pool.map(p => p.usecase)));
  }, [activeCategory, products]);

  const availableScenarios = useMemo(() => {
    let pool = products;
    if (activeCategory) pool = pool.filter(p => p.category === activeCategory);
    if (activeUsecase) pool = pool.filter(p => p.usecase === activeUsecase);
    return Array.from(new Set(pool.flatMap(p => p.scenarios)));
  }, [activeCategory, activeUsecase, products]);

  const filtered = useMemo(() => {
    return products.filter(p => {
      if (activeCategory && p.category !== activeCategory) return false;
      if (activeUsecase && p.usecase !== activeUsecase) return false;
      if (activeScenario && !p.scenarios.includes(activeScenario)) return false;
      return true;
    });
  }, [activeCategory, activeUsecase, activeScenario, products]);

  const handleCategoryClick = (val: string) => {
    if (activeCategory === val) { setActiveCategory(null); setActiveUsecase(null); setActiveScenario(null); }
    else { setActiveCategory(val); setActiveUsecase(null); setActiveScenario(null); }
  };

  const handleUsecaseClick = (val: string) => {
    if (activeUsecase === val) { setActiveUsecase(null); setActiveScenario(null); }
    else { setActiveUsecase(val); setActiveScenario(null); }
  };

  const clearAll = () => { setActiveCategory(null); setActiveUsecase(null); setActiveScenario(null); };
  const hasFilter = activeCategory || activeUsecase || activeScenario;

  return (
    <div className="products-page">
      <div className="page-hero">
        <div className="container">
          <p className="hero-label">{t('hero_label')}</p>
          <h1 className="page-title">{t('hero_title')}</h1>
          <p className="page-subtitle">{t('hero_subtitle')}</p>
        </div>
      </div>
      <div className="container">
        <div className="products-wrapper">
        <div className="filters">
          {activeCategory && availableUsecases.length > 0 && (
            <div className="filter-row sub">
              <span className="filter-label">{t('filter_usecase')}</span>
              <div className="filter-group">
                {availableUsecases.map(u => (
                  <button key={u} className={`filter-btn ${activeUsecase === u ? 'active' : ''}`} onClick={() => handleUsecaseClick(u)}>
                    {usecaseLabels[u] || u}
                  </button>
                ))}
              </div>
            </div>
          )}
          {activeUsecase && availableScenarios.length > 1 && (
            <div className="filter-row sub">
              <span className="filter-label">{t('filter_scenario')}</span>
              <div className="filter-group">
                {availableScenarios.map(s => (
                  <button key={s} className={`filter-btn ${activeScenario === s ? 'active' : ''}`} onClick={() => setActiveScenario(activeScenario === s ? null : s)}>
                    {scenarioLabels[s] || s}
                  </button>
                ))}
              </div>
            </div>
          )}
          <div className="results-bar">
            <span className="results-count">{t('results_count', { count: filtered.length })}</span>
            {hasFilter && <button className="clear-btn" onClick={clearAll}>{t('clear_filters')}</button>}
          </div>

          {filtered.length > 0 ? (
            <div className="products-grid">
              {filtered.map((product) => (
                <ProductCard key={product.id} id={product.id} name={(() => { try { return pl(`${product.id}.name` as any); } catch { return product.name; } })()} description={(() => { try { return pl(`${product.id}.desc` as any); } catch { return product.description; } })()} image={product.image_url} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <p>{t('no_products')}</p>
              <button onClick={clearAll}>{t('clear')}</button>
            </div>
          )}
        </div>
        </div>
      </div>

      <style jsx>{`
        .products-page { background: #f8fafc; min-height: 100vh; padding-bottom: 80px; }
        .container { max-width: 1280px; margin: 0 auto; padding: 0 24px; }
        .page-hero { background: #f8fafc; padding: 56px 0 48px; text-align: center; border-bottom: 1px solid #e8edf5; margin-bottom: 40px; }
        .hero-label { font-size: 12px; font-weight: 600; letter-spacing: 0.15em; color: #94a3b8; margin-bottom: 12px; }
        .page-title { font-size: 42px; font-weight: 800; color: #0f172a; letter-spacing: -0.02em; margin-bottom: 12px; }
        .page-subtitle { font-size: 15px; color: #64748b; max-width: 480px; margin: 0 auto; line-height: 1.7; }
        .products-wrapper { background: white; border-radius: 16px; border: 1px solid #e8edf5; margin-bottom: 24px; overflow: hidden; }
        .filters { padding: 20px 24px; display: flex; flex-direction: column; gap: 14px; border-bottom: 1px solid #e8edf5; }
        .filter-row { display: flex; align-items: center; gap: 16px; }
        .filter-row.sub { padding-left: 12px; border-left: 2px solid #e8edf5; margin-left: 4px; }
        .filter-label { font-size: 12px; font-weight: 600; color: #94a3b8; width: 36px; flex-shrink: 0; }
        .filter-group { display: flex; gap: 8px; flex-wrap: wrap; }
        .filter-btn { padding: 7px 18px; border-radius: 40px; border: 1.5px solid #e2e8f0; background: white; font-size: 13px; font-weight: 500; color: #64748b; cursor: pointer; transition: all 0.2s; }
        .filter-btn:hover { border-color: #94a3b8; color: #0f172a; }
        .filter-btn.active { background: #e2e8f0; border-color: #e2e8f0; color: #0f172a; font-weight: 600; }
        .results-bar { display: flex; align-items: center; gap: 16px; padding: 16px 24px 0; }
        .results-count { font-size: 13px; color: #94a3b8; }
        .results-count strong { color: #1f2937; }
        .clear-btn { font-size: 12px; color: #94a3b8; background: none; border: 1px solid #e2e8f0; border-radius: 40px; padding: 4px 12px; cursor: pointer; transition: all 0.2s; }
        .clear-btn:hover { color: #ef4444; border-color: #ef4444; }
        .products-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; padding: 20px; }
        .empty { text-align: center; padding: 80px 24px; color: #94a3b8; }
        .empty button { margin-top: 16px; padding: 10px 24px; border-radius: 40px; border: 1.5px solid #e2e8f0; background: white; color: #0f172a; font-size: 14px; cursor: pointer; }
        @media (max-width: 768px) {
          .products-page { padding: 24px 0 60px; }
          .page-title { font-size: 32px; }
          .hero-stats { gap: 32px; }
          .stat-number { font-size: 22px; }
          .products-grid { gap: 16px; grid-template-columns: 1fr; }
          .filter-row { flex-direction: column; align-items: flex-start; gap: 8px; }
        }
      `}</style>
      <FloatingButton />
    </div>
  );
}
