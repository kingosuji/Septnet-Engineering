import { MapPin } from 'lucide-react'
import { site } from '@/config/site'

type OfficeListProps = {
  /** footer: stacked, left-aligned, on navy · center: side by side, centered, on navy · light: on white/grey */
  variant?: 'footer' | 'center' | 'light'
}

/** The company's offices, written the way the client specified: country in bold, place below it. */
export function OfficeList({ variant = 'footer' }: OfficeListProps) {
  const center = variant === 'center'
  const light = variant === 'light'

  return (
    <ul
      className={
        center
          ? 'flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-12'
          : 'space-y-5'
      }
    >
      {site.offices.map((office) => (
        <li key={office.country} className="flex items-start gap-3 text-left">
          <MapPin
            className={`mt-0.5 h-4 w-4 shrink-0 ${light ? 'text-blue-hover' : 'text-blue'}`}
            aria-hidden
          />
          <div>
            <p className={`font-semibold ${light ? 'text-text-dark' : 'text-white'}`}>
              {office.country}
            </p>
            <p className={`mt-1 text-sm ${light ? 'text-text-muted' : 'text-white/70'}`}>
              {office.place}
            </p>
          </div>
        </li>
      ))}
    </ul>
  )
}
