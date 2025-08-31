
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../layouts/navbar'
import FirstSection from '../components/firstSection'
import Mission from '../components/mission'
import Trustees from '../components/trustees'
import Executives from '../components/executive'
import JoinUs from '../components/joinUs'
import OurProjects from '../components/ourProjects'
import News from '../components/news'
import Footer from '../layouts/footer'

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    // Handle scroll to section when navigating from other pages
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo
      const element = document.getElementById(sectionId)
      
      if (element) {
        // Small delay to ensure the page has rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
      
      // Clear the state to prevent scrolling on subsequent renders
      window.history.replaceState({}, document.title)
    }
  }, [location.state])

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <FirstSection />

        <Mission />

        <Trustees />

        <Executives />

        <JoinUs />

        <OurProjects />
        <News />
      </main>

      <Footer />
    </div>
  )
}
