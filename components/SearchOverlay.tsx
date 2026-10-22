'use client';

import { useEffect, useRef, useState } from 'react';
import { searchIndex, type SearchEntry } from '@/lib/search-index';

export default function SearchOverlay({ initialOpen = false }: { initialOpen?: boolean }) {
  const [open, setOpen] = useState(initialOpen);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchEntry[]>(() => searchIndex(''));
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (open) {
      setResults(searchIndex(query));
      const t = window.setTimeout(() => inputRef.current?.focus(), 30);
      return () => window.clearTimeout(t);
    }
  }, [open, query]);

  return (
    <>
      <button
        id="search-open-button"
        type="button"
        className="btn btn-ghost search-trigger"
        aria-label="Mở tìm kiếm (Cmd+K)"
        aria-haspopup="dialog"
        onClick={() => setOpen(true)}
      >
        Tìm kiếm <kbd>Cmd+K</kbd>
      </button>
      {open && (
        <div className="search-backdrop" role="presentation" onClick={() => setOpen(false)}>
          <div
            className="search-dialog"
            role="dialog"
            aria-modal="true"
            aria-label="Tìm kiếm nội dung học liệu"
            onClick={(e) => e.stopPropagation()}
          >
            <label htmlFor="search-input" className="sr-only">
              Nhập từ khóa tìm kiếm
            </label>
            <input
              ref={inputRef}
              id="search-input"
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setResults(searchIndex(e.target.value));
              }}
              placeholder="Tìm module, bài học, khái niệm… ví dụ: outbox, hikari, jwt"
              autoComplete="off"
            />
            <ul className="search-results" aria-label="Kết quả tìm kiếm">
              {results.length === 0 && <li className="search-empty">Không tìm thấy kết quả phù hợp.</li>}
              {results.map((r) => (
                <li key={r.id}>
                  <a
                    id={`search-result-${r.id}`}
                    href={r.href}
                    onClick={() => setOpen(false)}
                    className="search-result-link"
                  >
                    <span className="search-result-kind">{r.kind}</span>
                    <span>{r.title}</span>
                  </a>
                </li>
              ))}
            </ul>
            <button
              id="search-close-button"
              type="button"
              className="btn btn-ghost"
              onClick={() => setOpen(false)}
              aria-label="Đóng tìm kiếm"
            >
              Đóng (Esc)
            </button>
          </div>
        </div>
      )}
    </>
  );
}
