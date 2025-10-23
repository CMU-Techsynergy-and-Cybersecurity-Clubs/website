import ClubHero from '../components/ClubHero';
import TabContainer from '../components/TabContainer';
import ImageGallery from '../components/ImageGallery';
import './TechSynergyPage.css';
import techSynergyLogo from '../assets/techsynergy/TechSynergyLogo.png';

// Import ICPC images
import icpc1 from '../assets/icpc/IMG_0640.jpg';
import icpc2 from '../assets/icpc/IMG_0641.jpg';
import icpc3 from '../assets/icpc/IMG_0642.jpg';

function TechSynergyPage() {
  const icpcImages = [
    { src: icpc1, alt: 'ICPC 2025 - Team problem solving' },
    { src: icpc2, alt: 'ICPC 2025 - Coding competition' },
    { src: icpc3, alt: 'ICPC 2025 - Team collaboration' },
  ];

  const tabs = [
    {
      label: 'Events',
      content: (
        <div className="tab-content-wrapper">
          <div className="event-card featured">
            <h3>🏆 ICPC 2025</h3>
            <p className="event-date">International Collegiate Programming Contest</p>
            <p>
              TechSynergy is proud to send competitive teams to the International Collegiate
              Programming Contest (ICPC), the premier global programming competition for
              university students. Our teams tackle complex algorithmic challenges and
              compete against the best programmers worldwide.
            </p>
            <div className="event-highlights">
              <div className="event-highlight">
                <strong>Algorithmic Problem Solving</strong>
                <p>Master advanced algorithms and data structures</p>
              </div>
              <div className="event-highlight">
                <strong>Team Collaboration</strong>
                <p>Work together under pressure to solve challenging problems</p>
              </div>
              <div className="event-highlight">
                <strong>Global Competition</strong>
                <p>Compete against top universities from around the world</p>
              </div>
              <div className="event-highlight">
                <strong>Career Opportunities</strong>
                <p>Gain recognition from top tech companies</p>
              </div>
            </div>
          </div>

          <ImageGallery images={icpcImages} title="ICPC 2025 Team" />

          <div className="event-card">
            <h3>📅 Upcoming Events</h3>
            <ul className="event-list">
              <li>Weekly Coding Challenges - Every Wednesday</li>
              <li>Hackathons - Quarterly</li>
              <li>Tech Talks & Workshops - Monthly</li>
              <li>Programming Competitions - Regional & National</li>
              <li>Industry Networking Events - Bi-annually</li>
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
              <h3>💻 Full-Stack Web Applications</h3>
              <p>
                Collaborative development of modern web applications using cutting-edge
                technologies like React, Node.js, and cloud platforms. Members gain
                hands-on experience with the complete software development lifecycle.
              </p>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">Node.js</span>
                <span className="tag">Cloud</span>
              </div>
            </div>

            <div className="project-card">
              <h3>🤖 AI & Machine Learning</h3>
              <p>
                Exploring artificial intelligence and machine learning applications
                through practical projects. From computer vision to natural language
                processing, members experiment with cutting-edge AI technologies.
              </p>
              <div className="project-tags">
                <span className="tag">Python</span>
                <span className="tag">TensorFlow</span>
                <span className="tag">ML Algorithms</span>
              </div>
            </div>

            <div className="project-card">
              <h3>📱 Mobile App Development</h3>
              <p>
                Creating innovative mobile applications for iOS and Android platforms.
                Members learn cross-platform development using React Native and Flutter,
                bringing their app ideas to life.
              </p>
              <div className="project-tags">
                <span className="tag">React Native</span>
                <span className="tag">Flutter</span>
                <span className="tag">Mobile UX</span>
              </div>
            </div>

            <div className="project-card">
              <h3>🎮 Game Development</h3>
              <p>
                Building interactive games and simulations using modern game engines.
                Perfect for members interested in game design, graphics programming,
                and interactive entertainment.
              </p>
              <div className="project-tags">
                <span className="tag">Unity</span>
                <span className="tag">C#</span>
                <span className="tag">Game Design</span>
              </div>
            </div>

            <div className="project-card">
              <h3>🔗 Blockchain & Cryptocurrencies</h3>
              <p>
                Exploring decentralized technologies through smart contract development
                and blockchain applications. Learn about Web3, DeFi, and the future of
                distributed systems.
              </p>
              <div className="project-tags">
                <span className="tag">Solidity</span>
                <span className="tag">Ethereum</span>
                <span className="tag">Web3</span>
              </div>
            </div>

            <div className="project-card">
              <h3>🌐 Open Source Contributions</h3>
              <p>
                Contributing to real-world open source projects and building a portfolio
                that showcases your skills. Learn collaborative development practices
                used in industry.
              </p>
              <div className="project-tags">
                <span className="tag">Git</span>
                <span className="tag">Open Source</span>
                <span className="tag">Collaboration</span>
              </div>
            </div>
          </div>

          <div className="placeholder-notice">
            <p>
              💡 <strong>Got an innovative idea?</strong> We welcome new project proposals!
              Share your vision at our weekly meetings and find teammates to collaborate with.
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
              <div className="activity-icon">💻</div>
              <h3>Weekly Coding Sessions</h3>
              <p>
                Every Wednesday, we tackle algorithmic challenges, work on projects,
                and help each other level up our programming skills in a collaborative
                environment.
              </p>
            </div>

            <div className="activity-card">
              <div className="activity-icon">🏃</div>
              <h3>Hackathons</h3>
              <p>
                Participate in local and national hackathons where you'll build amazing
                projects in 24-48 hours, win prizes, and network with industry professionals.
              </p>
            </div>

            <div className="activity-card">
              <div className="activity-icon">📚</div>
              <h3>Tech Workshops</h3>
              <p>
                Hands-on workshops covering modern technologies, frameworks, and tools.
                From React to Docker, learn the skills that matter in today's tech industry.
              </p>
            </div>

            <div className="activity-card">
              <div className="activity-icon">🎯</div>
              <h3>Coding Competitions</h3>
              <p>
                Prepare for and compete in ICPC, HackerRank contests, LeetCode challenges,
                and other programming competitions to sharpen your problem-solving skills.
              </p>
            </div>

            <div className="activity-card">
              <div className="activity-icon">👔</div>
              <h3>Industry Connections</h3>
              <p>
                Network with tech companies through guest speakers, company visits, and
                recruitment events. Get insights into careers and internship opportunities.
              </p>
            </div>

            <div className="activity-card">
              <div className="activity-icon">🤝</div>
              <h3>Peer Learning</h3>
              <p>
                Collaborate on projects, share knowledge, and learn from each other.
                From code reviews to pair programming, we grow together as developers.
              </p>
            </div>

            <div className="activity-card">
              <div className="activity-icon">🚀</div>
              <h3>Innovation Challenges</h3>
              <p>
                Participate in innovation sprints where teams brainstorm and prototype
                solutions to real-world problems using technology.
              </p>
            </div>

            <div className="activity-card">
              <div className="activity-icon">📖</div>
              <h3>Tech Book Club</h3>
              <p>
                Discuss influential tech books, research papers, and articles. Expand
                your knowledge beyond coding to understand the broader tech landscape.
              </p>
            </div>
          </div>

          <div className="join-info">
            <h3>Where Innovation Meets Code</h3>
            <p>
              Whether you're a beginner learning your first programming language or an
              experienced developer working on complex systems, TechSynergy has something
              for you. Join us every Wednesday at 4:00 PM in Confluence 110!
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="techsynergy-page">
      <ClubHero
        logo={techSynergyLogo}
        title="TechSynergy Club"
        tagline="Where Innovation Meets Code"
        bgColor="linear-gradient(135deg, #5e3d8f 0%, #764ba2 100%)"
        accentColor="#fff"
      />

      <div className="page-content">
        <div className="club-intro">
          <h2>About Our Club</h2>
          <p>
            TechSynergy is Colorado Mesa University's premier club for students passionate
            about coding, innovation, and technology. We bring together aspiring developers,
            competitive programmers, and tech enthusiasts to learn, build, and compete together.
            From ICPC competitions to hackathons to collaborative projects, we're building
            the next generation of tech leaders.
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

export default TechSynergyPage;
