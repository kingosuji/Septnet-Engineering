import { ArrowRight, Mail } from 'lucide-react'
import { assets } from '@/config/assets'
import { site } from '@/config/site'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

export function Hero() {
  return (
    <section className="relative isolate min-h-[min(88vh,860px)] overflow-hidden bg-navy-dark pb-36 sm:pb-40">
      <img
        src={assets.hero}
        srcSet={`${assets.hero768} 768w, ${assets.hero1280} 1280w, ${assets.hero} 1920w`}
        sizes="100vw"
        alt=""
        aria-hidden
        width={1920}
        height={853}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[70%_center]"
        fetchPriority="high"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-dark/90 via-navy/65 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-dark/30 via-transparent to-navy-dark/55" />
      <div className="glow-float pointer-events-none absolute top-1/4 right-[8%] -z-10 h-80 w-80 rounded-full bg-blue/25 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-blue/60 to-transparent" />

      <Container className="relative flex min-h-[min(88vh,860px)] flex-col justify-center py-24 lg:py-28">
        <p
          className="hero-fade-up mb-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold tracking-[0.22em] text-white/85 uppercase sm:text-[13px]"
          style={{ animationDelay: '80ms' }}
        >
          <span className="h-px w-8 bg-blue" aria-hidden />
          {site.hero.eyebrow}
        </p>
        <h1
          className="hero-fade-up max-w-4xl text-[2rem] leading-[1.1] font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.75rem]"
          style={{ animationDelay: '160ms' }}
        >
          {site.hero.headlineLead}
          <span className="text-blue">{site.hero.headlineAccent1}</span>
          {site.hero.headlineMid}
          <span className="text-blue">{site.hero.headlineAccent2}</span>
        </h1>
        <p
          className="hero-fade-up mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg"
          style={{ animationDelay: '240ms' }}
        >
          {site.hero.description}
        </p>
        <div
          className="hero-fade-up mt-9 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap"
          style={{ animationDelay: '320ms' }}
        >
          <Button
            href="/services"
            className="w-full sm:w-auto"
            icon={<ArrowRight className="h-4 w-4" aria-hidden />}
          >
            {site.hero.primaryCta}
          </Button>
          <Button
            href={`mailto:${site.email}`}
            variant="secondary"
            className="w-full sm:w-auto"
            icon={<Mail className="h-4 w-4" aria-hidden />}
          >
            {site.hero.secondaryCta}
          </Button>
        </div>
      </Container>
    </section>
  )
}
