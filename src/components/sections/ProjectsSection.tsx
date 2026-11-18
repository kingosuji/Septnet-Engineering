import type { CSSProperties } from 'react'
import { assets } from '@/config/assets'
import { Container } from '@/components/ui/Container'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

/**
 * Photos are shown whole — never cropped.
 * Column widths are proportional to each photo's real aspect ratio, so portrait and landscape
 * photos line up to the same height without cutting anything off. Any sub-pixel difference is
 * filled by a blurred copy of the same photo.
 */
type Shot = {
  image: string
  title: string
  caption: string
  /** width / height of the source file */
  ratio: number
  kind: 'portrait' | 'landscape'
}

const gallery: Shot[] = [
  {
    image: assets.radome,
    title: 'O3b Radome Installation on a Rig',
    caption: 'Critical connectivity at the edge',
    ratio: 901 / 1600,
    kind: 'portrait',
  },
  {
    image: assets.radomeSecondary,
    title: 'Radome',
    caption: 'Purpose-built enclosures for demanding sites',
    ratio: 1086 / 1448,
    kind: 'portrait',
  },
  {
    image: assets.thuraya,
    title: 'Marine satellite antenna',
    caption: 'Offshore platform connectivity',
    ratio: 1342 / 752,
    kind: 'landscape',
  },
  {
    image: assets.structuredCabling,
    title: 'Structured cabling',
    caption: 'Clean, labelled, production-ready infrastructure',
    ratio: 1100 / 619,
    kind: 'landscape',
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 bg-light-bg py-16 sm:py-20 lg:py-24">
      <Container>
        <ScrollReveal>
          <SectionHeading
            label="Infrastructure"
            heading="Engineering across the network stack"
            description="From connectivity at the edge to the equipment room, our work spans the physical and logical layers of resilient networks."
            className="mb-12"
          />
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-[0.5631fr_0.75fr] lg:grid-cols-[0.5631fr_0.75fr_0.864fr]">
          {gallery.map((item) => {
            const portrait = item.kind === 'portrait'
            return (
              <ScrollReveal
                key={item.title}
                className={
                  portrait ? 'min-h-0 lg:row-span-2' : 'min-h-0 sm:col-span-2 lg:col-span-1'
                }
              >
                <figure
                  style={{ '--ar': item.ratio } as CSSProperties}
                  className={`group relative isolate h-full w-full overflow-hidden rounded-2xl bg-navy-dark shadow-[0_2px_12px_rgba(7,24,43,0.1)] transition duration-300 hover:shadow-[0_24px_50px_-16px_rgba(7,24,43,0.45)] ${
                    portrait ? 'aspect-[var(--ar)] lg:aspect-auto' : 'aspect-[var(--ar)] lg:aspect-auto'
                  }`}
                >
                  {/* blurred fill — only ever visible as a hairline, never hides the photo */}
                  <img
                    src={item.image}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    className="absolute inset-0 -z-10 h-full w-full scale-125 object-cover opacity-70 blur-2xl"
                  />
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
                  {/* compact label: title only; the one-line caption appears on hover so the photo stays clear */}
                  <figcaption className="absolute bottom-2.5 left-2.5 max-w-[calc(100%-1.25rem)] rounded-lg bg-navy-dark/75 px-3 py-1.5 backdrop-blur-md">
                    <p className="text-[13px] leading-snug font-semibold text-white">{item.title}</p>
                    <p className="max-h-0 overflow-hidden text-xs leading-snug text-white/70 opacity-0 transition-all duration-300 group-hover:mt-0.5 group-hover:max-h-10 group-hover:opacity-100 group-focus-within:max-h-10 group-focus-within:opacity-100">
                      {item.caption}
                    </p>
                  </figcaption>
                </figure>
              </ScrollReveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
