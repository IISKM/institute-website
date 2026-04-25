import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="pt-24 min-h-screen w-full flex flex-col">
      <section className="bg-dark px-6 md:px-12 py-24 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight drop-shadow-md">About <span className="text-primary">Us</span></h1>
          <p className="text-lg md:text-2xl font-medium max-w-3xl mx-auto text-gray-300 drop-shadow-sm">Learn more about our mission, vision, and the core educational values that drive our institution forward.</p>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 bg-white text-dark flex-1">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
           <div>
             <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 inline-block">The Vision</span>
             <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Empowering The <br/><span className="text-primary">Next Generation</span></h2>
             <p className="text-lg text-gray-600 mb-6 leading-relaxed">
               The Institute of Information Studies and Knowledge Management envisions an Africa where individuals are equipped with the innovative thinking and practical skills needed to transform local communities and compete globally.
             </p>
             <p className="text-xl text-dark leading-relaxed font-semibold italic border-l-4 border-secondary pl-6 mb-8">
               "Professionalism Far Beyond Certification - we don't just teach for the exam, we teach for life."
             </p>
             <Link href="#contact" className="text-primary font-bold hover:underline">Contact us to learn more &rarr;</Link>
           </div>
           <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl group">
             <Image src="/images/hero.png" alt="University interior" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
           </div>
         </div>
      </section>
    </div>
  );
}
