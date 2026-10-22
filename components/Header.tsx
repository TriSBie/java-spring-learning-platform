import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import SearchLazy from './SearchLazy';

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link prefetch={false} href="/" className="logo" id="site-logo">
          <span className="logo-mark" aria-hidden="true">JS</span>
          <span className="logo-text">Java / Spring Learning</span>
        </Link>
        <nav aria-label="Điều hướng chính" className="main-nav">
          <Link prefetch={false} href="/learn/" id="nav-learn">Học liệu</Link>
          <Link prefetch={false} href="/roadmap/" id="nav-roadmap">Lộ trình</Link>
          <Link prefetch={false} href="/glossary/" id="nav-glossary">Glossary</Link>
          <Link prefetch={false} href="/cheat-sheets/" id="nav-cheat-sheets">Cheat Sheets</Link>
          <Link prefetch={false} href="/incidents/" id="nav-incidents">Incidents</Link>
          <Link prefetch={false} href="/progress/" id="nav-progress">Progress</Link>
        </nav>
        <div className="header-actions">
          <SearchLazy />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
