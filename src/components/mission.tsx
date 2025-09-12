import MissionImg from "../assets/missionImg.png"
export default function Mission() {
  return (
 <section id="mission" className="py-16 bg-white px-6">
                <div className="container">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold mb-6 text-[#036333]">Our Mission</h2>
                            <p className="text-lg mb-6">The University of Ibadan Mechanical Engineering Alumni (UIMEA) Association is dedicated to fostering professional excellence, innovation, and leadership among mechanical engineering graduates of the University of Ibadan.</p>
                            <p
                                className="text-lg mb-6">We aim to create a vibrant community that supports career development, mentorship, and collaborative projects that address engineering challenges in Nigeria and beyond.</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                                    <div className="flex items-start gap-3">
                                        <div className="rounded-full bg-[#fe6400]/10 p-2 mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right h-5 w-5 text-[#fe6400]"><path d="m9 18 6-6-6-6"></path></svg></div>
                                        <div>
                                            <h3 className="font-medium">Professional Development</h3>
                                            <p className="text-sm text-muted-foreground">Continuous learning and skill enhancement</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="rounded-full bg-[#fe6400]/10 p-2 mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right h-5 w-5 text-[#fe6400]"><path d="m9 18 6-6-6-6"></path></svg></div>
                                        <div>
                                            <h3 className="font-medium">Mentorship</h3>
                                            <p className="text-sm text-muted-foreground">Guiding the next generation of engineers</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="rounded-full bg-[#fe6400]/10 p-2 mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right h-5 w-5 text-[#fe6400]"><path d="m9 18 6-6-6-6"></path></svg></div>
                                        <div>
                                            <h3 className="font-medium">Community Service</h3>
                                            <p className="text-sm text-muted-foreground">Giving back through engineering solutions</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="rounded-full bg-[#fe6400]/10 p-2 mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right h-5 w-5 text-[#fe6400]"><path d="m9 18 6-6-6-6"></path></svg></div>
                                        <div>
                                            <h3 className="font-medium">Networking</h3>
                                            <p className="text-sm text-muted-foreground">Building connections across industries</p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="md:w-1/2"><img alt="Engineers collaborating" loading="lazy" width="600" height="500" className="rounded-lg shadow-lg" src={MissionImg} /></div>
                    </div>
                </div>
            </section>
  )
}
