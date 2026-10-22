#!/usr/bin/env node
/**
 * Kiểm tra nội dung học liệu (Phase 2 — áp dụng cho MỌI bài):
 *  - Mọi file .mdx trong content/ có đủ frontmatter bắt buộc.
 *  - Mỗi bài có >= 2 link tài liệu chính thức (theo whitelist domain).
 *  - Mỗi bài có sidecar <slug>.quiz.json: quiz 8-12 câu (đủ 4 options, answerIndex hợp lệ,
 *    có explanation), checklist 5-8 mục.
 *  - Mỗi bài có mục "Sai lầm thường gặp" với >= 3 mục con, >= 1 code fence, đúng cấu trúc template.
 *  - Không xuất hiện API bị cấm trong content/ và examples/.
 * Script tự loại trừ chính nó (danh sách mẫu cấm được nối chuỗi để không tự khớp khi quét).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const BANNED = [
  'WebSecurity' + 'ConfigurerAdapter',
  'ant' + 'Matchers',
  'javax' + '.persistence',
  'javax' + '.servlet',
  'Rest' + 'Template',
  'EnableGlobal' + 'MethodSecurity',
];

const OFFICIAL_HOSTS = [
  'docs.spring.io',
  'openjdk.org',
  'dev.java',
  'kafka.apache.org',
  'debezium.io',
  'kubernetes.io',
  'docs.docker.com',
  'micrometer.io',
  'opentelemetry.io',
  'datatracker.ietf.org',
  'resilience4j.readme.io',
  'flywaydb.org',
  'docs.github.com',
  'maven.apache.org',
];

const REQUIRED_SECTIONS = [
  '## Mục tiêu',
  '## Vì sao cần biết',
  '## Nội dung chính',
  '## Code',
  '## Sai lầm thường gặp',
  '<LessonChecklist',
  '## Workbook',
  '<LessonQuiz',
  '## Tài liệu chính thức',
];

function walk(dir, exts) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (['node_modules', '.next', 'out'].includes(entry.name)) continue;
      out.push(...walk(full, exts));
    } else if (exts.some((e) => entry.name.endsWith(e))) {
      out.push(full);
    }
  }
  return out;
}

let failed = false;
const fail = (msg) => { console.error(`FAIL ${msg}`); failed = true; };

const stats = [];
const mdxFiles = walk(path.join(root, 'content'), ['.mdx']).sort();

for (const file of mdxFiles) {
  const text = fs.readFileSync(file, 'utf8');
  const rel = path.relative(root, file);
  const slug = path.basename(file, '.mdx');

  const fm = /^---\n([\s\S]*?)\n---/.exec(text);
  if (!fm) { fail(`${rel}: thiếu frontmatter`); continue; }
  for (const key of ['title:', 'module:', 'level:', 'duration', 'order:', 'version_pins:', 'updated:']) {
    if (!fm[1].includes(key)) fail(`${rel}: frontmatter thiếu "${key}"`);
  }
  const levelMatch = /level:\s*"?(\w+)"?/.exec(fm[1]);
  if (!levelMatch || !['Junior', 'Middle', 'Senior'].includes(levelMatch[1])) {
    fail(`${rel}: level không hợp lệ`);
  }

  const links = [...text.matchAll(/https?:\/\/([^\s/)]+)/g)].map((m) => m[1]);
  const officialCount = links.filter((h) => OFFICIAL_HOSTS.some((o) => h === o || h.endsWith('.' + o))).length;
  if (officialCount < 2) fail(`${rel}: chỉ có ${officialCount} link official (cần >= 2)`);

  for (const section of REQUIRED_SECTIONS) {
    if (!text.includes(section)) fail(`${rel}: thiếu mục "${section}"`);
  }

  const pitfallsSection = text.split('## Sai lầm thường gặp')[1]?.split('\n## ')[0] ?? '';
  const pitfallCount = (pitfallsSection.match(/^### /gm) ?? []).length;
  if (pitfallCount < 3) fail(`${rel}: mục Sai lầm thường gặp chỉ có ${pitfallCount} mục con (cần >= 3)`);

  const fences = (text.match(/^```/gm) ?? []).length;
  const snippetCount = Math.floor(fences / 2);
  if (snippetCount < 1) fail(`${rel}: không có code snippet nào`);

  const sidecarPath = file.replace(/\.mdx$/, '.quiz.json');
  let quizCount = 0;
  let checklistCount = 0;
  if (!fs.existsSync(sidecarPath)) {
    fail(`${rel}: thiếu sidecar ${path.basename(sidecarPath)}`);
  } else {
    try {
      const sidecar = JSON.parse(fs.readFileSync(sidecarPath, 'utf8'));
      checklistCount = Array.isArray(sidecar.checklist) ? sidecar.checklist.length : 0;
      if (checklistCount < 5 || checklistCount > 8) fail(`${rel}: checklist có ${checklistCount} mục (cần 5-8)`);
      quizCount = Array.isArray(sidecar.quiz) ? sidecar.quiz.length : 0;
      if (quizCount < 8 || quizCount > 12) fail(`${rel}: quiz có ${quizCount} câu (cần 8-12)`);
      (sidecar.quiz ?? []).forEach((q, i) => {
        if (!q.question || !Array.isArray(q.options) || q.options.length !== 4) {
          fail(`${rel}: quiz câu ${i + 1} thiếu question hoặc không đủ 4 options`);
        }
        if (typeof q.answerIndex !== 'number' || q.answerIndex < 0 || q.answerIndex > 3) {
          fail(`${rel}: quiz câu ${i + 1} answerIndex không hợp lệ`);
        }
        if (!q.explanation) fail(`${rel}: quiz câu ${i + 1} thiếu explanation`);
      });
    } catch (e) {
      fail(`${rel}: sidecar JSON lỗi: ${e.message}`);
    }
  }

  stats.push({ rel, officialCount, snippetCount, quizCount, checklistCount });
  console.log(`OK   ${rel}: ${officialCount} official | ${snippetCount} snippet | quiz ${quizCount} | checklist ${checklistCount} | ${pitfallCount} sai lầm`);
}

// ==== Phase 3: glossary / cheat sheets / incidents ====
const manifestText = fs.readFileSync(path.join(root, 'lib/lessons-manifest.ts'), 'utf8');
const LESSON_HREFS = new Set([...manifestText.matchAll(/"href":\s*"([^"]+)"/g)].map((m) => m[1]));

function readJson(rel) {
  try {
    return JSON.parse(fs.readFileSync(path.join(root, rel), 'utf8'));
  } catch (e) {
    fail(`${rel}: không đọc được JSON: ${e.message}`);
    return null;
  }
}

const glossary = readJson('lib/data/glossary.json');
if (Array.isArray(glossary)) {
  if (glossary.length < 80) fail(`glossary: chỉ có ${glossary.length} thuật ngữ (cần >= 80)`);
  const gSlugs = new Set();
  for (const t of glossary) {
    if (!t.term || !t.slug || !t.vi || !t.category || !t.lessonHref) {
      fail(`glossary: mục thiếu trường bắt buộc: ${JSON.stringify(t).slice(0, 80)}`);
      continue;
    }
    if (gSlugs.has(t.slug)) fail(`glossary: trùng slug "${t.slug}"`);
    gSlugs.add(t.slug);
    if (!LESSON_HREFS.has(t.lessonHref)) fail(`glossary "${t.term}": lessonHref không tồn tại: ${t.lessonHref}`);
    const mm = /module-(\d{2})/.exec(t.lessonHref);
    if (mm && Number(mm[1]) !== t.moduleId) fail(`glossary "${t.term}": moduleId ${t.moduleId} không khớp lessonHref`);
  }
  console.log(`OK   glossary: ${glossary.length} thuật ngữ, mọi lessonHref hợp lệ`);
}

const sheets = readJson('lib/data/cheatsheets.json');
if (Array.isArray(sheets)) {
  if (sheets.length !== 5) fail(`cheat sheets: có ${sheets.length} sheet (cần đúng 5)`);
  for (const exp of ['spring-annotations', 'jvm-flags', 'kubectl', 'kafka-cli', 'maven']) {
    if (!sheets.some((s) => s.slug === exp)) fail(`cheat sheets: thiếu sheet "${exp}"`);
  }
  let sheetRows = 0;
  for (const s of sheets) {
    const rows = (s.sections ?? []).reduce((n, sec) => n + (sec.rows?.length ?? 0), 0);
    sheetRows += rows;
    if (rows < 15) fail(`cheat sheet ${s.slug}: chỉ có ${rows} rows (cần >= 15)`);
    for (const sec of s.sections ?? []) {
      for (const r of sec.rows ?? []) {
        if (!r.item || !r.meaning) fail(`cheat sheet ${s.slug}: row thiếu item/meaning`);
      }
    }
    for (const h of s.lessonHrefs ?? []) {
      if (!LESSON_HREFS.has(h)) fail(`cheat sheet ${s.slug}: lessonHref không tồn tại: ${h}`);
    }
  }
  console.log(`OK   cheat sheets: ${sheets.length} sheets | ${sheetRows} rows`);
}
const sheetPagePath = path.join(root, 'app/cheat-sheets/[slug]/page.tsx');
if (!fs.existsSync(sheetPagePath) || !fs.readFileSync(sheetPagePath, 'utf8').includes('PrintButton')) {
  fail('cheat sheet [slug] page: thiếu PrintButton');
}
if (!fs.readFileSync(path.join(root, 'app/globals.css'), 'utf8').includes('@media print')) {
  fail('globals.css: thiếu @media print cho cheat sheets');
}

const incidents = readJson('lib/data/incidents.json');
if (Array.isArray(incidents)) {
  if (incidents.length < 8) fail(`incidents: chỉ có ${incidents.length} case (cần >= 8)`);
  for (const c of incidents) {
    if (!c.slug || !c.title || !c.rootCause) {
      fail(`incident thiếu trường lõi: ${c.slug ?? '(không slug)'}`);
      continue;
    }
    if ((c.symptoms ?? []).length < 3) fail(`incident ${c.slug}: symptoms < 3 mục`);
    if ((c.investigation ?? []).length < 4) fail(`incident ${c.slug}: investigation < 4 bước`);
    if ((c.fix ?? []).length < 3) fail(`incident ${c.slug}: fix < 3 mục`);
    if ((c.prevention ?? []).length < 3) fail(`incident ${c.slug}: prevention < 3 mục`);
    for (const h of c.lessonHrefs ?? []) {
      if (!LESSON_HREFS.has(h)) fail(`incident ${c.slug}: lessonHref không tồn tại: ${h}`);
    }
  }
  console.log(`OK   incidents: ${incidents.length} case, đủ 5 phần cấu trúc`);
}

for (const dir of ['content', 'examples', 'lib/data']) {
  const files = walk(path.join(root, dir), ['.mdx', '.ts', '.tsx', '.java', '.json', '.xml']);
  for (const file of files) {
    const text = fs.readFileSync(file, 'utf8');
    for (const banned of BANNED) {
      if (text.includes(banned)) fail(`banned "${banned}" xuất hiện trong ${path.relative(root, file)}`);
    }
  }
}

console.log(`\nTổng: ${stats.length} bài | official links: ${stats.reduce((s, x) => s + x.officialCount, 0)} | snippets: ${stats.reduce((s, x) => s + x.snippetCount, 0)} | quiz: ${stats.reduce((s, x) => s + x.quizCount, 0)} câu`);

if (failed) { console.error('AUDIT FAILED'); process.exit(1); }
console.log('AUDIT PASSED');
