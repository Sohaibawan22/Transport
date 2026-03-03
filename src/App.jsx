import { BrowserRouter as Router } from "react-router-dom";
import './App.css'
import { Navbar } from './component/Navbar'
import Hero from './component/Hero'
import Services from './component/Services'
import Vehicle from './component/Vehicle'
import Footer from './component/Footer'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <section id="home">
          <Hero />
        </section>
        
        <section id="services">
          <Services />
        </section>
        
        <section id="vehicle">
          <Vehicle />
        </section>
        
        <section id="contact">
       <Footer />   
        </section>
        
        
      </div>
    </Router>
  )
}

export default App