import { assets } from '@/config/assets'

export type Project = {
  id: string
  title: string
  description: string
  image: string
}

/**
 * Capability cards taken from the live SEPTNET site project page.
 * Images use client-supplied photos (generic captions — no third-party brand claims).
 */
export const projects: Project[] = [
  {
    id: 'infrastructure-modernization',
    title: 'Infrastructure Modernization',
    description:
      'Network refresh, secure connectivity, wireless modernization and office infrastructure transformation.',
    image: assets.project1,
  },
  {
    id: 'cloud-hybrid',
    title: 'Cloud & Hybrid Infrastructure',
    description:
      'Azure architecture, hybrid connectivity, virtual desktop environments and cloud readiness planning.',
    image: assets.project2,
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Improvement',
    description:
      'Firewall deployments, secure remote access, segmentation and security posture improvement.',
    image: assets.project3,
  },
  {
    id: 'procurement-advisory',
    title: 'Procurement Advisory',
    description:
      'Technical specifications, equipment validation, vendor reviews and procurement coordination.',
    image: assets.project4,
  },
  {
    id: 'project-recovery',
    title: 'Project Recovery',
    description:
      'Governance, stakeholder realignment and execution planning for delayed or complex initiatives.',
    image: assets.project5,
  },
  {
    id: 'digital-workplace',
    title: 'Digital Workplace',
    description:
      'Collaboration systems, Microsoft 365, cloud adoption and modern workplace enablement.',
    image: assets.project6,
  },
]
