import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { insights } from '@/data/insights'

export function InsightsSection() {
  const latest = insights.slice(0, 3)
  if (latest.length === 0) return null

  return (
    <section id="insights" className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <ScrollReveal>
          <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              label="Insights"
              heading="Practical insights for infrastructure decisions"
              description="Practical thinking on cloud, secure access and infrastructure modernization."
            />
            <Button
              href="/insights"
              variant="ghost"
              icon={<ArrowRight className="h-4 w-4" aria-hidden />}
              className="self-start sm:self-auto"
            >
              All insights
            </Button>
          </div>
        </ScrollReveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {latest.map((item) => (
            <ScrollReveal key={item.id}>
              <Link
                to={`/insights/${item.id}`}
                className="group relative flex h-full flex-col overflow-hidden card-shape border border-border bg-gradient-to-b from-white to-light-bg p-7 transition duration-300 hover:-translate-y-1.5 hover:border-blue/50 hover:shadow-[0_24px_50px_-16px_rgba(7,24,43,0.25)]"
              >
                <span className="text-xs font-semibold tracking-[0.18em] text-blue-hover uppercase">
                  Insight
                </span>
                <h3 className="mt-4 text-xl font-bold tracking-tight text-text-dark">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted sm:text-[15px]">
                  {item.excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-hover transition group-hover:text-blue-deep">
                  Read article
                  <ArrowUpRight
                    className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden
                  />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
