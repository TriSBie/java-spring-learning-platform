// AUTO-GENERATED bởi scripts/gen-lessons.mjs — KHÔNG sửa tay. Chạy: node scripts/gen-lessons.mjs

export type LessonLevel = 'Junior' | 'Middle' | 'Senior';

export interface LessonMeta {
  id: string;
  slug: string;
  moduleSlug: string;
  moduleId: number;
  title: string;
  level: LessonLevel;
  durationMin: number;
  order: number;
  versionPins: string[];
  updated: string;
  href: string;
}

export const LESSONS: LessonMeta[] = [
  {
    "id": "m01-records-va-du-lieu-bat-bien",
    "slug": "records-va-du-lieu-bat-bien",
    "moduleSlug": "module-01",
    "moduleId": 1,
    "title": "Records và dữ liệu bất biến trong Java 21",
    "level": "Junior",
    "durationMin": 35,
    "order": 1,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-01/records-va-du-lieu-bat-bien/"
  },
  {
    "id": "m01-sealed-interfaces-pattern-matching",
    "slug": "sealed-interfaces-pattern-matching",
    "moduleSlug": "module-01",
    "moduleId": 1,
    "title": "Sealed interfaces và pattern matching cho switch",
    "level": "Middle",
    "durationMin": 45,
    "order": 2,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x",
      "Kafka 3.8"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-01/sealed-interfaces-pattern-matching/"
  },
  {
    "id": "m01-virtual-threads-jep-444",
    "slug": "virtual-threads-jep-444",
    "moduleSlug": "module-01",
    "moduleId": 1,
    "title": "Virtual Threads — JEP 444 và Spring Boot 3",
    "level": "Middle",
    "durationMin": 50,
    "order": 3,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x",
      "Micrometer 1.13.x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-01/virtual-threads-jep-444/"
  },
  {
    "id": "m01-stream-api-nang-cao",
    "slug": "stream-api-nang-cao",
    "moduleSlug": "module-01",
    "moduleId": 1,
    "title": "Stream API nâng cao: Collectors, groupingBy và teeing",
    "level": "Junior",
    "durationMin": 40,
    "order": 4,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-01/stream-api-nang-cao/"
  },
  {
    "id": "m01-generics-wildcard-pecs",
    "slug": "generics-wildcard-pecs",
    "moduleSlug": "module-01",
    "moduleId": 1,
    "title": "Generics, wildcard và nguyên tắc PECS",
    "level": "Middle",
    "durationMin": 45,
    "order": 5,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x",
      "Spring Data JPA 3.3.x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-01/generics-wildcard-pecs/"
  },
  {
    "id": "m01-optional-va-memory-model",
    "slug": "optional-va-memory-model",
    "moduleSlug": "module-01",
    "moduleId": 1,
    "title": "Optional anti-patterns và Java Memory Model",
    "level": "Senior",
    "durationMin": 55,
    "order": 6,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-01/optional-va-memory-model/"
  },
  {
    "id": "m02-ioc-di-bean-lifecycle",
    "slug": "ioc-di-bean-lifecycle",
    "moduleSlug": "module-02",
    "moduleId": 2,
    "title": "IoC, Dependency Injection và vòng đời bean",
    "level": "Junior",
    "durationMin": 40,
    "order": 1,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-02/ioc-di-bean-lifecycle/"
  },
  {
    "id": "m02-configuration-properties-profiles",
    "slug": "configuration-properties-profiles",
    "moduleSlug": "module-02",
    "moduleId": 2,
    "title": "ConfigurationProperties, profiles và Configuration so với Component",
    "level": "Junior",
    "durationMin": 40,
    "order": 2,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-02/configuration-properties-profiles/"
  },
  {
    "id": "m02-actuator-health-metrics",
    "slug": "actuator-health-metrics",
    "moduleSlug": "module-02",
    "moduleId": 2,
    "title": "Actuator: health, metrics và Micrometer cơ bản",
    "level": "Middle",
    "durationMin": 40,
    "order": 3,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x",
      "Micrometer 1.13.x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-02/actuator-health-metrics/"
  },
  {
    "id": "m02-testing-slice-tests",
    "slug": "testing-slice-tests",
    "moduleSlug": "module-02",
    "moduleId": 2,
    "title": "Testing trong Spring Boot: slice tests và MockMvc",
    "level": "Middle",
    "durationMin": 50,
    "order": 4,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x",
      "Spring Data JPA 3.3.x",
      "Hibernate 6.5.x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-02/testing-slice-tests/"
  },
  {
    "id": "m02-testcontainers",
    "slug": "testcontainers",
    "moduleSlug": "module-02",
    "moduleId": 2,
    "title": "Testcontainers cho PostgreSQL và Kafka",
    "level": "Middle",
    "durationMin": 50,
    "order": 5,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x",
      "Spring Data JPA 3.3.x",
      "Kafka 3.8"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-02/testcontainers/"
  },
  {
    "id": "m02-spring-boot-auto-configuration",
    "slug": "spring-boot-auto-configuration",
    "moduleSlug": "module-02",
    "moduleId": 2,
    "title": "Spring Boot Auto-configuration: bên trong cơ chế tự cấu hình",
    "level": "Senior",
    "durationMin": 55,
    "order": 6,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-02/spring-boot-auto-configuration/"
  },
  {
    "id": "m03-hibernate-6-mapping-fetch",
    "slug": "hibernate-6-mapping-fetch",
    "moduleSlug": "module-03",
    "moduleId": 3,
    "title": "Hibernate 6: mapping, fetch types và batch fetching",
    "level": "Middle",
    "durationMin": 50,
    "order": 1,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x",
      "Spring Data JPA 3.3.x",
      "Hibernate 6.5.x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-03/hibernate-6-mapping-fetch/"
  },
  {
    "id": "m03-n-plus-1-fetch-strategies",
    "slug": "n-plus-1-fetch-strategies",
    "moduleSlug": "module-03",
    "moduleId": 3,
    "title": "N+1: phát hiện và các chiến lược fetch",
    "level": "Middle",
    "durationMin": 50,
    "order": 2,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x",
      "Spring Data JPA 3.3.x",
      "Hibernate 6.5.x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-03/n-plus-1-fetch-strategies/"
  },
  {
    "id": "m03-hikaricp-tuning",
    "slug": "hikaricp-tuning",
    "moduleSlug": "module-03",
    "moduleId": 3,
    "title": "HikariCP tuning: pool size, timeout và leak detection",
    "level": "Senior",
    "durationMin": 55,
    "order": 3,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x",
      "Spring Data JPA 3.3.x",
      "Hibernate 6.5.x",
      "Micrometer 1.13.x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-03/hikaricp-tuning/"
  },
  {
    "id": "m03-multi-datasource-khong-jta",
    "slug": "multi-datasource-khong-jta",
    "moduleSlug": "module-03",
    "moduleId": 3,
    "title": "Multi-datasource không JTA: kiến trúc của Nova Loyalty",
    "level": "Senior",
    "durationMin": 60,
    "order": 4,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x",
      "Spring Data JPA 3.3.x",
      "Hibernate 6.5.x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-03/multi-datasource-khong-jta/"
  },
  {
    "id": "m03-locking-va-flyway",
    "slug": "locking-va-flyway",
    "moduleSlug": "module-03",
    "moduleId": 3,
    "title": "Locking: optimistic, pessimistic và Flyway migrations",
    "level": "Middle",
    "durationMin": 50,
    "order": 5,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x",
      "Spring Data JPA 3.3.x",
      "Hibernate 6.5.x",
      "Flyway 10.x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-03/locking-va-flyway/"
  },
  {
    "id": "m04-security-filter-chain-filter-order",
    "slug": "security-filter-chain-filter-order",
    "moduleSlug": "module-04",
    "moduleId": 4,
    "title": "SecurityFilterChain và thứ tự filter trong Spring Security 6",
    "level": "Middle",
    "durationMin": 45,
    "order": 1,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x",
      "Spring Security 6.3.x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-04/security-filter-chain-filter-order/"
  },
  {
    "id": "m04-jwt-once-per-request-filter",
    "slug": "jwt-once-per-request-filter",
    "moduleSlug": "module-04",
    "moduleId": 4,
    "title": "JWT với OncePerRequestFilter và SecurityContext",
    "level": "Middle",
    "durationMin": 55,
    "order": 2,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x",
      "Spring Security 6.3.x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-04/jwt-once-per-request-filter/"
  },
  {
    "id": "m04-method-security",
    "slug": "method-security",
    "moduleSlug": "module-04",
    "moduleId": 4,
    "title": "Method Security với @EnableMethodSecurity và @PreAuthorize",
    "level": "Middle",
    "durationMin": 45,
    "order": 3,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x",
      "Spring Security 6.3.x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-04/method-security/"
  },
  {
    "id": "m04-cors-csrf-cho-api",
    "slug": "cors-csrf-cho-api",
    "moduleSlug": "module-04",
    "moduleId": 4,
    "title": "CORS và CSRF cho API stateless dùng token",
    "level": "Junior",
    "durationMin": 40,
    "order": 4,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x",
      "Spring Security 6.3.x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-04/cors-csrf-cho-api/"
  },
  {
    "id": "m04-migrate-handler-interceptor-sang-filter-chain",
    "slug": "migrate-handler-interceptor-sang-filter-chain",
    "moduleSlug": "module-04",
    "moduleId": 4,
    "title": "Migrate từ HandlerInterceptor sang SecurityFilterChain",
    "level": "Senior",
    "durationMin": 60,
    "order": 5,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x",
      "Spring Security 6.3.x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-04/migrate-handler-interceptor-sang-filter-chain/"
  },
  {
    "id": "m05-tcp-handshake-keepalive-timeout",
    "slug": "tcp-handshake-keepalive-timeout",
    "moduleSlug": "module-05",
    "moduleId": 5,
    "title": "TCP handshake, keep-alive và các lớp timeout",
    "level": "Junior",
    "durationMin": 40,
    "order": 1,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-05/tcp-handshake-keepalive-timeout/"
  },
  {
    "id": "m05-http2-tls-termination",
    "slug": "http2-tls-termination",
    "moduleSlug": "module-05",
    "moduleId": 5,
    "title": "HTTP/2, TLS termination và mTLS nhập môn",
    "level": "Middle",
    "durationMin": 45,
    "order": 2,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-05/http2-tls-termination/"
  },
  {
    "id": "m05-dns-service-discovery-load-balancer",
    "slug": "dns-service-discovery-load-balancer",
    "moduleSlug": "module-05",
    "moduleId": 5,
    "title": "DNS, service discovery và load balancer trong Kubernetes",
    "level": "Middle",
    "durationMin": 45,
    "order": 3,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x",
      "Kafka 3.8"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-05/dns-service-discovery-load-balancer/"
  },
  {
    "id": "m05-snat-conntrack-mat-client-ip",
    "slug": "snat-conntrack-mat-client-ip",
    "moduleSlug": "module-05",
    "moduleId": 5,
    "title": "SNAT, conntrack và vì sao pod mất client IP thật",
    "level": "Senior",
    "durationMin": 55,
    "order": 4,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x",
      "Kafka 3.8"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-05/snat-conntrack-mat-client-ip/"
  },
  {
    "id": "m05-grpc-vs-rest",
    "slug": "grpc-vs-rest",
    "moduleSlug": "module-05",
    "moduleId": 5,
    "title": "gRPC và REST: chọn giao thức cho từng lời gọi",
    "level": "Middle",
    "durationMin": 45,
    "order": 5,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-05/grpc-vs-rest/"
  },
  {
    "id": "m06-outbox-debezium-kafka",
    "slug": "outbox-debezium-kafka",
    "moduleSlug": "module-06",
    "moduleId": 6,
    "title": "Transactional Outbox + Debezium + Kafka",
    "level": "Middle",
    "durationMin": 45,
    "order": 1,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.5",
      "Spring Framework 6.1.x",
      "Spring Data JPA 3.3.x",
      "Hibernate 6.5.x",
      "Kafka 3.8",
      "Debezium 2.7.x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-06/outbox-debezium-kafka/"
  },
  {
    "id": "m06-api-gateway-kong-routing",
    "slug": "api-gateway-kong-routing",
    "moduleSlug": "module-06",
    "moduleId": 6,
    "title": "API Gateway với Kong: routing theo /v4/{gs,os,ws}/* và plugins",
    "level": "Middle",
    "durationMin": 45,
    "order": 2,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x",
      "Spring Security 6.3.x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-06/api-gateway-kong-routing/"
  },
  {
    "id": "m06-service-to-service-auth",
    "slug": "service-to-service-auth",
    "moduleSlug": "module-06",
    "moduleId": 6,
    "title": "Xác thực service-to-service: JWT nội bộ, client credentials và mTLS",
    "level": "Senior",
    "durationMin": 55,
    "order": 3,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x",
      "Spring Security 6.3.x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-06/service-to-service-auth/"
  },
  {
    "id": "m06-saga-choreography-orchestration",
    "slug": "saga-choreography-orchestration",
    "moduleSlug": "module-06",
    "moduleId": 6,
    "title": "Saga: choreography, orchestration và compensating transaction",
    "level": "Senior",
    "durationMin": 60,
    "order": 4,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x",
      "Kafka 3.8"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-06/saga-choreography-orchestration/"
  },
  {
    "id": "m06-idempotency-key-giao-dich-diem",
    "slug": "idempotency-key-giao-dich-diem",
    "moduleSlug": "module-06",
    "moduleId": 6,
    "title": "Idempotency key cho giao dịch điểm: unique constraint, stored response và CAS",
    "level": "Middle",
    "durationMin": 50,
    "order": 5,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x",
      "Spring Data JPA 3.3.x",
      "Kafka 3.8"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-06/idempotency-key-giao-dich-diem/"
  },
  {
    "id": "m06-retry-backoff-dlq-graceful-shutdown",
    "slug": "retry-backoff-dlq-graceful-shutdown",
    "moduleSlug": "module-06",
    "moduleId": 6,
    "title": "Retry với backoff, DLQ và graceful shutdown draining 75 giây",
    "level": "Senior",
    "durationMin": 55,
    "order": 6,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x",
      "Spring Kafka 3.3.x",
      "Kafka 3.8"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-06/retry-backoff-dlq-graceful-shutdown/"
  },
  {
    "id": "m07-strategy-qua-bean-map",
    "slug": "strategy-qua-bean-map",
    "moduleSlug": "module-07",
    "moduleId": 7,
    "title": "Strategy qua Spring Bean Map",
    "level": "Junior",
    "durationMin": 40,
    "order": 1,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-07/strategy-qua-bean-map/"
  },
  {
    "id": "m07-template-method",
    "slug": "template-method",
    "moduleSlug": "module-07",
    "moduleId": 7,
    "title": "Template Method cho Import File Đối Tác",
    "level": "Junior",
    "durationMin": 40,
    "order": 2,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-07/template-method/"
  },
  {
    "id": "m07-builder-pattern",
    "slug": "builder-pattern",
    "moduleSlug": "module-07",
    "moduleId": 7,
    "title": "Builder cho Report Criteria Phức Tạp",
    "level": "Junior",
    "durationMin": 35,
    "order": 3,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-07/builder-pattern/"
  },
  {
    "id": "m07-decorator-proxy-primary",
    "slug": "decorator-proxy-primary",
    "moduleSlug": "module-07",
    "moduleId": 7,
    "title": "Decorator qua Spring Proxy và Primary Bean",
    "level": "Middle",
    "durationMin": 50,
    "order": 4,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-07/decorator-proxy-primary/"
  },
  {
    "id": "m07-observer-application-event",
    "slug": "observer-application-event",
    "moduleSlug": "module-07",
    "moduleId": 7,
    "title": "Observer qua ApplicationEvent và TransactionalEventListener",
    "level": "Middle",
    "durationMin": 45,
    "order": 5,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-07/observer-application-event/"
  },
  {
    "id": "m07-enterprise-patterns-repository-specification-cqrs",
    "slug": "enterprise-patterns-repository-specification-cqrs",
    "moduleSlug": "module-07",
    "moduleId": 7,
    "title": "Repository, Specification và CQRS Nhẹ cho Báo Cáo",
    "level": "Senior",
    "durationMin": 60,
    "order": 6,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x",
      "Hibernate 6.5.x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-07/enterprise-patterns-repository-specification-cqrs/"
  },
  {
    "id": "m08-jvm-memory-gc-g1-zgc",
    "slug": "jvm-memory-gc-g1-zgc",
    "moduleSlug": "module-08",
    "moduleId": 8,
    "title": "Bộ Nhớ JVM, G1 và ZGC: Chọn GC Đúng Bài Toán",
    "level": "Senior",
    "durationMin": 55,
    "order": 1,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-08/jvm-memory-gc-g1-zgc/"
  },
  {
    "id": "m08-heap-sizing-trong-container",
    "slug": "heap-sizing-trong-container",
    "moduleSlug": "module-08",
    "moduleId": 8,
    "title": "Định Cỡ Heap Trong Container và OOMKilled",
    "level": "Senior",
    "durationMin": 50,
    "order": 2,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-08/heap-sizing-trong-container/"
  },
  {
    "id": "m08-connection-pool-sizing",
    "slug": "connection-pool-sizing",
    "moduleSlug": "module-08",
    "moduleId": 8,
    "title": "Định Cỡ Connection Pool và Ngân Sách Timeout",
    "level": "Middle",
    "durationMin": 50,
    "order": 3,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x",
      "Hibernate 6.5.x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-08/connection-pool-sizing/"
  },
  {
    "id": "m08-caching-caffeine-redis-cacheable",
    "slug": "caching-caffeine-redis-cacheable",
    "moduleSlug": "module-08",
    "moduleId": 8,
    "title": "Caching Hai Tầng: Caffeine, Redis và Cacheable",
    "level": "Middle",
    "durationMin": 50,
    "order": 4,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x",
      "Micrometer 1.13.x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-08/caching-caffeine-redis-cacheable/"
  },
  {
    "id": "m08-profiling-jfr-async-profiler",
    "slug": "profiling-jfr-async-profiler",
    "moduleSlug": "module-08",
    "moduleId": 8,
    "title": "Profiling bằng JFR và async-profiler",
    "level": "Senior",
    "durationMin": 55,
    "order": 5,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x",
      "Micrometer 1.13.x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-08/profiling-jfr-async-profiler/"
  },
  {
    "id": "m09-ba-tru-cot-micrometer-prometheus",
    "slug": "ba-tru-cot-micrometer-prometheus",
    "moduleSlug": "module-09",
    "moduleId": 9,
    "title": "Ba Trụ Cột Observability, Micrometer và Prometheus",
    "level": "Middle",
    "durationMin": 50,
    "order": 1,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x",
      "Micrometer 1.13.x",
      "OpenTelemetry Java 1.4x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-09/ba-tru-cot-micrometer-prometheus/"
  },
  {
    "id": "m09-grafana-dashboard",
    "slug": "grafana-dashboard",
    "moduleSlug": "module-09",
    "moduleId": 9,
    "title": "Grafana Dashboard cho JVM, Hikari và Kafka Lag",
    "level": "Middle",
    "durationMin": 45,
    "order": 2,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x",
      "Micrometer 1.13.x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-09/grafana-dashboard/"
  },
  {
    "id": "m09-opentelemetry-tracing-kafka-propagation",
    "slug": "opentelemetry-tracing-kafka-propagation",
    "moduleSlug": "module-09",
    "moduleId": 9,
    "title": "OpenTelemetry Tracing và Lan Truyền Ngữ Cảnh qua Kafka",
    "level": "Senior",
    "durationMin": 60,
    "order": 3,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x",
      "Micrometer 1.13.x",
      "OpenTelemetry Java 1.4x",
      "Kafka 3.8"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-09/opentelemetry-tracing-kafka-propagation/"
  },
  {
    "id": "m09-structured-logging-mdc",
    "slug": "structured-logging-mdc",
    "moduleSlug": "module-09",
    "moduleId": 9,
    "title": "Structured Logging, MDC và Vệ Sinh Log",
    "level": "Middle",
    "durationMin": 45,
    "order": 4,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x",
      "Micrometer 1.13.x",
      "OpenTelemetry Java 1.4x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-09/structured-logging-mdc/"
  },
  {
    "id": "m09-alert-rules-va-slo",
    "slug": "alert-rules-va-slo",
    "moduleSlug": "module-09",
    "moduleId": 9,
    "title": "Alert Rules, SLI, SLO và Runbook",
    "level": "Senior",
    "durationMin": 55,
    "order": 5,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x",
      "Micrometer 1.13.x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-09/alert-rules-va-slo/"
  },
  {
    "id": "m10-spring-cloud-config",
    "slug": "spring-cloud-config",
    "moduleSlug": "module-10",
    "moduleId": 10,
    "title": "Spring Cloud Config — Quản lý cấu hình tập trung",
    "level": "Middle",
    "durationMin": 45,
    "order": 1,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x",
      "Spring Cloud 2023.0.x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-10/spring-cloud-config/"
  },
  {
    "id": "m10-spring-cloud-gateway-vs-kong",
    "slug": "spring-cloud-gateway-vs-kong",
    "moduleSlug": "module-10",
    "moduleId": 10,
    "title": "Spring Cloud Gateway so với Kong — Chọn gateway cho Nova Loyalty",
    "level": "Middle",
    "durationMin": 50,
    "order": 2,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x",
      "Spring Cloud 2023.0.x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-10/spring-cloud-gateway-vs-kong/"
  },
  {
    "id": "m10-resilience4j-circuit-breaker-bulkhead",
    "slug": "resilience4j-circuit-breaker-bulkhead",
    "moduleSlug": "module-10",
    "moduleId": 10,
    "title": "Resilience4j — Circuit Breaker và Bulkhead",
    "level": "Middle",
    "durationMin": 55,
    "order": 3,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x",
      "Spring Cloud 2023.0.x",
      "Resilience4j 2.x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-10/resilience4j-circuit-breaker-bulkhead/"
  },
  {
    "id": "m10-resilience4j-rate-time-limiter",
    "slug": "resilience4j-rate-time-limiter",
    "moduleSlug": "module-10",
    "moduleId": 10,
    "title": "Resilience4j — Rate Limiter, Time Limiter và thứ tự aspect",
    "level": "Senior",
    "durationMin": 50,
    "order": 4,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x",
      "Spring Cloud 2023.0.x",
      "Resilience4j 2.x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-10/resilience4j-rate-time-limiter/"
  },
  {
    "id": "m11-dockerfile-multi-stage-layered-jar",
    "slug": "dockerfile-multi-stage-layered-jar",
    "moduleSlug": "module-11",
    "moduleId": 11,
    "title": "Dockerfile multi-stage và layered jar cho Spring Boot",
    "level": "Junior",
    "durationMin": 45,
    "order": 1,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-11/dockerfile-multi-stage-layered-jar/"
  },
  {
    "id": "m11-jvm-flags-trong-container",
    "slug": "jvm-flags-trong-container",
    "moduleSlug": "module-11",
    "moduleId": 11,
    "title": "Cờ JVM trong container — RAM, entropy và timezone",
    "level": "Middle",
    "durationMin": 45,
    "order": 2,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-11/jvm-flags-trong-container/"
  },
  {
    "id": "m11-deployment-service-ingress-probes",
    "slug": "deployment-service-ingress-probes",
    "moduleSlug": "module-11",
    "moduleId": 11,
    "title": "Deployment, Service, Ingress và probes qua Actuator",
    "level": "Middle",
    "durationMin": 55,
    "order": 3,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-11/deployment-service-ingress-probes/"
  },
  {
    "id": "m11-hpa-configmap-secret",
    "slug": "hpa-configmap-secret",
    "moduleSlug": "module-11",
    "moduleId": 11,
    "title": "HPA, ConfigMap và Secret — Cấu hình theo môi trường",
    "level": "Middle",
    "durationMin": 50,
    "order": 4,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-11/hpa-configmap-secret/"
  },
  {
    "id": "m11-prestop-graceful-shutdown-k8s",
    "slug": "prestop-graceful-shutdown-k8s",
    "moduleSlug": "module-11",
    "moduleId": 11,
    "title": "preStop và graceful shutdown — Bài toán draining 75 giây",
    "level": "Senior",
    "durationMin": 55,
    "order": 5,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x",
      "Kafka 3.8"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-11/prestop-graceful-shutdown-k8s/"
  },
  {
    "id": "m12-maven-build-lifecycle",
    "slug": "maven-build-lifecycle",
    "moduleSlug": "module-12",
    "moduleId": 12,
    "title": "Maven build lifecycle — Pha, plugin và multi-module",
    "level": "Junior",
    "durationMin": 40,
    "order": 1,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-12/maven-build-lifecycle/"
  },
  {
    "id": "m12-github-actions-pipeline",
    "slug": "github-actions-pipeline",
    "moduleSlug": "module-12",
    "moduleId": 12,
    "title": "GitHub Actions pipeline — Test, build image, đẩy registry",
    "level": "Middle",
    "durationMin": 55,
    "order": 2,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-12/github-actions-pipeline/"
  },
  {
    "id": "m12-flyway-trong-pipeline",
    "slug": "flyway-trong-pipeline",
    "moduleSlug": "module-12",
    "moduleId": 12,
    "title": "Flyway trong pipeline — Migration là một bước triển khai",
    "level": "Middle",
    "durationMin": 50,
    "order": 3,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-12/flyway-trong-pipeline/"
  },
  {
    "id": "m12-versioning-rollback",
    "slug": "versioning-rollback",
    "moduleSlug": "module-12",
    "moduleId": 12,
    "title": "Versioning và rollback — Phát hành có đường lui",
    "level": "Senior",
    "durationMin": 55,
    "order": 4,
    "versionPins": [
      "Java 21",
      "Spring Boot 3.3.x",
      "Spring Framework 6.1.x",
      "Kafka 3.8"
    ],
    "updated": "2026-10-22",
    "href": "/learn/module-12/versioning-rollback/"
  }
];

export function lessonById(id: string): LessonMeta | undefined {
  return LESSONS.find((l) => l.id === id);
}

export function lessonsOfModule(moduleId: number): LessonMeta[] {
  return LESSONS.filter((l) => l.moduleId === moduleId);
}

export function adjacentLessons(id: string): { prev?: LessonMeta; next?: LessonMeta } {
  const i = LESSONS.findIndex((l) => l.id === id);
  if (i < 0) return {};
  return { prev: LESSONS[i - 1], next: LESSONS[i + 1] };
}
