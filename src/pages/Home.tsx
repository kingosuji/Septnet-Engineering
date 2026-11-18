import { AboutSection } from '@/components/sections/AboutSection'
import { ContactCTA } from '@/components/sections/ContactCTA'
import { IndustriesSection } from '@/components/sections/IndustriesSection'
import { InsightsSection } from '@/components/sections/InsightsSection'
import { PartnersSlider } from '@/components/sections/PartnersSlider'
import { Hero } from '@/components/sections/Hero'
import { ApproachSection } from '@/components/sections/ApproachSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { ServiceHighlights } from '@/components/sections/ServiceHighlights'
import { SolutionsSection } from '@/components/sections/SolutionsSection'
import { OrganizationJsonLd } from '@/components/seo/OrganizationJsonLd'
import { Seo } from '@/components/seo/Seo'
import { pageSeo } from '@/config/seo'

export function Home() {
  return (
    <>
      <Seo seo={pageSeo.home} />
      <OrganizationJsonLd />
      <Hero />
      <ServiceHighlights />
      <PartnersSlider />
      <AboutSection />
      <SolutionsSection />
      <IndustriesSection />
      <ApproachSection />
      <ProjectsSection />
      <InsightsSection />
      <ContactCTA />
    </>
  )
}
