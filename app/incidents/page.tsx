import type { Metadata } from 'next';
import Link from 'next/link';
import { INCIDENTS } from '@/lib/incidents';

export const metadata: Metadata = {
  title: 'Incident Library — Thư viện sự cố',
  description:
    '9 câu chuyện sự cố production của hệ Spring Boot 3: triệu chứng, điều tra, root cause, cách fix và phòng ngừa, gắn với case study Nova Loyalty.',
  openGraph: { title: 'Incident Library | Java / Spring Learning Platform' },
};

export default function IncidentsPage() {
  return (
    <div className="container section">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol>
          <li>
            <Link href="/" id="crumb-home-incidents">
              Trang chủ
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">Incident Library</li>
        </ol>
      </nav>

      <h1>Incident Library — Thư viện sự cố</h1>
      <p className="section-sub">
        Mỗi case trong thư viện này đi qua cùng một khung: triệu chứng quan sát được, các bước điều
        tra bằng lệnh và metric thật, phân tích root cause, cách fix và biện pháp phòng ngừa. Các
        case được gắn với bối cảnh Nova Loyalty — 5 datasource HikariCP không JTA, gateway{' '}
        <code>/v4/{'{gs,os,ws}'}/*</code> và luồng Outbox → Debezium → Kafka → CRM — để người học
        thấy sự cố xảy ra trong một hệ thống cụ thể chứ không phải trong chân không. Các con số xuất
        hiện trong từng case là tham số của kịch bản được mô tả, không phải số đo benchmark.
      </p>

      <div className="card-grid">
        {INCIDENTS.map((incident) => (
          <article key={incident.slug} className="card">
            <div>
              {incident.moduleIds.map((moduleId) => (
                <span key={moduleId} className="badge badge-middle">
                  Module {String(moduleId).padStart(2, '0')}
                </span>
              ))}
            </div>
            <h3>{incident.title}</h3>
            <p>{incident.summary}</p>
            <Link
              href={`/incidents/${incident.slug}/`}
              id={`incident-card-${incident.slug}`}
              className="btn"
            >
              Đọc case
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
