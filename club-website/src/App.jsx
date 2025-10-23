import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import CybersecurityPage from './pages/CybersecurityPage';
import TechSynergyPage from './pages/TechSynergyPage';
import './App.css';

function App() {
  return (
    <Router basename="/website">
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/cybersecurity" element={<CybersecurityPage />} />
            <Route path="/techsynergy" element={<TechSynergyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
