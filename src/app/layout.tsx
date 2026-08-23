import type { Metadata } from 'next';
import { Archivo, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import ScrollProgress from '@/components/ScrollProgress';
import { Analytics } from '@vercel/analytics/next';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Divyansh Mishra | Software Engineer & Full Stack Developer',
  description:
    'Portfolio of Divyansh Mishra — Software Engineer, Full Stack Developer, and problem solver specializing in React, Next.js, Node.js, Python, and scalable web applications.',
  authors: [{ name: 'Divyansh Mishra', url: 'https://github.com/DivyanshM30' }],
  metadataBase: new URL('https://divyanshm.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Divyansh Mishra | Software Engineer & Full Stack Developer',
    description:
      'Portfolio of Divyansh Mishra — Software Engineer, Full Stack Developer, and problem solver specializing in React, Next.js, Node.js, Python, and scalable web applications.',
    url: 'https://divyanshm.dev',
    siteName: 'Divyansh Mishra Portfolio',
    images: [
      {
        // ?v=3 cache-busts the previously-scraped placeholder image on social crawlers.
        url: '/og-image.png?v=3',
        width: 1200,
        height: 630,
        alt: 'Divyansh Mishra | Software Engineer & Full Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Divyansh Mishra | Software Engineer & Full Stack Developer',
    description:
      'Portfolio of Divyansh Mishra — Software Engineer, Full Stack Developer, and problem solver specializing in React, Next.js, Node.js, Python, and scalable web applications.',
    images: ['/og-image.png?v=3'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Divyansh Mishra',
    url: 'https://divyanshm.dev',
    image: 'https://divyanshm.dev/profile.png',
    jobTitle: 'Software Engineer & Full-Stack Developer',
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Vellore Institute of Technology',
    },
    knowsAbout: [
      'Software Engineering',
      'Data Structures and Algorithms',
      'Full-Stack Development',
      'React.js',
      'Next.js',
      'Node.js',
      'Python',
      'Flask',
      'Generative AI',
      'Cloud Computing',
    ],
    sameAs: [
      'https://github.com/DivyanshM30',
      'https://linkedin.com/in/DivyanshM30',
      'https://leetcode.com/DivyanshM30',
    ],
  };

  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        {/* Font Awesome for icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        {/* Schema Markup for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Runs before paint: marks the document as JS-capable (which enables the
            scroll-reveal animations' hidden starting state) and applies a saved
            preference over the server-rendered dark default so colours never flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var root = document.documentElement;
                root.classList.add('js');
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light' || theme === 'dark') {
                    root.dataset.theme = theme;
                  }
                } catch (e) {}

                function syncThemeToggle() {
                  var toggle = document.querySelector('[data-theme-toggle]');
                  if (!toggle) return false;

                  var activeTheme = root.dataset.theme === 'light' ? 'light' : 'dark';
                  var isDark = activeTheme === 'dark';
                  var label = isDark ? 'Switch to light mode' : 'Switch to dark mode';

                  toggle.dataset.themeState = activeTheme;
                  toggle.setAttribute('aria-checked', String(isDark));
                  toggle.setAttribute('aria-label', label);
                  toggle.setAttribute('title', label);
                  return true;
                }

                if (!syncThemeToggle()) {
                  var observer = new MutationObserver(function() {
                    if (syncThemeToggle()) observer.disconnect();
                  });
                  observer.observe(root, { childList: true, subtree: true });
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} ${archivo.variable} ${jetbrainsMono.variable}`}>
        <ThemeProvider>
          <ScrollProgress />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
