
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
