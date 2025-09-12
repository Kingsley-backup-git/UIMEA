import IndustryImg from "../assets/industryImg.jpg"
import MentorshipImg from "../assets/mentorshipImg.png"
export default function OurProjects() {
  return (
    <section id="projects" className="py-16 px-6 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold mb-2 text-center">Our Projects</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Discover the impactful projects and initiatives led by our alumni
          community.
        </p>
        <div dir="ltr" data-orientation="horizontal" className="w-full">
          <div
            role="tablist"
            aria-orientation="horizontal"
            className="h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground grid w-full max-w-md mx-auto grid-cols-3 mb-8"
            data-orientation="horizontal"
          >
            <button
              type="button"
              role="tab"
              aria-selected="true"
              aria-controls="radix-«r0»-content-ongoing"
              data-state="active"
              id="radix-«r0»-trigger-ongoing"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
              data-orientation="horizontal"
              data-radix-collection-item=""
            >
              Ongoing
            </button>
            <button
              type="button"
              role="tab"
              aria-selected="false"
              aria-controls="radix-«r0»-content-completed"
              data-state="inactive"
              id="radix-«r0»-trigger-completed"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
              data-orientation="horizontal"
              data-radix-collection-item=""
            >
              Completed
            </button>
            <button
              type="button"
              role="tab"
              aria-selected="false"
              aria-controls="radix-«r0»-content-upcoming"
              data-state="inactive"
              id="radix-«r0»-trigger-upcoming"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
              data-orientation="horizontal"
              data-radix-collection-item=""
            >
              Upcoming
            </button>
          </div>
          <div
           
           
            className="mt-2  outline-0"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div
                className="rounded-lg  bg-card text-card-foreground shadow-sm overflow-hidden"
             
              >
                <div className="h-48 relative">
                  <img
                    alt="STEM Mentorship Program"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover w-full h-full"
                    src={MentorshipImg}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    STEM Mentorship Program
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Guiding university students interested in mechanical
                    engineering careers.
                  </p>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background h-10 px-4 py-2 text-[#036333] border-[#036333] hover:bg-[#036333] hover:text-white">
                    Coming Soon
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-external-link ml-2 h-4 w-4"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>  */}
                  </button>
                </div>
              </div>
              <div
                className="rounded-lg  bg-card text-card-foreground shadow-sm overflow-hidden"
                data-v0-t="card"
              >
                <div className="h-48 relative">
                  <img
                    alt="Industry-Academia Partnership"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover w-full h-full"
                    src={IndustryImg}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Industry-Academia Partnership
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Bridging the gap between academic research and industrial
                    applications.
                  </p>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background h-10 px-4 py-2 text-[#036333] border-[#036333] hover:bg-[#036333] hover:text-white">
                    Coming Soon
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            data-state="inactive"
            data-orientation="horizontal"
            role="tabpanel"
            aria-labelledby="radix-«r0»-trigger-completed"
            id="radix-«r0»-content-completed"
            className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          ></div>
          <div
            data-state="inactive"
            data-orientation="horizontal"
            role="tabpanel"
            aria-labelledby="radix-«r0»-trigger-upcoming"
            id="radix-«r0»-content-upcoming"
            className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          ></div>
        </div>
      </div>
    </section>
  );
}
