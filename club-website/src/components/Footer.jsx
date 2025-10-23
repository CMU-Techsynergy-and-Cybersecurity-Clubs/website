import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Meeting Information</h3>
          <p>📅 Every Wednesday at 4:00 PM</p>
          <p>📍 Confluence 110</p>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            📧 <a href="mailto:jjalonzo-estra@mavs.coloradomesa.edu">
              jjalonzo-estra@mavs.coloradomesa.edu
            </a>
          </p>
          <p>
            💬 <a href="https://discord.gg/Uyy3Baqxnb" target="_blank" rel="noopener noreferrer">
              Join our Discord
            </a>
          </p>
        </div>

        <div className="footer-section">
          <h3>Colorado Mesa University</h3>
          <p>Computer Science Clubs</p>
          <p>Building Tomorrow's Tech Leaders</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 CMU Tech Clubs. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
