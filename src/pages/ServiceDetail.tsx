import { ArrowLeft, Mail } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Seo } from '@/components/seo/Seo'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { FitImage } from '@/components/ui/FitImage'
import { PageCTA } from '@/components/ui/PageCTA'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { assets } from '@/config/assets'
import { site } from '@/config/site'
import { getServiceById } from '@/data/services'

export function ServiceDetail() {
  const { serviceId } = useParams()
  const service = serviceId ? getServiceById(serviceId) : undefined

  if (!service) {
    return <Navigate to="/services" replace />
  }

  return (
    <>
      <Seo
        seo={{
          title: `${service.title} | ${site.shortName}`,
          description: service.description,
          path: `/services/${service.id}`,
        }}
      />

      <section className="relative isolate overflow-hidden bg-navy-dark py-16 text-white sm:py-20 lg:py-24">
        <img
          src={assets.pageHeroBg}
          alt=""
          aria-hidden
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-dark/92 via-navy-dark/78 to-navy/55" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-dark/35 via-transparent to-navy-dark/70" />
        <Container className="relative max-w-3xl">
          <ScrollReveal>
            <Link
              to="/services"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Back to Services
            </Link>
            <p className="mt-8 text-xs font-semibold tracking-[0.18em] text-blue uppercase">
              Service
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {service.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-white/80 sm:text-xl">
              {service.description}
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal>
              <div className="overflow-hidden rounded-2xl border border-border bg-navy shadow-lg">
                <FitImage src={service.image} alt={service.title} ratio="16 / 10" />
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tight text-text-dark sm:text-3xl">
                  What we deliver
                </h2>
                <p className="text-base leading-relaxed text-text-muted sm:text-[17px]">
                  {service.body}
                </p>
                <Button
                  href={`mailto:${site.email}`}
                  icon={<Mail className="h-4 w-4" aria-hidden />}
                >
                  {site.contact.cta}
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <PageCTA
        heading="Need help scoping this service?"
        description="Share your requirements by email and we will follow up with practical next steps."
      />
    </>
  )
}
