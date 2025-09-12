import React from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import Navbar from '../layouts/navbar'
import Footer from '../layouts/footer'

export default function NewsDetails() {
  const navigate = useNavigate()
  const { state } = useLocation() as { state?: { item?: any } }
  const params = useParams()

  const item = state?.item

  // Fallback if no state was provided (e.g., direct link). For now, go back.
  // You can extend this to fetch by params.id when an endpoint exists.
  if (!item) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <section className="py-24">
            <div className="container">
              <div className="max-w-2xl mx-auto text-center">
                <h1 className="text-2xl md:text-3xl font-bold mb-4">News not found</h1>
                <p className="text-gray-600 mb-6">We couldn't load that news item. Please go back and try again.</p>
                <button onClick={() => navigate(-1)} className="inline-flex cursor-pointer items-center justify-center gap-2 px-6 py-3 bg-[#fe6400] text-white rounded-md hover:bg-[#e05800] transition-colors">
                  Go Back
                </button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    )
  }

  const formattedDate = item?.eventdate
    ? new Date(item.eventdate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : ''

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-br from-[#036333] to-[#047a3d] text-white py-16 md:py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <button onClick={() => navigate(-1)} className="inline-flex cursor-pointer items-center gap-2 mb-6 text-white/90 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6"/>
                </svg>
                Back
              </button>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">{item?.title}</h1>
              {formattedDate && (
                <div className="flex items-center gap-2 text-white/90">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  <span className="text-base md:text-lg">{formattedDate}</span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white border border-gray-200 rounded-lg md:rounded-xl shadow-sm p-6 md:p-8">
                {item?.image && (
                  <div className="mb-6 overflow-hidden rounded-md">
                    <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
                  </div>
                )}
                <div className="prose max-w-none text-gray-700">
                  <p className="whitespace-pre-line text-base md:text-lg leading-relaxed">{item?.description}</p>
                </div>

                {/* {item?.details && (
                  <div className="mt-6">
                    <h2 className="text-xl md:text-2xl font-semibold mb-3 text-[#036333]">Details</h2>
                    <div className="prose max-w-none text-gray-700 text-base md:text-lg">
                      <p className="whitespace-pre-line">{item.details}</p>
                    </div>
                  </div>
                )} */}

                {/* <div className="mt-8 flex gap-3">
                  <button onClick={() => navigate(-1)} className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50">
                    Back
                  </button>
                  <Link to="/" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#fe6400] text-white rounded-md hover:bg-[#e05800]">
                    Go to Home
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
