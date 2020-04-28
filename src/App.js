import React from 'react';
import logo from './logo.svg';
import './css/style.css';
import Navbar from './component/Navbar.js';
import Section0 from './component/Section0.js';
import Section1_2 from './component/Section1_2.js';
import Section3 from './component/Section3.js';
import Section4 from './component/Section4.js';
import Section5 from './component/Section5.js';
import Footer from './component/Footer.js';


function App() {
  return (
    <div className="App">
       
       <div className="container">
       <Navbar/>
         <Section0/>
         <Section1_2/>
        <Section3/>
        <Section4/>
         <Section5/>
         <Footer/>
         
      </div>
    </div>
  );
}

export default App;
