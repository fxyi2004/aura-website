'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { scenarios } from '@/app/data/scenarios';

interface AssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Assistant({ isOpen, onClose }: AssistantProps) {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [selectedScenario, setSelectedScenario] = useState<string>('');

  if (!isOpen) return null;

  const handleScenarioSelect = (scenarioId: string) => {
    setSelectedScenario(scenarioId);
    setStep(1);
    setTimeout(() => {
      onClose();
      setStep(0);
      router.push(`/scenarios/${scenarioId}`);
    }, 1000);
  };

  return (
    <>
      <div className="overlay" onClick={onClose} />
      <div className="modal">
        <div className="modal-header">
          <span>🤖</span>
          <h3>AI 智能选型</h3>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          {step === 0 ? (
            <>
              <p className="question">您主要关注哪个行业场景？</p>
              <div className="options">
                {scenarios.map(s => (
                  <button key={s.id} className="option-btn" onClick={() => handleScenarioSelect(s.id)}>
                    {s.icon} {s.name}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="result">
              <div className="result-icon">🎉</div>
              <p>正在为您匹配最合适的方案...</p>
              <div className="loading">请稍候</div>
            </div>
          )}
        </div>
        {step === 0 && (
          <div className="modal-footer">
            <button className="skip-btn" onClick={onClose}>跳过，直接联系 →</button>
          </div>
        )}
      </div>

      <style jsx>{`
        .overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          z-index: 200;
        }
        .modal {
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
        .modal-header {
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          color: white;
          padding: 16px 20px;
          display: flex;
          gap: 12px;
          align-items: center;
        }
        .modal-header h3 {
          flex: 1;
          margin: 0;
        }
        .close-btn {
          background: rgba(255,255,255,0.2);
          border: none;
          color: white;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          font-size: 20px;
          cursor: pointer;
        }
        .modal-body {
          padding: 32px 24px;
          text-align: center;
        }
        .question {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 24px;
        }
        .options {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
        }
        .option-btn {
          background: #f3f4f6;
          border: 1px solid #e5e7eb;
          padding: 10px 20px;
          border-radius: 40px;
          cursor: pointer;
          font-size: 14px;
        }
        .result-icon {
          font-size: 48px;
          margin-bottom: 16px;
        }
        .loading {
          margin-top: 16px;
          color: #6b7280;
        }
        .modal-footer {
          padding: 0 24px 24px;
          text-align: center;
        }
        .skip-btn {
          background: none;
          border: none;
          color: #9ca3af;
          cursor: pointer;
          font-size: 13px;
        }
      `}</style>
    </>
  );
}