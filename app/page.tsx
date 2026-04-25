import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* 1. Hero Section */}
      <section className="relative h-[90vh] md:h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-dark">
          <Image 
            src="/images/hero.png" 
            alt="Students in a modern university" 
            fill 
            className="object-cover opacity-60 mix-blend-multiply scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-black/20"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20 flex flex-col items-center">
          <span className="text-secondary font-bold tracking-widest uppercase mb-6 text-sm md:text-base inline-block">Empowering The Future</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
            <span className="text-primary">Professionalism</span> <br className="hidden md:block" />
            Far Beyond Certification
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-medium mb-12 max-w-2xl drop-shadow-md">
            We value the complex uniqueness and the incalculable power of each individual to change the destiny of the collective.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <Link href="#courses" className="bg-primary border-2 border-primary hover:bg-green-600 hover:border-green-600 text-white px-10 py-4 rounded-full font-bold shadow-lg hover:-translate-y-1 hover:shadow-primary/50 transition-all duration-300 text-lg tracking-wide">
              Explore Courses
            </Link>
            <Link href="/about" className="bg-transparent border-2 border-white/60 hover:bg-white text-white hover:text-dark px-10 py-4 rounded-full font-bold shadow-lg hover:-translate-y-1 transition-all duration-300 text-lg tracking-wide">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Stats Bar */}
      <section className="bg-dark text-white py-12 relative z-20 -mt-10 mx-6 md:mx-12 lg:mx-20 rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 px-6 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-black text-primary mb-2 tracking-tighter">3,500+</div>
            <div className="text-gray-400 font-bold uppercase tracking-widest text-xs">Active Members</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-black text-primary mb-2 tracking-tighter">50+</div>
            <div className="text-gray-400 font-bold uppercase tracking-widest text-xs">Professional Courses</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-black text-primary mb-2 tracking-tighter">15+</div>
            <div className="text-gray-400 font-bold uppercase tracking-widest text-xs">Global Partners</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-black text-primary mb-2 tracking-tighter">10k+</div>
            <div className="text-gray-400 font-bold uppercase tracking-widest text-xs">Alumni Hub</div>
          </div>
        </div>
      </section>

      {/* 3. About Preview & Value */}
      <section className="py-24 bg-white px-6 md:px-12 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-dark mb-10 tracking-tight">
            <span className="text-primary">Who</span> We Are
          </h2>
          <p className="text-xl md:text-3xl text-gray-700 leading-snug font-semibold mb-12 italic tracking-tight">
            "The Institute of Information Studies and Knowledge Management envisions an Africa where individuals are equipped with the innovative thinking and practical skills needed to transform local communities and compete globally."
          </p>
          <div className="w-32 h-1.5 bg-secondary mx-auto rounded-full mb-12"></div>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            We are committed to bridging the gap between theoretical knowledge and practical execution. Our programs are designed to instill a mindset of continuous improvement, ethical business practices, and profound leadership.
          </p>
        </div>
      </section>

      {/* 4. Key Services */}
      <section className="py-24 bg-gray-50 px-6 md:px-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { title: "Fellowship", desc: "Join an elite network of professionals driving change across industries." },
            { title: "Training", desc: "Interactive and intensive training programs led by industry leaders." },
            { title: "Academic Courses", desc: "Comprehensive curricula designed to build long-term career success." }
          ].map((service, i) => (
             <div key={i} className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 group cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-inner">
                {/* SVG icon placeholder depending on index */}
                {i === 0 && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" /></svg>}
                {i === 1 && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" /></svg>}
                {i === 2 && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.516 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>}
              </div>
               <h3 className="relative z-10 text-2xl font-bold text-dark mb-4">{service.title}</h3>
              <p className="relative z-10 text-gray-600 font-medium leading-relaxed">{service.desc}</p>
              <div className="relative z-10 mt-8 flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all duration-300">
                Course Info <span className="text-xl">&rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Courses Grid preview */}
      <section id="courses" className="py-24 bg-white px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-200 pb-8">
            <div className="max-w-2xl">
              <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-3 inline-block">Certification Programs</span>
              <h2 className="text-4xl md:text-5xl font-black text-dark tracking-tight">
                <span className="text-primary">Professional</span> Certification
              </h2>
            </div>
            <Link href="/courses" className="mt-8 md:mt-0 text-dark border-b-2 border-primary pb-1 font-bold hover:text-primary transition-colors inline-block text-lg">View All Programs</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { category: "Business Management", title: "Certified Entrepreneurship Professional", icon: "M13.5 21v-7.5a2.25 2.25 0 0 1 2.25-2.25h3a2.25 2.25 0 0 1 2.25 2.25V21m-4.5 0H2.36m11.14 0H8.36m-1.65-4.5h3.625M3 12h18M3 6h18m-18 6v9m18-9v9m-1.5-6h1.5" },
              { category: "Finance & Accounting", title: "Advanced Financial Strategy", icon: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" },
              { category: "Leadership", title: "Executive Leadership Certification", icon: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" }
            ].map((course, i) => (
              <div key={i} className="group cursor-pointer flex flex-col">
                <div className="bg-gray-100 rounded-3xl h-72 flex items-center justify-center mb-8 overflow-hidden relative shadow-inner">
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl text-primary transform group-hover:scale-125 transition-transform duration-500 z-20">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d={course.icon} /></svg>
                  </div>
                </div>
                <span className="text-secondary font-bold text-xs tracking-widest uppercase block mb-3">{course.category}</span>
                <h3 className="text-2xl font-bold text-dark group-hover:text-primary transition-colors leading-tight">{course.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="py-24 bg-dark text-white px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-primary/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-3 inline-block">Success Stories</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Our <span className="text-primary">Testimonials</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "John Doe", role: "CEO, Tech Innovate", quote: "The fellowship program completely transformed my approach to leadership. Highly recommended!" },
              { name: "Sarah Connor", role: "Freelance Designer", quote: "A rigorous, inspiring curriculum that bridged the gap between theory and execution." },
              { name: "Jane Smith", role: "Financial Analyst", quote: "The community here is unparalleled. I've gained mentors and partners for life." }
            ].map((t, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-xl border-t-2 border-primary/50 shadow-2xl p-10 rounded-2xl flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
                 <p className="text-gray-300 text-lg italic mb-8">"{t.quote}"</p>
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl uppercase border border-primary/30">
                     {t.name[0]}
                   </div>
                   <div>
                     <h4 className="font-bold text-lg text-white">{t.name}</h4>
                     <p className="text-secondary text-sm">{t.role}</p>
                   </div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
