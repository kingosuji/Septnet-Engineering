const logo = (file: string) => new URL(`../assets/partners/${file}`, import.meta.url).href

export type Partner = { name: string; logo: string }

/** Technology partners supplied by the client (meeting 2026-11-14). Logos are trademarks of their owners. */
export const partners: Partner[] = [
  { name: 'Cisco Systems', logo: logo('cisco.webp') },
  { name: 'Fortinet', logo: logo('fortinet.webp') },
  { name: 'Palo Alto Networks', logo: logo('palo-alto-networks.webp') },
  { name: 'Arista Networks', logo: logo('arista.webp') },
  { name: 'Juniper Networks', logo: logo('juniper.webp') },
  { name: 'HPE / Aruba Networking', logo: logo('hpe.webp') },
  { name: 'Extreme Networks', logo: logo('extreme.webp') },
  { name: 'Huawei', logo: logo('huawei.webp') },
  { name: 'Ubiquiti', logo: logo('ubiquiti.webp') },
]
