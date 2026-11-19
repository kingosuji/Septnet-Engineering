import { assets } from '@/config/assets'
import { Container } from '@/components/ui/Container'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

/**
 * Photos are shown whole — never cropped (object-contain).
 * Shared aspect per row keeps the gallery flush with no empty column gaps.
 * Letterboxing inside a tile is filled by a blurred copy of the same photo.
 */
type Shot = {
  image: string
  title: string
  caption: string
}

const topRow: Shot[] = [
  {
    image: assets.radome,
    title: 'O3b Radome Installation on a Rig',
    caption: 'Critical connectivity at the edge',
  },
  {
    image: assets.radomeSecondary,
    title: 'Radome',
    caption: 'Purpose-built enclosures for demanding sites',
  },
  {
    image: assets.radomeCrew,
    title: 'Radome installation crew',
    caption: 'Hands-on deployment for offshore connectivity',
  },
]

const bottomRow: Shot[] = [
  {
    image: assets.thuraya,
    title: 'Marine satellite antenna',
    caption: 'Offshore platform connectivity',
  },
  {
    image: assets.structuredCabling,
    title: 'Structured cabling',
    caption: 'Clean, labelled, production-ready infrastructure',
  },
]

function GalleryTile({ item, aspectClass }: { item: Shot; aspectClass: string }) {
  return (
    <figure
      className={`group relative isolate w-full overflow-hidden rounded-2xl bg-navy-dark shadow-[0_2px_12px_rgba(7,24,43,0.1)] transition duration-300 hover:shadow-[0_24px_50px_-16px_rgba(7,24,43,0.45)] ${aspectClass}`}
    >
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
      <figcaption className="absolute bottom-2.5 left-2.5 max-w-[calc(100%-1.25rem)] rounded-lg bg-navy-dark/75 px-3 py-1.5 backdrop-blur-md">
        <p className="text-[13px] leading-snug font-semibold text-white">{item.title}</p>
        <p className="max-h-0 overflow-hidden text-xs leading-snug text-white/70 opacity-0 transition-all duration-300 group-hover:mt-0.5 group-hover:max-h-10 group-hover:opacity-100 group-focus-within:max-h-10 group-focus-within:opacity-100">
          {item.caption}
        </p>
      </figcaption>
    </figure>
  )
}

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

        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {topRow.map((item) => (
              <ScrollReveal key={item.title}>
                <GalleryTile item={item} aspectClass="aspect-[4/5]" />
              </ScrollReveal>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {bottomRow.map((item) => (
              <ScrollReveal key={item.title}>
                <GalleryTile item={item} aspectClass="aspect-[16/9]" />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
