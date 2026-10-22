import type { Metadata } from 'next';
import Link from 'next/link';
import { ALL_LESSONS, TRACKS } from '@/lib/modules';

export const metadata: Metadata = {
  title: 'Lộ trình học',
  description:
    'Lộ trình 3 track Junior / Middle / Senior qua 12 module Java & Spring, kèm thứ tự bài và thời lượng ước tính.',
  openGraph: { title: 'Lộ trình học | Java / Spring Learning Platform' },
};

const levelBadgeClass = (level: string) =>
  level === 'Junior' ? 'badge badge-junior' : level === 'Middle' ? 'badge badge-middle' : 'badge badge-senior';

export default function RoadmapPage() {
  return (
    <div className="container section">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol>
          <li><Link href="/" id="crumb-home-roadmap">Trang chủ</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">Lộ trình</li>
        </ol>
      </nav>

      <h1>Lộ trình học — 3 track</h1>
      <p className="section-sub">
        Thứ tự module 01 → 12 là cố định. Mỗi track gồm các bài đúng cấp độ của track đó, xếp theo
        thứ tự đọc (module tăng dần, trong module theo thứ tự bài). Tổng chương trình:{' '}
        {ALL_LESSONS.length} bài · khoảng {Math.round(ALL_LESSONS.reduce((s, l) => s + l.durationMin, 0) / 60)} giờ học.
      </p>

      {TRACKS.map((track) => {
        const lessons = ALL_LESSONS.filter((l) => l.level === track.level);
        const totalMin = lessons.reduce((s, l) => s + l.durationMin, 0);
        return (
          <section key={track.level} className="track-section" aria-labelledby={`roadmap-track-${track.level}`}>
            <h2 id={`roadmap-track-${track.level}`}>
              <span className={levelBadgeClass(track.level)}>{track.level}</span> {track.title}
            </h2>
            <p>{track.description}</p>
            <p>
              <strong>Kết quả đầu ra:</strong> {track.outcome}
            </p>
            <p>
              Quy mô: {lessons.length} bài · ~{totalMin} phút (khoảng {Math.round(totalMin / 60)} giờ).
            </p>
            <ol>
              {lessons.map((l) => (
                <li key={l.id}>
                  <Link href={l.href} id={`roadmap-lesson-${l.id}`}>
                    Module {String(l.moduleId).padStart(2, '0')} — {l.title}
                  </Link>{' '}
                  · ~{l.durationMin} phút
                </li>
              ))}
            </ol>
          </section>
        );
      })}
    </div>
  );
}
