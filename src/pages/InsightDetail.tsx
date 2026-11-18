import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, Mail } from 'lucide-react'
import { Seo } from '@/components/seo/Seo'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { PageCTA } from '@/components/ui/PageCTA'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { assets } from '@/config/assets'
import { site } from '@/config/site'
import { getInsightById } from '@/data/insights'

export function InsightDetail() {
  const { insightId } = useParams()
  const insight = insightId ? getInsightById(insightId) : undefined

  if (!insight) {
    return <Navigate to="/insights" replace />
  }

  return (
    <>
      <Seo
        seo={{
          title: `${insight.title} | ${site.shortName}`,
          description: insight.excerpt,
          path: `/insights/${insight.id}`,
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
              to="/insights"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Back to Insights
            </Link>
            <p className="mt-8 text-xs font-semibold tracking-[0.18em] text-blue uppercase">
              Insight
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {insight.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-white/80 sm:text-xl">
              {insight.subtitle}
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container className="max-w-3xl">
          <ScrollReveal>
            <article className="space-y-10">
              {insight.sections.map((section, index) => (
                <div key={section.heading ?? `section-${index}`} className="space-y-4">
                  {section.heading ? (
                    <h2 className="text-2xl font-bold text-text-dark">{section.heading}</h2>
                  ) : null}
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-relaxed text-text-muted sm:text-[17px]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}

              <div className="rounded-2xl border border-border bg-light-bg p-6 sm:p-8">
                <p className="text-lg font-bold text-text-dark">{insight.closingCta}</p>
                <p className="mt-3 text-sm leading-relaxed text-text-muted sm:text-[15px]">
                  Contact SEPTNET Engineering at {site.email} to discuss your requirements.
                </p>
                <div className="mt-6">
                  <Button href={`mailto:${site.email}`} icon={<Mail className="h-4 w-4" aria-hidden />}>
                    Email SEPTNET
                  </Button>
                </div>
              </div>
            </article>
          </ScrollReveal>
        </Container>
      </section>

      <PageCTA />
    </>
  )
}
