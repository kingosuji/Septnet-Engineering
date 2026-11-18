import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { About } from '@/pages/About'
import { Contact } from '@/pages/Contact'
import { Home } from '@/pages/Home'
import { InsightDetail } from '@/pages/InsightDetail'
import { Insights } from '@/pages/Insights'
import { Projects } from '@/pages/Projects'
import { ServiceDetail } from '@/pages/ServiceDetail'
import { Services } from '@/pages/Services'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:serviceId" element={<ServiceDetail />} />
          <Route path="projects" element={<Projects />} />
          <Route path="insights" element={<Insights />} />
          <Route path="insights/:insightId" element={<InsightDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
