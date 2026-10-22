import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PrintButton from '@/components/PrintButton';
import { CHEAT_SHEETS, getCheatSheet } from '@/lib/cheatsheets';
import { ALL_LESSONS } from '@/lib/modules';

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return CHEAT_SHEETS.map((sheet) => ({ slug: sheet.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const sheet = getCheatSheet(params.slug);
  if (!sheet) {
    return { title: 'Không tìm thấy cheat sheet' };
  }
  return {
    title: sheet.title,
    description: sheet.description,
    openGraph: { title: `${sheet.title} | Java / Spring Learning Platform` },
  };
}

const tableStyles = `
.cs-table-wrap { overflow-x: auto; margin: var(--space-4) 0 var(--space-8); }
.cs-table { width: 100%; border-collapse: collapse; min-width: 560px; }
.cs-table th, .cs-table td { text-align: left; vertical-align: top; padding: var(--space-3); border-bottom: 1px solid var(--border); }
.cs-table thead th { color: var(--text-muted); font-size: 0.9rem; }
.cs-table td code { font-family: var(--font-mono); font-size: 0.92em; overflow-wrap: anywhere; }
.cs-item-col { width: 42%; }
@media print {
  .cs-table { min-width: 0; }
  .cs-table td code { overflow-wrap: break-word; }
}
`;

export default function CheatSheetPage({ params }: PageProps) {
  const sheet = getCheatSheet(params.slug);
  if (!sheet) {
    notFound();
  }

  const relatedLessons = sheet.lessonHrefs
    .map((href) => ALL_LESSONS.find((lesson) => lesson.href === href))
    .filter((lesson): lesson is (typeof ALL_LESSONS)[number] => Boolean(lesson));

  return (
    <div className="container section">
      <style>{tableStyles}</style>
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol>
          <li>
            <Link href="/" id={`crumb-home-cs-${sheet.slug}`}>
              Trang chủ
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/cheat-sheets/" id={`crumb-list-cs-${sheet.slug}`}>
              Cheat Sheets
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">{sheet.title}</li>
        </ol>
      </nav>

      <h1>{sheet.title}</h1>
      <p className="section-sub">{sheet.description}</p>
      <p>
        <span className="badge">Module {String(sheet.moduleId).padStart(2, '0')}</span>{' '}
        <PrintButton id={`print-cheatsheet-${sheet.slug}`} />
      </p>

      {sheet.sections.map((section) => (
        <section key={section.heading} aria-label={section.heading}>
          <h2>{section.heading}</h2>
          <div className="cs-table-wrap">
            <table className="cs-table" aria-label={section.heading}>
              <caption className="sr-only">{section.heading}</caption>
              <thead>
                <tr>
                  <th scope="col" className="cs-item-col">
                    Mục
                  </th>
                  <th scope="col">Ý nghĩa &amp; cách dùng</th>
                </tr>
              </thead>
              <tbody>
                {section.rows.map((row) => (
                  <tr key={row.item}>
                    <td>
                      <code>{row.item}</code>
                    </td>
                    <td>{row.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}

      <section aria-labelledby={`related-lessons-${sheet.slug}`}>
        <h2 id={`related-lessons-${sheet.slug}`}>Bài học liên quan</h2>
        <ul>
          {relatedLessons.map((lesson) => (
            <li key={lesson.id}>
              <Link href={lesson.href} id={`cs-${sheet.slug}-lesson-${lesson.id}`}>
                Module {String(lesson.moduleId).padStart(2, '0')} — {lesson.title}
              </Link>{' '}
              · ~{lesson.durationMin} phút
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
