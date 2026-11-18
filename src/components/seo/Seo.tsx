import { useEffect } from 'react'
import { absoluteUrl, type PageSeo } from '@/config/seo'

type SeoProps = {
  seo: PageSeo
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.content = content
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.rel = rel
    document.head.appendChild(el)
  }
  el.href = href
}

export function Seo({ seo }: SeoProps) {
  useEffect(() => {
    const url = absoluteUrl(seo.path)
    document.title = seo.title
    upsertMeta('name', 'description', seo.description)
    upsertLink('canonical', url)
    upsertMeta('property', 'og:title', seo.title)
    upsertMeta('property', 'og:description', seo.description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:type', 'website')
  }, [seo])

  return null
}
