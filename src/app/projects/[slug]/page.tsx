import { getProjectBySlug, getAllSlugs } from '@/lib/projects';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ProjectDetail from '@/components/ProjectDetail';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const title = `${project.title} | Divyansh Mishra`;
  const url = `/projects/${slug}`;

  return {
    title,
    description: project.shortDescription,
    // Without an explicit canonical here, every project page inherits the
    // homepage's `alternates.canonical: '/'` from the root layout and tells
    // crawlers to index the homepage instead of the case study.
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description: project.shortDescription,
      url,
      siteName: 'Divyansh Mishra Portfolio',
      type: 'article',
      locale: 'en_US',
      images: [
        {
          url: '/og-image.png?v=3',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: project.shortDescription,
      images: ['/og-image.png?v=3'],
    },
  };
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return <ProjectDetail project={project} />;
}
