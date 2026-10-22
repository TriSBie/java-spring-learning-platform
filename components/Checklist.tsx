'use client';

import { updateProgress } from '@/lib/progress';
import { useProgress } from './useProgress';

interface ChecklistProps {
  lessonId: string;
  items: string[];
}

export default function Checklist({ lessonId, items }: ChecklistProps) {
  const progress = useProgress();
  const checked = progress.checklist[lessonId] ?? items.map(() => false);

  function toggle(index: number, value: boolean) {
    updateProgress((draft) => {
      const current = draft.checklist[lessonId] ?? items.map(() => false);
      const next = [...current];
      next[index] = value;
      draft.checklist[lessonId] = next;
    });
  }

  const doneCount = checked.filter(Boolean).length;

  return (
    <section aria-label="Checklist tự kiểm" className="checklist">
      <p role="status">
        Đã tự kiểm: {doneCount}/{items.length} mục. Trạng thái được lưu tự động trên trình duyệt này.
      </p>
      <ul className="checklist-list">
        {items.map((item, i) => (
          <li key={i}>
            <label className="checklist-item">
              <input
                id={`checklist-${lessonId}-${i}`}
                type="checkbox"
                checked={Boolean(checked[i])}
                onChange={(e) => toggle(i, e.target.checked)}
              />
              <span>{item}</span>
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
}
