import React from 'react';
//routes
import { Link } from 'react-router-dom';
//style
import '../styles/pages/landing.css';

//images
import logoImg from '../images/Logo.svg';

//icons
import { FiArrowRight } from 'react-icons/fi';

function Landing(){
  return(
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="logo happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Belém</strong>
          <span>Pará</span>
        </div>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)"/>
        </Link>
      </div>
    </div>
  );
}

export default Landing;