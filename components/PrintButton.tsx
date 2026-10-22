'use client';

interface PrintButtonProps {
  id: string;
  label?: string;
}

export default function PrintButton({ id, label = 'In cheat sheet này' }: PrintButtonProps) {
  return (
    <button
      type="button"
      id={id}
      className="btn btn-primary no-print"
      onClick={() => window.print()}
      aria-label="In cheat sheet này"
    >
      {label}
    </button>
  );
}
