type SectionHeadingProps = {
  label?: string
  heading: string
  description?: string
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
  className?: string
}

export function SectionHeading({
  label,
  heading,
  description,
  align = 'left',
  tone = 'light',
  className = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'mx-auto text-center' : 'text-left'
  const labelColor = tone === 'dark' ? 'text-blue' : 'text-blue-hover'
  const headingColor = tone === 'dark' ? 'text-white' : 'text-text-dark'
  const descColor = tone === 'dark' ? 'text-white/75' : 'text-text-muted'

  return (
    <div className={`max-w-3xl ${alignClass} ${className}`}>
      {label ? (
        <p className={`mb-3 text-xs font-semibold tracking-[0.18em] uppercase ${labelColor}`}>
          {label}
        </p>
      ) : null}
      <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${headingColor}`}>{heading}</h2>
      {description ? <p className={`mt-4 text-base leading-relaxed sm:text-lg ${descColor}`}>{description}</p> : null}
    </div>
  )
}
