import { Mail } from 'lucide-react'
import { Seo } from '@/components/seo/Seo'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { PageHero } from '@/components/ui/PageHero'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { pageSeo } from '@/config/seo'
import { site } from '@/config/site'

export function Contact() {
  return (
    <>
      <Seo seo={pageSeo.contact} />
      <PageHero
        label={site.contact.label}
        heading={site.contact.heading}
        description={site.contact.description}
      />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container className="max-w-3xl">
          <ScrollReveal>
            <div className="rounded-2xl border border-border bg-light-bg p-8 sm:p-10">
              <h2 className="text-2xl font-bold text-text-dark">Contact {site.name}</h2>
              <p className="mt-3 text-base leading-relaxed text-text-muted">
                Please email us directly for inquiries. No contact form is required.
              </p>

              <div className="mt-8">
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-3 rounded-xl border border-border bg-white p-5 text-text-dark transition hover:border-blue hover:text-blue"
                >
                  <Mail className="mt-1 h-5 w-5 shrink-0 text-blue" aria-hidden />
                  <span>
                    <span className="block text-xs font-semibold tracking-wide text-text-muted uppercase">
                      Email
                    </span>
                    <span className="mt-1 block text-lg font-semibold break-all">{site.email}</span>
                  </span>
                </a>
              </div>

              <div className="mt-8">
                <Button href={`mailto:${site.email}`} icon={<Mail className="h-4 w-4" aria-hidden />}>
                  {site.contact.cta}
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  )
}
