import data from './data/cheatsheets.json';

export interface CheatSheetRow {
  item: string;
  meaning: string;
}

export interface CheatSheetSection {
  heading: string;
  rows: CheatSheetRow[];
}

export interface CheatSheet {
  slug: string;
  title: string;
  description: string;
  moduleId: number;
  lessonHrefs: string[];
  sections: CheatSheetSection[];
}

export const CHEAT_SHEETS: CheatSheet[] = data as CheatSheet[];

export function getCheatSheet(slug: string): CheatSheet | undefined {
  return CHEAT_SHEETS.find((sheet) => sheet.slug === slug);
}
