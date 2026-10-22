# Java / Spring Learning Platform

Nền tảng học Java 21 + Spring ecosystem cho đội dev nội bộ (Junior → Senior), dùng để onboard và ôn luyện.
Site tĩnh hoàn toàn: không backend, không auth. Progress học tập lưu trong `localStorage` của trình duyệt.

> Trạng thái: **Phase 2** — đủ 62 bài học cho 12 module theo lesson map cố định.
> Bài học được phát hiện tự động từ file (data-driven): không cần đăng ký tay vào code.

## Production

- Site: https://java-spring-learning-platform.vercel.app
- Deploy tự động từ GitHub repo `TriSBie/java-spring-learning-platform`: project Vercel
  `java-spring-learning-platform` đã nối Git (production branch `main`) — push lên `main`
  là deploy production. Không deploy bằng upload file thủ công.

## Chạy local

Yêu cầu: Node.js 18.18+ (đã verify với Node 20/24).

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export ra thư mục out/
```

Kiểm tra nội dung (frontmatter, link official, API bị cấm):

```bash
npm run audit:content
```

## Kiến trúc nhanh

- `app/` — Next.js 14 App Router. Các route: `/` (landing), `/learn/` (danh mục),
  `/learn/[module]/[lesson]/` (route động cho mọi bài, `generateStaticParams` từ manifest),
  `/roadmap/`, `/progress/`, `/glossary/`, `/cheat-sheets/` + `/cheat-sheets/[slug]/`,
  `/incidents/` + `/incidents/[slug]/` (Phase 3).
- `lib/data/` — dữ liệu Phase 3 dạng JSON, render data-driven: `glossary.json` (130 thuật ngữ,
  qua `lib/glossary.ts`, trang `/glossary/` có tìm kiếm + lọc category, anchor `#<slug>` từng từ),
  `cheatsheets.json` (5 sheet: Spring Annotations, JVM Flags, kubectl, Kafka CLI, Maven — mỗi sheet
  một route, có nút in dùng print stylesheet trong `app/globals.css`),
  `incidents.json` (9 case sự cố, cấu trúc cố định Triệu chứng → Điều tra → Root cause → Fix →
  Phòng ngừa). Thêm/sửa nội dung Phase 3 = sửa các file JSON này, không cần sửa code trang.
  Search Cmd+K (`lib/search-index.ts`) đã bao gồm cả thuật ngữ, cheat sheet và sự cố.
- `content/module-<NN>/<slug>.mdx` — nội dung bài học dạng MDX, render bằng `next-mdx-remote` (RSC)
  + `remark-gfm`, `rehype-slug`, `rehype-highlight` (highlight.js). Tên file code lấy từ meta
  `filename=...` của code fence qua plugin nhỏ trong `lib/mdx-plugins.ts`.
  Mỗi bài có sidecar `content/module-<NN>/<slug>.quiz.json` chứa `checklist` và `quiz`.
- `scripts/gen-lessons.mjs` — quét `content/` và sinh `lib/lessons-manifest.ts` (metadata mọi bài)
  + `lib/lessons-data.ts` (checklist/quiz). Tự chạy ở `prebuild`/`predev`; chạy tay bằng
  `npm run gen:lessons`. Sidebar, Roadmap, Progress, Search và prev/next đều đọc từ manifest.
- `components/` — Header, SearchOverlay (Cmd+K, index tĩnh trong `lib/search-index.ts`),
  Sidebar, Toc (scroll-spy bằng IntersectionObserver), Mermaid (client component render SVG),
  Quiz, Checklist (nhận dữ liệu qua props từ trang bài học), MarkRead, ThemeToggle.
- `lib/` — dữ liệu dùng chung: `modules.ts` (12 module, 3 track, version pins; danh sách bài lấy từ
  manifest), `progress.ts` (schema localStorage), `search-index.ts` (sinh từ manifest).
