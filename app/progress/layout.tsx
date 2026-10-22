import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tiến độ học tập',
  description:
    'Xem phần trăm hoàn thành theo từng track, điểm quiz đã lưu, và export/import progress dạng JSON (localStorage).',
  openGraph: { title: 'Progress | Java / Spring Learning Platform' },
};

export default function ProgressLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
