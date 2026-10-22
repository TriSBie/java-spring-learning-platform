import type { Metadata } from 'next';
import Link from 'next/link';
import Mermaid from '@/components/Mermaid';
import { MODULES, SAMPLE_LESSON, TRACKS, UPDATED_DATE, VERSION_PINS, firstLessonOfLevel, firstLessonOfModule, totalPlannedLessons } from '@/lib/modules';

export const metadata: Metadata = {
  title: { absolute: 'Java / Spring Learning Platform — Học Java 21 & Spring Boot 3 cho dev nội bộ' },
  description:
    'Nền tảng học Java 21 và Spring Boot 3 cho dev nội bộ: 3 track, 12 module, case study Nova Loyalty, quiz và workbook.',
  openGraph: {
    title: 'Java / Spring Learning Platform — Trang chủ',
    description: 'Onboard và ôn luyện Java + Spring ecosystem cho đội dev Junior → Senior.',
  },
};

const NOVA_ARCHITECTURE = `flowchart LR
  Client["Client / Mobile App"] --> GW["API Gateway<br/>/v4/gs/* · /v4/os/* · /v4/ws/*"]
  GW --> GS["Gift Service"]
  GW --> OS["Order Service"]
  GW --> WS["Wallet / Points Service"]
  WS --> OB[("Outbox table")]
  OB --> DBZ["Debezium CDC"]
  DBZ --> KFK[["Kafka topic<br/>nova.points.changed"]]
  KFK --> CRM["CRM Sync Consumer<br/>(idempotent, draining 75s)"]
  CRM --> CRMSYS["CRM System"]
  GS --> DS[("5 HikariCP datasources<br/>core · gift · report · legacy · audit<br/>không JTA")]
  OS --> DS
  WS --> DS`;

