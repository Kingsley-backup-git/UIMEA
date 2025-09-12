import React from 'react'
import Navbar from '../layouts/navbar'
import Footer from '../layouts/footer'

export default function Newsletters() {
  const archives = [
    { title: 'January 2025 Newsletter', description: 'Updates on events, projects, and alumni news.' },
    { title: 'December 2024 Newsletter', description: 'Year in review and highlights.' },
    { title: 'November 2024 Newsletter', description: 'Departmental lecture recap and upcoming activities.' },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-[#036333] to-[#047a3d] text-white py-16 md:py-20">
          <div className="container text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Newsletters</h1>
            <p className="text-white/90 max-w-2xl mx-auto px-4">
              Stay up to date with UIMEA activities, opportunities, and community highlights.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto mb-10 bg-white border border-gray-200 rounded-lg p-6 shadow-sm text-center">
              <h2 className="text-xl md:text-2xl font-semibold mb-2 text-[#036333]">Subscribe to our Newsletter</h2>
              <p className="text-gray-700 mb-4">Get monthly updates directly in your inbox.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <input type="email" placeholder="Enter your email" className="w-full sm:w-80 px-4 py-2 border border-gray-300 rounded-md" />
                <button className="px-5 py-2 bg-[#fe6400] text-white rounded-md hover:bg-[#e05800] transition-colors">Subscribe</button>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-[#036333]">Archive</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {archives.map((n, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h4 className="text-lg font-semibold mb-2">{n.title}</h4>
                  <p className="text-gray-700 mb-4">{n.description}</p>
                  <button className="inline-flex cursor-pointer items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50">View</button>
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
