import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

export function Layout() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
    }
  }, [pathname, hash])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
