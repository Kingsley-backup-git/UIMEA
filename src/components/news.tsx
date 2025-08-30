import PanelImg from "../assets/panelImg.jpg"
import LectureImg from "../assets/lectureImg.jpg"
export default function News() {
  return (
    <section id="news" className="py-16 bg-gray-50">
        <div className="container">
            <h2 className="text-3xl font-bold mb-2 text-center">Latest News</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Stay informed about the latest developments, achievements, and announcements.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                

                <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden" data-v0-t="card">
                    <div className="h-48 relative"><img alt="Annual Technical Conference Announced" loading="lazy" decoding="async" data-nimg="fill" className="object-cover absolute inset-0 w-full h-full" src={LectureImg} /></div>
                    <div
                        className="p-6">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar h-4 w-4"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg><span>May 23, 2025</span></div>
                        <h3
                            className="text-xl font-bold mb-2">Distinguished Alumni Lecture - Mechanical Engineering Department, University of Ibadan.</h3>
                            <p className="text-muted-foreground mb-4">The maiden edition held on Saturday 30th November 2024.</p><button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 underline-offset-4 hover:underline text-[#fe6400] p-0 h-auto">Read More <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right ml-1 h-4 w-4"><path d="m9 18 6-6-6-6"></path></svg></button></div>
                </div>
                

                <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden" data-v0-t="card">
                    <div className="h-48 relative"><img alt="Annual Technical Conference Announced" loading="lazy" decoding="async" data-nimg="fill" className="object-cover absolute inset-0 w-full h-full" src={PanelImg} /></div>
                    <div
                        className="p-6">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar h-4 w-4"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg><span>May 23, 2025</span></div>
                        <h3
                            className="text-xl font-bold mb-2">Inauguration of the Executive Committee and Board of Trustees.</h3>
                            <p className="text-muted-foreground mb-4">The Executive Committee and the Board of Trustees were inaugurated to drive the association's vision and mission forward.</p><button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 underline-offset-4 hover:underline text-[#fe6400] p-0 h-auto">Read More <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right ml-1 h-4 w-4"><path d="m9 18 6-6-6-6"></path></svg></button></div>
                </div>


        </div>

       
        {/* <div className="flex justify-center mt-10"><button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background h-10 px-4 py-2 text-[#036333] border-[#036333] hover:bg-[#036333] hover:text-white">View All News</button></div>  */}



        </div>
    </section>
  )
}
