import React from 'react';
import Timeline from './Timeline';
import Gallery from './Gallery';
import Letter from './Letter';
import Graduation from './Graduation';
import EngineerMode from './EngineerMode';
import SecretVault from './SecretVault';
import WhatNext from './WhatNext';
import FinalNote from './FinalNote';

import './Home.css'; // custom pink styles

const Home = () => {
  return (
    <div className="home-wrapper container-fluid px-0">
     <div className="congrats-banner text-center py-5">
  <h1 className="congrats-heading">🎓 CONGRATULATIONS</h1>
  <h2 className="engineer-subheading">AI ENGINEER ALEENA</h2>
  <p className="lead text-muted">A proud moment sealed with code, love, and dreams 💖</p>
</div>


      <section id="timeline" className="section-area"><Timeline /></section>
      <section id="gallery" className="section-area"><Gallery /></section>
      <section id="graduation" className="section-area"><Graduation /></section>
      <section id="letter" className="section-area"><Letter /></section>
      <section id="vault" className="section-area"><SecretVault /></section>
      <section id="engineer" className="section-area"><EngineerMode /></section>
      <section id="whatnext" className="section-area"><WhatNext /></section>
      <section id="final" className="section-area"><FinalNote /></section>
    </div>
  );
};

export default Home;
