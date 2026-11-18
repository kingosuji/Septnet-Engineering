import { FitImage } from '@/components/ui/FitImage'
import type { Project } from '@/data/projects'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white transition duration-300 hover:border-blue/40 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
      <FitImage src={project.image} alt={project.title} ratio="16 / 9" className="shrink-0" />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-bold text-text-dark">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">{project.description}</p>
      </div>
    </article>
  )
}
