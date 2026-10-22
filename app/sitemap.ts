import type { MetadataRoute } from 'next';
import { LESSONS } from '@/lib/lessons-manifest';
import cheatSheetsData from '@/lib/data/cheatsheets.json';
import incidentsData from '@/lib/data/incidents.json';

export const dynamic = 'force-static';

const BASE = 'https://java-spring-learning-platform.vercel.app';
const LAST_MOD = new Date('2026-10-22');

interface CheatSheetEntry { slug: string }
interface IncidentEntry { slug: string }

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: LAST_MOD, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/learn/`, lastModified: LAST_MOD, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/roadmap/`, lastModified: LAST_MOD, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/progress/`, lastModified: LAST_MOD, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/glossary/`, lastModified: LAST_MOD, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/cheat-sheets/`, lastModified: LAST_MOD, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/incidents/`, lastModified: LAST_MOD, changeFrequency: 'monthly', priority: 0.8 },
  ];

  const lessonRoutes: MetadataRoute.Sitemap = LESSONS.map((lesson) => ({
    url: `${BASE}${lesson.href}`,
    lastModified: new Date(lesson.updated || '2026-10-22'),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const cheatSheetRoutes: MetadataRoute.Sitemap = (cheatSheetsData as CheatSheetEntry[]).map((sheet) => ({
    url: `${BASE}/cheat-sheets/${sheet.slug}/`,
    lastModified: LAST_MOD,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const incidentRoutes: MetadataRoute.Sitemap = (incidentsData as IncidentEntry[]).map((incident) => ({
    url: `${BASE}/incidents/${incident.slug}/`,
    lastModified: LAST_MOD,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...lessonRoutes, ...cheatSheetRoutes, ...incidentRoutes];
}
