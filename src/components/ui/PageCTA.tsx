import { Mail } from 'lucide-react'
import { site } from '@/config/site'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

type PageCTAProps = {
  heading?: string
  description?: string
}

export function PageCTA({
  heading = 'Ready to discuss your next initiative?',
  description = 'Email us directly and we will follow up about your network, security or connectivity requirements.',
}: PageCTAProps) {
  return (
    <section className="bg-navy py-16 sm:py-20 lg:py-24">
      <Container>
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">{heading}</h2>
            <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">{description}</p>
            <div className="mt-8 flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
              <Button
                href={`mailto:${site.email}`}
                className="w-full sm:w-auto"
                icon={<Mail className="h-4 w-4" aria-hidden />}
              >
                {site.contact.cta}
              </Button>
              <Button href="/contact" variant="secondary" className="w-full sm:w-auto">
                Contact page
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}
