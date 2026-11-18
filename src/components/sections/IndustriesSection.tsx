import { Building2, ChevronLeft, ChevronRight, Landmark, RadioTower, Zap } from 'lucide-react'
import { useRef, useState, type CSSProperties, type UIEvent } from 'react'
import { assets } from '@/config/assets'
import { Container } from '@/components/ui/Container'
import { IconTile } from '@/components/ui/IconTile'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

/** Sector names come from the client's existing website. */
const industries = [
  {
    title: 'Energy & Utilities',
    description: 'Dependable connectivity for operations that cannot go offline.',
    icon: Zap,
    image: assets.industryEnergy,
    position: 'object-[50%_45%]',
  },
  {
    title: 'Telecommunications',
    description: 'Network engineering for carriers, operators and service providers.',
    icon: RadioTower,
    image: assets.industryTelecom,
    position: 'object-[50%_45%]',
  },
  {
    title: 'Government & Public Sector',
    description: 'Secure, governed infrastructure for public-sector environments.',
    icon: Landmark,
    image: assets.industryGovernment,
    position: 'object-[50%_60%]',
  },
  {
    title: 'Commercial Enterprise',
    description: 'Resilient enterprise networks that keep teams and sites connected.',
    icon: Building2,
    image: assets.industryEnterprise,
    position: 'object-[40%_35%]',
  },
]

/**
 * Wide screens: four slanted bars (the angle of the SEPTNET logo). The bar under the pointer
 * widens, its photo turns from blue duotone to full colour and its description appears.
 * Tablets and phones: no expanding — photos are exactly 3:4 in 3:4 cards, so each is shown whole
 * (phones get a swipeable row of plain rectangles).
 */
export function IndustriesSection() {
  const [active, setActive] = useState<number | null>(null)
  const [slide, setSlide] = useState(0)
  const track = useRef<HTMLDivElement>(null)
  const cols = industries.map((_, i) => (active === i ? '2.6fr' : '1fr')).join(' ')

  const onScroll = (e: UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    if (el.scrollWidth > el.clientWidth + 1 && el.clientWidth < 640) {
      setSlide(Math.round(el.scrollLeft / (el.clientWidth + 16)))
    }
  }

  const goTo = (i: number) => {
    const el = track.current
    if (!el) return
    const next = Math.max(0, Math.min(industries.length - 1, i))
    el.scrollTo({ left: next * (el.clientWidth + 16), behavior: 'smooth' })
  }

  return (
    <section id="industries" className="scroll-mt-24 bg-light-bg py-16 sm:py-20 lg:py-24">
      <Container>
        <ScrollReveal>
          <SectionHeading
            label="Industries"
            heading="Supporting critical sectors and enterprise environments"
            description="We support organizations where reliability, security, governance and delivery discipline matter."
            className="mb-12"
          />
        </ScrollReveal>

        <div
          ref={track}
          onScroll={onScroll}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto transition-[grid-template-columns] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible xl:gap-0 xl:px-2.5 xl:[grid-template-columns:var(--cols)] [&::-webkit-scrollbar]:hidden [scrollbar-width:none] sm:[scrollbar-width:auto]"
          style={{ '--cols': cols } as CSSProperties}
          onMouseLeave={() => setActive(null)}
        >
          {industries.map((item, i) => {
            const dimmed = active !== null && active !== i
            return (
              <ScrollReveal
                key={item.title}
                className="w-full shrink-0 snap-start sm:w-auto xl:-mx-2.5"
              >
                <article
                  tabIndex={0}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onBlur={() => setActive(null)}
                  className="group slat-xl relative isolate flex aspect-[3/4] flex-col justify-between overflow-hidden rounded-2xl bg-navy-dark p-6 outline-none xl:aspect-auto xl:h-[27rem] xl:rounded-none xl:px-9"
                >
                  <img
                    src={item.image}
                    alt=""
                    loading="lazy"
                    className={`absolute inset-0 -z-20 h-full w-full object-cover xl:scale-100 xl:transition xl:duration-1000 xl:ease-out xl:group-hover:scale-[1.06] ${item.position}`}
                  />
                  <div className="wipe absolute inset-0 -z-10 bg-navy-dark">
                    <img
                      src={item.image}
                      alt=""
                      loading="lazy"
                      className={`h-full w-full object-cover grayscale xl:scale-100 xl:transition xl:duration-1000 xl:ease-out xl:group-hover:scale-[1.06] ${item.position}`}
                    />
                    <div className="absolute inset-0 bg-[#0b4fb8] mix-blend-color" />
                    <div className="absolute inset-0 bg-navy/30" />
                  </div>
                  <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-dark/70 via-transparent to-navy-dark/90" />

                  <div>
                    <IconTile icon={item.icon} tone="glass" />
                    <h3 className="mt-4 text-xl leading-snug font-semibold text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p
                    className={`text-sm leading-snug text-white/90 transition-all duration-500 xl:max-w-sm ${
                      dimmed ? 'xl:max-h-0 xl:opacity-0' : 'xl:max-h-24 xl:opacity-100'
                    }`}
                  >
                    {item.description}
                  </p>
                </article>
              </ScrollReveal>
            )
          })}
        </div>

        {/* phones: one card at a time with dots and arrows */}
        <div className="mt-5 flex items-center justify-center gap-4 sm:hidden">
          <button
            type="button"
            onClick={() => goTo(slide - 1)}
            disabled={slide === 0}
            aria-label="Previous industry"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-navy transition disabled:opacity-35"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </button>
          <div className="flex items-center gap-2">
            {industries.map((item, i) => (
              <button
                key={item.title}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Show ${item.title}`}
                aria-current={slide === i}
                className={`h-2 rounded-full transition-all duration-300 ${
                  slide === i ? 'w-6 bg-blue-hover' : 'w-2 bg-navy/25'
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => goTo(slide + 1)}
            disabled={slide === industries.length - 1}
            aria-label="Next industry"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-navy transition disabled:opacity-35"
          >
            <ChevronRight className="h-5 w-5" aria-hidden />
          </button>
        </div>
      </Container>
    </section>
  )
}
