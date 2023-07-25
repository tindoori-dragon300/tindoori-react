import logo from './img/tindoori-logo.svg';
import './App.css';
import ReactDom from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Feedback from './pages/feedback';
import Process from './pages/process';
import Service from './pages/service';
import About from './pages/about';

import React, { useRef } from 'react';

function App() {
  const section_feedback = useRef(null);
  const section_process = useRef(null);
  const section_service = useRef(null);
  const section_home = useRef(null);
  const section_about = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };



  return (
    <>
      <div className='container'>
        {/**
         *   <nav>
          <ul>
            <a>
              <img src={logo} />
            </a>
            <a>
              <button onClick={() => scrollToSection(section_home)}>Home</button>
            </a>
            <a>
              <button onClick={() => scrollToSection(section_service)}>Service</button>
            </a>
            <a>
              <button onClick={() => scrollToSection(section_process)}>App Tour</button>
            </a>
               <a>
          <button onClick={() => scrollToSection(section_about)}>About</button>
        </a>
      </ul>
    </nav >
         */}

        {/*   

            <a>
              <button onClick={() => scrollToSection(section_feedback)}>Feedback</button>
            </a>

*/ }


      </div >



      <section ref={section_home} id="section_home">
        <Home />
      </section>

      <section ref={section_process} id="section_process">
        <Process />
      </section>


      {/**
       * 
      <section ref={section_service} id="section_service">
        <Service />
      </section>
       *     <section ref={section_feedback} id="section_feedback">
        <Feedback />
      </section>

      <section ref={section_about} id="section_about">
        <About />
      </section>
       * 
       */}

    </>


  );
}

export default App;