- `examples/` — bản file đầy đủ của các snippet dài trong bài (ví dụ `examples/module-06/`).
- `scripts/audit-content.mjs` — script kiểm tra mọi bài: frontmatter, >= 2 link official,
  quiz 8–12 câu, checklist 5–8 mục, >= 3 sai lầm, >= 1 snippet, chuỗi bị cấm = 0. Từ Phase 3
  script còn kiểm tra: glossary >= 80 thuật ngữ và mọi `lessonHref` tồn tại trong manifest,
  đúng 5 cheat sheets (kèm PrintButton + `@media print`), incidents >= 8 case đủ cấu trúc,
  và quét chuỗi bị cấm thêm trong `lib/data/`.

Progress schema (key `java-spring-platform-progress-v1`):

```json
{ "version": 1, "read": { "<lessonId>": true }, "checklist": { "<lessonId>": [true, false] }, "quiz": { "<lessonId>": { "score": 8, "total": 10, "at": "<ISO date>" } } }
```

Trang `/progress/` có nút Export JSON (tải file), Import từ file hoặc dán JSON, và Xóa toàn bộ.

## Cách thêm một bài học mới

1. Tạo file MDX trong `content/module-<NN>/<slug>.mdx` với frontmatter bắt buộc:
   `title`, `module`, `level` (Junior | Middle | Senior), `duration` (phút), `order` (thứ tự trong module),
   `version_pins`, `updated`.
2. Tạo sidecar `content/module-<NN>/<slug>.quiz.json` với cấu trúc
   `{ "checklist": ["...", ...], "quiz": [{ "question", "options" (đúng 4), "answerIndex", "explanation" }] }`
   — checklist 5–8 mục, quiz 8–12 câu.
3. Viết bài theo template cố định: Mục tiêu → Vì sao cần biết (gắn case study Nova Loyalty) →
   Nội dung chính → Code → Sai lầm thường gặp (ít nhất 3 mục con `###`, dạng triệu chứng → nguyên nhân → fix) →
   Checklist tự kiểm (chèn `<LessonChecklist />`) → Workbook (3–4) → Quiz (chèn `<LessonQuiz />`) →
   Tài liệu chính thức (ít nhất 2 link official) → Đọc thêm (gắn nhãn "không chính thức" nếu có).
   Sơ đồ Mermaid chèn bằng `<Mermaid chart={`...`} label="..." />` với chart viết inline.
4. Không cần tạo route hay đăng ký vào file nào khác: route động `app/learn/[module]/[lesson]/`
   và manifest (sinh bởi `scripts/gen-lessons.mjs`, tự chạy ở prebuild/predev) sẽ tự phát hiện bài mới.
5. Snippet dài hơn 40 dòng: có thể để bản đầy đủ trong `examples/module-<NN>/`.
6. Chạy `npm run audit:content` và `npm run build`, cập nhật `CONTENT_AUDIT.md`.

## Cập nhật version pins

Version pins là nguồn sự thật duy nhất ở `lib/modules.ts` (hằng `VERSION_PINS`) và frontmatter `version_pins`
của từng bài. Khi nâng version (ví dụ Spring Boot 3.3.x lên bản mới):

1. Sửa `VERSION_PINS` trong `lib/modules.ts` (footer landing và các trang dùng chung sẽ tự cập nhật).
2. Rà frontmatter + phần "Version pins" của từng bài, đối chiếu release notes chính thức của bản mới.
3. Chạy lại `npm run audit:content` để chắc chắn không bài nào dùng API đã bị loại bỏ,
   rồi cập nhật cột ngày trong `CONTENT_AUDIT.md`.

## Quy ước nội dung (bắt buộc)

- Tiếng Việt; giữ nguyên thuật ngữ kỹ thuật tiếng Anh và tên class/annotation/config key.
- Chỉ dùng API hiện hành của Java 21 / Spring Boot 3.3.x / Kafka 3.8; mọi snippet phải có package + import đầy đủ.
- Nguồn chính chỉ là tài liệu chính thức (docs.spring.io, kafka.apache.org, debezium.io, …).
  Blog cộng đồng chỉ được để ở mục "Đọc thêm" với nhãn "không chính thức".
- Không bịa số liệu benchmark; chỗ chưa chắc chắn phải ghi cảnh báo "Cần verify với docs version X".
