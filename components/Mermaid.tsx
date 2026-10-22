'use client';

import { useEffect, useId, useRef, useState } from 'react';

interface MermaidProps {
  chart: string;
  label: string;
}

export default function Mermaid({ chart, label }: MermaidProps) {
  const figureRef = useRef<HTMLElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const reactId = useId().replace(/[^a-zA-Z0-9]/g, '');
  const [error, setError] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  // Lazy: chỉ tải thư viện mermaid (chunk lớn) khi sơ đồ sắp vào viewport,
  // để không chặn LCP/TBT của phần nội dung chữ phía trên.
  useEffect(() => {
    const el = figureRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '240px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let cancelled = false;
    async function render() {
      try {
        const mermaid = (await import('mermaid')).default;
        const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
        mermaid.initialize({
          startOnLoad: false,
          theme: isDark ? 'dark' : 'default',
          securityLevel: 'strict',
          fontFamily: 'inherit',
        });
        const { svg } = await mermaid.render(`mermaid-${reactId}`, chart);
        if (!cancelled && ref.current) {
          ref.current.innerHTML = svg;
        }
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err.message : 'Không render được sơ đồ');
      }
    }
    render();
    return () => {
      cancelled = true;
    };
  }, [chart, reactId, visible]);

  if (error) {
    return (
      <figure className="mermaid-fallback" ref={figureRef}>
        <figcaption>{label}</figcaption>
        <pre aria-label={label}>{chart}</pre>
      </figure>
    );
  }

  return (
    <figure className="mermaid-figure" ref={figureRef}>
      <div
        ref={ref}
        role="img"
        aria-label={label}
        id={`mermaid-diagram-${reactId}`}
        className="mermaid-canvas"
        style={visible ? undefined : { minHeight: 180 }}
      />
      <figcaption className="mermaid-caption">{label}</figcaption>
    </figure>
  );
}
