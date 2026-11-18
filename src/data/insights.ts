export type InsightSection = {
  heading?: string
  paragraphs: string[]
}

export type Insight = {
  id: string
  title: string
  excerpt: string
  subtitle: string
  sections: InsightSection[]
  closingCta: string
}

/**
 * Insight articles supplied by the client in Changes to be made.docx.
 */
export const insights: Insight[] = [
  {
    id: 'cloud-migration-readiness',
    title: 'Cloud Migration Readiness',
    subtitle: 'What Organizations Should Consider Before Moving to the Cloud',
    excerpt:
      'Key questions organizations should answer before moving workloads to cloud platforms.',
    sections: [
      {
        paragraphs: [
          'Cloud migration offers opportunities to improve scalability, flexibility and operational efficiency. However, successful adoption requires more than transferring applications and servers to a cloud platform.',
          'As organizations modernize their technology environments, cloud computing has become an important part of infrastructure planning. Platforms such as Microsoft Azure and Amazon Web Services (AWS) provide powerful capabilities, but moving critical workloads without proper preparation can introduce unexpected costs, security risks and operational challenges.',
        ],
      },
      {
        heading: 'How SEPTNET Engineering Can Help',
        paragraphs: [
          'SEPTNET supports organizations in assessing, designing and implementing infrastructure and technology solutions that align with their operational objectives.',
          'Our approach brings together engineering assessment, network architecture, security considerations, technical planning and project delivery to support informed infrastructure decisions.',
          'Whether an organization is considering cloud adoption, expanding an existing hybrid environment or modernizing its enterprise infrastructure, SEPTNET focuses on practical engineering solutions designed for reliability, scalability and long-term value.',
        ],
      },
    ],
    closingCta: 'Planning a cloud or hybrid infrastructure initiative?',
  },
  {
    id: 'secure-remote-access',
    title: 'Secure Remote Access',
    subtitle: 'Building Secure and Reliable Connectivity for Modern Workforces',
    excerpt:
      'Why identity, endpoint controls, VPN design and segmentation matter for hybrid workforces.',
    sections: [
      {
        paragraphs: [
          'Secure remote access is more than connecting employees to corporate networks. It requires a well-designed approach to identity management, endpoint security, network connectivity and access control to protect business-critical systems.',
          'As organizations embrace hybrid work environments, cloud applications and distributed operations, secure remote access has become an essential component of enterprise infrastructure.',
          'Technologies such as Virtual Private Networks (VPNs), Zero Trust Network Access (ZTNA) and Secure Access Service Edge (SASE) provide organizations with different approaches to connecting employees, contractors and remote offices to business applications and resources.',
          'However, providing remote connectivity without appropriate security controls can expose organizations to unauthorized access, data breaches and operational disruptions.',
          'A successful remote access strategy must balance security, performance, user experience and business continuity while ensuring that users have access only to the resources required for their responsibilities.',
        ],
      },
      {
        heading: 'How SEPTNET Engineering Can Help',
        paragraphs: [
          'SEPTNET supports organizations in designing, implementing and optimizing secure remote access solutions that align with their operational and security requirements.',
          'Our approach combines network architecture, identity-based access controls, endpoint security considerations, VPN technologies and Zero Trust principles to establish secure and reliable connectivity across enterprise environments.',
          'Whether an organization is modernizing its existing VPN infrastructure, adopting ZTNA or SASE technologies, or improving secure connectivity for a distributed workforce, SEPTNET focuses on practical engineering solutions that strengthen security, simplify access management and support long-term operational resilience.',
        ],
      },
    ],
    closingCta: "Planning to modernize your organization's remote access infrastructure?",
  },
  {
    id: 'infrastructure-modernization',
    title: 'Infrastructure Modernization',
    subtitle: 'Building Resilient, Scalable and Future-Ready Enterprise Systems',
    excerpt: 'How to prepare for network, security and cloud modernization projects.',
    sections: [
      {
        paragraphs: [
          'Infrastructure modernization goes beyond replacing outdated equipment and technologies. It requires a strategic approach to improving performance, strengthening security, enhancing operational resilience and preparing organizations for future business demands.',
          'As organizations evolve, their infrastructure must adapt to increasing operational requirements, emerging technologies and changing business priorities.',
          'Legacy systems, ageing network equipment, fragmented technology environments and inefficient infrastructure can introduce performance limitations, security vulnerabilities and increased maintenance costs.',
          'Modernizing enterprise infrastructure presents opportunities to improve reliability, scalability and operational efficiency while creating a stronger foundation for innovation and long-term growth.',
          'However, successful modernization requires more than adopting new technologies. It demands a clear understanding of existing systems, careful engineering assessment and a structured implementation strategy that minimizes operational disruption.',
          'Whether upgrading network infrastructure, modernizing data centres, integrating cloud technologies or improving critical infrastructure systems, organizations must balance technical requirements with business continuity, security and long-term investment value.',
        ],
      },
      {
        heading: 'How SEPTNET Engineering Can Help',
        paragraphs: [
          'SEPTNET supports organizations in assessing, designing and implementing infrastructure modernization initiatives aligned with their operational and strategic objectives.',
          'Our approach brings together engineering expertise, infrastructure assessment, technical advisory, procurement planning, network and security architecture, and structured project delivery to develop practical and sustainable solutions.',
          'Whether an organization is upgrading ageing infrastructure, improving enterprise connectivity, modernizing data centre environments or integrating emerging technologies, SEPTNET focuses on engineering solutions that enhance performance, strengthen resilience and support future scalability.',
          'We recognize that every infrastructure environment presents unique technical and operational challenges. Our priority is to deliver solutions that address immediate requirements while establishing a reliable foundation for long-term business growth.',
        ],
      },
    ],
    closingCta: 'Planning an infrastructure modernization initiative?',
  },
]

export function getInsightById(id: string): Insight | undefined {
  return insights.find((item) => item.id === id)
}
