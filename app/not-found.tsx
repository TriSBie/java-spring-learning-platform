import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Không tìm thấy trang (404)',
  description: 'Trang bạn tìm không tồn tại trên Java / Spring Learning Platform.',
};

export default function NotFound() {
  return (
    <div className="container section">
      <h1>404 — Không tìm thấy trang</h1>
      <p className="section-sub">
        Đường dẫn này không tồn tại hoặc đã được dời đi. Bạn có thể quay về trang chủ,
        xem toàn bộ học liệu hoặc tra cứu thuật ngữ trong Glossary.
      </p>
      <div className="hero-ctas">
        <Link href="/" className="btn btn-primary" id="notfound-home">
          Về trang chủ
        </Link>
        <Link href="/learn/" className="btn" id="notfound-learn">
          Xem học liệu
        </Link>
        <Link href="/glossary/" className="btn" id="notfound-glossary">
          Tra cứu Glossary
        </Link>
      </div>
    </div>
  );
}
