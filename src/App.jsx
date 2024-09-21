import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services'
import Portfolio from './components/Portfolio';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Portfolio />
      <ContactUs /> 
      <Footer />
    </>
  );
}


  

export default App;
