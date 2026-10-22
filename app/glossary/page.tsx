import type { Metadata } from 'next';
import Link from 'next/link';
import GlossaryClient from '@/components/GlossaryClient';
import { GLOSSARY_TERMS } from '@/lib/glossary';

export const metadata: Metadata = {
  title: 'Glossary — Thuật ngữ',
  description:
    'Tra cứu thuật ngữ Java 21 và Spring Boot 3 bằng tiếng Việt: từ bean, N+1, SecurityFilterChain đến outbox, SNAT và draining — mỗi thuật ngữ trỏ về bài học liên quan nhất trong 12 module.',
  openGraph: {
    title: 'Glossary — Thuật ngữ | Java / Spring Learning Platform',
    description:
      'Từ điển thuật ngữ Java & Spring song ngữ theo ngữ cảnh Nova Loyalty, có tìm kiếm không dấu và lọc theo module.',
  },
};

export default function GlossaryPage() {
  return (
    <div className="container section">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol>
          <li>
            <Link href="/" id="crumb-home-glossary">
              Trang chủ
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">Glossary</li>
        </ol>
      </nav>

      <h1>Glossary — Thuật ngữ Java &amp; Spring</h1>
      <p className="section-sub">
        {GLOSSARY_TERMS.length} thuật ngữ cho cả 12 module, giải thích ngắn bằng tiếng Việt và giữ
        nguyên tên kỹ thuật tiếng Anh. Gõ không dấu vẫn tìm được, lọc nhanh theo module bằng các
        chip bên dưới, và mỗi thuật ngữ đều trỏ về bài học liên quan nhất — gồm cả các quyết định
        riêng của case study Nova Loyalty như 5 datasource không JTA hay draining 75 giây.
      </p>

      <GlossaryClient terms={GLOSSARY_TERMS} />
    </div>
  );
}
