import { Cable, Globe2, LifeBuoy, Network, Router, ShieldCheck } from 'lucide-react'
import { assets } from '@/config/assets'
import { site } from '@/config/site'
import { solutions } from '@/data/services'
import { Container } from '@/components/ui/Container'
import { IconTile } from '@/components/ui/IconTile'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

const icons = [Network, ShieldCheck, Router, Globe2, Cable, LifeBuoy]

export function SolutionsSection() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-dark py-16 text-white sm:py-20 lg:py-24">
      <img
        src={assets.solutions}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right opacity-30"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-dark via-navy-dark/80 to-navy-dark" />
      <div className="glow-float pointer-events-none absolute top-1/3 -left-24 -z-10 h-72 w-72 rounded-full bg-blue/20 blur-3xl" />
      <Container>
        <ScrollReveal>
          <SectionHeading
            label={site.solutions.label}
            heading={site.solutions.heading}
            description={site.solutions.description}
            tone="dark"
            align="center"
            className="mb-14"
          />
        </ScrollReveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item, i) => (
            <ScrollReveal key={item.title}>
              <div className="group relative h-full overflow-hidden card-shape border border-white/10 bg-gradient-to-b from-white/[0.09] to-white/[0.03] p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1.5 hover:border-blue/60 hover:shadow-[0_24px_50px_-16px_rgba(7,137,255,0.45)]">
                <IconTile icon={icons[i % icons.length]} tone="dark" className="mb-5" />
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
