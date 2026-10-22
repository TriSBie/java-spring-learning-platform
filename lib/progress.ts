export interface QuizScore {
  score: number;
  total: number;
  at: string;
}

export interface ProgressState {
  version: 1;
  read: Record<string, boolean>;
  checklist: Record<string, boolean[]>;
  quiz: Record<string, QuizScore>;
}

export const PROGRESS_KEY = 'java-spring-platform-progress-v1';

export const EMPTY_PROGRESS: ProgressState = { version: 1, read: {}, checklist: {}, quiz: {} };

export function loadProgress(): ProgressState {
  if (typeof window === 'undefined') return EMPTY_PROGRESS;
  try {
    const raw = window.localStorage.getItem(PROGRESS_KEY);
    if (!raw) return EMPTY_PROGRESS;
    const parsed = JSON.parse(raw) as ProgressState;
    if (parsed.version !== 1) return EMPTY_PROGRESS;
    return {
      version: 1,
      read: parsed.read ?? {},
      checklist: parsed.checklist ?? {},
      quiz: parsed.quiz ?? {},
    };
  } catch {
    return EMPTY_PROGRESS;
  }
}

export function saveProgress(state: ProgressState): void {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(state));
  window.dispatchEvent(new CustomEvent('progress-updated'));
}

export function updateProgress(mutator: (draft: ProgressState) => void): ProgressState {
  const current = loadProgress();
  const next: ProgressState = {
    version: 1,
    read: { ...current.read },
    checklist: { ...current.checklist },
    quiz: { ...current.quiz },
  };
  mutator(next);
  saveProgress(next);
  return next;
}
