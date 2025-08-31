import React from 'react'
import Navbar from '../layouts/navbar'
import Footer from '../layouts/footer'
import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#036333] to-[#047a3d] text-white py-16 md:py-20">
          <div className="container text-center">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                Privacy Policy
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed px-4">
                We care about your privacy and want to be transparent about how we handle your information.
              </p>
              <Link 
                to="/" 
                className="inline-flex cursor-pointer items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-white text-[#036333] hover:bg-gray-100 transition-colors rounded-lg md:rounded-xl font-medium md:font-semibold text-base md:text-lg shadow-sm hover:shadow-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6"/>
                </svg>
                Back to Home
              </Link>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              {/* Last Updated */}
              <div className="mb-8 md:mb-12 p-4 md:p-6 bg-white border border-gray-200 rounded-lg md:rounded-xl shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12,6 12,12 16,14"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-800 text-base md:text-lg">
                    <strong>Last Updated:</strong> January 15, 2025
                  </p>
                </div>
              </div>

              {/* Introduction */}
              <div className="mb-8 md:mb-12 bg-white p-6 md:p-8 rounded-lg md:rounded-xl shadow-sm border border-gray-200">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-[#036333]">
                  Your Privacy Matters to Us
                </h2>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  At UIMEA, we believe in being open and honest about how we handle your information. 
                  This policy explains the basics in simple terms - no legal jargon!
                </p>
              </div>

              {/* What We Collect */}
              <div className="mb-8 md:mb-12 bg-white p-6 md:p-8 rounded-lg md:rounded-xl shadow-sm border border-gray-200">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#036333]">
                  What Information We Collect
                </h2>
                
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div className="bg-gray-50 p-4 md:p-6 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">Information You Give Us</h3>
                    <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                      <li>• Your name and contact details</li>
                      <li>• Graduation year and degree info</li>
                      <li>• Current job and organization</li>
                      <li>• Professional interests</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 md:p-6 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">Information We Collect Automatically</h3>
                    <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                      <li>• Website usage data</li>
                      <li>• Device information</li>
                      <li>• Pages you visit</li>
                      <li>• Time spent on our site</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use It */}
              <div className="mb-8 md:mb-12 bg-white p-6 md:p-8 rounded-lg md:rounded-xl shadow-sm border border-gray-200">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#036333]">
                  How We Use Your Information
                </h2>
                
                <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                  <div className="flex items-start gap-3 p-3 md:p-4 bg-gray-50 rounded-lg">
                    <div className="p-2 bg-[#036333]/10 rounded-lg mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#036333]">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="m22 21-2-2"></path>
                        <path d="M16 16l2 2"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm md:text-base">Connect you with other alumni</span>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 md:p-4 bg-gray-50 rounded-lg">
                    <div className="p-2 bg-[#036333]/10 rounded-lg mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#036333]">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm md:text-base">Send you event invitations</span>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 md:p-4 bg-gray-50 rounded-lg">
                    <div className="p-2 bg-[#036333]/10 rounded-lg mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#036333]">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                        <path d="M2 17l10 5 10-5"></path>
                        <path d="M2 12l10 5 10-5"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm md:text-base">Provide member benefits</span>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 md:p-4 bg-gray-50 rounded-lg">
                    <div className="p-2 bg-[#036333]/10 rounded-lg mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#036333]">
                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm md:text-base">Improve our services</span>
                  </div>
                </div>
              </div>

              {/* Sharing Information */}
              <div className="mb-8 md:mb-12 bg-white p-6 md:p-8 rounded-lg md:rounded-xl shadow-sm border border-gray-200">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#036333]">
                  Sharing Your Information
                </h2>
                
                <div className="bg-gray-50 p-4 md:p-6 rounded-lg border border-gray-200">
                  <p className="text-gray-800 text-base md:text-lg mb-4">
                    <strong>Good news:</strong> We don't sell your information to anyone!
                  </p>
                  <p className="text-gray-700 text-sm md:text-base">
                    We only share your information when you give us permission, or when we need to 
                    provide our services (like connecting you with other alumni). We're very careful 
                    about who we share information with.
                  </p>
                </div>
              </div>

              {/* Your Rights */}
              <div className="mb-8 md:mb-12 bg-white p-6 md:p-8 rounded-lg md:rounded-xl shadow-sm border border-gray-200">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#036333]">
                  Your Rights & Choices
                </h2>
                
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                          <path d="M9 12l2 2 4-4"></path>
                          <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm md:text-base">See what information we have about you</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                          <path d="M9 12l2 2 4-4"></path>
                          <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm md:text-base">Ask us to update incorrect information</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                          <path d="M9 12l2 2 4-4"></path>
                          <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm md:text-base">Unsubscribe from emails anytime</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 md:p-6 rounded-lg border border-gray-200">
                    <h3 className="font-semibold text-[#036333] mb-3 text-base md:text-lg">Need to exercise these rights?</h3>
                    <p className="text-gray-600 mb-4 text-sm md:text-base">Just send us an email - we're here to help!</p>
                    <a href="mailto:privacy@uimea.com.ng" className="inline-flex items-center gap-2 text-[#fe6400] hover:text-[#e05800] font-medium text-sm md:text-base">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                      privacy@uimea.com.ng
                    </a>
                  </div>
                </div>
              </div>

              {/* Security */}
              <div className="mb-8 md:mb-12 bg-white p-6 md:p-8 rounded-lg md:rounded-xl shadow-sm border border-gray-200">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#036333]">
                  Keeping Your Information Safe
                </h2>
                
                <div className="bg-gray-50 p-4 md:p-6 rounded-lg border border-gray-200">
                  <p className="text-gray-700 text-base md:text-lg mb-4">
                    We take security seriously and use industry-standard measures to protect your data:
                  </p>
                  <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                          <path d="M9 12l2 2 4-4"></path>
                          <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm md:text-base">Encrypted data transmission</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                          <path d="M9 12l2 2 4-4"></path>
                          <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm md:text-base">Regular security updates</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                          <path d="M9 12l2 2 4-4"></path>
                          <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm md:text-base">Limited access controls</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                          <path d="M9 12l2 2 4-4"></path>
                          <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm md:text-base">Secure hosting</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-8 md:mb-12 bg-white p-6 md:p-8 rounded-lg md:rounded-xl shadow-sm border border-gray-200">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#036333]">
                  Questions? We're Here to Help!
                </h2>
                
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm md:text-base">privacy@uimea.com.ng</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm md:text-base">+234 800 123 4567</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 md:p-6 rounded-lg border border-gray-200">
                    <p className="text-gray-600 text-sm md:text-base">
                      We typically respond within 24 hours. Your privacy is important to us, 
                      and we're committed to being transparent about how we handle your information.
                    </p>
                  </div>
                </div>
              </div>

              {/* Back to Top */}
              <div className="text-center">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-[#fe6400] text-white rounded-lg md:rounded-xl hover:bg-[#e05800] transition-colors font-medium md:font-semibold text-base md:text-lg shadow-sm hover:shadow-md"
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
