'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ALL_LESSONS, MODULES } from '@/lib/modules';
import { useProgress } from './useProgress';

export default function Sidebar() {
  const progress = useProgress();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const tree = (
    <nav aria-label="Cây module và bài học" className="sidebar-nav">
      <ol className="sidebar-list">
        {MODULES.map((m) => {
          const lessons = ALL_LESSONS.filter((l) => l.moduleId === m.id);
          return (
            <li key={m.id} className="sidebar-module">
              <span className="sidebar-module-title">
                <span className="sidebar-module-code">{m.code}</span> {m.name}
              </span>
              <ul className="sidebar-lessons">
                {lessons.map((lesson) => {
                  const read = Boolean(progress.read[lesson.id]);
                  return (
                    <li key={lesson.id}>
                      <Link prefetch={false}
                        id={`sidebar-lesson-${lesson.id}`}
                        href={lesson.href}
                        aria-current={pathname === lesson.href ? 'page' : undefined}
                        className={pathname === lesson.href ? 'sidebar-lesson active' : 'sidebar-lesson'}
                        onClick={() => setMobileOpen(false)}
                      >
                        <span aria-hidden="true">{read ? '✓' : '○'}</span> {lesson.title}
                        <span className="sr-only">{read ? ' (đã đọc)' : ' (chưa đọc)'}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ol>
    </nav>
  );

  return (
    <>
      <button
        id="sidebar-drawer-toggle"
        type="button"
        className="btn btn-ghost sidebar-drawer-toggle"
        aria-expanded={mobileOpen}
        aria-controls="docs-sidebar"
        aria-label="Mở hoặc đóng danh sách module"
        onClick={() => setMobileOpen((v) => !v)}
      >
        {mobileOpen ? 'Đóng mục lục module' : 'Danh sách module'}
      </button>
      <aside id="docs-sidebar" className={mobileOpen ? 'docs-sidebar open' : 'docs-sidebar'} aria-label="Sidebar tài liệu">
        {tree}
      </aside>
    </>
  );
}
