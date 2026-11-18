import { CheckCircle2, Mail } from 'lucide-react'
import { Seo } from '@/components/seo/Seo'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { PageCTA } from '@/components/ui/PageCTA'
import { PageHero } from '@/components/ui/PageHero'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { assets } from '@/config/assets'
import { pageSeo } from '@/config/seo'
import { site } from '@/config/site'

export function About() {
  return (
    <>
      <Seo seo={pageSeo.about} />
      <PageHero
        label={site.about.label}
        heading={site.about.heading}
        description={site.about.intro}
      />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            <div className="overflow-hidden rounded-2xl bg-navy shadow-lg">
              <img
                src={assets.about}
                alt="About SEPTNET"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover object-center sm:aspect-[5/6]"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <SectionHeading heading={site.about.subheading} />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-text-muted">
              {site.about.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ul className="mt-8 space-y-3">
              {site.about.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-[15px] font-medium text-text-dark"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-hover" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href={`mailto:${site.email}`} icon={<Mail className="h-4 w-4" aria-hidden />}>
                Contact Us
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="bg-light-bg py-16 sm:py-20">
        <Container>
          <ScrollReveal>
            <SectionHeading
              label="What Sets Us Apart"
              heading="Clarity, integration and delivery discipline"
              description="We combine engineering expertise with practical project delivery so organizations can modernize with confidence."
              className="mb-10"
            />
          </ScrollReveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {site.about.differentiators.map((item) => (
              <ScrollReveal key={item.title}>
                <article className="h-full rounded-2xl border border-border bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] sm:p-7">
                  <h3 className="text-lg font-bold text-text-dark">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">{item.description}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <ScrollReveal>
            <SectionHeading
              label="How we work"
              heading="Practical. Structured. Future-ready."
              description="Our delivery principles keep recommendations realistic and execution accountable."
              className="mb-10"
            />
          </ScrollReveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {site.about.values.map((value) => (
              <ScrollReveal key={value.title}>
                <article className="h-full rounded-2xl border border-border bg-light-bg p-6 transition duration-300 hover:-translate-y-1 hover:border-blue hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] sm:p-7">
                  <h3 className="text-lg font-bold text-text-dark">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">{value.description}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <PageCTA />
    </>
  )
}
