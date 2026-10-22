export type Level = 'Junior' | 'Middle' | 'Senior';

export interface LessonInfo {
  id: string;
  slug: string;
  title: string;
  level: Level;
  durationMin: number;
  moduleId: number;
  href: string;
  available: boolean;
}

export interface ModuleInfo {
  id: number;
  code: string;
  name: string;
  plannedLessons: number;
  levels: Level[];
  focus: string;
}

export const VERSION_PINS = [
  { label: 'Java', value: '21 (LTS)' },
  { label: 'Spring Boot', value: '3.3.x' },
  { label: 'Spring Framework', value: '6.1.x' },
  { label: 'Spring Security', value: '6.3.x' },
  { label: 'Spring Data JPA', value: '3.3.x' },
  { label: 'Hibernate', value: '6.5.x' },
  { label: 'Apache Kafka', value: '3.8' },
  { label: 'Resilience4j', value: '2.x' },
  { label: 'Micrometer', value: '1.13.x' },
  { label: 'OpenTelemetry Java', value: '1.4x' },
] as const;

export const UPDATED_DATE = '2026-10-22';

export const MODULES: ModuleInfo[] = [
  { id: 1, code: '01', name: 'Java 21 Core', plannedLessons: 6, levels: ['Junior', 'Middle', 'Senior'], focus: 'records, sealed interfaces, pattern matching, virtual threads, Stream API, generics, Optional' },
  { id: 2, code: '02', name: 'Spring Boot 3 Foundations', plannedLessons: 6, levels: ['Junior', 'Middle', 'Senior'], focus: 'IoC/DI, bean lifecycle, profiles, ConfigurationProperties, Actuator, testing' },
  { id: 3, code: '03', name: 'Spring Data JPA + Multi-datasource', plannedLessons: 5, levels: ['Middle', 'Senior'], focus: 'Hibernate 6, N+1, HikariCP, nhiều datasource không JTA, Flyway, locking' },
  { id: 4, code: '04', name: 'Spring Security 6 + JWT', plannedLessons: 5, levels: ['Junior', 'Middle', 'Senior'], focus: 'SecurityFilterChain, JWT filter, method security, CORS/CSRF, legacy interceptor migration' },
  { id: 5, code: '05', name: 'Networking cho Backend Dev', plannedLessons: 5, levels: ['Junior', 'Middle', 'Senior'], focus: 'TCP, HTTP/1.1 vs HTTP/2, TLS, DNS, load balancer, SNAT & conntrack, gRPC' },
  { id: 6, code: '06', name: 'Microservices Patterns', plannedLessons: 6, levels: ['Middle', 'Senior'], focus: 'API Gateway, Outbox + Debezium/Kafka, Saga, idempotency, retry/DLQ, graceful shutdown' },
  { id: 7, code: '07', name: 'Design Patterns qua Case Study Java', plannedLessons: 6, levels: ['Junior', 'Middle', 'Senior'], focus: 'GoF trong Spring, Repository, Specification, CQRS nhẹ' },
  { id: 8, code: '08', name: 'Performance', plannedLessons: 5, levels: ['Middle', 'Senior'], focus: 'JVM, GC G1 vs ZGC, heap sizing, connection pool, caching, profiling' },
  { id: 9, code: '09', name: 'Observability', plannedLessons: 5, levels: ['Middle', 'Senior'], focus: 'Micrometer, Prometheus, Grafana, OpenTelemetry tracing, structured logging, alerting' },
  { id: 10, code: '10', name: 'Spring Cloud', plannedLessons: 4, levels: ['Middle', 'Senior'], focus: 'Config, Gateway, Resilience4j circuit breaker / bulkhead / rate limiter' },
  { id: 11, code: '11', name: 'Docker + Kubernetes cho Spring', plannedLessons: 5, levels: ['Junior', 'Middle', 'Senior'], focus: 'multi-stage Dockerfile, JVM flags, probes qua Actuator, HPA, ConfigMap/Secret, preStop' },
  { id: 12, code: '12', name: 'CI/CD', plannedLessons: 4, levels: ['Junior', 'Middle', 'Senior'], focus: 'Maven lifecycle, GitHub Actions, Flyway trong pipeline, versioning & rollback' },
];

import { LESSONS } from './lessons-manifest';

export const ALL_LESSONS: LessonInfo[] = LESSONS.map((l) => ({
  id: l.id,
  slug: l.slug,
  title: l.title,
  level: l.level,
  durationMin: l.durationMin,
  moduleId: l.moduleId,
  href: l.href,
  available: true,
}));

export const SAMPLE_LESSON: LessonInfo =
  ALL_LESSONS.find((l) => l.id === 'm06-outbox-debezium-kafka') ?? ALL_LESSONS[0];

export function firstLessonOfModule(moduleId: number): LessonInfo | undefined {
  return ALL_LESSONS.find((l) => l.moduleId === moduleId);
}

export function firstLessonOfLevel(level: Level): LessonInfo | undefined {
  return ALL_LESSONS.find((l) => l.level === level);
}

export interface TrackInfo {
  level: Level;
  title: string;
  description: string;
  outcome: string;
  moduleIds: number[];
}

export const TRACKS: TrackInfo[] = [
  {
    level: 'Junior',
    title: 'Junior Track — Đọc hiểu & viết được code',
    description: 'Nền tảng Java 21 và Spring Boot 3 để đọc hiểu codebase nội bộ, viết REST endpoint, repository và test.',
    outcome: 'Viết được REST endpoint + repository + test trong một service Spring Boot 3.',
    moduleIds: [1, 2, 5, 7, 11, 12],
  },
  {
    level: 'Middle',
    title: 'Middle Track — Thiết kế được một service',
    description: 'Data, security, microservices patterns và observability để tự thiết kế một service hoàn chỉnh.',
    outcome: 'Thiết kế được service với multi-datasource, security filter chain, outbox/Kafka và idempotency.',
    moduleIds: [3, 4, 6, 9, 10],
  },
  {
    level: 'Senior',
    title: 'Senior Track — Vận hành & review kiến trúc',
    description: 'Performance, tuning JVM/GC/pool, observability nâng cao và review kiến trúc microservice.',
    outcome: 'Tune JVM/GC/connection pool, dựng observability stack, viết runbook và review kiến trúc.',
    moduleIds: [5, 6, 8, 9, 11],
  },
];

export function totalPlannedLessons(): number {
  return MODULES.reduce((s, m) => s + m.plannedLessons, 0);
}
