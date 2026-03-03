import React, { useState } from 'react'
import bg from '../assets/bg.jpeg'
import t2 from '../assets/truck2.jpeg'
import t3 from '../assets/truck3.jpeg'

export default function Vehicle() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const images = [
    { id: 1, url: bg, title: "Container Truck" },
    { id: 2, url: t2, title: "Heavy Load" },
    { id: 3, url: t3, title: "Our Fleet" },
    { id: 4, url: t2, title: "Fast Delivery" },
    { id: 5, url: bg, title: "Logistics" },
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className="bg-secondary py-16  px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center mb-12">Our Vehicle</h2>
      
      <div className="max-w-5xl mx-auto relative">
       
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image) => (
              <div key={image.id} className="min-w-full">
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-110 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary to-transparent p-6">
                  <p className="text-secondary text-2xl font-bold">{image.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2  text-secondary w-12 h-12   hover:scale-110 transition-all duration-300 flex items-center justify-center text-4xl font-extrabold "
          >
            ←
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2  text-secondary w-12 h-12   hover:scale-110 transition-all duration-300 flex items-center justify-center text-4xl font-extrabold "
          >
            →
          </button>
          <div className="flex justify-center gap-3 absolute bottom-4 left-1/2 -translate-x-1/2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-secondary w-6' 
                  : 'bg-secondary/30 hover:bg-secondary/50'
              }`}
            />
          ))}
        </div>
          
        </div>

        {/* Dots Indicator */}
        
      </div>
    </div>
  )
}