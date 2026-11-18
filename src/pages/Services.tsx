import { Seo } from '@/components/seo/Seo'
import { Container } from '@/components/ui/Container'
import { PageCTA } from '@/components/ui/PageCTA'
import { PageHero } from '@/components/ui/PageHero'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { pageSeo } from '@/config/seo'
import { site } from '@/config/site'
import { services, solutions } from '@/data/services'

export function Services() {
  return (
    <>
      <Seo seo={pageSeo.services} />
      <PageHero
        label="Services"
        heading={site.servicesPage.heading}
        description={site.servicesPage.description}
      />

      <section className="bg-light-bg py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid auto-rows-fr gap-6 md:grid-cols-2">
            {services.map((service) => (
              <ScrollReveal key={service.id} className="h-full">
                <ServiceCard service={service} showImage />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <ScrollReveal>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-blue uppercase">
                {site.solutions.label}
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-text-dark sm:text-4xl">
                {site.solutions.heading}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-text-muted sm:text-lg">
                {site.solutions.description}
              </p>
            </div>
          </ScrollReveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((item) => (
              <ScrollReveal key={item.title}>
                <article className="group h-full rounded-2xl border border-border bg-light-bg p-6 transition duration-300 hover:-translate-y-1 hover:border-blue hover:bg-white hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] sm:p-7">
                  <h3 className="text-lg font-bold text-text-dark">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">{item.description}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <PageCTA
        heading="Need help scoping a network or security initiative?"
        description="Share your requirements by email and we will follow up with practical next steps."
      />
    </>
  )
}
