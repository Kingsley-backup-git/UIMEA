import Banner from "../assets/bannerImg.png"
export default function FirstSection() {
  return (
    <section className="relative bg-black text-white">
      <div className="absolute inset-0 bg-black/80 z-10"></div>
      <img
        alt="Engineering students"
        loading="lazy"
        width="1600"
        height="800"
       
        className="w-full h-[600px] absolute  object-cover"
        src={Banner}
      />
      <div className="container relative z-20 flex flex-col items-center justify-center text-center py-20 -mt-[600px] h-[600px]">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          University of Ibadan
          <span className="block text-[#fe6400] mt-2">
            Mechanical Engineering Alumni
          </span>
        </h1>
        <p className="max-w-3xl text-lg md:text-xl mb-8">
          Connecting generations of mechanical engineers from the University of
          Ibadan for professional growth, innovation, and community impact.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#join-us" className="cursor-pointer"> <button className="inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 py-2 bg-[#fe6400] hover:bg-[#e05800] text-white">
           Become a Member
          </button></a>
         <a href="#projects"> <button className="inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background hover:text-accent-foreground h-10 px-4 py-2 border-white text-white hover:bg-white/10">
            Explore Our Projects
          </button></a>
        </div>
      </div>
    </section>
  );
}
