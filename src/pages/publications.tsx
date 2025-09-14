
import Navbar from '../layouts/navbar'
import Footer from '../layouts/footer'

export default function Publications() {
  const publications = [
    {
      title: 'UIMEA Annual Report 2024',
      summary: 'Key achievements, events, projects, and financial overview of the year.',
      action: 'View PDF',
    },
    {
      title: 'Mechanical Engineering Alumni Spotlight',
      summary: 'Stories of impact from UI Mechanical Engineering alumni across industries.',
      action: 'Read Online',
    },
    {
      title: 'UIMEA Project Compendium',
      summary: 'Selected projects and initiatives advancing engineering excellence.',
      action: 'View Summary',
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-[#036333] to-[#047a3d] text-white py-16 md:py-20">
          <div className="container text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Publications</h1>
            <p className="text-white/90 max-w-2xl mx-auto px-4">
              Curated materials and reports from UIMEA for the alumni community.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {publications.map((pub, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-2 text-[#036333]">{pub.title}</h3>
                  <p className="text-gray-700 mb-4">{pub.summary}</p>
                  <button className="inline-flex cursor-pointer items-center justify-center gap-2 px-4 py-2 bg-[#fe6400] text-white rounded-md hover:bg-[#e05800] transition-colors">
                    {pub.action}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
