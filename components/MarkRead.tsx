'use client';

import { updateProgress } from '@/lib/progress';
import { useProgress } from './useProgress';

export default function MarkRead({ lessonId }: { lessonId: string }) {
  const progress = useProgress();
  const isRead = Boolean(progress.read[lessonId]);

  function toggle() {
    updateProgress((draft) => {
      draft.read[lessonId] = !draft.read[lessonId];
    });
  }

  return (
    <button
      id={`mark-read-${lessonId}`}
      type="button"
      className={isRead ? 'btn btn-success' : 'btn btn-primary'}
      onClick={toggle}
      aria-pressed={isRead}

    >
      {isRead ? 'Đã đọc xong (bấm để bỏ đánh dấu)' : 'Đánh dấu đã đọc'}
    </button>
  );
}
