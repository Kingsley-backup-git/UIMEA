
import Navbar from '../layouts/navbar'
import Footer from '../layouts/footer'
import { Link } from 'react-router-dom'

export default function TermsOfService() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#036333] to-[#047a3d] text-white py-16 md:py-20">
          <div className="container text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Terms of Service
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/90 mb-6 md:mb-8">
              Simple guidelines for being part of our UIMEA community. 
              We're here to help you connect and grow together.
            </p>
            <Link 
              to="/" 
              className="inline-flex cursor-pointer items-center justify-center gap-2 px-4 md:px-6 py-2 md:py-3 border border-white text-white hover:bg-white hover:text-[#036333] transition-colors rounded-md font-medium text-sm md:text-base"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
              Back to Home
            </Link>
          </div>
        </section>

        {/* Terms of Service Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              {/* Last Updated */}
              <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-blue-800 text-sm md:text-base">
                  <strong>Last Updated:</strong> January 15, 2025
                </p>
              </div>

              {/* Introduction */}
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#036333]">
                  Welcome to UIMEA!
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We're excited to have you as part of the University of Ibadan Mechanical Engineering 
                  Alumni Association (UIMEA) community! These simple guidelines help us all have a 
                  great experience together.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  By using our website and services, you're agreeing to these friendly terms. 
                  We're here to help, so if you have any questions, just reach out!
                </p>
              </div>

              {/* What We're About */}
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#036333]">
                  What We're About
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  UIMEA is all about connecting mechanical engineering alumni, sharing knowledge, 
                  and building a supportive community. We want to help you:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6 ml-4">
                  <li>Stay connected with fellow alumni</li>
                  <li>Access professional development opportunities</li>
                  <li>Participate in exciting events and workshops</li>
                  <li>Share your expertise and learn from others</li>
                  <li>Give back to the next generation of engineers</li>
                </ul>
              </div>

              {/* Joining Our Community */}
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#036333]">
                  Joining Our Community
                </h2>
                
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Who Can Join
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We welcome:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6 ml-4">
                  <li>Graduates from UI Mechanical Engineering</li>
                  <li>Final year students</li>
                  <li>Friends of UIMEA (with approval)</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  What We Ask
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To keep our community great, we simply ask that you:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6 ml-4">
                  <li>Be respectful and professional</li>
                  <li>Share accurate information</li>
                  <li>Help make UIMEA better for everyone</li>
                  <li>Respect others' privacy and rights</li>
                </ul>
              </div>

              {/* Using Our Services */}
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#036333]">
                  Using Our Services
                </h2>
                
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  What You Can Do
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Feel free to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6 ml-4">
                  <li>Connect with other alumni</li>
                  <li>Share your professional insights</li>
                  <li>Participate in discussions and events</li>
                  <li>Access member resources and benefits</li>
                  <li>Help organize community activities</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  What We'd Prefer You Avoid
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To keep our community positive, please avoid:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6 ml-4">
                  <li>Spam or excessive self-promotion</li>
                  <li>Disrespectful or inappropriate behavior</li>
                  <li>Sharing others' private information</li>
                  <li>Anything illegal or harmful</li>
                </ul>
              </div>

              {/* Events and Activities */}
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#036333]">
                  Events and Activities
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We love organizing events for our community! When you join us:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6 ml-4">
                  <li>Register early to secure your spot</li>
                  <li>Let us know if you can't make it</li>
                  <li>Be friendly and inclusive to everyone</li>
                  <li>Follow any specific event guidelines</li>
                  <li>Have fun and make connections!</li>
                </ul>
              </div>

              {/* Privacy and Your Information */}
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#036333]">
                  Privacy and Your Information
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We care about your privacy! We only use your information to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6 ml-4">
                  <li>Keep you updated about UIMEA activities</li>
                  <li>Connect you with other alumni</li>
                  <li>Provide member benefits and services</li>
                  <li>Improve our community offerings</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Check out our <a href="/privacy-policy" className="text-[#fe6400] hover:underline">Privacy Policy</a> for more details.
                </p>
              </div>

              {/* Content and Sharing */}
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#036333]">
                  Content and Sharing
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When you share content with our community:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6 ml-4">
                  <li>Make sure it's yours to share</li>
                  <li>Keep it professional and helpful</li>
                  <li>Respect others' work and ideas</li>
                  <li>Help us build a positive environment</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  We may use your shared content to promote UIMEA activities, 
                  but we'll always give you credit!
                </p>
              </div>

              {/* If Things Don't Go Well */}
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#036333]">
                  If Things Don't Go Well
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We hope this never happens, but if there are issues:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6 ml-4">
                  <li>We'll talk to you first about any concerns</li>
                  <li>We may temporarily limit access if needed</li>
                  <li>We'll work with you to resolve issues</li>
                  <li>We only take serious action as a last resort</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  You can also leave our community anytime by letting us know.
                </p>
              </div>

              {/* Updates to These Terms */}
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#036333]">
                  Updates to These Terms
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may update these terms occasionally to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6 ml-4">
                  <li>Reflect new services or features</li>
                  <li>Improve clarity and understanding</li>
                  <li>Address community feedback</li>
                  <li>Meet legal requirements</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  We'll always let you know about important changes and update the date above.
                </p>
              </div>

              {/* Legal Stuff */}
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#036333]">
                  Legal Stuff
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  These terms are governed by Nigerian law. If there are any disputes, 
                  we'll try to work them out together first. We're all part of the same 
                  community, after all!
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We can't guarantee our services will always be perfect, but we promise 
                  to do our best to provide a great experience for everyone.
                </p>
              </div>

              {/* Get in Touch */}
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#036333]">
                  Get in Touch
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Questions about these terms? Want to chat about UIMEA? 
                  We'd love to hear from you:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#fe6400]">
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                      <span className="text-gray-700">Email: <a href="mailto:info@uimea.com.ng" className="text-[#fe6400] hover:underline">info@uimea.com.ng</a></span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#fe6400]">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <span className="text-gray-700">Phone: <a href="tel:+2348001234567" className="text-[#fe6400] hover:underline">+234 800 123 4567</a></span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#fe6400] mt-0.5">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span className="text-gray-700">
                        Address: Department of Mechanical Engineering, University of Ibadan, 
                        Ibadan, Oyo State, Nigeria
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Back to Top */}
              <div className="text-center">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#fe6400] text-white rounded-md hover:bg-[#e05800] transition-colors font-medium"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m18 15-6-6-6 6"/>
                  </svg>
                  Back to Top
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
