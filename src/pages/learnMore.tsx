import { useState } from 'react'
import Navbar from '../layouts/navbar'
import Footer from '../layouts/footer'
import JoinUsModal from '../components/joinUsModal'
import { Link } from 'react-router-dom';

export default function LearnMore() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#036333] to-[#047a3d] text-white py-20">
          <div className="container text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Learn More About UIMEA
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-white/90">
              Discover how the University of Ibadan Mechanical Engineering Alumni Association 
              is shaping the future of engineering in Nigeria and beyond.
            </p>
          </div>
        </section>

        {/* About UIMEA Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center text-[#036333]">
                About UIMEA
              </h2>
              <div className="prose prose-lg mx-auto text-gray-700 space-y-6">
                <p>
                  The University of Ibadan Mechanical Engineering Alumni (UIMEA) Association 
                  is a prestigious organization that brings together graduates from the 
                  Mechanical Engineering Department of the University of Ibadan, one of 
                  Nigeria's premier institutions of higher learning.
                </p>
                <p>
                  Founded with the vision of fostering excellence in mechanical engineering, 
                  UIMEA serves as a bridge between academic achievement and professional 
                  success, creating opportunities for continuous learning, networking, and 
                  community impact.
                </p>
                <p>
                  Our association represents the collective expertise of mechanical engineers 
                  who have contributed significantly to various sectors including manufacturing, 
                  energy, automotive, aerospace, and sustainable development across Nigeria 
                  and internationally.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center text-[#036333]">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 bg-[#fe6400] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M9 12l2 2 4-4"></path>
                    <path d="M21 12c-1 0-2-.4-2-1V5c0-1 .4-2 1-2s2 .4 2 1v6c0 .6-1 1-2 1z"></path>
                    <path d="M3 12c1 0 2-.4 2-1V5c0-1-.4-2-1-2s-2 .4-2 1v6c0 .6 1 1 2 1z"></path>
                    <path d="M12 21c0-1-.4-2-1-2H5c-1 0-2 .4-2 1s.4 2 1 2h6c.6 0 1-1 1-2z"></path>
                    <path d="M12 3c0 1 .4 2 1 2h6c1 0 2-.4 2-1s-.4-2-1-2h-6c-.6 0-1 1-1 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#036333]">Excellence</h3>
                <p className="text-gray-600">
                  We strive for the highest standards in engineering practice, 
                  innovation, and professional development.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 bg-[#fe6400] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#036333]">Community</h3>
                <p className="text-gray-600">
                  Building strong connections and fostering collaboration among 
                  mechanical engineering professionals.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 bg-[#fe6400] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#036333]">Innovation</h3>
                <p className="text-gray-600">
                  Encouraging creative solutions and technological advancement 
                  in mechanical engineering and related fields.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center text-[#036333]">
              Membership Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#fe6400] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#036333]">Professional Networking</h3>
                    <p className="text-gray-600">
                      Connect with fellow mechanical engineers, industry leaders, and 
                      potential employers across various sectors and industries.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#fe6400] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#036333]">Career Development</h3>
                    <p className="text-gray-600">
                      Access to workshops, seminars, training programs, and mentorship 
                      opportunities to advance your engineering career.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#fe6400] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#036333]">Exclusive Events</h3>
                    <p className="text-gray-600">
                      Invitations to special gatherings, conferences, technical symposiums, 
                      and networking events with industry experts.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#fe6400] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M9 12l2 2 4-4"></path>
                      <path d="M21 12c-1 0-2-.4-2-1V5c0-1 .4-2 1-2s2 .4 2 1v6c0 .6-1 1-2 1z"></path>
                      <path d="M3 12c1 0 2-.4 2-1V5c0-1-.4-2-1-2s-2 .4-2 1v6c0 .6 1 1 2 1z"></path>
                      <path d="M12 21c0-1-.4-2-1-2H5c-1 0-2 .4-2 1s.4 2 1 2h6c.6 0 1-1 1-2z"></path>
                      <path d="M12 3c0 1 .4 2 1 2h6c1 0 2-.4 2-1s-.4-2-1-2h-6c-.6 0-1 1-1 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#036333]">Technical Resources</h3>
                    <p className="text-gray-600">
                      Access to technical publications, research papers, and industry 
                      insights to stay updated with the latest engineering trends.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#fe6400] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#036333]">Mentorship Programs</h3>
                    <p className="text-gray-600">
                      Connect with experienced professionals who can guide you through 
                      career challenges and provide valuable industry insights.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#fe6400] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#036333]">Community Impact</h3>
                    <p className="text-gray-600">
                      Participate in projects that address real engineering challenges 
                      and contribute to the development of Nigeria's infrastructure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Get Involved Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center text-[#036333]">
              How to Get Involved
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-[#fe6400] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#036333]">Apply for Membership</h3>
                <p className="text-gray-600 mb-4">
                  Complete the membership application form with your details and 
                  engineering background information.
                </p>
                {/* <button 
                  onClick={openModal}
                  className="inline-block px-6 py-2 bg-[#fe6400] text-white rounded-md hover:bg-[#e05800] transition-colors cursor-pointer"
                >
                  Apply Now
                </button> */}
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-[#fe6400] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#036333]">Attend Events</h3>
                <p className="text-gray-600 mb-4">
                  Join our upcoming events, workshops, and networking sessions 
                  to connect with fellow members and industry professionals.
                </p>
                {/* <a href="#calendar" className="inline-block px-6 py-2 bg-[#fe6400] text-white rounded-md hover:bg-[#e05800] transition-colors">
                  View Calendar
                </a> */}
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-[#fe6400] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#036333]">Contribute & Collaborate</h3>
                <p className="text-gray-600 mb-4">
                  Share your expertise, participate in projects, and help mentor 
                  the next generation of mechanical engineers.
                </p>
                {/* <a href="#projects" className="inline-block px-6 py-2 bg-[#fe6400] text-white rounded-md hover:bg-[#e05800] transition-colors">
                  View Projects
                </a> */}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#036333] text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Join UIMEA?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Become part of a community that's shaping the future of mechanical 
              engineering in Nigeria. Connect, grow, and make a difference with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={openModal}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-12 px-6 py-3 bg-[#fe6400] hover:bg-[#e05800] text-white text-lg cursor-pointer"
              >
                Apply for Membership
              </button>
              <Link to="/" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-12 px-6 py-3 border border-white text-white hover:bg-white/10 text-lg">
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Join Us Modal */}
      <JoinUsModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}
