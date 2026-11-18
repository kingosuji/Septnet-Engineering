import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { assets } from '@/config/assets'
import { site } from '@/config/site'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 bg-light-bg py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
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
            <SectionHeading
              label={site.about.label}
              heading={site.about.heading}
              className="mb-6"
            />
            <div className="space-y-4 text-base leading-relaxed text-text-muted">
              {site.about.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ul className="mt-6 space-y-3">
              {site.about.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-[15px] font-medium text-text-dark">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-hover" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="/about" variant="ghost" icon={<ArrowRight className="h-4 w-4" aria-hidden />}>
                {site.about.cta}
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  )
}
