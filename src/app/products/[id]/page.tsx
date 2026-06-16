'use client';

import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getProductById, getAllProducts } from '@/lib/products';
import type { Product } from '@/lib/products';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

interface Props {
  params: { id: string };
}

export default function ProductDetailPage({ params }: Props) {
  const [product, setProduct] = useState<Product | null>(null);
  const [related, setRelated] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const nav = useTranslations('nav');
  const pd = useTranslations('product_detail');
  const pl = useTranslations('products_list');

  useEffect(() => {
    const { id } = params;
    (async () => {
      const [p, all] = await Promise.all([getProductById(id), getAllProducts()]);
      if (!p) { setLoading(false); return; }
      setProduct(p);
      setRelated(
        all.filter(x => x.id !== p.id && x.category !== p.category && x.scenarios.some(s => p.scenarios.includes(s))).slice(0, 3)
      );
      setLoading(false);
    })();
  }, [params.id]);

  const getProductName = (p: Product) => {
    try { return pl(p.id + '.name' as any); } catch { return p.name; }
  };
  const getProductDesc = (p: Product) => {
    try { return pl(p.id + '.desc' as any); } catch { return p.description; }
  };

  const getSpecExplanation = (key: string): string => {
    if (key.includes('续航') || key.toLowerCase().includes('flight') || key.toLowerCase().includes('endurance')) return pd('spec_flight');
    if (key.includes('图传') || key.toLowerCase().includes('transmission')) return pd('spec_transmission');
    if (key.includes('载重') || key.toLowerCase().includes('payload')) return pd('spec_payload');
    if (key.includes('导航') || key.toLowerCase().includes('navigation')) return pd('spec_navigation');
    return pd('spec_default');
  };

  if (loading) return <div style={{minHeight:'100vh',background:'#f8fafc',display:'flex',alignItems:'center',justifyContent:'center',color:'#94a3b8',fontSize:'14px'}}>{pd('loading')}</div>;
  if (!product) return notFound();

  return (
    <div className="detail-page">
      <div className="container">
        <div className="breadcrumb">
          <Link href="/">{nav('home')}</Link>
          <span>/</span>
          <Link href="/products">{nav('products')}</Link>
          <span>/</span>
          <span>{getProductName(product)}</span>
        </div>

        <div className="main-grid">
          <div className="image-col">
            <div className="image-wrap">
              <img src={product.image_url} alt={getProductName(product)} className="product-img" />
            </div>
          </div>

          <div className="info-col">
            <p className="product-category">{product.category?.toUpperCase()}</p>
            <h1 className="product-title">{getProductName(product)}</h1>
            <p className="product-desc">{getProductDesc(product)}</p>
            <p className="product-full">{product.full_description}</p>

            <div className="specs">
              <h3 className="specs-title">{pd('tech_specs')}</h3>
              <div className="specs-list">
                {product.specs.map(({ spec_key, spec_value }) => (
                  <div className="spec-row" key={spec_key}>
                    <span className="spec-key">
                      {spec_key}
                      <Link href={('/specs/' + encodeURIComponent(spec_key) + '?value=' + encodeURIComponent(spec_value) + '&explanation=' + encodeURIComponent(getSpecExplanation(spec_key))) as any} className="spec-link">›</Link>
                    </span>
                    <span className="spec-value">{spec_value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="actions">
              <Link href="/contact" className="btn-primary" style={{background:'#1e3a8a',color:'white',padding:'9px 20px',borderRadius:'40px',fontWeight:600,fontSize:'13px',textAlign:'center',flex:1,display:'block'}}>{pd('get_quote')}</Link>
              <a href="https://wa.me/8615001168605" target="_blank" rel="noopener noreferrer" className="btn-wa">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.522 5.852L.057 23.743a.5.5 0 00.613.633l6.094-1.598A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.93 0-3.74-.52-5.29-1.428l-.38-.224-3.924 1.03 1.048-3.817-.248-.394A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                {pd('whatsapp')}
              </a>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="related">
            <h3 className="related-title">{pd('related')}</h3>
            <div className="related-grid">
              {related.map(p => (
                <Link href={('/products/' + p.id) as any} key={p.id} className="related-card">
                  <div className="related-img-wrap">
                    <img src={p.image_url} alt={getProductName(p)} className="related-img" />
                  </div>
                  <div className="related-info">
                    <p className="related-name">{getProductName(p)}</p>
                    <p className="related-desc">{getProductDesc(p)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .detail-page { padding: 32px 0 80px; background: #f8fafc; min-height: 100vh; }
        .container { max-width: 1280px; margin: 0 auto; padding: 0 24px; }
        .breadcrumb { display: flex; align-items: center; gap: 8px; font-size: 13px; color: #94a3b8; margin-bottom: 32px; }
        .breadcrumb :global(a) { color: #94a3b8; text-decoration: none; transition: color 0.2s; }
        .breadcrumb :global(a:hover) { color: #1e3a8a; }
        .main-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; background: white; border-radius: 24px; padding: 48px; margin-bottom: 48px; border: 1px solid #e8edf5; }
        .image-wrap { background: #0f172a; border-radius: 16px; overflow: hidden; aspect-ratio: 16 / 9; }
        .product-img { width: 100%; height: 100%; object-fit: cover; }
        .info-col { display: flex; flex-direction: column; }
        .product-category { font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: #94a3b8; margin-bottom: 8px; }
        .product-title { font-size: 26px; font-weight: 800; color: #0f172a; line-height: 1.3; margin-bottom: 8px; letter-spacing: -0.02em; }
        .product-desc { font-size: 14px; color: #64748b; margin-bottom: 12px; }
        .product-full { font-size: 14px; color: #64748b; line-height: 1.8; margin-bottom: 32px; }
        .specs { margin-bottom: 32px; }
        .specs-title { font-size: 13px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #94a3b8; margin-bottom: 16px; }
        .specs-list { display: flex; flex-direction: column; }
        .spec-row { display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-bottom: 1px solid #f1f5f9; }
        .spec-key { font-size: 14px; font-weight: 500; color: #374151; display: flex; align-items: center; gap: 6px; }
        .spec-link { font-size: 16px; color: #cbd5e1; text-decoration: none; transition: color 0.2s; line-height: 1; }
        .spec-link:hover { color: #1e3a8a; }
        .spec-value { font-size: 14px; color: #64748b; text-align: right; }
        .actions { display: flex; gap: 12px; margin-top: auto; }
        .btn-wa { flex: 1; background: #25d366; color: white; padding: 9px 20px; border-radius: 40px; text-decoration: none; font-weight: 600; font-size: 13px; text-align: center; display: flex; align-items: center; justify-content: center; gap: 8px; transition: background 0.2s; }
        .btn-wa:hover { background: #1da851; }
        .related-title { font-size: 18px; font-weight: 700; color: #0f172a; margin-bottom: 20px; }
        .related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .related-card { text-decoration: none; background: white; border-radius: 16px; overflow: hidden; border: 1px solid #e8edf5; transition: transform 0.2s, box-shadow 0.2s; }
        .related-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,0.07); }
        .related-img-wrap { background: #0f172a; aspect-ratio: 16 / 9; overflow: hidden; }
        .related-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; }
        .related-card:hover .related-img { transform: scale(1.04); }
        .related-info { padding: 14px 16px; }
        .related-name { font-size: 14px; font-weight: 700; color: #0f172a; margin-bottom: 4px; }
        .related-desc { font-size: 12px; color: #94a3b8; }
        @media (max-width: 768px) {
          .main-grid { grid-template-columns: 1fr; gap: 32px; padding: 24px; }
          .related-grid { grid-template-columns: 1fr; }
          .actions { flex-direction: column; }
        }
      `}</style>
    </div>
  );
}
