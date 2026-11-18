import { Mail, X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { assets } from '@/config/assets'
import { mobileNav } from '@/config/navigation'
import { site } from '@/config/site'

type MobileMenuProps = {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      if (event.key !== 'Tab' || !panelRef.current) return

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      )
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-navy-dark/60"
        aria-label="Close menu overlay"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-navy px-6 py-6 text-white shadow-2xl"
      >
        <div className="mb-8 flex items-center justify-between gap-3">
          <img
            src={assets.logoWhite}
            alt={site.name}
            width={640}
            height={120}
            className="h-9 w-auto max-w-[70%] object-contain"
          />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg p-2.5 transition hover:bg-white/10"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto">
          {mobileNav.map((item) => (
            <div key={item.label}>
              <Link
                to={item.href}
                onClick={onClose}
                className="flex min-h-11 items-center rounded-lg px-3 py-3 text-base font-medium transition hover:bg-white/10"
              >
                {item.label}
              </Link>
              {item.children ? (
                <div className="mb-2 ml-3 border-l border-white/15 pl-3">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      to={child.href}
                      onClick={onClose}
                      className="flex min-h-11 items-center rounded-lg px-2 py-2.5 text-sm break-words text-white/75 transition hover:bg-white/10 hover:text-white"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <Button
          href={`mailto:${site.email}`}
          className="mt-6 w-full"
          icon={<Mail className="h-4 w-4" aria-hidden />}
          onClick={onClose}
        >
          Contact Us
        </Button>
      </div>
    </div>
  )
}
