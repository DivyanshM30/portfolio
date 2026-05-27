import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
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
  metadataBase: new URL('https://divyansh-mishra-portfolio.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Divyansh Mishra | Software Engineer & Full Stack Developer',
    description:
      'Portfolio of Divyansh Mishra — Software Engineer, Full Stack Developer, and problem solver specializing in React, Next.js, Node.js, Python, and scalable web applications.',
    url: 'https://divyansh-mishra-portfolio.vercel.app',
    siteName: 'Divyansh Mishra Portfolio',
    images: [
      {
        url: '/og-image.png',
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
    images: ['/og-image.png'],
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
    url: 'https://divyansh-mishra-portfolio.vercel.app',
    image: 'https://divyansh-mishra-portfolio.vercel.app/profile.png',
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
    <html lang="en" suppressHydrationWarning>
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
        {/* Script to prevent FOUC - sets theme before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme) {
                    document.documentElement.dataset.theme = theme;
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
