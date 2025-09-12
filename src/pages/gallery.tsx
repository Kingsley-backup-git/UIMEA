import React from 'react'
import Navbar from '../layouts/navbar'
import Footer from '../layouts/footer'
import Banner from '../assets/bannerImg.png'
import MissionImg from '../assets/missionImg.png'
import PanelImg from '../assets/panelImg.jpg'
import LectureImg from '../assets/lectureImg.jpg'

export default function Gallery() {
  const images = [
    { src: Banner, alt: 'UIMEA Banner' },
    { src: MissionImg, alt: 'Our Mission' },
    { src: PanelImg, alt: 'Panel Session' },
    { src: LectureImg, alt: 'Distinguished Lecture' },
    { src: MissionImg, alt: 'Alumni Collaboration' },
    { src: PanelImg, alt: 'Networking Event' },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-[#036333] to-[#047a3d] text-white py-16 md:py-20">
          <div className="container text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Photo Gallery</h1>
            <p className="text-white/90 max-w-2xl mx-auto px-4">
              Highlights from UIMEA events, lectures, and community activities.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {images.map((img, idx) => (
                <div key={idx} className="overflow-hidden rounded-lg shadow-sm border border-gray-200 bg-white">
                  <img src={img.src} alt={img.alt} className="w-full h-56 md:h-64 object-cover hover:scale-105 transition-transform" />
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
