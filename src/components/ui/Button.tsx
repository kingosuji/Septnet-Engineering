import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'ghost'

type CommonProps = {
  children: ReactNode
  variant?: Variant
  className?: string
  icon?: ReactNode
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
  }

type ButtonAsLink = CommonProps & {
  href: string
  target?: string
  rel?: string
  onClick?: () => void
}

type ButtonProps = ButtonAsButton | ButtonAsLink

const variants: Record<Variant, string> = {
  primary:
    'bg-blue-hover text-white hover:bg-blue-deep hover:-translate-y-0.5 shadow-sm hover:shadow-md',
  secondary:
    'border border-white/80 bg-transparent text-white hover:bg-white/10 hover:-translate-y-0.5',
  ghost:
    'border border-border bg-white text-text-dark hover:border-blue hover:text-blue hover:-translate-y-0.5',
}

function isExternal(href: string) {
  return href.startsWith('http') || href.startsWith('mailto:')
}

export function Button(props: ButtonProps) {
  const { children, variant = 'primary', className = '', icon } = props
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition duration-300 ease-out ${variants[variant]} ${className}`

  if ('href' in props && props.href) {
    const { href, target, rel, onClick } = props
    if (isExternal(href) || href.startsWith('/#')) {
      return (
        <a href={href} target={target} rel={rel} onClick={onClick} className={classes}>
          {children}
          {icon}
        </a>
      )
    }
    return (
      <Link to={href} onClick={onClick} className={classes}>
        {children}
        {icon}
      </Link>
    )
  }

  const { type = 'button', ...rest } = props as ButtonAsButton
  return (
    <button type={type} className={classes} {...rest}>
      {children}
      {icon}
    </button>
  )
}
