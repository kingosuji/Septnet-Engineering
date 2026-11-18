import { useEffect, useRef, type ReactNode } from 'react'

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'article' | 'li'
}

export function ScrollReveal({ children, className = '', as: Tag = 'div' }: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      node.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${className}`}
    >
      {children}
    </Tag>
  )
}
