import React from 'react'
import bg from '../assets/bg.jpeg'

export default function Hero() {
  return (
    <div 
      className="relative w-full h-screen flex items-center flex-col  justify-center overflow-hidden"
      style={{ 
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Content */}
      <div className="container mx-auto px-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center font-serif text-white bg-white/5 backdrop-blur-xs backdrop-saturate-50 p-4 sm:p-5 md:p-6 lg:p-8 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 dark:bg-gray-900/5 dark:border-white/5 max-w-5xl mx-auto
        "
      >
          Al- Awan Car Services
          <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center mt-2 text-white/80">Your Trusted Partner for Reliable and Efficient Transportation Solutions</h4>
        </h1>
      </div>
      <button className="bg-linear-to-r from-orange-300 via-orange-400 to-orange-500 px-8 py-4 border-0 rounded-full shadow-xl shadow-orange-500/50 mt-8 text-white font-extrabold text-lg hover:shadow-2xl hover:shadow-orange-500/70 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300">
 <a 
              href="https://wa.me/923022249587" 
              className="text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Contact Us
            </a>
</button>
       
    </div>
  )
}