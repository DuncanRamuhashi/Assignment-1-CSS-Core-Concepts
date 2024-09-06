import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Cover from './Cover';
import Display from './Display';
import Latest from './Latest';
import About from './About';
import Subscribe from './Subscribe';
import Footer from './Footer';
import Test from './Test';
function App() {
  
  return(
    <>
    <section id="/">
    <Test/>   
    </section>
  
    <section id="latest">
    <Latest/>
      </section>
      <section  id="about">
      <About/> 
      </section>
      <section  id="footer">
      <Footer/>
      </section>

   
     
    

    
    </>    

  );
}

export default App
