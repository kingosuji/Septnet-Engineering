export type NavItem = {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

/**
 * Desktop header omits Contact (mailto CTA covers it).
 * Footer and mobile menu include Contact page.
 */
export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Enterprise Network Architecture & Integration', href: '/services/architecture' },
      { label: 'SD-WAN & Secure Connectivity', href: '/services/sdwan' },
      { label: 'Implementation, Optimization & Support', href: '/services/support' },
      { label: 'Firewall & Network Security', href: '/services/security' },
    ],
  },
  { label: 'Projects', href: '/projects' },
  { label: 'Insights', href: '/insights' },
]

export const mobileNav: NavItem[] = [
  ...mainNav,
  { label: 'Contact', href: '/contact' },
]

export const footerNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
]
