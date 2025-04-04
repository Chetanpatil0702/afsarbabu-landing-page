import React from "react";
import "./styles.css";

function App() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    
    <div>
      <header className="navbar">
        <div className="container">
          <h1 className="logo">
            <img src="/assets/Logo.png"
                  alt="Indian Emblem" 
                  className="gov-logo" 
            />Afsarbabu
          </h1>

          <nav>
            <ul className="nav-links">
              <li><a href="#features">Features</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero">
        <h2>Welcome to Afsarbabu</h2>
        <p>अवसर से अफसर तक ...</p>
        <button onClick={scrollToContact}>Get Started</button>
      </section>

      <section id="features" className="features">
        <h3>Key Features</h3>
        <div className="feature-boxes">
          <div className="feature">
            <h4>Feature One</h4>
            <p>Detailed explanation of what this feature offers.</p>
          </div>
          <div className="feature">
            <h4>Feature Two</h4>
            <p>Another useful feature to highlight the service's benefit.</p>
          </div>
          <div className="feature">
            <h4>Feature Three</h4>
            <p>Something unique about Afsarbabu to impress users.</p>
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials">
        <h3>What People Say</h3>
        <div className="testimonial">
          <p>“Afsarbabu didn’t just teach — it transformed me. From a learner to a confident Afsar in the making. The journey was truly amazing!”</p>
          <span>– Student A</span>
        </div>
        <div className="testimonial">
          <p>“Innovative platform with great mentorship and real-time-study”</p>
          <span>– Student B</span>
        </div>
      </section>

      <section id="contact" className="cta">
        <h3>Ready to get started?</h3>
        <p>Join the Afsarbabu community today and boost your career!</p>
        <button onClick={() => window.location.href = 'mailto:afsarbabu125@gmail.com'}>
          Join Now
        </button>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Afsarbabu. All rights reserved.(Chetan Patil)</p>
      </footer>
    </div>
  );
}

export default App;
