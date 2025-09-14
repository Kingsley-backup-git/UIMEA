import { useState, useEffect } from 'react'
import Navbar from '../layouts/navbar'
import Footer from '../layouts/footer'
import { Link } from 'react-router-dom';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const handleCategoryClick = (category: string) => {
    // Find all items in this category and open them
    const categoryItems = faqData
      .map((item, idx) => item.category === category ? idx : -1)
      .filter(idx => idx !== -1);
    setOpenItems(categoryItems);

    // Scroll to the first item in this category
    const firstItemIndex = categoryItems[0];
    if (firstItemIndex !== undefined) {
      const element = document.getElementById(`faq-item-${firstItemIndex}`);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start',
          inline: 'nearest'
        });
      }
    }
  };

  const faqData: FAQItem[] = [
    // Membership Questions
    {
      question: "How do I become a member of UIMEA?",
      answer: "To become a member, you need to be a graduate of the Mechanical Engineering Department from the University of Ibadan. You can apply through our membership application form on the website. The process involves filling out your details, providing proof of graduation, and submitting the form. We'll review your application and get back to you within 24-48 hours.",
      category: "Membership"
    },
    {
      question: "What are the benefits of joining UIMEA?",
      answer: "UIMEA members enjoy numerous benefits including professional networking opportunities, access to industry events and workshops, career development resources, mentorship programs, technical publications, exclusive member-only events, and the chance to contribute to engineering projects that impact Nigeria's development.",
      category: "Membership"
    },
    {
      question: "Is there a membership fee?",
      answer: "Yes, there is an annual membership fee. The fee structure varies based on your graduation year and current employment status. We offer discounted rates for recent graduates and students. Please contact our membership team for current fee information.",
      category: "Membership"
    },
    {
      question: "Can international graduates join UIMEA?",
      answer: "Absolutely! UIMEA welcomes all graduates of the University of Ibadan Mechanical Engineering Department, regardless of their current location. We have members across Nigeria and internationally, and we organize both local and virtual events to accommodate everyone.",
      category: "Membership"
    },
    // Events & Activities
    {
      question: "What types of events does UIMEA organize?",
      answer: "UIMEA organizes various events including technical workshops, industry conferences, networking sessions, mentorship programs, career fairs, technical symposiums, and social gatherings. We also participate in engineering exhibitions and collaborate with other professional organizations.",
      category: "Events & Activities"
    },
    {
      question: "How often are events held?",
      answer: "We typically hold events monthly, with major conferences and symposiums occurring quarterly. We also organize special events during engineering week and other significant periods. All events are announced well in advance through our newsletter and social media channels.",
      category: "Events & Activities"
    },
    {
      question: "Can non-members attend UIMEA events?",
      answer: "Some events are open to non-members, especially public workshops and industry conferences. However, members enjoy priority access, discounted rates, and exclusive member-only events. We encourage non-members to join to get full access to all our activities.",
      category: "Events & Activities"
    },
    // Projects & Collaboration
    {
      question: "How can I get involved in UIMEA projects?",
      answer: "Members can get involved in projects by expressing interest through our project coordination team. We have various project categories including community development, technical research, mentorship programs, and industry collaboration. We match members' skills and interests with appropriate projects.",
      category: "Projects & Collaboration"
    },
    {
      question: "What types of projects does UIMEA undertake?",
      answer: "Our projects range from technical research and development to community service initiatives. We work on renewable energy solutions, educational programs, infrastructure development, and industry partnerships. We also collaborate with government agencies and private sector organizations on engineering challenges.",
      category: "Projects & Collaboration"
    },
    // Technical Resources
    {
      question: "What technical resources are available to members?",
      answer: "Members have access to our technical library, research papers, industry reports, and online learning platforms. We also provide access to engineering software licenses, technical workshops, and certification programs. Our resource center is continuously updated with the latest industry trends and technologies.",
      category: "Technical Resources"
    },
    {
      question: "Do you offer professional development programs?",
      answer: "Yes, we offer comprehensive professional development programs including leadership training, technical skill workshops, project management courses, and industry-specific certifications. We also provide career counseling and job placement assistance for our members.",
      category: "Technical Resources"
    },
    // Communication & Updates
    {
      question: "How do I stay updated with UIMEA activities?",
      answer: "We communicate through multiple channels including our monthly newsletter, social media platforms (Facebook, Twitter, LinkedIn, Instagram), WhatsApp groups, and our website. Members also receive direct email notifications about important events and opportunities.",
      category: "Communication & Updates"
    },
    {
      question: "How can I contact UIMEA leadership?",
      answer: "You can contact our leadership team through our official email (info@uimea.com.ng), phone (+234 800 123 4567), or by attending our monthly general meetings. We also have dedicated contact persons for different departments and regions.",
      category: "Communication & Updates"
    },
    // Alumni Relations
    {
      question: "How does UIMEA maintain connections with the University?",
      answer: "We maintain strong connections with the University of Ibadan through regular meetings with faculty, participation in university events, collaboration on research projects, and support for current students. We also provide mentorship and internship opportunities for current mechanical engineering students.",
      category: "Alumni Relations"
    },
    {
      question: "Can I mentor current students?",
      answer: "Absolutely! We encourage our members to participate in our mentorship program. You can mentor students in areas like career guidance, technical skills, project work, or general life advice. We provide training and support for mentors to ensure effective relationships.",
      category: "Alumni Relations"
    }
  ];

  const categories = [...new Set(faqData.map(item => item.category))];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#036333] to-[#047a3d] text-white py-20">
          <div className="container text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-white/90 mb-8">
              Find answers to common questions about UIMEA membership, events, 
              and how to get involved with our community.
            </p>
            <Link 
              to="/" 
              className="inline-flex cursor-pointer items-center justify-center gap-2 px-6 py-3 border border-white text-white hover:bg-white hover:text-[#036333] transition-colors rounded-md font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
              Back to Home
            </Link>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              {/* Category Navigation */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-center text-[#036333]">
                  Browse by Category
                </h2>
                <div className="flex flex-wrap justify-center gap-3">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className="px-4 cursor-pointer py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-[#fe6400] hover:text-white transition-colors text-sm font-medium"
                      onClick={() => handleCategoryClick(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* FAQ Items */}
              <div className="space-y-4">
                {faqData.map((item, index) => (
                  <div
                    key={index}
                    id={`faq-item-${index}`}
                    className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <button
                      className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                      onClick={() => toggleItem(index)}
                    >
                      <div className="flex items-start md:flex-row flex-col gap-3">
                        <div className="inline-block px-2 py-1 bg-[#fe6400] text-white text-xs font-medium rounded-full">
                          {item.category}
                        </div>
                        <h3 className="font-semibold text-gray-900 pr-4">
                          {item.question}
                        </h3>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`text-gray-500 transition-transform ${
                          openItems.includes(index) ? 'rotate-180' : ''
                        }`}
                      >
                        <path d="m6 9 6 6 6-6"/>
                      </svg>
                    </button>
                    
                    {openItems.includes(index) && (
                      <div className="px-6 py-4 bg-white border-t border-gray-200">
                        <p className="text-gray-700 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Still Have Questions Section */}
              <div className="mt-12 p-8 bg-gray-50 rounded-lg text-center">
                <h3 className="text-xl font-semibold mb-4 text-[#036333]">
                  Still Have Questions?
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Can't find the answer you're looking for? Our team is here to help. 
                  Feel free to reach out to us directly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:info@uimea.com.ng"
                    className="inline-flex  items-center justify-center gap-2 px-6 py-3 bg-[#fe6400] text-white rounded-md hover:bg-[#e05800] transition-colors font-medium"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                    Send us an Email
                  </a>
                  <a
                    href="tel:+2348001234567"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#fe6400] text-[#fe6400] rounded-md hover:bg-[#fe6400] hover:text-white transition-colors font-medium"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
