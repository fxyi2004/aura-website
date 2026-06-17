'use client';

import Image from 'next/image';
import Link from 'next/link';

interface ScenarioCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  color: string;
  viewText?: string;
}

export default function ScenarioCard({ id, name, description, image, color, viewText = '查看方案 →' }: ScenarioCardProps) {
  return (
    <Link href={`/scenarios/${id}`} className="scenario-card">
      <div className="card-image-wrapper">
        <Image src={image} alt={name} fill className="card-image" sizes="(max-width: 768px) 100vw, 25vw" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{name}</h3>
        <p className="card-description">{description}</p>
        <span className="card-arrow">{viewText}</span>
      </div>

      <style jsx global>{`
        .scenario-card {
          display: block;
          background: white;
          border-radius: 5px;
          overflow: hidden;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 1px solid rgba(0, 0, 0, 0.06);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
        }
        .scenario-card:hover {
          transform: translateY(-12px);
          transition: all 0.3s ease;
          box-shadow: 0 20px 32px -12px rgba(0, 0, 0, 0.12);
        }
        .card-image-wrapper {
          position: relative;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: #f1f5f9;
        }
        .card-image {
          object-fit: cover;
          transition: transform 0.3s;
        }
        .scenario-card:hover .card-image {
          /*transform: scale(1.05);*/
        }
        .card-content {
          padding: 16px 16px 20px;
        }
        .card-title {
          font-size: 18px;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 8px;
        }
        .card-description {
          font-size: 13px;
          color: #64748b;
          line-height: 1.5;
          margin-bottom: 16px;
        }
        .card-arrow {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 500;
          color: #1c49c4;
        }
      `}</style>
    </Link>
  );
}