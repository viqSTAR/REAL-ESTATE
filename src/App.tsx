import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingIcons from './components/FloatingIcons';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import QualityAssurance from './pages/QualityAssurance';
import DirectorMessage from './pages/DirectorMessage';
import Projects from './pages/Projects';
import Residential from './pages/Residential';
import Commercial from './pages/Commercial';
import Government from './pages/Government';
import Testimonials from './pages/Testimonials';
import Documents from './pages/Documents';
import Gallery from './pages/Gallery';
import Career from './pages/Career';
import Contact from './pages/Contact';
import './index.css';

function App() {
  return (
    <Router>
      {/* Background Decorations */}
      <div className="bg-decoration bg-decoration-1"></div>
      <div className="bg-decoration bg-decoration-2"></div>

      <Navbar />
      <FloatingIcons />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/quality" element={<QualityAssurance />} />
        <Route path="/director" element={<DirectorMessage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/residential" element={<Residential />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/government" element={<Government />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
