import { ALL_LESSONS, MODULES, firstLessonOfModule } from './modules';
import { GLOSSARY_TERMS } from './glossary';
import { CHEAT_SHEETS } from './cheatsheets';
import { INCIDENTS } from './incidents';

export interface SearchEntry {
  id: string;
  title: string;
  kind: 'Trang' | 'Module' | 'Bài học' | 'Mục trong bài' | 'Thuật ngữ' | 'Cheat sheet' | 'Sự cố';
  href: string;
  keywords: string;
}

const SECTION_ANCHORS: Array<{ heading: string; anchor: string }> = [
  { heading: 'Mục tiêu', anchor: '#mục-tiêu' },
  { heading: 'Vì sao cần biết', anchor: '#vì-sao-cần-biết' },
  { heading: 'Nội dung chính', anchor: '#nội-dung-chính' },
  { heading: 'Code', anchor: '#code' },
  { heading: 'Sai lầm thường gặp', anchor: '#sai-lầm-thường-gặp' },
  { heading: 'Checklist tự kiểm', anchor: '#checklist-tự-kiểm' },
  { heading: 'Workbook', anchor: '#workbook' },
  { heading: 'Quiz', anchor: '#quiz' },
  { heading: 'Tài liệu chính thức', anchor: '#tài-liệu-chính-thức' },
];

export const SEARCH_INDEX: SearchEntry[] = [
  { id: 'page-home', title: 'Trang chủ — Java / Spring Learning Platform', kind: 'Trang', href: '/', keywords: 'home landing java spring onboarding' },
  { id: 'page-roadmap', title: 'Lộ trình học — 3 track Junior / Middle / Senior', kind: 'Trang', href: '/roadmap/', keywords: 'roadmap lo trinh track junior middle senior' },
  { id: 'page-progress', title: 'Tiến độ học tập — Progress', kind: 'Trang', href: '/progress/', keywords: 'progress tien do export import json quiz score' },
  { id: 'page-learn', title: 'Học liệu — danh sách module và bài học', kind: 'Trang', href: '/learn/', keywords: 'learn docs bai hoc module' },
  { id: 'page-glossary', title: 'Glossary — Thuật ngữ Java & Spring', kind: 'Trang', href: '/glossary/', keywords: 'glossary thuat ngu tu dien glossary terms' },
  { id: 'page-cheat-sheets', title: 'Cheat Sheets — Tra cứu nhanh', kind: 'Trang', href: '/cheat-sheets/', keywords: 'cheat sheet tra cuu nhanh in printable annotations kubectl kafka maven jvm' },
  { id: 'page-incidents', title: 'Incident Library — Thư viện sự cố', kind: 'Trang', href: '/incidents/', keywords: 'incident su co production runbook dieu tra root cause' },
  ...GLOSSARY_TERMS.map<SearchEntry>((t) => ({
    id: `glossary-${t.slug}`,
    title: `Thuật ngữ — ${t.term}`,
    kind: 'Thuật ngữ',
    href: `/glossary/#${t.slug}`,
    keywords: `${t.category} ${t.vi}`,
  })),
  ...CHEAT_SHEETS.map<SearchEntry>((s) => ({
    id: `cheatsheet-${s.slug}`,
    title: `Cheat sheet — ${s.title}`,
    kind: 'Cheat sheet',
    href: `/cheat-sheets/${s.slug}/`,
    keywords: `${s.description} ${s.sections.flatMap((sec) => sec.rows.map((r) => r.item)).join(' ')}`,
  })),
  ...INCIDENTS.map<SearchEntry>((c) => ({
    id: `incident-${c.slug}`,
    title: `Sự cố — ${c.title}`,
    kind: 'Sự cố',
    href: `/incidents/${c.slug}/`,
    keywords: `${c.summary} ${c.rootCause}`,
  })),
  ...MODULES.map<SearchEntry>((m) => ({
    id: `module-${m.id}`,
    title: `Module ${m.code} — ${m.name}`,
    kind: 'Module',
    href: firstLessonOfModule(m.id)?.href ?? '/learn/',
    keywords: m.focus,
  })),
  ...ALL_LESSONS.flatMap<SearchEntry>((l) => [
    {
      id: `lesson-${l.id}`,
      title: `Bài học — ${l.title} (Module ${String(l.moduleId).padStart(2, '0')}, ${l.level})`,
      kind: 'Bài học',
      href: l.href,
      keywords: `${l.slug.replaceAll('-', ' ')} nova loyalty`,
    },
    ...SECTION_ANCHORS.map<SearchEntry>((s, i) => ({
      id: `lesson-${l.id}-section-${i}`,
      title: `${s.heading} — ${l.title}`,
      kind: 'Mục trong bài',
      href: `${l.href}${s.anchor}`,
      keywords: `${l.title} ${l.slug.replaceAll('-', ' ')}`,
    })),
  ]),
];

export function searchIndex(query: string, limit = 8): SearchEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return SEARCH_INDEX.slice(0, limit);
  const terms = q.split(/\s+/);
  return SEARCH_INDEX.map((entry) => {
    const haystack = `${entry.title} ${entry.keywords} ${entry.kind}`.toLowerCase();
    let score = 0;
    for (const t of terms) {
      if (entry.title.toLowerCase().includes(t)) score += 3;
      else if (haystack.includes(t)) score += 1;
      else return { entry, score: -1 };
    }
    return { entry, score };
  })
    .filter((r) => r.score >= 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((r) => r.entry);
}
