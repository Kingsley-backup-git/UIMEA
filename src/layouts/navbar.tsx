import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Logo from "../assets/logoImg.png"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  // Handle navigation - if on home page, scroll to section; if on other page, navigate to home then scroll
  const handleNavigation = (sectionId: string) => {
    closeMobileMenu()
    
    if (location.pathname === "/") {
      // On home page, scroll to section
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // On other pages, navigate to home then scroll to section
      navigate("/", { state: { scrollTo: sectionId } })
    }
  }

  // Handle logo click - always go to home page
  const handleLogoClick = () => {
    navigate("/")
  }

  return (
    <header className="sticky top-0 z-40 border-b bg-background bg-white">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2 cursor-pointer" onClick={handleLogoClick}>
          <img src={Logo} alt="UIMEA Logo" className="h-10 w-10 rounded-full" />
          <span className="text-xl font-bold">UIMEA</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => handleNavigation("mission")} 
            className="text-sm font-medium hover:text-[#fe6400] bg-transparent border-none cursor-pointer"
          >
            Mission
          </button>
          <button 
            onClick={() => handleNavigation("trustees")} 
            className="text-sm font-medium hover:text-[#fe6400] bg-transparent border-none cursor-pointer"
          >
            Trustees
          </button>
          <button 
            onClick={() => handleNavigation("executives")} 
            className="text-sm font-medium hover:text-[#fe6400] bg-transparent border-none cursor-pointer"
          >
            Executives
          </button>
          <button 
            onClick={() => handleNavigation("projects")} 
            className="text-sm font-medium hover:text-[#fe6400] bg-transparent border-none cursor-pointer"
          >
            Projects
          </button>
          <button 
            onClick={() => handleNavigation("news")} 
            className="text-sm font-medium hover:text-[#fe6400] bg-transparent border-none cursor-pointer"
          >
            News
          </button>
          <button 
            onClick={() => handleNavigation("join-us")} 
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 bg-[#fe6400] hover:bg-[#e05800] text-white"
          >
            Join Us
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 md:hidden"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="container py-4 space-y-4">
            <button 
              onClick={() => handleNavigation("mission")} 
              className="block text-sm font-medium hover:text-[#fe6400] py-2 w-full text-left bg-transparent border-none cursor-pointer"
            >
              Mission
            </button>
            <button 
              onClick={() => handleNavigation("trustees")} 
              className="block text-sm font-medium hover:text-[#fe6400] py-2 w-full text-left bg-transparent border-none cursor-pointer"
            >
              Trustees
            </button>
            <button 
              onClick={() => handleNavigation("executives")} 
              className="block text-sm font-medium hover:text-[#fe6400] py-2 w-full text-left bg-transparent border-none cursor-pointer"
            >
              Executives
            </button>
            <button 
              onClick={() => handleNavigation("projects")} 
              className="block text-sm font-medium hover:text-[#fe6400] py-2 w-full text-left bg-transparent border-none cursor-pointer"
            >
              Projects
            </button>
            <button 
              onClick={() => handleNavigation("news")} 
              className="block text-sm font-medium hover:text-[#fe6400] py-2 w-full text-left bg-transparent border-none cursor-pointer"
            >
              News
            </button>
            <div className="pt-2">
              <button 
                onClick={() => handleNavigation("join-us")} 
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 bg-[#fe6400] hover:bg-[#e05800] text-white w-full"
              >
                Join Us
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
