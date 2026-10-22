import type { Metadata } from 'next';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import { ALL_LESSONS, MODULES } from '@/lib/modules';

export const metadata: Metadata = {
  title: 'Học liệu',
  description: 'Danh sách 12 module và toàn bộ bài học Java / Spring (62 bài).',
  openGraph: { title: 'Học liệu | Java / Spring Learning Platform' },
};

const levelBadgeClass = (level: string) =>
  level === 'Junior' ? 'badge badge-junior' : level === 'Middle' ? 'badge badge-middle' : 'badge badge-senior';

export default function LearnIndexPage() {
  return (
    <div className="docs-shell">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol>
          <li><Link href="/" id="crumb-home-learn">Trang chủ</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">Học liệu</li>
        </ol>
      </nav>
      <Sidebar />
      <h1>Danh sách module và bài học</h1>
      <p>
        Học theo thứ tự module 01 → 12, hoặc theo track của bạn ở trang{' '}
        <Link href="/roadmap/" id="learn-to-roadmap">Lộ trình</Link>. Đánh dấu &quot;đã đọc&quot;, checklist
        và điểm quiz được lưu trên trình duyệt và xem lại ở trang{' '}
        <Link href="/progress/" id="learn-to-progress">Progress</Link>.
      </p>
      {MODULES.map((m) => {
        const lessons = ALL_LESSONS.filter((l) => l.moduleId === m.id);
        return (
          <section key={m.id} aria-labelledby={`learn-module-${m.id}`}>
            <h2 id={`learn-module-${m.id}`}>
              Module {m.code} — {m.name}
            </h2>
            <ul>
              {lessons.map((l) => (
                <li key={l.id}>
                  <Link href={l.href} id={`learn-lesson-${l.id}`}>{l.title}</Link>{' '}
                  <span className={levelBadgeClass(l.level)}>{l.level}</span> · ~{l.durationMin} phút
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
