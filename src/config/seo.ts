import { site } from './site'

export type PageSeo = {
  title: string
  description: string
  path: string
}

export const defaultSeo: PageSeo = {
  title: `${site.name} | Network Engineering & Enterprise Technology`,
  description: site.hero.description,
  path: '/',
}

export const pageSeo: Record<string, PageSeo> = {
  home: defaultSeo,
  about: {
    title: `About Us | ${site.name}`,
    description:
      'Learn about SEPTNET Engineering Inc. and our focus on network engineering, security, and resilient connectivity.',
    path: '/about',
  },
  services: {
    title: `Services | ${site.name}`,
    description:
      'Enterprise network architecture, SD-WAN connectivity, implementation support, and firewall security from SEPTNET Engineering Inc.',
    path: '/services',
  },
  projects: {
    title: `Projects | ${site.name}`,
    description: site.projects.description,
    path: '/projects',
  },
  insights: {
    title: `Insights | ${site.name}`,
    description: site.insights.description,
    path: '/insights',
  },
  contact: {
    title: `Contact Us | ${site.name}`,
    description: `Contact SEPTNET Engineering Inc. at ${site.email}.`,
    path: '/contact',
  },
}

export function absoluteUrl(path: string): string {
  return `${site.domain}${path === '/' ? '/' : path}`
}
