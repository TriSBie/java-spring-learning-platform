'use client';

import { useEffect, useState } from 'react';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function Toc() {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const article = document.querySelector('[data-lesson-article]');
    if (!article) return;
    const headings = Array.from(article.querySelectorAll<HTMLElement>('h2[id], h3[id]'));
    setItems(
      headings.map((h) => ({
        id: h.id,
        text: h.textContent ?? h.id,
        level: h.tagName === 'H2' ? 2 : 3,
      })),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 },
    );
    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, []);

  if (items.length === 0) return null;

  return (
    <nav aria-label="Mục lục bài học" className="toc">
      <p className="toc-title">Trong bài này</p>
      <ul>
        {items.map((item) => (
          <li key={item.id} className={item.level === 3 ? 'toc-sub' : undefined}>
            <a
              id={`toc-link-${item.id}`}
              href={`#${item.id}`}
              aria-current={activeId === item.id ? 'location' : undefined}
              className={activeId === item.id ? 'toc-link active' : 'toc-link'}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
