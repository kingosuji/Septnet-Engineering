import { Seo } from '@/components/seo/Seo'
import { Container } from '@/components/ui/Container'
import { PageCTA } from '@/components/ui/PageCTA'
import { PageHero } from '@/components/ui/PageHero'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { pageSeo } from '@/config/seo'
import { site } from '@/config/site'
import { projects } from '@/data/projects'

export function Projects() {
  return (
    <>
      <Seo seo={pageSeo.projects} />
      <PageHero
        label={site.projects.label}
        heading={site.projects.heading}
        description={site.projects.description}
      />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ScrollReveal key={project.id} className="h-full">
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <PageCTA
        heading="Planning a similar initiative?"
        description="Tell us what you need to modernize, secure or deliver and we will respond by email."
      />
    </>
  )
}
