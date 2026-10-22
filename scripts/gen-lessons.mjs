#!/usr/bin/env node
/**
 * Quét các file MDX trong content/ + sidecar <slug>.quiz.json, sinh:
 *  - lib/lessons-manifest.ts : metadata mọi bài (cho Sidebar, Roadmap, Progress, Search, prev/next)
 *  - lib/lessons-data.ts     : checklist + quiz từng bài (chỉ import ở server lesson page)
 * Frontmatter kỳ vọng: title, module, level, duration (hoặc durationMin), order,
 * version_pins (inline list), updated.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const contentDir = path.join(root, 'content');

function parseFrontmatter(text) {
  const m = /^---\n([\s\S]*?)\n---/.exec(text);
  if (!m) return null;
  const fm = {};
  for (const line of m[1].split('\n')) {
    const kv = /^([A-Za-z_]+):\s*(.*)$/.exec(line.trim());
    if (!kv) continue;
    fm[kv[1]] = kv[2].trim();
  }
  return fm;
}

function unquote(v) {
  return (v ?? '').replace(/^"|"$/g, '').replace(/^'|'$/g, '');
}

function parsePins(v) {
  if (!v) return [];
  const inner = v.replace(/^\[/, '').replace(/\]$/, '');
  return inner.split(',').map((s) => unquote(s.trim())).filter(Boolean);
}

const lessons = [];
const data = {};

const moduleDirs = fs.readdirSync(contentDir, { withFileTypes: true })
  .filter((d) => d.isDirectory() && /^module-\d+$/.test(d.name))
  .sort();

for (const dir of moduleDirs) {
  const moduleSlug = dir.name;
  const moduleId = Number(moduleSlug.split('-')[1]);
  const files = fs.readdirSync(path.join(contentDir, moduleSlug)).filter((f) => f.endsWith('.mdx')).sort();
  for (const file of files) {
    const slug = file.replace(/\.mdx$/, '');
    const text = fs.readFileSync(path.join(contentDir, moduleSlug, file), 'utf8');
    const fm = parseFrontmatter(text);
    if (!fm) throw new Error(`Thiếu frontmatter: ${moduleSlug}/${file}`);
    const sidecarPath = path.join(contentDir, moduleSlug, `${slug}.quiz.json`);
    if (!fs.existsSync(sidecarPath)) throw new Error(`Thiếu sidecar quiz.json: ${moduleSlug}/${slug}.quiz.json`);
    const sidecar = JSON.parse(fs.readFileSync(sidecarPath, 'utf8'));
    const id = `m${String(moduleId).padStart(2, '0')}-${slug}`;
    const meta = {
      id,
      slug,
      moduleSlug,
      moduleId,
      title: unquote(fm.title),
      level: unquote(fm.level),
      durationMin: Number(fm.durationMin ?? fm.duration ?? 45),
      order: Number(fm.order ?? 99),
      versionPins: parsePins(fm.version_pins),
      updated: unquote(fm.updated) || '2026-10-22',
      href: `/learn/${moduleSlug}/${slug}/`,
    };
    lessons.push(meta);
    data[id] = { checklist: sidecar.checklist ?? [], quiz: sidecar.quiz ?? [] };
  }
}

lessons.sort((a, b) => a.moduleId - b.moduleId || a.order - b.order || a.slug.localeCompare(b.slug));

const header = '// AUTO-GENERATED bởi scripts/gen-lessons.mjs — KHÔNG sửa tay. Chạy: node scripts/gen-lessons.mjs\n';
const manifest = `${header}
export type LessonLevel = 'Junior' | 'Middle' | 'Senior';

export interface LessonMeta {
  id: string;
  slug: string;
  moduleSlug: string;
  moduleId: number;
  title: string;
  level: LessonLevel;
  durationMin: number;
  order: number;
  versionPins: string[];
  updated: string;
  href: string;
}

export const LESSONS: LessonMeta[] = ${JSON.stringify(lessons, null, 2)};

export function lessonById(id: string): LessonMeta | undefined {
  return LESSONS.find((l) => l.id === id);
}

export function lessonsOfModule(moduleId: number): LessonMeta[] {
  return LESSONS.filter((l) => l.moduleId === moduleId);
}

export function adjacentLessons(id: string): { prev?: LessonMeta; next?: LessonMeta } {
  const i = LESSONS.findIndex((l) => l.id === id);
  if (i < 0) return {};
  return { prev: LESSONS[i - 1], next: LESSONS[i + 1] };
}
`;
fs.writeFileSync(path.join(root, 'lib', 'lessons-manifest.ts'), manifest);

const dataFile = `${header}
export interface QuizQuestionData {
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
}

export interface LessonSidecar {
  checklist: string[];
  quiz: QuizQuestionData[];
}

export const LESSON_DATA: Record<string, LessonSidecar> = ${JSON.stringify(data, null, 2)};
`;
fs.writeFileSync(path.join(root, 'lib', 'lessons-data.ts'), dataFile);

console.log(`gen-lessons: ${lessons.length} bài -> lib/lessons-manifest.ts + lib/lessons-data.ts`);
