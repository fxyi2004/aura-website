'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-inner">
          <Link href="/" className="logo">
            <img
              src="/images/logo/aura-logo-slogan.png"
              alt="AURA"
              className="logo-image"
            />
          </Link>

          <nav className="nav">
            <Link href="/" className="nav-link">{t('home')}</Link>
            <Link href="/scenarios" className="nav-link">{t('scenarios')}</Link>
            <Link href="/products" className="nav-link">{t('products')}</Link>
            <Link href="/cases" className="nav-link">{t('cases')}</Link>
            <Link href="/about" className="nav-link">{t('about')}</Link>
            <Link href="/contact" className="nav-link contact-link">{t('contact')}</Link>
          </nav>

          <div className="locale-switcher">
            <button
              className={`locale-btn ${locale === 'en' ? 'active' : ''}`}
              onClick={() => switchLocale('en')}
            >EN</button>
            <span className="locale-sep">|</span>
            <button
              className={`locale-btn ${locale === 'zh' ? 'active' : ''}`}
              onClick={() => switchLocale('zh')}
            >中文</button>
            <span className="locale-sep">|</span>
            <button
              className={`locale-btn ${locale === 'es' ? 'active' : ''}`}
              onClick={() => switchLocale('es')}
            >ES</button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .header {
          position: sticky;
          top: 0;
          padding: 15.5px 0;
          z-index: 100;
          background: white;
          transition: all 0.3s ease;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }
        .header.scrolled {
          background: rgba(255, 255, 255, 0.99);
          backdrop-filter: blur(10px);
        }
        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .header-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 85px;
        }
        .logo-image {
          height: 92px;
          width: auto;
        }
        .nav {
          display: flex;
          gap: 40px;
          align-items: center;
        }
        .nav-link {
          font-size: 16px;
          font-weight: 500;
          color: #334155;
          text-decoration: none;
          transition: color 0.2s;
        }
        .nav-link:hover {
          color: #2563eb;
        }
        .contact-link {
          background: #1e3a8a;
          color: white;
          padding: 7px 18px;
          border-radius: 40px;
          font-size: 14px;
        }
        .contact-link:hover {
          background: #2563eb;
          color: white;
        }
        .locale-switcher {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-left: 16px;
        }
        .locale-btn {
          background: none;
          border: none;
          font-size: 13px;
          font-weight: 500;
          color: #94a3b8;
          cursor: pointer;
          padding: 4px 6px;
          border-radius: 4px;
          transition: color 0.2s;
        }
        .locale-btn:hover {
          color: #2563eb;
        }
        .locale-btn.active {
          color: #1e3a8a;
          font-weight: 700;
        }
        .locale-sep {
          color: #e2e8f0;
          font-size: 12px;
        }
        @media (max-width: 768px) {
          .nav {
            display: none;
          }
          .logo-image {
            height: 65px;
          }
          .header-inner {
            height: 70px;
          }
        }
      `}</style>
    </header>
  );
}