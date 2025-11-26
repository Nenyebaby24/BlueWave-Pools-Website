import React from "react";
import pool2 from "../assets/pool2.jpg";
import pool3 from "../assets/pool3.jpg";
import pool4 from "../assets/pool4.jpg";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Our Recent Projects</h2>
      <div className="project-gallery">
        <img src={pool2} alt="Modern pool design" />
        <img src={pool3} alt="Luxury backyard pool" />
        <img src={pool4} alt="Resort-style pool" />
      </div>
    </section>
  );
}

export default Projects;
