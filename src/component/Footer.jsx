import React from 'react'
import { 
  FaTruck, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaWhatsapp, 
  FaFacebookF, 
  FaEnvelope, 
  FaClock,
  FaArrowRight
} from 'react-icons/fa'
import { 
  BsBuilding, 
  BsTelephone, 
  BsGeoAlt,
  BsClockHistory
} from 'react-icons/bs'
import { 
  IoMdMail, 
  IoMdCall 
} from 'react-icons/io'

export default function Footer() {
  return (
    <footer className="bg-primary text-secondary pt-16 pb-8 relative overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary/0 via-secondary to-secondary/0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-secondary/20 p-3 rounded-2xl">
                <FaTruck className="text-3xl" />
              </div>
              <h3 className="text-2xl font-bold">Al-Awan Transport</h3>
            </div>
            <p className="text-secondary/70 leading-relaxed">
              Your trusted partner for reliable and efficient transportation solutions across Pakistan.
            </p>
            
            {/* Social Icons - Only Facebook and WhatsApp */}
            <div className="flex gap-4 pt-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-secondary/10 p-3 rounded-xl hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <FaFacebookF className="text-xl" />
              </a>
              <a 
                href="https://wa.me/923022249587" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-secondary/10 p-3 rounded-xl hover:bg-green-600 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <FaWhatsapp className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b-2 border-secondary/30 pb-3 flex items-center gap-2">
              <BsBuilding /> Quick Links
            </h3>
            <ul className="space-y-3">
              {['Home', 'Services', 'Fleet', 'About Us', 'Contact'].map((link, index) => (
                <li key={index}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '')}`}
                    className="text-secondary/80 hover:text-secondary flex items-center gap-3 group"
                  >
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b-2 border-secondary/30 pb-3 flex items-center gap-2">
              <IoMdCall /> Contact Info
            </h3>
            <div className="space-y-4">
              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="bg-secondary/10 p-2 rounded-lg">
                  <BsGeoAlt className="text-xl" />
                </div>
                <div>
                  <span className="text-secondary/80"> <a href="https://maps.app.goo.gl/GETRQ2YTB8y9564q8">123 Business Avenue, Saddar Town, Karachi, Pakistan</a></span>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-3">
                <div className="bg-secondary/10 p-2 rounded-lg">
                  <FaPhone className="text-xl" />
                </div>
                <div>
                  <a href="tel:03022249587" className="text-secondary/80 hover:text-secondary block">0302-2249587</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-secondary/10 p-2 rounded-lg">
                  <FaWhatsapp className="text-xl" />
                </div>
                <a href="https://wa.me/923022249587" className="text-secondary/80 hover:text-secondary">
                  0302-2249587 (24/7 Support)
                </a>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
  <div className="bg-secondary/10 p-2 rounded-lg">
    <IoMdMail className="text-xl" />
  </div>
  <div>
    <a 
      href="mailto:info@alawantransport.com"
      onClick={(e) => {
        e.preventDefault();
        const email = "info@alawantransport.com";
        
        // Detect device and open appropriate Gmail app
        if (/Android/i.test(navigator.userAgent)) {
          // Android: Open in Gmail app
          window.location.href = `intent://send?to=${email}#Intent;scheme=mailto;package=com.google.android.gm;end`;
        } 
        else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
          // iOS: Open in Gmail app
          window.location.href = `googlegmail:///co?to=${email}`;
        } 
        else {
          // Desktop: Regular mailto
          window.location.href = `mailto:${email}`;
        }
      }}
      className="text-secondary/80 hover:text-secondary"
    >
      sohaibawan271@gmail.com
    </a>
  </div>
</div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b-2 border-secondary/30 pb-3 flex items-center gap-2">
              <BsClockHistory /> Working Hours
            </h3>
            
            <div className="bg-secondary/5 p-5 rounded-2xl border border-secondary/10">
              <div className="flex items-center gap-3 mb-4">
                <FaClock className="text-2xl" />
                <div>
                  <p className="font-bold">24/7 Service</p>
                  <p className="text-secondary/60 text-sm">Always Available</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-secondary/70">Monday - Sunday</span>
                  <span className="font-semibold">24 Hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary/20 pt-8 flex flex-col md:flex-row justify-between items-center text-secondary/60 text-sm">
          <p className="flex items-center gap-2">
            <FaTruck />
            © {new Date().getFullYear()} Al-Awan Transport Services. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-secondary transition-colors">MuHammad Sohaib</a>
          
          </div>
        </div>

        {/* Back to Top Button */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-secondary text-primary p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        >
          ↑
        </button>
      </div>
    </footer>
  )
}