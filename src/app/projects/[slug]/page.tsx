import { getProjectBySlug, getAllSlugs } from '@/lib/projects';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import ProjectDetailClient from '@/components/ProjectDetailClient';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Divyansh Mishra`,
    description: project.shortDescription,
  };
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return <ProjectDetailClient project={project} />;
}
