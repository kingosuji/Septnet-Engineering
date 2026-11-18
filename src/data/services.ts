import type { LucideIcon } from 'lucide-react'
import { ArrowLeftRight, Network, Settings2, ShieldCheck } from 'lucide-react'
import { assets } from '@/config/assets'

export type Service = {
  id: string
  title: string
  shortTitle: string
  /** First sentence — Services listing cards */
  description: string
  /** Full client paragraph — detail page */
  body: string
  image: string
  anchor: string
  icon: LucideIcon
  /** Photo used on the compact home-page card */
  cardImage: string
  /** width / height of cardImage, so the card frame never crops it */
  cardRatio: number
  /** One-line summary for compact cards */
  short: string
}

export const services: Service[] = [
  {
    id: 'architecture',
    title: 'Enterprise Network Architecture & Integration',
    shortTitle: 'Enterprise Network Architecture & Integration',
    description:
      'Design, deploy and modernize secure, scalable enterprise network infrastructures across corporate offices, data centers, campuses and cloud environments.',
    body: 'Design, deploy and modernize secure, scalable enterprise network infrastructures across corporate offices, data centers, campuses and cloud environments. Our engineering capabilities encompass LAN, WAN, routing, switching, network segmentation and hybrid network integration, delivering reliable connectivity, operational efficiency and infrastructure designed to support evolving business requirements.',
    image: assets.networkArchitecture,
    anchor: 'service-architecture',
    short: 'Secure, scalable networks across offices, data centers and cloud.',
    cardImage: assets.stripArchitecture,
    cardRatio: 900 / 506,
    icon: Network,
  },
  {
    id: 'sdwan',
    title: 'SD-WAN & Secure Connectivity',
    shortTitle: 'SD-WAN & Secure Connectivity',
    description:
      'Design and integrate resilient wide-area networks using fiber-optic, Ethernet, MPLS, microwave, fixed wireless, 4G/5G cellular and satellite connectivity, including LEO, MEO and GEO technologies.',
    body: 'Design and integrate resilient wide-area networks using fiber-optic, Ethernet, MPLS, microwave, fixed wireless, 4G/5G cellular and satellite connectivity, including LEO, MEO and GEO technologies. Through SD-WAN, intelligent traffic steering, dynamic path selection and automated failover, we help organizations optimize network performance, improve service availability and maintain connectivity across geographically distributed operations.',
    image: assets.sdWan,
    anchor: 'service-sdwan',
    short: 'Resilient WAN and SD-WAN across fiber, wireless and satellite.',
    cardImage: assets.sdWan,
    cardRatio: 1431 / 806,
    icon: ArrowLeftRight,
  },
  {
    id: 'support',
    title: 'Implementation, Optimization & Support',
    shortTitle: 'Implementation, Optimization & Support',
    description:
      'Enhance network efficiency and application performance through traffic engineering, Quality of Service (QoS), bandwidth management, WAN optimization and application acceleration technologies.',
    body: 'Enhance network efficiency and application performance through traffic engineering, Quality of Service (QoS), bandwidth management, WAN optimization and application acceleration technologies. Our solutions help organizations manage network congestion, improve application responsiveness and maximize available bandwidth across enterprise, cloud and hybrid infrastructure environments.',
    image: assets.implementation,
    anchor: 'service-support',
    short: 'QoS, optimization and support for stronger network performance.',
    cardImage: assets.implementation,
    cardRatio: 1600 / 843,
    icon: Settings2,
  },
  {
    id: 'security',
    title: 'Firewall & Network Security',
    shortTitle: 'Firewall & Network Security',
    description:
      'Design and implement secure enterprise network architectures incorporating next-generation firewalls, network segmentation, access control policies, secure remote connectivity and Zero Trust security principles.',
    body: 'Design and implement secure enterprise network architectures incorporating next-generation firewalls, network segmentation, access control policies, secure remote connectivity and Zero Trust security principles. Our approach integrates security into network design to reduce unnecessary exposure, control communication between network zones and strengthen protection across on-premises, cloud and hybrid environments.',
    image: assets.networkSecurity,
    anchor: 'service-security',
    short: 'Next-gen firewalls, segmentation and Zero Trust principles.',
    cardImage: assets.stripSecurity,
    cardRatio: 900 / 507,
    icon: ShieldCheck,
  },
]

export function getServiceById(id: string) {
  return services.find((service) => service.id === id)
}

export const solutions = [
  {
    title: 'Network Engineering',
    description: 'Design and engineering support for enterprise and infrastructure networks.',
  },
  {
    title: 'Firewall and Security',
    description: 'Security-focused configurations that protect critical traffic and access paths.',
  },
  {
    title: 'SD-WAN',
    description: 'Modern WAN approaches for resilient multi-site and hybrid connectivity.',
  },
  {
    title: 'Enterprise Connectivity',
    description: 'Reliable links and access patterns that keep business operations online.',
  },
  {
    title: 'Infrastructure Implementation',
    description: 'Practical rollout support from plan through production cutover.',
  },
  {
    title: 'Optimization and Support',
    description: 'Continuous improvement and support for stable day-to-day operations.',
  },
]
