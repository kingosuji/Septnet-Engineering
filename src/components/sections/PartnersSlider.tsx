import { Container } from '@/components/ui/Container'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { partners } from '@/data/partners'

function Row({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-start"
      aria-hidden={duplicate || undefined}
      data-dup={duplicate || undefined}
    >
      {partners.map((p) => (
        <li
          key={p.name}
          className="group/item flex w-44 shrink-0 flex-col items-center gap-3 px-4 sm:w-52"
        >
          <span className="flex h-14 items-center justify-center">
            <img
              src={p.logo}
              alt=""
              loading="lazy"
              className="max-h-12 w-auto max-w-[9rem] object-contain opacity-70 transition duration-300 group-hover/item:opacity-100"
            />
          </span>
          <span className="text-center text-xs font-medium tracking-wide text-white/65">
            {p.name}
          </span>
        </li>
      ))}
    </ul>
  )
}

const fade = 'linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)'

export function PartnersSlider() {
  return (
    <section className="bg-white pt-16 sm:pt-20" aria-label="Technology partners">
      <Container>
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl bg-navy-dark px-2 py-10 shadow-[0_24px_60px_-20px_rgba(7,24,43,0.5)] sm:py-12">
            <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-2/3 -translate-x-1/2 rounded-full bg-blue/20 blur-3xl" />
            <div
              className="marquee relative overflow-hidden"
              style={{ maskImage: fade, WebkitMaskImage: fade }}
            >
              <div className="marquee-track">
                <Row />
                <Row duplicate />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}
