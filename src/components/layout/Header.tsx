import { ChevronDown, Mail, Menu } from 'lucide-react'
import { useEffect, useId, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MobileMenu } from '@/components/layout/MobileMenu'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { assets } from '@/config/assets'
import { mainNav } from '@/config/navigation'
import { site } from '@/config/site'

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function Header() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const servicesMenuId = useId()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!servicesOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setServicesOpen(false)
    }
    const onPointerDown = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('mousedown', onPointerDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('mousedown', onPointerDown)
    }
  }, [servicesOpen])

  return (
    <>
      <header
        className={`sticky top-0 z-40 border-b transition duration-300 ${
          scrolled
            ? 'border-white/10 bg-navy-dark/95 shadow-lg backdrop-blur'
            : 'border-white/10 bg-navy'
        }`}
      >
        <Container className="flex h-[4.5rem] items-center justify-between gap-3 sm:gap-4 lg:h-20">
          <Link
            to="/"
            className="flex min-w-0 max-w-[58vw] items-center gap-3 sm:max-w-none"
            aria-label={`${site.name} home`}
          >
            <img
              src={assets.logoWhite}
              alt={site.name}
              width={1000}
              height={180}
              className="h-9 w-auto max-w-full object-contain sm:h-11 lg:h-12"
            />
          </Link>

          <nav className="hidden items-center gap-0.5 xl:gap-1 lg:flex" aria-label="Primary">
            {mainNav.map((item) => {
              const active = isActive(pathname, item.href.split('#')[0] || item.href)

              if (item.children) {
                return (
                  <div
                    key={item.label}
                    ref={servicesRef}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      type="button"
                      className={`inline-flex items-center gap-1 rounded-md px-2.5 py-2 text-sm font-medium transition xl:px-3 ${
                        active ? 'text-white' : 'text-white/80 hover:text-white'
                      }`}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                      aria-controls={servicesMenuId}
                      onClick={() => setServicesOpen((open) => !open)}
                    >
                      {item.label}
                      <ChevronDown className="h-4 w-4 opacity-80" aria-hidden />
                    </button>
                    <span
                      className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-blue transition ${
                        active ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                    <div
                      id={servicesMenuId}
                      className={`absolute left-0 top-full pt-2 transition duration-200 ${
                        servicesOpen ? 'visible opacity-100' : 'invisible opacity-0'
                      }`}
                    >
                      <div className="min-w-[280px] max-w-[min(320px,calc(100vw-2rem))] rounded-xl border border-white/10 bg-navy-dark p-2 shadow-xl">
                        <Link
                          to={item.href}
                          className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
                          onClick={() => setServicesOpen(false)}
                        >
                          All Services
                        </Link>
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className="block rounded-lg px-3 py-2.5 text-sm break-words text-white/80 transition hover:bg-white/10 hover:text-white"
                            onClick={() => setServicesOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              }

              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`relative rounded-md px-2.5 py-2 text-sm font-medium transition xl:px-3 ${
                    active ? 'text-white' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-blue transition ${
                      active ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </Link>
              )
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <span className="hidden md:inline-flex">
              <Button
                href={`mailto:${site.email}`}
                className="whitespace-nowrap"
                icon={<Mail className="h-4 w-4" aria-hidden />}
              >
                Contact Us
              </Button>
            </span>
            <button
              ref={menuButtonRef}
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg p-2.5 text-white transition hover:bg-white/10 lg:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </Container>
      </header>
      <MobileMenu
        open={mobileOpen}
        onClose={() => {
          setMobileOpen(false)
          menuButtonRef.current?.focus()
        }}
      />
    </>
  )
}
