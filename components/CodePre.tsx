'use client';

import React, { useRef, useState } from 'react';

function extractText(node: React.ReactNode): string {
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(extractText).join('');
  if (React.isValidElement(node)) {
    return extractText((node.props as { children?: React.ReactNode }).children);
  }
  return '';
}

/**
 * Wrapper cho <pre> trong MDX: hiển thị nhãn ngôn ngữ + tên file (từ meta
 * "filename=..." nếu có), nút copy. Highlight do rehype-highlight đảm nhiệm
 * ở tầng MDX pipeline.
 */
export default function CodePre(props: React.HTMLAttributes<HTMLPreElement> & {
  children?: React.ReactNode;
  'data-filename'?: string;
}) {
  const { children, ...rest } = props;
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  const codeElement = React.Children.toArray(children).find(React.isValidElement);
  const codeProps = codeElement && React.isValidElement(codeElement)
    ? (codeElement.props as { className?: string; 'data-filename'?: string; filename?: string })
    : {};
  const langMatch = /language-([\w-]+)/.exec(codeProps.className ?? '');
  const language = langMatch ? langMatch[1] : 'text';
  const filename =
    (props as Record<string, unknown>)['data-filename'] ??
    codeProps['data-filename'] ??
    codeProps.filename ??
    null;

  async function copy() {
    const text = preRef.current?.innerText ?? extractText(children);
    try {
      await navigator.clipboard.writeText(text.replace(/\n$/, ''));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  const copyId = React.useId().replace(/[^a-zA-Z0-9]/g, '');

  return (
    <div className="code-block">
      <div className="code-block-header">
        <span className="code-block-file">{filename ? String(filename) : `snippet.${language}`}</span>
        <span className="code-block-lang">{language}</span>
        <button
          id={`copy-btn-${copyId}`}
          type="button"
          className="code-copy-btn"
          onClick={copy}
          aria-label={filename ? `Copy code trong file ${String(filename)}` : 'Copy đoạn code này'}
        >
          {copied ? 'Đã copy' : 'Copy'}
        </button>
      </div>
      <pre ref={preRef} {...rest}>
        {children}
      </pre>
    </div>
  );
}
