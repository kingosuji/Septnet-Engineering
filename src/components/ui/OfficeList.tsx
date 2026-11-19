import { MapPin } from 'lucide-react'
import { site } from '@/config/site'

/** Office locations — shown only in the footer (client request: no duplicates elsewhere). */
export function OfficeList() {
  return (
    <ul className="space-y-5">
      {site.offices.map((office) => (
        <li key={office.country} className="flex items-start gap-3 text-left">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue" aria-hidden />
          <div>
            <p className="font-semibold text-white">{office.country}</p>
            <p className="mt-1 text-sm text-white/70">{office.place}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
