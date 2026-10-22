import rawIncidents from './data/incidents.json';

export interface IncidentCase {
  slug: string;
  title: string;
  summary: string;
  novaContext: string;
  moduleIds: number[];
  lessonHrefs: string[];
  symptoms: string[];
  investigation: string[];
  rootCause: string;
  fix: string[];
  prevention: string[];
}

export const INCIDENTS: IncidentCase[] = rawIncidents as IncidentCase[];

export function getIncident(slug: string): IncidentCase | undefined {
  return INCIDENTS.find((incident) => incident.slug === slug);
}
