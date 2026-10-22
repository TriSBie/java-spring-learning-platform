import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { INCIDENTS, getIncident } from '@/lib/incidents';
import { ALL_LESSONS } from '@/lib/modules';

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return INCIDENTS.map((incident) => ({ slug: incident.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const incident = getIncident(params.slug);
  if (!incident) return { title: 'Không tìm thấy sự cố' };
  return {
    title: `${incident.title} | Incident Library`,
    description: incident.summary,
    openGraph: { title: `${incident.title} | Java / Spring Learning Platform` },
  };
}

function renderInline(text: string): ReactNode {
  const parts = text.split('`');
  return parts.map((part, index) =>
    index % 2 === 1 ? <code key={index}>{part}</code> : <span key={index}>{part}</span>,
  );
}

export default function IncidentDetailPage({ params }: PageProps) {
  const incident = getIncident(params.slug);
  if (!incident) notFound();

  const relatedLessons = incident.lessonHrefs
    .map((href) => ALL_LESSONS.find((lesson) => lesson.href === href))
    .filter((lesson): lesson is (typeof ALL_LESSONS)[number] => Boolean(lesson));

  return (
    <div className="container section">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol>
          <li>
            <Link href="/" id={`crumb-home-incident-${incident.slug}`}>
              Trang chủ
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/incidents/" id={`crumb-incidents-${incident.slug}`}>
              Incident Library
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">{incident.title}</li>
        </ol>
      </nav>

      <h1>{incident.title}</h1>
      <p className="section-sub">{renderInline(incident.summary)}</p>
      <p>
        {incident.moduleIds.map((moduleId) => (
          <span key={moduleId} className="badge badge-middle">
            Module {String(moduleId).padStart(2, '0')}
          </span>
        ))}
      </p>

      <section aria-labelledby={`nova-context-${incident.slug}`}>
        <h2 id={`nova-context-${incident.slug}`}>Bối cảnh Nova Loyalty</h2>
        <p>{renderInline(incident.novaContext)}</p>
      </section>

      <section aria-labelledby={`symptoms-${incident.slug}`}>
        <h2 id={`symptoms-${incident.slug}`}>Triệu chứng</h2>
        <ul>
          {incident.symptoms.map((item, index) => (
            <li key={index}>{renderInline(item)}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby={`investigation-${incident.slug}`}>
        <h2 id={`investigation-${incident.slug}`}>Điều tra</h2>
        <ol>
          {incident.investigation.map((item, index) => (
            <li key={index}>{renderInline(item)}</li>
          ))}
        </ol>
      </section>

      <section aria-labelledby={`root-cause-${incident.slug}`}>
        <h2 id={`root-cause-${incident.slug}`}>Root cause</h2>
        <p>{renderInline(incident.rootCause)}</p>
      </section>

      <section aria-labelledby={`fix-${incident.slug}`}>
        <h2 id={`fix-${incident.slug}`}>Fix</h2>
        <ul>
          {incident.fix.map((item, index) => (
            <li key={index}>{renderInline(item)}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby={`prevention-${incident.slug}`}>
        <h2 id={`prevention-${incident.slug}`}>Phòng ngừa</h2>
        <ul>
          {incident.prevention.map((item, index) => (
            <li key={index}>{renderInline(item)}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby={`related-${incident.slug}`}>
        <h2 id={`related-${incident.slug}`}>Bài học liên quan</h2>
        <ul>
          {relatedLessons.map((lesson) => (
            <li key={lesson.id}>
              <Link
                href={lesson.href}
                id={`incident-lesson-${incident.slug}-${lesson.id}`}
              >
                Module {String(lesson.moduleId).padStart(2, '0')} — {lesson.title}
              </Link>
            </li>
          ))}
        </ul>
        <p>
          <Link href="/incidents/" id={`back-to-incidents-${incident.slug}`} className="btn">
            Quay lại Incident Library
          </Link>
        </p>
      </section>
    </div>
  );
}
