'use client';

import { useState } from 'react';
import { updateProgress } from '@/lib/progress';
import { useProgress } from './useProgress';

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
}

interface QuizProps {
  lessonId: string;
  questions: QuizQuestion[];
}

export default function Quiz({ lessonId, questions }: QuizProps) {
  const [selected, setSelected] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const progress = useProgress();
  const saved = progress.quiz[lessonId];

  const score = questions.reduce(
    (s, q) => (selected[q.id] === q.answerIndex ? s + 1 : s),
    0,
  );
  const allAnswered = questions.every((q) => selected[q.id] !== undefined);

  function submit() {
    setSubmitted(true);
    updateProgress((draft) => {
      draft.quiz[lessonId] = { score, total: questions.length, at: new Date().toISOString() };
    });
  }

  function reset() {
    setSelected({});
    setSubmitted(false);
  }

  return (
    <section aria-label="Quiz của bài học" className="quiz">
      {saved && (
        <p className="quiz-saved" role="status">
          Điểm đã lưu: {saved.score}/{saved.total} — làm lại sẽ ghi đè điểm mới.
        </p>
      )}
      <ol className="quiz-list">
        {questions.map((q, idx) => {
          const chosen = selected[q.id];
          const isCorrect = submitted && chosen === q.answerIndex;
          const isWrong = submitted && chosen !== undefined && chosen !== q.answerIndex;
          return (
            <li key={q.id} className="quiz-item">
              <fieldset>
                <legend>
                  <strong>Câu {idx + 1}.</strong> {q.question}
                </legend>
                <div className="quiz-options">
                  {q.options.map((opt, oi) => (
                    <label key={oi} className="quiz-option">
                      <input
                        id={`quiz-${q.id}-opt-${oi}`}
                        type="radio"
                        name={`quiz-${q.id}`}
                        value={oi}
                        checked={chosen === oi}
                        disabled={submitted}
                        onChange={() =>
                          setSelected((prev) => ({ ...prev, [q.id]: oi }))
                        }
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
              {submitted && (
                <div
                  className={isCorrect ? 'quiz-feedback ok' : 'quiz-feedback bad'}
                  role="status"
                >
                  <p>{isCorrect ? 'Đúng.' : isWrong ? 'Chưa đúng.' : 'Chưa trả lời.'} Đáp án đúng: {q.options[q.answerIndex]}</p>
                  <p>{q.explanation}</p>
                </div>
              )}
            </li>
          );
        })}
      </ol>
      <div className="quiz-actions">
        {!submitted ? (
          <button
            id={`quiz-submit-${lessonId}`}
            type="button"
            className="btn btn-primary"
            onClick={submit}
            disabled={!allAnswered}

          >
            {allAnswered ? 'Nộp bài & chấm điểm' : `Hãy trả lời đủ ${questions.length} câu để nộp bài`}
          </button>
        ) : (
          <>
            <p className="quiz-score" role="status">
              Kết quả: <strong>{score}/{questions.length}</strong> câu đúng. Điểm đã được lưu vào Progress.
            </p>
            <button
              id={`quiz-reset-${lessonId}`}
              type="button"
              className="btn btn-ghost"
              onClick={reset}

            >
              Làm lại
            </button>
          </>
        )}
      </div>
    </section>
  );
}
