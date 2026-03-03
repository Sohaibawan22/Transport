import React from 'react'

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Car Courier Services",
      icon: "🚛",
      features: ["Car", "Jeep", "All Other Types Small Vehicles"]
    },
    {
      id: 2,
      title: "Industrial Goods Moving",
      icon: "📦",
      features: ["Heavy Machinery", "Bulk Freight", "Professional Handling"]
    },
    {
      id: 3,
      title: "Long Route Logistics",
      icon: "⚓",
      features: ["All Pakistan", "Time-Definite", "Shipment Tracking"]
    }
  ]

  const features = [
    { id: 1, title: "Safe Shipment", icon: "🛡️" },
    { id: 2, title: "Fast Delivery", icon: "⚡" },
    { id: 3, title: "Nationwide", icon: "📍" },
    { id: 4, title: "24/7 Support", icon: "📞" }
  ]

  return (
    // Screen background color - secondary color
    <div className="bg-secondary py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-primary/80 text-lg max-w-2xl mx-auto">
            Reliable Transport Services Across Pakistan
          </p>
        </div>

        {/* Service Cards - Card background color primary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-primary rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-secondary/20"
            >
              <div 
                className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mb-6 text-3xl"
              >
                <span className="text-primary">{service.icon}</span>
              </div>
              <h3 className="text-secondary text-xl font-bold mb-3">{service.title}</h3>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-secondary">✓</span>
                    <span className="text-secondary/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div key={feature.id} className="text-center">
              <div 
                className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl"
              >
                <span className="text-secondary">{feature.icon}</span>
              </div>
              <p className="text-primary font-medium">{feature.title}</p>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div 
          className="bg-primary mt-16 rounded-2xl p-8 text-center border-2 border-secondary/20"
        >
          <h3 className="text-2xl font-bold text-secondary mb-4">
            Need Transport for Your Vehicle or Cargo?
          </h3>
          <p className="text-secondary/90 mb-6">
            Call or WhatsApp for immediate booking
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:03022249587" 
              className="bg-secondary text-primary px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              📞 Call: 0302-2249587
            </a>
            <a 
              href="https://wa.me/923022249587" 
              className="bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}