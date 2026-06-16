'use client';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="tagline">AIR · GROUND · WATER &nbsp;&nbsp; SMART SYSTEMS. REAL IMPACT.</p>
        <p className="copyright">© {new Date().getFullYear()} AURA INTELLIGENT SYSTEMS</p>
      </div>

      <style jsx>{`
        .footer {
          background: #0f172a;
          padding: 36px 0 28px;
          text-align: center;
        }
        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }
        .footer-middle {
          display: flex;
          align-items: center;
          gap: 24px;
          margin-bottom: 8px;
        }
        .tagline {
          color: #475569;
          font-size: 12px;
          margin: 0;
        }
        .copyright {
          color: #334155;
          font-size: 11px;
          margin: 0;
        }
      `}</style>
    </footer>
  );
}