const levelBadgeClass = (level: string) =>
  level === 'Junior' ? 'badge badge-junior' : level === 'Middle' ? 'badge badge-middle' : 'badge badge-senior';

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-inner">
          <h1 id="hero-title">Học Java 21 &amp; Spring Boot 3 theo chuẩn production thật</h1>
          <p className="lead">
            Một lộ trình onboarding duy nhất cho cả đội — từ đọc hiểu codebase đến thiết kế service
            với outbox/Kafka, tune JVM và vận hành trên Kubernetes — học qua một case study loyalty xuyên suốt.
          </p>
          <div className="hero-ctas">
            <Link prefetch={false} href={firstLessonOfLevel('Junior')?.href ?? '/roadmap/'} className="btn btn-primary" id="cta-junior-track">
              Bắt đầu Junior track
            </Link>
            <Link prefetch={false} href="/roadmap/" className="btn btn-secondary" id="cta-roadmap">
              Xem lộ trình
            </Link>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="tracks-title">
        <div className="container">
          <h2 id="tracks-title">3 track theo cấp độ</h2>
          <p className="section-sub">
            Mỗi track kết thúc bằng một kết quả đo được, không phải cảm giác &quot;đã đọc xong&quot;.
            Tổng chương trình: {totalPlannedLessons()} bài trong 12 module.
          </p>
          <div className="card-grid">
            {TRACKS.map((track) => (
              <article key={track.level} className="card" aria-labelledby={`track-${track.level}`}>
                <span className={levelBadgeClass(track.level)}>{track.level}</span>
                <h3 id={`track-${track.level}`}>{track.title}</h3>
                <p>{track.description}</p>
                <p>
                  <strong>Kết quả:</strong> {track.outcome}
                </p>
                <Link prefetch={false} href="/roadmap/" id={`track-link-${track.level}`} aria-label={`Xem trong lộ trình — ${track.title}`}>
                  Xem trong lộ trình →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="modules-title">
        <div className="container">
          <h2 id="modules-title">12 module theo thứ tự cố định</h2>
          <p className="section-sub">
            Cả 12 module đã có bài học đầy đủ theo đúng template: mục tiêu, code compile được,
            sai lầm thường gặp, checklist, workbook và quiz.
          </p>
          <div className="module-grid">
            {MODULES.map((m) => (
              <article key={m.id} className="module-card" aria-labelledby={`module-card-${m.id}`}>
                <span className="module-code">Module {m.code}</span>
                <h3 id={`module-card-${m.id}`}>{m.name}</h3>
                <p>{m.plannedLessons} bài · Cấp độ: {m.levels.join(', ')}</p>
                <p>{m.focus}</p>
                {firstLessonOfModule(m.id) ? (
                  <Link prefetch={false} href={firstLessonOfModule(m.id)!.href} id={`module-${m.code}-first-link`}>
                    Bắt đầu: {firstLessonOfModule(m.id)!.title} →
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section case-study" aria-labelledby="nova-title">
        <div className="container">
          <h2 id="nova-title">Case study xuyên suốt: Nova Loyalty</h2>
          <p className="section-sub">
            Một hệ thống loyalty giả định (đã ẩn tên khách hàng) nối mọi module lại với nhau: 5 datasource
            HikariCP không JTA, routes qua API Gateway <code>/v4/&#123;gs,os,ws&#125;/*</code>, giao dịch điểm
            có 3 nguồn ví với CAS update và idempotency key, outbox → Debezium → Kafka → consumer đồng bộ CRM
            có draining 75 giây khi nhận SIGTERM.
          </p>
          <Mermaid
            chart={NOVA_ARCHITECTURE}
            label="Sơ đồ kiến trúc Nova Loyalty: API Gateway định tuyến /v4/{gs,os,ws}/* tới 3 nhóm service, dùng chung 5 datasource HikariCP không JTA; sự kiện điểm đi qua Outbox, Debezium, Kafka tới CRM Sync Consumer."
          />
          <p>
            Xem pattern này được mổ xẻ đầy đủ trong bài:{' '}
            <Link prefetch={false} href={SAMPLE_LESSON.href} id="nova-sample-link">
              {SAMPLE_LESSON.title} (Module 06, {SAMPLE_LESSON.level}, ~{SAMPLE_LESSON.durationMin} phút)
            </Link>
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="library-title">
        <div className="container">
          <h2 id="library-title">Thư viện tra cứu &amp; xử lý sự cố</h2>
          <p className="section-sub">
            Ngoài 62 bài học: glossary tra thuật ngữ theo ngữ cảnh Nova Loyalty, cheat sheets in ra để
            cạnh bàn phím, và incident library mổ xẻ các sự cố production điển hình theo đúng quy trình
            triệu chứng → điều tra → root cause → fix → phòng ngừa.
          </p>
          <div className="card-grid">
            <article className="card" aria-labelledby="library-glossary">
              <h3 id="library-glossary">Glossary — Thuật ngữ</h3>
              <p>
                Hơn 90 thuật ngữ Anh → giải thích Việt cho cả 12 module: từ bean, N+1, SNAT đến
                idempotency key và draining. Mỗi thuật ngữ trỏ về bài học liên quan nhất.
              </p>
              <Link prefetch={false} href="/glossary/" id="library-glossary-link" aria-label="Tra thuật ngữ trong Glossary">
                Tra thuật ngữ →
              </Link>
            </article>
            <article className="card" aria-labelledby="library-cheat-sheets">
              <h3 id="library-cheat-sheets">Cheat Sheets — Tra cứu nhanh</h3>
              <p>
                5 tờ tra cứu in được trên một trang: Spring Annotations, JVM Flags, kubectl,
                Kafka CLI và Maven — đúng version đang ghim cho toàn bộ nội dung.
              </p>
              <Link prefetch={false} href="/cheat-sheets/" id="library-cheat-sheets-link" aria-label="Xem cheat sheets — danh sách 5 cheat sheets">
                Xem cheat sheets →
              </Link>
            </article>
            <article className="card" aria-labelledby="library-incidents">
              <h3 id="library-incidents">Incident Library — Sự cố thật</h3>
              <p>
                9 case sự cố production: N+1 làm sập DB, HikariCP pool exhausted, JWT clock skew,
                rebalance storm, OOMKilled, SNAT mất client IP, Flyway checksum mismatch,
                circuit breaker mở nhầm và poison pill vào DLQ.
              </p>
              <Link prefetch={false} href="/incidents/" id="library-incidents-link" aria-label="Xem sự cố trong Incident Library">
                Xem sự cố →
              </Link>
            </article>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <p>
            <strong>Version pins:</strong>
          </p>
          <div className="version-pins" aria-label="Các version được ghim cho toàn bộ nội dung">
            {VERSION_PINS.map((pin) => (
              <span key={pin.label}>{pin.label} {pin.value}</span>
            ))}
          </div>
          <p>Cập nhật lần cuối: {UPDATED_DATE} · Đủ 62 bài cho 12 module.</p>
        </div>
      </footer>
    </>
  );
}
