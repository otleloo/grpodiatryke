import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'About',
    path: '/about'
  }, {
    name: 'Services',
    path: '/services'
  }, {
    name: 'Products',
    path: '/products'
  }, {
    name: 'Contact',
    path: '/contact'
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="/logo.webp" alt="GR Podiatry Logo" className="h-12 object-contain" />
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <Link key={link.name} to={link.path} className={`font-medium transition-colors ${location.pathname === link.path ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'}`}>
                {link.name}
              </Link>)}
            <Link to="/book-appointment">
              <Button>Book Appointment</Button>
            </Link>
          </nav>
          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && <motion.div className="md:hidden bg-white shadow-lg" initial={{
      opacity: 0,
      height: 0
    }} animate={{
      opacity: 1,
      height: 'auto'
    }} exit={{
      opacity: 0,
      height: 0
    }} transition={{
      duration: 0.3
    }}>
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map(link => <Link key={link.name} to={link.path} className={`font-medium py-2 ${location.pathname === link.path ? 'text-primary-600' : 'text-gray-600'}`} onClick={() => setMobileMenuOpen(false)}>
                  {link.name}
                </Link>)}
              <Link to="/book-appointment" onClick={() => setMobileMenuOpen(false)}>
                <Button fullWidth>Book Appointment</Button>
              </Link>
            </nav>
          </div>
        </motion.div>}
    </header>;
};