import { Link } from 'react-router-dom'
import { Seo } from '@/components/seo/Seo'
import { Container } from '@/components/ui/Container'
import { PageCTA } from '@/components/ui/PageCTA'
import { PageHero } from '@/components/ui/PageHero'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { pageSeo } from '@/config/seo'
import { site } from '@/config/site'
import { insights } from '@/data/insights'

export function Insights() {
  return (
    <>
      <Seo seo={pageSeo.insights} />
      <PageHero
        label={site.insights.label}
        heading={site.insights.heading}
        description={site.insights.description}
      />

      <section className="bg-light-bg py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {insights.map((item) => (
              <ScrollReveal key={item.id}>
                <article className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] sm:p-7">
                  <h2 className="text-xl font-bold text-text-dark">{item.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted sm:text-[15px]">
                    {item.excerpt}
                  </p>
                  <Link
                    to={`/insights/${item.id}`}
                    className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-blue-hover transition hover:text-blue-deep"
                  >
                    Read article
                    <span aria-hidden className="ml-1">
                      →
                    </span>
                  </Link>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <PageCTA />
    </>
  )
}
