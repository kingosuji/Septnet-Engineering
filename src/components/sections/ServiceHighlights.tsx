import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { IconTile } from '@/components/ui/IconTile'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { services } from '@/data/services'

const PORTS = 8

/**
 * Service "modules" — styled like network hardware:
 * cut corners, a row of port LEDs that light up in sequence on hover, and a photo that
 * switches from blue duotone to full colour with a diagonal wipe (the angle of the logo's bars).
 */
export function ServiceHighlights() {
  return (
    <section className="relative z-10 -mt-28 sm:-mt-32" aria-label="Primary services">
      <Container>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ScrollReveal
              key={service.id}
              className="h-full drop-shadow-[0_22px_28px_rgba(2,10,22,0.45)]"
            >
              <Link
                to={`/services/${service.id}`}
                className="group chamfer block h-full bg-gradient-to-br from-sky/70 via-white/10 to-blue/60 p-px outline-none transition duration-500 hover:-translate-y-2 focus-visible:-translate-y-2"
              >
                <div className="chamfer-in relative flex h-full min-h-[24rem] flex-col overflow-hidden bg-gradient-to-b from-[#0e2c4e] via-navy to-navy-dark">
                  <div className="flex items-start justify-between px-6 pt-6">
                    <IconTile icon={service.icon} tone="dark" />
                    <div className="mt-1 mr-5 flex gap-1" aria-hidden>
                      {Array.from({ length: PORTS }).map((_, i) => (
                        <span
                          key={i}
                          className={`led h-2.5 w-1.5 rounded-[1px] bg-white/20 ${i === 1 ? 'led-idle' : ''}`}
                          style={{ transitionDelay: `${i * 55}ms` }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="px-6 pt-5">
                    <h2 className="text-xl leading-tight font-semibold tracking-tight break-words text-white">
                      {service.shortTitle}
                    </h2>
                    <p className="mt-2 text-[15px] leading-snug font-light text-white/65">
                      {service.short}
                    </p>
                  </div>

                  {/* whole photo, frame follows the photo's own ratio — nothing is cropped */}
                  <div
                    className="relative mt-auto w-full shrink-0 overflow-hidden"
                    style={{ aspectRatio: service.cardRatio }}
                  >
                    <img
                      src={service.cardImage}
                      alt=""
                      loading="lazy"
                      className="absolute inset-0 h-full w-full scale-100 object-cover transition duration-700 ease-out group-hover:scale-[1.06]"
                    />
                    <div className="wipe absolute inset-0 bg-navy-dark">
                      <img
                        src={service.cardImage}
                        alt=""
                        loading="lazy"
                        className="h-full w-full scale-100 object-cover grayscale transition duration-700 ease-out group-hover:scale-[1.06]"
                      />
                      <div className="absolute inset-0 bg-[#0b4fb8] mix-blend-color" />
                      <div className="absolute inset-0 bg-navy/35" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/50 via-transparent to-navy/40" />
                  </div>

                  {/* signal line */}
                  <span
                    aria-hidden
                    className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-blue via-sky to-transparent transition-[width] duration-700 ease-out group-hover:w-full group-focus-visible:w-full"
                  />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
