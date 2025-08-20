import React from "react";
import "./Portfolio.css";
import projectImage from "../images/project1.png";
import project1Image from "../images/project2.png";
import project2Image from "../images/project3.png";
import project3Image from "../images/project4.png";
import project4Image from "../images/project5.png";
import project5Image from "../images/project6.png";
import project6Image from "../images/project7.png";
import project7Image from "../images/project8.png";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1 className="portfolio-heading">My Latest Projects</h1>
      <div className="portfolio-cards">
        <div className="portfolio-card">
          <img src={project3Image} alt="Sign Up page" className="portfolio-image" />
          <div className="portfolio-overlay">
            <h3 className="portfolio-title">SoleLuxe project</h3>
            <p className="portfolio-subtitle">
             SoleLuxe is an e-commerce web app for browsing, managing carts, and purchasing premium shoes online.
            </p>
            <a href="https://github.com/Sanjaykanth45/Fullstack-Project" className="portfolio-link">View Project</a>
          </div>
        </div>

        <div className="portfolio-card">
          <img src={project6Image} alt="Weather App" className="portfolio-image" />
          <div className="portfolio-overlay">
            <h3 className="portfolio-title">User Management Dashboard</h3>
            <p className="portfolio-subtitle">
             A responsive user management system to view, edit, and delete user profiles with ease.
            </p>
            <a href="https://sensational-pothos-19c35f.netlify.app/" className="portfolio-link">View Project</a>
          </div>
        </div>

        <div className="portfolio-card">
          <img src={project5Image} alt="Online Shopping App" className="portfolio-image" />
          <div className="portfolio-overlay">
            <h3 className="portfolio-title">Stopwatch project</h3>
            <p className="portfolio-subtitle">
             A stopwatch app to start, pause, reset, and track time with precision.
            </p>
            <a href="https://gilded-heliotrope-94ea3b.netlify.app/" className="portfolio-link">View Project</a>
          </div>
        </div>

        {/* New Project 4 */}
         <div className="portfolio-card">
          <img src={projectImage} alt="Sign Up page" className="portfolio-image" />
          <div className="portfolio-overlay">
            <h3 className="portfolio-title">Sign Up Page</h3>
            <p className="portfolio-subtitle">
              A simple user-friendly registration form with validation and responsive UI.
            </p>
            <a href="https://glowing-axolotl-59c843.netlify.app/" className="portfolio-link">View Project</a>
          </div>
        </div>

        {/* New Project 5 */}
        <div className="portfolio-card">
          <img src={project4Image} alt="Online Shopping App" className="portfolio-image" />
          <div className="portfolio-overlay">
            <h3 className="portfolio-title">GroWise project</h3>
            <p className="portfolio-subtitle">
             GroWise is an urban gardening companion app that helps users care for plants with smart tips, growth tracking, and a plant swap marketplace.
            </p>
            <a href="https://www.behance.net/sanjaykanth1" className="portfolio-link">View Project</a>
          </div>
        </div>


         <div className="portfolio-card">
          <img src={project1Image} alt="Weather App" className="portfolio-image" />
          <div className="portfolio-overlay">
            <h3 className="portfolio-title">Weather App</h3>
            <p className="portfolio-subtitle">
              Get real-time weather updates, forecasts, and city search feature.
            </p>
            <a href="https://strong-paletas-af7ca8.netlify.app/task3" className="portfolio-link">View Project</a>
          </div>
        </div>

        <div className="portfolio-card">
          <img src={project2Image} alt="Online Shopping App" className="portfolio-image" />
          <div className="portfolio-overlay">
            <h3 className="portfolio-title">Online Shopping App</h3>
            <p className="portfolio-subtitle">
              A modern e-commerce app with product listings, cart, and checkout.
            </p>
            <a href="https://gorgeous-hotteok-cf4bcf.netlify.app/" className="portfolio-link">View Project</a>
          </div>
        </div>

          <div className="portfolio-card">
          <img src={project7Image} alt="Online Shopping App" className="portfolio-image" />
          <div className="portfolio-overlay">
            <h3 className="portfolio-title">Number Guessing game</h3>
            <p className="portfolio-subtitle">
             A fun interactive game where players try to guess the correct number with hints for each attempt.
            </p>
            <a href="https://elegant-crisp-a08a77.netlify.app/" className="portfolio-link">View Project</a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
