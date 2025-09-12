import ObaImg from "../assets/obaImg.jpg";
import WaleImg from "../assets/waleImg.png";
import LukmanImg from "../assets/lukmanImg.jpg";
import OlorunImg from "../assets/olurunImg.jpg";

export default function Trustees() {
  return (
    <section id="trustees" className="py-16 px-6 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold mb-2 text-center">Our Trustees</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Meet the distinguished professionals who guide our association with
          their wisdom and experience.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden"
            data-v0-t="card"
          >
            <div className="aspect-square relative">
              <img
                alt="Engr. Sarah Johnson"
                loading="lazy"
               
                className="object-cover w-full h-full inset-0 absolute"
                src={ObaImg}
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold">
                HRM Oba Prof. Saka Adelola Matemilola Oluyalo Otileta VII BSc,
                MSc, PhD
              </h3>
              <h3 className="">The Olowu of Owu Kingdom</h3>
              <p className="text-[#fe6400]">Chairman</p>
              {/* <p className="text-xs text-muted-foreground">PhD</p>  */}
            </div>
          </div>
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden"
            data-v0-t="card"
          >
            <div className="aspect-square relative">
              <img
                alt="Engr. Michael Adeyemi"
                loading="lazy"
               
                className="object-cover w-full h-full inset-0 absolute"
                src={LukmanImg}
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold">Prof John Adesiji Olorunmaiye</h3>
              <p className="text-[#fe6400]">Member</p>
              <p className="text-xs text-muted-foreground">
                PhD, Former Vice Chancellor, Crown-Hill University
              </p>
            </div>
          </div>
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden"
            data-v0-t="card"
          >
            <div className="aspect-square relative">
              <img
                alt="Engr. Funke Oladipo"
                loading="lazy"
               
                className="object-cover w-full h-full inset-0 absolute"
                src={WaleImg}
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold">Engr. Wale Adediran</h3>
              <p className="text-[#fe6400]">Member</p>
              <p className="text-xs text-muted-foreground">
                FNSE, FNIMechE, FCIPM, NPOM. CEO Alamatun
              </p>
            </div>
          </div>
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden"
            data-v0-t="card"
          >
            <div className="aspect-square relative">
              <img
                alt="Engr. David Okonkwo"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="object-cover w-full h-full inset-0 absolute"
                src={OlorunImg}
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold">Engr. Lukman Olayiwola BSc</h3>
              <p className="text-[#fe6400]">Member</p>
              <p className="text-xs text-muted-foreground">
                Chairman, Olo Industries Limited & Olo Engineering Limited.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
