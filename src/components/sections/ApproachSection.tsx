import { approach } from '@/data/approach'
import { Container } from '@/components/ui/Container'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function ApproachSection() {
  return (
    <section className="overflow-x-clip bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <ScrollReveal>
          <SectionHeading
            label="Our Approach"
            heading="A structured delivery framework"
            description="A repeatable methodology that supports delivery discipline, technical quality and operational readiness."
            align="center"
            className="mb-12 sm:mb-14"
          />
        </ScrollReveal>
        <ol className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 xl:gap-4">
          {approach.map((step, i) => (
            <li key={step.title} className="relative min-w-0 text-center">
              <ScrollReveal>
                {i < approach.length - 1 ? (
                  <span
                    aria-hidden
                    className="absolute top-8 left-[calc(50%+2.5rem)] hidden h-px w-[calc(100%-5rem)] bg-border xl:block"
                  />
                ) : null}
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy text-base font-bold text-white shadow-md ring-4 ring-blue/10 sm:h-16 sm:w-16 sm:text-lg">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 text-base font-bold text-text-dark">{step.title}</h3>
                <p className="mx-auto mt-1.5 max-w-full px-1 text-sm leading-relaxed text-text-muted">
                  {step.description}
                </p>
              </ScrollReveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
