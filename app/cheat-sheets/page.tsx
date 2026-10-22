import type { Metadata } from 'next';
import Link from 'next/link';
import { CHEAT_SHEETS } from '@/lib/cheatsheets';

export const metadata: Metadata = {
  title: 'Cheat Sheets — Tra cứu nhanh',
  description:
    'Năm bảng tra cứu nhanh in được cho Java & Spring: Spring annotations, JVM flags, kubectl, Kafka CLI và Maven — bám sát các version đã ghim trong chương trình học.',
  openGraph: { title: 'Cheat Sheets — Tra cứu nhanh | Java / Spring Learning Platform' },
};

export default function CheatSheetsPage() {
  return (
    <div className="container section">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol>
          <li>
            <Link href="/" id="crumb-home-cheat-sheets">
              Trang chủ
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">Cheat Sheets</li>
        </ol>
      </nav>

      <h1>Cheat Sheets — Tra cứu nhanh</h1>
      <p className="section-sub">
        Năm bảng tra cứu cô đọng những gì cần nhớ nhất của từng chủ đề: annotation của Spring, flag
        JVM trên Java 21, lệnh kubectl, công cụ dòng lệnh Kafka 3.8 và vòng đời Maven 3.9. Mỗi bảng
        đều in được để dán cạnh màn hình, và đều nối về các bài học liên quan để đọc sâu khi cần.
      </p>

      <div className="card-grid">
        {CHEAT_SHEETS.map((sheet) => {
          const rowCount = sheet.sections.reduce((sum, s) => sum + s.rows.length, 0);
          return (
            <article key={sheet.slug} className="card" aria-labelledby={`cheatsheet-title-${sheet.slug}`}>
              <span className="badge">Module {String(sheet.moduleId).padStart(2, '0')}</span>
              <h3 id={`cheatsheet-title-${sheet.slug}`}>{sheet.title}</h3>
              <p>{sheet.description}</p>
              <p>
                {sheet.sections.length} nhóm · {rowCount} mục tra cứu
              </p>
              <Link href={`/cheat-sheets/${sheet.slug}/`} id={`cheatsheet-card-${sheet.slug}`} className="btn">
                Mở cheat sheet
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}
