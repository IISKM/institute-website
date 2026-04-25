"use client"
export default function Newsletter() {
  return (
    <section className="bg-white px-6 md:px-12 py-20 text-center text-dark relative overflow-hidden flex-shrink-0">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">Stay Updated</h2>
        <p className="text-lg md:text-xl text-gray-600 font-medium mb-10 max-w-2xl mx-auto">Subscribe to our newsletter for the latest courses, certification updates, and institute news.</p>
        
        <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="flex-1 bg-gray-50 border border-gray-200 text-dark px-6 py-4 rounded-full outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-300 transition-all text-lg shadow-sm" 
            required
          />
          <button 
            type="submit" 
            className="bg-dark text-white px-10 py-4 rounded-full font-bold shadow-xl hover:-translate-y-1 hover:shadow-2xl hover:bg-gray-800 transition-all duration-300 text-lg"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
