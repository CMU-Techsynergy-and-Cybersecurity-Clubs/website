import ClubHero from '../components/ClubHero';
import TabContainer from '../components/TabContainer';
import ImageGallery from '../components/ImageGallery';
import './CybersecurityPage.css';
import cyberSecLogo from '../assets/cybersecurity/CyberSecLogoComplex.png';

// Import Cyber Fair images
import cyberFair1 from '../assets/cyber-fair/IMG_1917.jpg';
import cyberFair2 from '../assets/cyber-fair/IMG_0501.jpg';
import cyberFair3 from '../assets/cyber-fair/IMG_0500.jpg';
import cyberFair4 from '../assets/cyber-fair/IMG_1146.jpg';
import cyberFair5 from '../assets/cyber-fair/IMG_1147.jpg';
import cyberFair6 from '../assets/cyber-fair/IMG_1150.jpg';

function CybersecurityPage() {
  const cyberFairImages = [
    { src: cyberFair1, alt: 'Cyber Fair 2025 - Students working on security challenges' },
    { src: cyberFair2, alt: 'Cyber Fair 2025 - Hardware hacking station' },
    { src: cyberFair3, alt: 'Cyber Fair 2025 - Team collaboration' },
    { src: cyberFair4, alt: 'Cyber Fair 2025 - Security demonstration' },
    { src: cyberFair5, alt: 'Cyber Fair 2025 - CTF competition' },
    { src: cyberFair6, alt: 'Cyber Fair 2025 - Networking activities' },
  ];

  const tabs = [
    {
      label: 'Events',
      content: (
        <div className="tab-content-wrapper">
          <div className="event-card featured">
            <h3>🎯 Cyber Fair 2025</h3>
            <p className="event-date">Spring 2025</p>
            <p>
              Our flagship annual event bringing together students, professionals, and
              security enthusiasts for a day of hands-on cybersecurity challenges, workshops,
              and networking opportunities.
            </p>
            <div className="event-highlights">
              <div className="event-highlight">
                <strong>Capture The Flag (CTF) Competition</strong>
                <p>Test your skills in real-world security scenarios</p>
              </div>
              <div className="event-highlight">
                <strong>Hardware Hacking Stations</strong>
                <p>Hands-on experience with IoT security and embedded systems</p>
              </div>
              <div className="event-highlight">
                <strong>Industry Speakers</strong>
                <p>Learn from cybersecurity professionals</p>
              </div>
              <div className="event-highlight">
                <strong>Networking Opportunities</strong>
                <p>Connect with potential employers and sponsors</p>
              </div>
            </div>
          </div>

          <ImageGallery images={cyberFairImages} title="Cyber Fair 2025 Gallery" />

          <div className="event-card">
            <h3>📅 Upcoming Events</h3>
            <ul className="event-list">
              <li>Weekly CTF Challenges - Every Wednesday</li>
              <li>Guest Speaker Series - Monthly</li>
              <li>Security Workshops - Bi-weekly</li>
              <li>Regional CTF Competitions - Quarterly</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      label: 'Projects',
      content: (
        <div className="tab-content-wrapper">
          <div className="projects-grid">
            <div className="project-card">
              <h3>🔐 Vulnerability Assessment Lab</h3>
              <p>
                Building a comprehensive lab environment for students to practice
                identifying and exploiting common security vulnerabilities in a safe,
                controlled setting.
              </p>
              <div className="project-tags">
                <span className="tag">Penetration Testing</span>
                <span className="tag">Web Security</span>
                <span className="tag">Network Security</span>
              </div>
            </div>

            <div className="project-card">
              <h3>🛡️ Security Awareness Campaign</h3>
              <p>
                Creating educational materials and conducting workshops to raise
                cybersecurity awareness across campus. Topics include phishing,
                password security, and social engineering.
              </p>
              <div className="project-tags">
                <span className="tag">Education</span>
                <span className="tag">Social Engineering</span>
                <span className="tag">Best Practices</span>
              </div>
            </div>

            <div className="project-card">
              <h3>🎮 CTF Challenge Development</h3>
              <p>
                Designing and developing custom Capture The Flag challenges for club
                competitions and external events. Covers cryptography, forensics,
                reverse engineering, and more.
              </p>
              <div className="project-tags">
                <span className="tag">CTF Design</span>
                <span className="tag">Cryptography</span>
                <span className="tag">Forensics</span>
              </div>
            </div>

            <div className="project-card">
              <h3>🌐 Honeypot Network</h3>
              <p>
                Deploying and monitoring honeypot systems to study attack patterns
                and emerging threats. Analyzing collected data to improve defensive
                strategies.
              </p>
              <div className="project-tags">
                <span className="tag">Threat Intelligence</span>
                <span className="tag">Network Analysis</span>
                <span className="tag">Research</span>
              </div>
            </div>
          </div>

          <div className="placeholder-notice">
            <p>
              💡 <strong>Have a project idea?</strong> We're always looking for new
              security projects! Bring your ideas to our weekly meetings.
            </p>
          </div>
        </div>
      ),
    },
    {
      label: 'Activities',
      content: (
        <div className="tab-content-wrapper">
          <div className="activities-grid">
            <div className="activity-card">
              <div className="activity-icon">🏆</div>
              <h3>Weekly CTF Challenges</h3>
              <p>
                Every Wednesday, we host mini Capture The Flag challenges covering
                various security domains. Perfect for beginners and experienced
                players alike!
              </p>
            </div>

            <div className="activity-card">
              <div className="activity-icon">👥</div>
              <h3>Security Workshops</h3>
              <p>
                Hands-on workshops on topics like web application security, malware
                analysis, network forensics, and secure coding practices.
              </p>
            </div>

            <div className="activity-card">
              <div className="activity-icon">🎓</div>
              <h3>Study Groups</h3>
              <p>
                Collaborative learning sessions for security certifications (Security+,
                CEH, OSCP) and competition preparation.
              </p>
            </div>

            <div className="activity-card">
              <div className="activity-icon">💻</div>
              <h3>Hack Labs</h3>
              <p>
                Open lab sessions where members can work on personal security projects,
                practice pentesting, or experiment with new tools and techniques.
              </p>
            </div>

            <div className="activity-card">
              <div className="activity-icon">🗣️</div>
              <h3>Guest Speakers</h3>
              <p>
                Monthly presentations from industry professionals sharing real-world
                cybersecurity experiences and career insights.
              </p>
            </div>

            <div className="activity-card">
              <div className="activity-icon">🎯</div>
              <h3>Competition Teams</h3>
              <p>
                Participate in regional and national cybersecurity competitions,
                including CCDC, NCL, and online CTF events.
              </p>
            </div>
          </div>

          <div className="join-info">
            <h3>Join Us!</h3>
            <p>
              All skill levels welcome - from complete beginners to experienced security
              enthusiasts. We meet every Wednesday at 4:00 PM in Confluence 110.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="cybersecurity-page">
      <ClubHero
        logo={cyberSecLogo}
        title="Cybersecurity Club"
        tagline="Protecting the Digital Frontier"
        bgColor="linear-gradient(135deg, #1a1a2e 0%, #c9302c 100%)"
        accentColor="#ffd700"
      />

      <div className="page-content">
        <div className="club-intro">
          <h2>About Our Club</h2>
          <p>
            The Cybersecurity Club at Colorado Mesa University is dedicated to fostering
            a passion for information security among students. Through hands-on challenges,
            real-world projects, and collaborative learning, we prepare the next generation
            of cybersecurity professionals.
          </p>
        </div>

        <TabContainer tabs={tabs} />

        <div className="club-sidebar">
          <div className="sidebar-card">
            <h3>📍 Meeting Information</h3>
            <p><strong>When:</strong> Every Wednesday at 4:00 PM</p>
            <p><strong>Where:</strong> Confluence 110</p>
          </div>

          <div className="sidebar-card">
            <h3>📧 Contact</h3>
            <p>
              <a href="mailto:jjalonzo-estra@mavs.coloradomesa.edu">
                jjalonzo-estra@mavs.coloradomesa.edu
              </a>
            </p>
            <p>
              <a href="https://discord.gg/Uyy3Baqxnb" target="_blank" rel="noopener noreferrer">
                Join our Discord →
              </a>
            </p>
          </div>

          <div className="sidebar-card">
            <h3>👨‍🏫 Faculty Advisor</h3>
            <p><em>Information coming soon</em></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CybersecurityPage;
