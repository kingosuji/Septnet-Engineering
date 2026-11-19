import { Mail } from 'lucide-react'
import { site } from '@/config/site'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function ContactCTA() {
  return (
    <section id="contact" className="scroll-mt-24 bg-navy py-16 sm:py-20 lg:py-24">
      <Container>
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-blue uppercase">
              {site.contact.label}
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">{site.contact.heading}</h2>
            <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
              {site.contact.description}
            </p>
            <div className="mt-8 flex flex-col items-center">
              <Button
                href={`mailto:${site.email}`}
                icon={<Mail className="h-4 w-4" aria-hidden />}
              >
                {site.contact.cta}
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}
