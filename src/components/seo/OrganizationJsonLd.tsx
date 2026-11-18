import { useEffect } from 'react'
import { site } from '@/config/site'

const SCRIPT_ID = 'septnet-organization-jsonld'

export function OrganizationJsonLd() {
  useEffect(() => {
    const data = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: site.name,
      url: site.domain,
      logo: `${site.domain}/logo.png`,
      email: site.email,
      address: [
        {
          '@type': 'PostalAddress',
          addressLocality: 'Calgary',
          addressRegion: 'Alberta',
          addressCountry: 'CA',
        },
        {
          '@type': 'PostalAddress',
          addressLocality: 'Lagos',
          addressRegion: 'Lekki Phase 1',
          addressCountry: 'NG',
        },
      ],
      description: site.hero.description,
      contactPoint: {
        '@type': 'ContactPoint',
        email: site.email,
        contactType: 'customer service',
      },
    }

    let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null
    if (!script) {
      script = document.createElement('script')
      script.id = SCRIPT_ID
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(data)

    return () => {
      script?.remove()
    }
  }, [])

  return null
}
