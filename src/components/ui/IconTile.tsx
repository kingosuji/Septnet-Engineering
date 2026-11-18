import type { LucideIcon } from 'lucide-react'

type IconTileProps = {
  icon: LucideIcon
  size?: 'md' | 'lg'
  /** light: on white · dark: on navy · glass: on top of photos */
  tone?: 'light' | 'dark' | 'glass'
  className?: string
}

const tones = {
  light: 'border-blue/30 bg-sky/25 text-navy group-hover:border-blue group-hover:bg-blue group-hover:text-white',
  dark: 'border-white/25 bg-white/10 text-white group-hover:border-sky/70 group-hover:bg-blue/30',
  glass: 'border-white/30 bg-white/15 text-white backdrop-blur-sm group-hover:bg-white/25',
}

/**
 * Compact outline icon tile, modelled on the reference site:
 * small rounded square, tinted fill, hairline border, 1.75px outline glyph.
 */
export function IconTile({ icon: Icon, size = 'md', tone = 'light', className = '' }: IconTileProps) {
  const box = size === 'lg' ? 'h-12 w-12 rounded-xl' : 'h-10 w-10 rounded-lg'
  const glyph = size === 'lg' ? 'h-6 w-6' : 'h-5 w-5'
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center border transition duration-300 ${box} ${tones[tone]} ${className}`}
    >
      <Icon className={glyph} strokeWidth={1.75} aria-hidden />
    </span>
  )
}
