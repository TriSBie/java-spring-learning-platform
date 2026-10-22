'use client';

import { useEffect, useState } from 'react';
import { EMPTY_PROGRESS, loadProgress, type ProgressState } from '@/lib/progress';

export function useProgress(): ProgressState {
  const [state, setState] = useState<ProgressState>(EMPTY_PROGRESS);
  useEffect(() => {
    const refresh = () => setState(loadProgress());
    refresh();
    window.addEventListener('progress-updated', refresh);
    window.addEventListener('storage', refresh);
    return () => {
      window.removeEventListener('progress-updated', refresh);
      window.removeEventListener('storage', refresh);
    };
  }, []);
  return state;
}
