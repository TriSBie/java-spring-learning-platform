import glossaryData from './data/glossary.json';

export interface GlossaryTerm {
  term: string;
  slug: string;
  vi: string;
  category: string;
  moduleId: number;
  lessonHref: string;
}

const rawTerms = glossaryData as GlossaryTerm[];

export const GLOSSARY_TERMS: GlossaryTerm[] = [...rawTerms].sort((a, b) =>
  a.term.localeCompare(b.term, 'en', { sensitivity: 'base' }),
);

export const GLOSSARY_CATEGORIES: string[] = (() => {
  const seen = new Map<number, string>();
  for (const t of rawTerms) {
    if (!seen.has(t.moduleId)) seen.set(t.moduleId, t.category);
  }
  return Array.from(seen.entries())
    .sort((a, b) => a[0] - b[0])
    .map((entry) => entry[1]);
})();
