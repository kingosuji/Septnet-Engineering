import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { FitImage } from '@/components/ui/FitImage'
import type { Service } from '@/data/services'

type ServiceCardProps = {
  service: Service
  showImage?: boolean
}

export function ServiceCard({ service, showImage = false }: ServiceCardProps) {
  return (
    <article
      id={service.anchor}
      className="service-card group flex h-full scroll-mt-28 flex-col overflow-hidden card-shape border border-border bg-white shadow-[0_2px_12px_rgba(7,24,43,0.04)] transition duration-300 ease-out hover:-translate-y-1.5 hover:border-blue/50 hover:shadow-[0_24px_50px_-12px_rgba(7,24,43,0.25)]"
    >
      {showImage ? (
        <FitImage src={service.image} alt={service.title} ratio="16 / 9" />
      ) : null}
      <div className="relative flex flex-1 flex-col p-6 sm:p-8">
        <h3 className="text-xl font-bold tracking-tight text-text-dark">{service.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted sm:text-[15px]">
          {service.description}
        </p>
        <Link
          to={`/services/${service.id}`}
          className="mt-6 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-blue transition group-hover:gap-2.5 hover:text-blue-deep"
        >
          Learn more
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </article>
  )
}
