"use client";
import { useState } from 'react';
import Assistant from "../components/Assistant";

export default function SelectorPage() {
  const [assistantOpen, setAssistantOpen] = useState(true);

  return (
    <section className="selector-page">
      <div className="container">
        <div className="page-header">
          <h1>智能选型助手</h1>
          <p>让AI帮你找到最适合的解决方案</p>
        </div>
        <Assistant isOpen={assistantOpen} onClose={() => setAssistantOpen(false)} />
      </div>

      <style jsx>{`
        .selector-page {
          padding: 50px 0 80px;
          background: #f8fafc;
          min-height: calc(100vh - 200px);
        }
        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .page-header {
          text-align: center;
          margin-bottom: 48px;
        }
        .page-header h1 {
          font-size: 36px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 12px;
        }
        .page-header p {
          font-size: 16px;
          color: #6b7280;
        }
      `}</style>
    </section>
  );
}