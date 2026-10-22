'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import type { GlossaryTerm } from '@/lib/glossary';

interface GlossaryClientProps {
  terms: GlossaryTerm[];
}

/** Bỏ dấu tiếng Việt + hạ chữ thường để tìm kiếm không dấu vẫn khớp. */
function normalizeVi(input: string): string {
  return input
    .toLowerCase()
    .replace(/đ/g, 'd')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function groupLetter(term: string): string {
  const match = term.match(/[a-zA-Z]/);
  return match ? match[0].toUpperCase() : '#';
}

export default function GlossaryClient({ terms }: GlossaryClientProps) {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = useMemo(() => {
    const seen = new Map<number, string>();
    for (const t of terms) {
      if (!seen.has(t.moduleId)) seen.set(t.moduleId, t.category);
    }
    return Array.from(seen.entries())
      .sort((a, b) => a[0] - b[0])
      .map((entry) => ({ moduleId: entry[0], category: entry[1] }));
  }, [terms]);

  const filtered = useMemo(() => {
    const q = normalizeVi(query.trim());
    return terms.filter((t) => {
      if (activeCategory !== 'all' && t.category !== activeCategory) return false;
      if (!q) return true;
      const haystack = normalizeVi(`${t.term} ${t.vi} ${t.category}`);
      return haystack.includes(q);
    });
  }, [terms, query, activeCategory]);

  const groups = useMemo(() => {
    const map = new Map<string, GlossaryTerm[]>();
    for (const t of filtered) {
      const letter = groupLetter(t.term);
      const bucket = map.get(letter);
      if (bucket) bucket.push(t);
      else map.set(letter, [t]);
    }
    return Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));
  }, [filtered]);

  return (
    <div className="glossary-wrap">
      <style>{`
        .glossary-toolbar { display: flex; flex-direction: column; gap: var(--space-4); margin: var(--space-6) 0 var(--space-4); }
        .glossary-search-label { font-weight: 700; }
        .glossary-search-input { width: 100%; max-width: 560px; padding: var(--space-3) var(--space-4); font: inherit; background: var(--bg-elevated); color: var(--text); border: 1px solid var(--border); border-radius: var(--radius-sm); }
        .glossary-chips { display: flex; flex-wrap: wrap; gap: var(--space-2); }
        .glossary-chip[aria-pressed='true'] { background: var(--accent-strong); border-color: var(--accent-strong); color: var(--accent-contrast); }
        .glossary-count { color: var(--text-muted); margin: 0; }
        .glossary-group { margin-bottom: var(--space-10); }
        .glossary-group h2 { font-size: 1.5rem; margin: 0 0 var(--space-4); border-bottom: 1px solid var(--border); padding-bottom: var(--space-2); }
        .glossary-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: var(--space-4); }
        .glossary-term .badge { background: var(--accent-strong); }
        .glossary-term h3 { margin: var(--space-3) 0 var(--space-2); overflow-wrap: anywhere; }
        .glossary-empty { color: var(--text-muted); border: 1px dashed var(--border); border-radius: var(--radius-md); padding: var(--space-6); }
      `}</style>

      <div className="glossary-toolbar">
        <div>
          <label htmlFor="glossary-search" className="glossary-search-label">
            Tìm thuật ngữ
          </label>
          <input
            id="glossary-search"
            type="search"
            aria-label="Tìm thuật ngữ theo tên, định nghĩa hoặc module"
            placeholder="Ví dụ: outbox, hikari, khong dau cung tim duoc…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
            className="glossary-search-input"
            style={{ display: 'block', marginTop: 'var(--space-2)' }}
          />
        </div>

        <div className="glossary-chips" role="group" aria-label="Lọc theo module">
          <button
            type="button"
            id="glossary-chip-all"
            className="btn glossary-chip"
            aria-pressed={activeCategory === 'all'}
            onClick={() => setActiveCategory('all')}
          >
            Tất cả
          </button>
          {categories.map(({ moduleId, category }) => (
            <button
              key={moduleId}
              type="button"
              id={`glossary-chip-${moduleId}`}
              className="btn glossary-chip"
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <p role="status" className="glossary-count">
          Hiển thị {filtered.length} / {terms.length} thuật ngữ
          {activeCategory !== 'all' ? ` trong module ${activeCategory}` : ''}
          {query.trim() ? ` khớp với “${query.trim()}”` : ''}.
        </p>
      </div>

      {filtered.length === 0 ? (
        <p className="glossary-empty">
          Chưa tìm thấy thuật ngữ nào khớp. Thử bỏ bớt từ khóa, gõ không dấu (ví dụ
          “ket noi” thay cho “kết nối”), hoặc chọn lại chip “Tất cả” để xem toàn bộ glossary nhé.
        </p>
      ) : (
        groups.map(([letter, groupTerms]) => (
          <section key={letter} className="glossary-group" aria-label={`Thuật ngữ bắt đầu bằng ${letter}`}>
            <h2>{letter}</h2>
            <div className="glossary-grid">
              {groupTerms.map((t) => (
                <article key={t.slug} id={t.slug} className="card glossary-term">
                  <span className="badge">{t.category}</span>
                  <h3>{t.term}</h3>
                  <p>{t.vi}</p>
                  <Link href={t.lessonHref} id={`glossary-lesson-${t.slug}`}>
                    Bài liên quan →
                  </Link>
                </article>
              ))}
            </div>
          </section>
        ))
      )}
    </div>
  );
}
