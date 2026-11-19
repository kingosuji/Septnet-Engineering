import { Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { OfficeList } from '@/components/ui/OfficeList'
import { assets } from '@/config/assets'
import { footerNav } from '@/config/navigation'
import { site } from '@/config/site'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-dark text-white">
      <Container className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <img src={assets.logoWhite} alt={site.name} width={1000} height={180} className="h-12 w-auto object-contain" />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">{site.footer.tagline}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide text-white uppercase">Explore</h2>
          <ul className="mt-4 space-y-1.5">
            {footerNav.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className="inline-flex py-0.5 text-sm text-white/70 transition hover:text-blue"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide text-white uppercase">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 break-all transition hover:text-blue"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-blue" aria-hidden />
                {site.email}
              </a>
            </li>
          </ul>
          <div className="mt-5 border-t border-white/10 pt-5">
            <OfficeList />
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name} All rights reserved.
          </p>
          <p>Network engineering · Security · Connectivity</p>
        </Container>
      </div>
    </footer>
  )
}
