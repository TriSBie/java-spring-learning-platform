import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import Header from '@/components/Header';
import './globals.css';
import 'highlight.js/styles/github-dark.css';

const inter = Inter({ subsets: ['latin', 'vietnamese'], variable: '--font-sans', display: 'swap' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap', preload: false });

export const metadata: Metadata = {
  metadataBase: new URL('https://java-spring-learning-platform.vercel.app'),
  title: {
    default: 'Java / Spring Learning Platform — Onboarding cho dev nội bộ',
    template: '%s | Java / Spring Learning Platform',
  },
  description:
    'Nền tảng học Java 21 và Spring Boot 3 cho đội dev nội bộ: 3 track Junior → Senior, 12 module, case study Nova Loyalty, quiz và workbook.',
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    shortcut: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    siteName: 'Java / Spring Learning Platform',
    url: 'https://java-spring-learning-platform.vercel.app/',
    title: 'Java / Spring Learning Platform',
    description:
      'Học Java 21 + Spring ecosystem theo lộ trình Junior → Middle → Senior với case study Nova Loyalty xuyên suốt.',
  },
};

const themeInitScript = `(function(){try{var t=window.localStorage.getItem('java-spring-theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}else{document.documentElement.setAttribute('data-theme','dark');}}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        <a href="#main-content" className="skip-link" id="skip-link">
          Bỏ qua tới nội dung chính
        </a>
        <Header />
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
