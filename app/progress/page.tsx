'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { ALL_LESSONS, TRACKS, type Level } from '@/lib/modules';
import {
  EMPTY_PROGRESS,
  PROGRESS_KEY,
  loadProgress,
  saveProgress,
  type ProgressState,
} from '@/lib/progress';
import { useProgress } from '@/components/useProgress';

function trackProgress(level: Level, state: ProgressState) {
  const lessons = ALL_LESSONS.filter((l) => l.level === level);
  const readCount = lessons.filter((l) => state.read[l.id]).length;
  return {
    lessons,
    readCount,
    total: lessons.length,
    percent: lessons.length === 0 ? 0 : Math.round((readCount / lessons.length) * 100),
  };
}

export default function ProgressPage() {
  const progress = useProgress();
  const [importText, setImportText] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const totalRead = ALL_LESSONS.filter((l) => progress.read[l.id]).length;
  const overallPercent = ALL_LESSONS.length === 0 ? 0 : Math.round((totalRead / ALL_LESSONS.length) * 100);

  function exportJson() {
    const data = JSON.stringify(loadProgress(), null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'java-spring-progress.json';
    a.click();
    URL.revokeObjectURL(url);
    setMessage('Đã export progress thành file JSON.');
  }

  function applyImport(raw: string) {
    try {
      const parsed = JSON.parse(raw) as ProgressState;
      if (parsed.version !== 1 || typeof parsed.read !== 'object') {
        throw new Error('Sai định dạng');
      }
      const normalized: ProgressState = {
        version: 1,
        read: parsed.read ?? {},
        checklist: parsed.checklist ?? {},
        quiz: parsed.quiz ?? {},
      };
      saveProgress(normalized);
      setMessage('Import thành công. Progress đã được cập nhật.');
    } catch {
      setMessage('Import thất bại: nội dung không phải JSON progress hợp lệ.');
    }
  }

  function resetAll() {
    saveProgress(EMPTY_PROGRESS);
    setMessage('Đã xóa toàn bộ progress trên trình duyệt này.');
  }

  return (
    <div className="container section">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol>
          <li><Link href="/" id="crumb-home-progress">Trang chủ</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">Progress</li>
        </ol>
      </nav>

      <h1>Tiến độ học tập</h1>
      <p className="section-sub">
        Progress lưu trong localStorage của trình duyệt này (key <code>{PROGRESS_KEY}</code>): bài đã đọc,
        trạng thái checklist và điểm quiz. Phần trăm theo track được tính trên toàn bộ bài học thuộc cấp độ của track.
        Toàn bộ chương trình gồm {ALL_LESSONS.length} bài ở 12 module.
      </p>

      {message && <p role="status" className="quiz-saved">{message}</p>}

      <section aria-labelledby="overall-progress-title">
        <h2 id="overall-progress-title">Tổng quan</h2>
        <p>
          Đã đọc {totalRead}/{ALL_LESSONS.length} bài ({overallPercent}%).
        </p>
        <div className="progress-bar" role="progressbar" aria-valuenow={overallPercent} aria-valuemin={0} aria-valuemax={100} aria-label="Phần trăm bài đã đọc">
          <div className="progress-bar-fill" style={{ width: `${overallPercent}%` }} />
        </div>
      </section>

      {TRACKS.map((track) => {
        const tp = trackProgress(track.level, progress);
        return (
          <section key={track.level} aria-labelledby={`progress-track-${track.level}`} className="track-section">
            <h2 id={`progress-track-${track.level}`}>{track.title}</h2>
            {tp.total === 0 ? (
              <p>Chưa có bài học nào thuộc cấp độ này.</p>
            ) : (
              <>
                <p>Đã đọc {tp.readCount}/{tp.total} bài ({tp.percent}%).</p>
                <div className="progress-bar" role="progressbar" aria-valuenow={tp.percent} aria-valuemin={0} aria-valuemax={100} aria-label={`Tiến độ track ${track.level}`}>
                  <div className="progress-bar-fill" style={{ width: `${tp.percent}%` }} />
                </div>
                <ul>
                  {tp.lessons.map((l) => (
                    <li key={l.id}>
                      <Link href={l.href} id={`progress-lesson-${l.id}`}>{l.title}</Link>
                      {' '}— {progress.read[l.id] ? 'Đã đọc' : 'Chưa đọc'}
                      {progress.quiz[l.id] && (
                        <> · Quiz: {progress.quiz[l.id].score}/{progress.quiz[l.id].total}</>
                      )}
                      {progress.checklist[l.id] && (
                        <> · Checklist: {progress.checklist[l.id].filter(Boolean).length}/{progress.checklist[l.id].length}</>
                      )}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </section>
        );
      })}

      <section aria-labelledby="export-import-title">
        <h2 id="export-import-title">Export / Import progress (JSON)</h2>
        <div className="progress-actions">
          <button id="progress-export-button" type="button" className="btn btn-primary" onClick={exportJson} aria-label="Export progress ra file JSON">
            Export JSON
          </button>
          <button
            id="progress-import-file-button"
            type="button"
            className="btn"
            onClick={() => fileInputRef.current?.click()}
            aria-label="Import progress từ file JSON"
          >
            Import từ file
          </button>
          <input
            ref={fileInputRef}
            id="progress-import-file-input"
            type="file"
            accept="application/json"
            hidden
            aria-label="Chọn file JSON progress để import"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              file.text().then(applyImport);
              e.target.value = '';
            }}
          />
          <button id="progress-reset-button" type="button" className="btn btn-danger" onClick={resetAll} aria-label="Xóa toàn bộ progress">
            Xóa toàn bộ progress
          </button>
        </div>
        <label htmlFor="import-json">Hoặc dán JSON progress vào đây rồi bấm Import:</label>
        <textarea
          id="import-json"
          value={importText}
          onChange={(e) => setImportText(e.target.value)}
          placeholder='{"version":1,"read":{},"checklist":{},"quiz":{}}'
        />
        <div className="progress-actions">
          <button
            id="progress-import-text-button"
            type="button"
            className="btn"
            onClick={() => applyImport(importText)}
            aria-label="Import progress từ nội dung JSON đã dán"
          >
            Import từ nội dung đã dán
          </button>
        </div>
      </section>
    </div>
  );
}
