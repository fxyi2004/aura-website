'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setMenuOpen(false);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="locale-row">
            <button className={`locale-btn ${locale === 'en' ? 'active' : ''}`} onClick={() => switchLocale('en')}>EN</button>
            <span className="locale-sep">|</span>
            <button className={`locale-btn ${locale === 'zh' ? 'active' : ''}`} onClick={() => switchLocale('zh')}>中文</button>
            <span className="locale-sep">|</span>
            <button className={`locale-btn ${locale === 'es' ? 'active' : ''}`} onClick={() => switchLocale('es')}>ES</button>
          </div>
          <div className="header-inner">
            <Link href="/" className="logo" onClick={closeMenu}>
              <Image src="/images/logo/aura-logo-slogan.webp" alt="AURA" width={180} height={40} className="logo-image" priority />
            </Link>

            <nav className="nav">
              <Link href="/" className="nav-link">{t('home')}</Link>
              <Link href="/scenarios" className="nav-link">{t('scenarios')}</Link>
              <Link href="/products" className="nav-link">{t('products')}</Link>
              <Link href="/cases" className="nav-link">{t('cases')}</Link>
              <Link href="/about" className="nav-link">{t('about')}</Link>
              <Link href="/contact" className="nav-link contact-link">{t('contact')}</Link>
            </nav>

            <button
              className={`hamburger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {menuOpen && <div className="mobile-overlay" onClick={closeMenu} />}
      <div className={`mobile-drawer ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-nav">
          <Link href="/" className="mobile-nav-link" onClick={closeMenu}>{t('home')}</Link>
          <Link href="/scenarios" className="mobile-nav-link" onClick={closeMenu}>{t('scenarios')}</Link>
          <Link href="/products" className="mobile-nav-link" onClick={closeMenu}>{t('products')}</Link>
          <Link href="/cases" className="mobile-nav-link" onClick={closeMenu}>{t('cases')}</Link>
          <Link href="/about" className="mobile-nav-link" onClick={closeMenu}>{t('about')}</Link>
          <Link href="/contact" className="mobile-nav-link mobile-contact-link" onClick={closeMenu}>{t('contact')}</Link>
        </div>
        <div className="mobile-locale">
          <button className={`locale-btn ${locale === 'en' ? 'active' : ''}`} onClick={() => switchLocale('en')}>EN</button>
          <span className="locale-sep">|</span>
          <button className={`locale-btn ${locale === 'zh' ? 'active' : ''}`} onClick={() => switchLocale('zh')}>中文</button>
          <span className="locale-sep">|</span>
          <button className={`locale-btn ${locale === 'es' ? 'active' : ''}`} onClick={() => switchLocale('es')}>ES</button>
        </div>
      </div>

      <style jsx>{`
        .header {
          position: sticky;
          top: 0;
          padding: 15.5px 0;
          z-index: 200;
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
        .locale-row {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 4px;
          padding: 6px 0 0;
        }
        .locale-btn {
          background: none;
          border: none;
          font-size: 12px;
          font-weight: 500;
          color: #94a3b8;
          cursor: pointer;
          padding: 2px 5px;
          border-radius: 4px;
          transition: color 0.2s;
        }
        .locale-btn:hover { color: #2563eb; }
        .locale-btn.active { color: #1e3a8a; font-weight: 700; }
        .locale-sep { color: #e2e8f0; font-size: 11px; }
        .header-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 75px;
        }
        .logo-image { height: 92px; width: auto; }
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
        .nav-link:hover { color: #2563eb; }
        .contact-link {
          background: #1e3a8a;
          color: white;
          padding: 7px 18px;
          border-radius: 40px;
          font-size: 14px;
        }
        .contact-link:hover { background: #2563eb; color: white; }

        /* Hamburger */
        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 36px;
          height: 36px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          border-radius: 6px;
          transition: background 0.2s;
        }
        .hamburger:hover { background: #f1f5f9; }
        .hamburger span {
          display: block;
          height: 2px;
          background: #334155;
          border-radius: 2px;
          transition: all 0.25s ease;
          transform-origin: center;
        }
        .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* Mobile drawer */
        .mobile-overlay {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.35);
          z-index: 150;
        }
        .mobile-drawer {
          display: none;
          position: fixed;
          top: 0;
          right: 0;
          width: 75vw;
          max-width: 300px;
          height: 100dvh;
          background: white;
          z-index: 160;
          flex-direction: column;
          padding: 80px 32px 40px;
          transform: translateX(100%);
          transition: transform 0.3s ease;
          box-shadow: -4px 0 24px rgba(0,0,0,0.12);
        }
        .mobile-drawer.open { transform: translateX(0); }
        .mobile-nav {
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex: 1;
        }
        .mobile-nav-link {
          font-size: 18px;
          font-weight: 500;
          color: #0f172a;
          text-decoration: none;
          padding: 12px 0;
          border-bottom: 1px solid #f1f5f9;
          transition: color 0.2s;
        }
        .mobile-nav-link:hover { color: #2563eb; }
        .mobile-contact-link {
          margin-top: 16px;
          display: inline-block;
          background: #1e3a8a;
          color: white !important;
          padding: 12px 28px;
          border-radius: 40px;
          font-size: 15px;
          font-weight: 600;
          text-align: center;
          border: none;
        }
        .mobile-contact-link:hover { background: #2563eb; }
        .mobile-locale {
          display: flex;
          align-items: center;
          gap: 6px;
          padding-top: 24px;
        }

        @media (max-width: 768px) {
          .nav { display: none; }
          .hamburger { display: flex; }
          .mobile-overlay { display: block; }
          .mobile-drawer { display: flex; }
          .locale-row { display: none; }
          .logo-image { height: 65px; }
          .header-inner { height: 65px; }
        }
      `}</style>
    </>
  );
}