import { Link } from 'react-router-dom';
import './LandingPage.css';
import cyberSecLogo from '../assets/cybersecurity/CyberSecLogoComplex.png';
import techSynergyLogo from '../assets/techsynergy/TechSynergyLogo.png';

function LandingPage() {
  return (
    <div className="landing-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to CMU Tech Clubs</h1>
          <p className="hero-subtitle">
            Empowering students through technology, innovation, and collaboration
          </p>
          <div className="hero-stats">
            <div className="stat">
              <h3>2</h3>
              <p>Active Clubs</p>
            </div>
            <div className="stat">
              <h3>100+</h3>
              <p>Members</p>
            </div>
            <div className="stat">
              <h3>Weekly</h3>
              <p>Meetings</p>
            </div>
          </div>
        </div>
      </section>

      <section className="clubs-section">
        <h2 className="section-title">Explore Our Clubs</h2>
        <div className="clubs-grid">
          <Link to="/cybersecurity" className="club-card cybersec-card">
            <div className="club-card-header">
              <img src={cyberSecLogo} alt="Cybersecurity Club" />
            </div>
            <div className="club-card-body">
              <h3>Cybersecurity Club</h3>
              <p>
                Learn the art of protecting digital assets through hands-on
                challenges, CTF competitions, and real-world security scenarios.
              </p>
              <div className="club-highlights">
                <span className="highlight">🛡️ Security Training</span>
                <span className="highlight">🏆 CTF Competitions</span>
                <span className="highlight">🎯 Cyber Fair</span>
              </div>
            </div>
            <div className="club-card-footer">
              <span className="learn-more">Learn More →</span>
            </div>
          </Link>

          <Link to="/techsynergy" className="club-card techsynergy-card">
            <div className="club-card-header">
              <img src={techSynergyLogo} alt="TechSynergy Club" />
            </div>
            <div className="club-card-body">
              <h3>TechSynergy Club</h3>
              <p className="club-tagline">Where Innovation Meets Code</p>
              <p>
                Collaborate on innovative projects, compete in programming
                competitions, and build the future of technology together.
              </p>
              <div className="club-highlights">
                <span className="highlight">💻 Code Competitions</span>
                <span className="highlight">🚀 Innovation Projects</span>
                <span className="highlight">🌟 ICPC Teams</span>
              </div>
            </div>
            <div className="club-card-footer">
              <span className="learn-more">Learn More →</span>
            </div>
          </Link>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Join?</h2>
        <p className="cta-text">
          Join us every Wednesday at 4:00 PM in Confluence 110 and become part
          of a thriving community of tech enthusiasts!
        </p>
        <div className="cta-buttons">
          <a
            href="https://discord.gg/Uyy3Baqxnb"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button primary"
          >
            Join Discord
          </a>
          <a
            href="mailto:jjalonzo-estra@mavs.coloradomesa.edu"
            className="cta-button secondary"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
