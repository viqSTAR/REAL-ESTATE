import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Sun, Moon } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [theme, setTheme] = useState(() => {
    // Check localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });

  const location = useLocation();

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Only update state if values need changing to prevent unnecessary renders/lint errors
    if (isOpen) setIsOpen(false);
    if (activeDropdown) setActiveDropdown(null);
  }, [location, isOpen, activeDropdown]);

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'About',
      path: '/about',
      dropdown: [
        { name: 'About Us', path: '/about' },
        { name: 'Quality Assurance', path: '/quality' },
        { name: "Director's Message", path: '/director' },
      ],
    },
    { name: 'Projects', path: '/projects' },
    {
      name: 'Services',
      path: '/residential',
      dropdown: [
        { name: 'Residential Projects', path: '/residential' },
        { name: 'Commercial Projects', path: '/commercial' },
        { name: 'Government Projects', path: '/government' },
      ],
    },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Documents', path: '/documents' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Career', path: '/career' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-item">
            <Phone size={14} />
            <a href="tel:6206733818">62067 33818</a>
          </div>
          <div className="top-bar-item">
            <Mail size={14} />
            <a href="mailto:hrite.business@proton.me">hrite.business@proton.me</a>
          </div>
          <div className="top-bar-item">
            <MapPin size={14} />
            <span>Gardani Bagh, Patna 800001</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          <Link to="/" className="navbar-brand">
            <div className="brand-icon">H</div>
            <div className="brand-text">
              <span className="brand-name">HRITE</span>
              <span className="brand-tagline">Real Estate</span>
            </div>
          </Link>

          <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
            <ul className="navbar-nav">
              {navLinks.map((link) => (
                <li
                  key={link.name}
                  className={`nav-item ${link.dropdown ? 'has-dropdown' : ''}`}
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={link.path}
                    className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                  >
                    {link.name}
                    {link.dropdown && <ChevronDown size={14} />}
                  </Link>
                  {link.dropdown && (
                    <ul className={`dropdown-menu ${activeDropdown === link.name ? 'show' : ''}`}>
                      {link.dropdown.map((item) => (
                        <li key={item.name}>
                          <Link to={item.path} className="dropdown-link">
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}

              {/* Theme Toggle Button - Integrated in Menu */}
              <li className="nav-item">
                <button
                  onClick={toggleTheme}
                  className="theme-toggle-btn"
                  aria-label="Toggle Theme"
                  style={{
                    background: 'transparent',
                    border: '1px solid var(--glass-border)',
                    padding: '0.5rem',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-primary)',
                    marginLeft: '0.5rem',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                </button>
              </li>
            </ul>
          </div>

          <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
