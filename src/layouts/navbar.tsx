import Logo from "../assets/logoImg.png"
export default function Navbar() {
  return (
  <header className="sticky top-0 z-40 border-b bg-background bg-white">
            <div className="container flex h-16 items-center justify-between py-4">
                <div className="flex items-center gap-2">
                    <img  src={Logo} alt="UIMEA Logo" className="h-10 w-10 rounded-full" />
                    <span
                        className="text-xl font-bold">UIMEA</span>
                </div>
                <nav className="hidden md:flex items-center gap-6"><a href="#mission" className="text-sm font-medium hover:text-[#fe6400]">Mission</a><a href="#trustees" className="text-sm font-medium hover:text-[#fe6400]">Trustees</a><a href="#executives" className="text-sm font-medium hover:text-[#fe6400]">Executives</a>
                    <a
                        href="#projects" className="text-sm font-medium hover:text-[#fe6400]">Projects</a><a href="#calendar" className="text-sm font-medium hover:text-[#fe6400]">Calendar</a><a href="#news" className="text-sm font-medium hover:text-[#fe6400]">News</a><button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 py-2 bg-[#fe6400] hover:bg-[#e05800] text-white"><a href="#join-us">Join Us</a></button></nav>
                <button
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 md:hidden"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-6 w-6"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg></button>
            </div>
        </header>
  )
}
