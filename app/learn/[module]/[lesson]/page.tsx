import type { Metadata } from 'next';
import fs from 'node:fs';
import path from 'node:path';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeHighlight from 'rehype-highlight';
import Sidebar from '@/components/Sidebar';
import Toc from '@/components/Toc';
import Mermaid from '@/components/Mermaid';
import CodePre from '@/components/CodePre';
import Quiz from '@/components/Quiz';
import Checklist from '@/components/Checklist';
import MarkRead from '@/components/MarkRead';
import { remarkCodeMeta } from '@/lib/mdx-plugins';
import { LESSONS, adjacentLessons, type LessonMeta } from '@/lib/lessons-manifest';
import { LESSON_DATA } from '@/lib/lessons-data';
import { MODULES } from '@/lib/modules';

interface PageParams {
  params: { module: string; lesson: string };
}

export function generateStaticParams() {
  return LESSONS.map((l) => ({ module: l.moduleSlug, lesson: l.slug }));
}

function findLesson(moduleSlug: string, slug: string): LessonMeta | undefined {
  return LESSONS.find((l) => l.moduleSlug === moduleSlug && l.slug === slug);
}

export function generateMetadata({ params }: PageParams): Metadata {
  const lesson = findLesson(params.module, params.lesson);
  if (!lesson) return { title: 'Không tìm thấy bài học' };
  const mod = MODULES.find((m) => m.id === lesson.moduleId);
  return {
    title: `${lesson.title} — Module ${mod?.code ?? ''}`,
    description: `Bài học ${lesson.level} (${lesson.durationMin} phút): ${lesson.title} — thuộc Module ${mod?.code} ${mod?.name ?? ''}, Java / Spring Learning Platform.`,
    openGraph: {
      title: `${lesson.title} | Java / Spring Learning Platform`,
      description: `Module ${mod?.code} — ${mod?.name ?? ''} · ${lesson.level} · ~${lesson.durationMin} phút.`,
    },
  };
}

function extractText(node: React.ReactNode): string {
  if (typeof node === 'string') return node;
  if (Array.isArray(node)) return node.map(extractText).join('');
  if (node && typeof node === 'object' && 'props' in node) {
    return extractText((node as { props: { children?: React.ReactNode } }).props.children);
  }
  return '';
}

function LessonBlockquote(props: { children?: React.ReactNode }) {
  const text = extractText(props.children);
  if (text.includes('[!WARNING]')) {
    const cleaned = text.replace('[!WARNING]', '').trim();
    return (
      <div className="callout-warning" role="note" aria-label="Cảnh báo cần kiểm chứng">
        <strong>Cần verify</strong>
        <p>{cleaned}</p>
      </div>
    );
  }
  return <blockquote>{props.children}</blockquote>;
}

const levelBadgeClass = (level: string) =>
  level === 'Junior' ? 'badge badge-junior' : level === 'Middle' ? 'badge badge-middle' : 'badge badge-senior';

export default function LessonPage({ params }: PageParams) {
  const lesson = findLesson(params.module, params.lesson);
  if (!lesson) notFound();
  const mod = MODULES.find((m) => m.id === lesson.moduleId);
  const sidecar = LESSON_DATA[lesson.id] ?? { checklist: [], quiz: [] };
  const { prev, next } = adjacentLessons(lesson.id);

  const filePath = path.join(process.cwd(), 'content', lesson.moduleSlug, `${lesson.slug}.mdx`);
  const source = fs.readFileSync(filePath, 'utf8');

  const quizQuestions = sidecar.quiz.map((q, i) => ({ ...q, id: `${lesson.id}-q${i + 1}` }));

  const mdxComponents = {
    pre: CodePre,
    blockquote: LessonBlockquote,
    Mermaid,
    LessonQuiz: () => <Quiz lessonId={lesson.id} questions={quizQuestions} />,
    LessonChecklist: () => <Checklist lessonId={lesson.id} items={sidecar.checklist} />,
  };

  return (
    <div className="docs-shell">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol>
          <li><Link href="/" id="crumb-home">Trang chủ</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/learn/" id="crumb-learn">Học liệu</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">Module {mod?.code} — {lesson.title}</li>
        </ol>
      </nav>

      <div className="docs-grid">
        <Sidebar />

        <article className="lesson-content" data-lesson-article aria-labelledby="lesson-title">
          <h1 id="lesson-title">{lesson.title}</h1>
          <div className="lesson-meta">
            <span className={levelBadgeClass(lesson.level)}>{lesson.level}</span>
            <span>Module {mod?.code} — {mod?.name}</span>
            <span>Thời lượng: ~{lesson.durationMin} phút</span>
            <span>Cập nhật: {lesson.updated}</span>
          </div>
          <p className="lesson-meta" aria-label="Version pins của bài học">
            Version pins: {lesson.versionPins.join(' · ')}
          </p>

          <MDXRemote
            source={source}
            components={mdxComponents}
            options={{
              parseFrontmatter: true,
              // next-mdx-remote v6 blocks JS expressions in MDX by default
              // (blockJS: true). Our lesson content is first-party, trusted
              // (authored in this repo) and uses template-literal expressions
              // for <Mermaid chart={`...`} />, so expressions must stay
              // enabled; blockDangerousJS remains at its default (true),
              // which still guards eval/Function/process/require.
              blockJS: false,
              mdxOptions: {
                remarkPlugins: [remarkGfm, remarkCodeMeta],
                rehypePlugins: [rehypeSlug, rehypeHighlight],
              },
            }}
          />

          <hr />
          <div className="lesson-nav" aria-label="Điều hướng cuối bài học">
            <span>
              <MarkRead lessonId={lesson.id} />
            </span>
            <nav aria-label="Bài trước và bài tiếp theo" className="lesson-nav">
              {prev ? (
                <Link href={prev.href} id="lesson-prev-link" className="btn btn-ghost">
                  ← Bài trước: {prev.title}
                </Link>
              ) : (
                <Link href="/learn/" id="lesson-prev-link" className="btn btn-ghost">
                  ← Danh sách module
                </Link>
              )}
              {next ? (
                <Link href={next.href} id="lesson-next-link" className="btn btn-ghost">
                  Bài tiếp theo: {next.title} →
                </Link>
              ) : (
                <Link href="/roadmap/" id="lesson-next-link" className="btn btn-ghost">
                  Tiếp theo: Xem lộ trình học →
                </Link>
              )}
            </nav>
          </div>
        </article>

        <Toc />
      </div>
    </div>
  );
}
