import type { ReactNode } from 'react'
import { assets } from '@/config/assets'
import { Container } from '@/components/ui/Container'

type PageHeroProps = {
  label: string
  heading: string
  description?: string
  children?: ReactNode
}

export function PageHero({ label, heading, description, children }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-dark py-16 text-white sm:py-20 lg:py-24">
      <img
        src={assets.pageHeroBg}
        alt=""
        aria-hidden
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-dark/92 via-navy-dark/78 to-navy/55" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-dark/35 via-transparent to-navy-dark/70" />
      <Container className="relative">
        <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-blue uppercase">{label}</p>
        <h1 className="max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          {heading}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            {description}
          </p>
        ) : null}
        {children}
      </Container>
    </section>
  )
}
