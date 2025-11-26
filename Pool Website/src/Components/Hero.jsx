import React from "react";
import poolHero from "../assets/pool1.jpg";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h2>Transform Your Backyard Into a Paradise</h2>
        <p>Professional pool installation, maintenance, and design — built to perfection.</p>
        <button className="cta-btn">Get a Free Quote</button>
      </div>
      <img src={poolHero} alt="Beautiful swimming pool" className="hero-image" />
    </section>
  );
}

export default Hero;
