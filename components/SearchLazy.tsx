'use client';

import { useCallback, useEffect, useState, type ComponentType } from 'react';

interface SearchOverlayProps {
  initialOpen?: boolean;
}

/**
 * Bọc SearchOverlay dạng lazy: chunk chứa search index (glossary + incidents +
 * lessons, khá nặng) chỉ được tải khi người dùng lần đầu bấm nút tìm kiếm,
 * di chuột lên nút, hoặc nhấn Cmd/Ctrl+K — không tính vào bundle ban đầu.
 */
export default function SearchLazy() {
  const [Comp, setComp] = useState<ComponentType<SearchOverlayProps> | null>(null);
  const [wantOpen, setWantOpen] = useState(false);

  const activate = useCallback(
    async (open: boolean) => {
      if (open) setWantOpen(true);
      if (!Comp) {
        const mod = await import('./SearchOverlay');
        setComp(() => mod.default);
      }
    },
    [Comp],
  );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        void activate(true);
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activate]);

  if (Comp) {
    return <Comp initialOpen={wantOpen} />;
  }

  return (
    <button
      id="search-open-button"
      type="button"
      className="btn btn-ghost search-trigger"
      aria-label="Mở tìm kiếm (Cmd+K)"
      aria-haspopup="dialog"
      onClick={() => void activate(true)}
      onPointerEnter={() => void activate(false)}
      onFocus={() => void activate(false)}
    >
      Tìm kiếm <kbd>Cmd+K</kbd>
    </button>
  );
}
