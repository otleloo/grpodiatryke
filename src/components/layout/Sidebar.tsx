import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Home, Users, Clipboard, ShoppingBag, Phone, Calendar, ChevronRight, Menu, X, FootprintsIcon, Stethoscope } from 'lucide-react';

export const Sidebar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const complaintsMenuRef = useRef<HTMLDivElement>(null);
  const treatmentsMenuRef = useRef<HTMLDivElement>(null);
  const complaintsButtonRef = useRef<HTMLButtonElement>(null);
  const treatmentsButtonRef = useRef<HTMLButtonElement>(null);

  const footComplaints = [
    { name: 'Achilles Tendonitis', path: '/complaints/achilles-tendonitis' },
    { name: "Athlete's Foot", path: '/complaints/athletes-foot' },
    { name: 'Blisters', path: '/complaints/blisters' },
    { name: 'Chilblains', path: '/complaints/chilblains' },
    { name: "Children's Foot Issues", path: '/complaints/childrens-foot-issues' },
    { name: 'Corns & Calluses', path: '/complaints/corns-calluses' },
    { name: 'Cracked Heels', path: '/complaints/cracked-heels' },
    { name: 'Diabetes and the Foot', path: '/complaints/diabetes-and-the-foot' },
    { name: 'Flat Feet', path: '/complaints/flat-feet' },
    { name: 'Fungal Nail', path: '/complaints/fungal-nail' },
    { name: 'Gout', path: '/complaints/gout' },
    { name: 'Hammertoe', path: '/complaints/hammertoe' },
    { name: 'Heel Pain', path: '/complaints/heel-pain' },
    { name: 'Ingrowing/Involuted Nails', path: '/complaints/ingrowing-nails' },
    { name: "Morton's Neuroma/Toe", path: '/complaints/mortons-neuroma' },
    { name: 'Plantar Fasciitis', path: '/complaints/plantar-fasciitis' },
    { name: 'Sweaty Feet', path: '/complaints/sweaty-feet' },
    { name: 'Verrucae (Warts)', path: '/complaints/verrucae' },
  ];

  const treatments = [
    { name: 'New Patient Consultation', path: '/treatments/new-patient-consultation' },
    { name: 'Therapeutic Laser Treatment', path: '/treatments/therapeutic-laser-treatment' },
    { name: 'Routine Treatment', path: '/treatments/routine-treatment' },
    { name: 'Review', path: '/treatments/review' },
    { name: 'Biomechanical Assessments', path: '/treatments/biomechanical-assessments' },
    { name: 'Orthotics Fitting', path: '/treatments/orthotics-fitting' },
    { name: 'Fenestration / Lacuna', path: '/treatments/fenestration' },
    { name: 'Nail Surgery', path: '/treatments/nail-surgery' },
    { name: 'Verruca Treatment', path: '/treatments/verruca-treatment' },
  ];

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={20} /> },
    { name: 'About', path: '/about', icon: <Users size={20} /> },
    { name: 'Services', path: '/services', icon: <Clipboard size={20} /> },
    { name: 'Products', path: '/products', icon: <ShoppingBag size={20} /> },
    { name: 'Contact', path: '/contact', icon: <Phone size={20} /> },
  ];

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const toggleSubMenu = (subMenu: string) => {
    setOpenSubMenu(prev => (prev === subMenu ? null : subMenu));
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMobileOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openSubMenu === 'complaints' && complaintsMenuRef.current && !complaintsMenuRef.current.contains(event.target as Node) && complaintsButtonRef.current && !complaintsButtonRef.current.contains(event.target as Node)) {
        setOpenSubMenu(null);
      }
      if (openSubMenu === 'treatments' && treatmentsMenuRef.current && !treatmentsMenuRef.current.contains(event.target as Node) && treatmentsButtonRef.current && !treatmentsButtonRef.current.contains(event.target as Node)) {
        setOpenSubMenu(null);
      }
    };

    if (openSubMenu && window.innerWidth >= 768) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openSubMenu]);

  return (
    <>
      {!isMobileOpen && <button className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-md shadow-md" onClick={toggleMobileSidebar} aria-label="Open menu">
          <Menu size={24} />
        </button>}
      <div className={`hidden md:flex fixed left-0 top-0 bottom-0 bg-white shadow-lg flex-col transition-all duration-300 z-40`} style={{ width: '304px' }}>
        <div className="flex items-center justify-between p-4 border-b">
          <Link to="/" className="flex items-center overflow-hidden">
            <img src="/logo.webp" alt="GR Podiatry Logo" className={`w-full max-w-[250px] object-contain`} />
          </Link>
        </div>
        <div className="flex-grow overflow-y-auto">
          <nav className="py-6">
            <ul className="space-y-2">
              <li>
                <Link to="/" className={`flex items-center px-4 py-3 space-x-3 ${location.pathname === '/' ? 'bg-secondary-50 text-primary-600 border-r-4 border-primary-600' : 'text-gray-600 hover:bg-secondary-50 hover:text-primary-600'}`}>
                  <span className="flex-shrink-0"><Home size={20} /></span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className={`flex items-center px-4 py-3 space-x-3 ${location.pathname === '/about' ? 'bg-secondary-50 text-primary-600 border-r-4 border-primary-600' : 'text-gray-600 hover:bg-secondary-50 hover:text-primary-600'}`}>
                  <span className="flex-shrink-0"><Users size={20} /></span>
                  <span>About</span>
                </Link>
              </li>
              <li>
                <button ref={complaintsButtonRef} onClick={() => toggleSubMenu('complaints')} className={`w-full flex items-center px-4 py-3 justify-between text-gray-600 hover:bg-secondary-50 hover:text-primary-600 transition-colors`} aria-expanded={openSubMenu === 'complaints'} aria-controls="foot-complaints-menu">
                  <div className={`flex items-center space-x-3`}>
                    <span className="flex-shrink-0"><FootprintsIcon size={20} /></span>
                    <span className="whitespace-nowrap">Common Foot Complaints</span>
                  </div>
                  <ChevronRight size={16} />
                </button>
              </li>
              <li>
                <button ref={treatmentsButtonRef} onClick={() => toggleSubMenu('treatments')} className={`w-full flex items-center px-4 py-3 justify-between text-gray-600 hover:bg-secondary-50 hover:text-primary-600 transition-colors`} aria-expanded={openSubMenu === 'treatments'} aria-controls="treatments-menu">
                  <div className={`flex items-center space-x-3`}>
                    <span className="flex-shrink-0"><Stethoscope size={20} /></span>
                    <span className="whitespace-nowrap">Our Treatments</span>
                  </div>
                  <ChevronRight size={16} />
                </button>
              </li>
              {navLinks.slice(2).map(link => <li key={link.name}>
                  <Link to={link.path} className={`flex items-center px-4 py-3 space-x-3 ${location.pathname === link.path ? 'bg-secondary-50 text-primary-600 border-r-4 border-primary-600' : 'text-gray-600 hover:bg-secondary-50 hover:text-primary-600'}`}>
                    <span className="flex-shrink-0">{link.icon}</span>
                    <span>{link.name}</span>
                  </Link>
                </li>)}
            </ul>
          </nav>
        </div>
        <div className={`p-4 border-t`}>
          <Link to="/book-appointment">
            <Button fullWidth={true}>
              Book Appointment
            </Button>
          </Link>
        </div>
      </div>

      {openSubMenu === 'complaints' && <div ref={complaintsMenuRef} className={`hidden md:block fixed z-30 top-0 bottom-0 bg-white shadow-lg border-l border-gray-200 overflow-y-auto transition-all duration-300`} style={{ width: '250px', left: '304px' }}>
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="font-bold text-primary-600">Common Foot Complaints</h3>
            <button onClick={() => toggleSubMenu('complaints')} className="text-gray-500 hover:text-gray-700 transition-colors" aria-label="Close foot complaints menu">
              <X size={20} />
            </button>
          </div>
          <nav className="py-4">
            <ul className="space-y-1">
              {footComplaints.map((complaint, index) => <li key={index}>
                  <Link to={complaint.path} className="block px-4 py-2 text-gray-600 hover:bg-secondary-50 hover:text-primary-600 transition-colors" onClick={() => toggleSubMenu('complaints')}>
                    {complaint.name}
                  </Link>
                </li>)}
            </ul>
          </nav>
        </div>}

      {openSubMenu === 'treatments' && <div ref={treatmentsMenuRef} className={`hidden md:block fixed z-30 top-0 bottom-0 bg-white shadow-lg border-l border-gray-200 overflow-y-auto transition-all duration-300`} style={{ width: '250px', left: '304px' }}>
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="font-bold text-primary-600">Our Treatments</h3>
            <button onClick={() => toggleSubMenu('treatments')} className="text-gray-500 hover:text-gray-700 transition-colors" aria-label="Close treatments menu">
              <X size={20} />
            </button>
          </div>
          <nav className="py-4">
            <ul className="space-y-1">
              {treatments.map((treatment, index) => <li key={index}>
                  <Link to={treatment.path} className="block px-4 py-2 text-gray-600 hover:bg-secondary-50 hover:text-primary-600 transition-colors" onClick={() => toggleSubMenu('treatments')}>
                    {treatment.name}
                  </Link>
                </li>)}
            </ul>
          </nav>
        </div>}

      {isMobileOpen && <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30" onClick={toggleMobileSidebar}>
          <div className="absolute top-0 left-0 bottom-0 w-full bg-white shadow-lg overflow-hidden flex flex-col" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between p-4 border-b">
              <button onClick={() => handleNavigation('/')} className="flex items-center">
                <img src="/logo.webp" alt="GR Podiatry Logo" className="h-auto w-[200px] object-contain" />
              </button>
              <button onClick={toggleMobileSidebar} className="text-gray-500 hover:text-gray-700" aria-label="Close menu">
                <X size={24} />
              </button>
            </div>
            <nav className="flex-grow overflow-y-auto">
              <ul className="space-y-2 py-6">
                {navLinks.slice(0, 2).map(link => <li key={link.name}>
                    <button onClick={() => handleNavigation(link.path)} className={`w-full flex items-center space-x-3 px-4 py-3 text-left ${location.pathname === link.path ? 'bg-secondary-50 text-primary-600 border-r-4 border-primary-600' : 'text-gray-600 hover:bg-secondary-50 hover:text-primary-600'}`}>
                      <span>{link.icon}</span>
                      <span>{link.name}</span>
                    </button>
                  </li>)}
                <li>
                  <button onClick={() => toggleSubMenu('complaints')} className={`w-full flex items-center justify-between px-4 py-3 text-gray-600 hover:bg-secondary-50 hover:text-primary-600 ${openSubMenu === 'complaints' ? 'bg-secondary-50 text-primary-600' : ''}`}>
                    <div className="flex items-center space-x-3">
                      <FootprintsIcon size={20} />
                      <span className="whitespace-nowrap">Common Foot Complaints</span>
                    </div>
                    <ChevronRight size={16} />
                  </button>
                  {openSubMenu === 'complaints' && <div className="bg-gray-50 py-2 max-h-60 overflow-y-auto">
                      <ul className="pl-10 space-y-1">
                        {footComplaints.map((complaint, index) => <li key={index}>
                            <button onClick={() => handleNavigation(complaint.path)} className="block w-full text-left py-1.5 text-sm text-gray-600 hover:text-primary-600">
                              {complaint.name}
                            </button>
                          </li>)}
                      </ul>
                    </div>}
                </li>
                <li>
                  <button onClick={() => toggleSubMenu('treatments')} className={`w-full flex items-center justify-between px-4 py-3 text-gray-600 hover:bg-secondary-50 hover:text-primary-600 ${openSubMenu === 'treatments' ? 'bg-secondary-50 text-primary-600' : ''}`}>
                    <div className="flex items-center space-x-3">
                      <Stethoscope size={20} />
                      <span className="whitespace-nowrap">Our Treatments</span>
                    </div>
                    <ChevronRight size={16} />
                  </button>
                  {openSubMenu === 'treatments' && <div className="bg-gray-50 py-2 max-h-60 overflow-y-auto">
                      <ul className="pl-10 space-y-1">
                        {treatments.map((treatment, index) => <li key={index}>
                            <button onClick={() => handleNavigation(treatment.path)} className="block w-full text-left py-1.5 text-sm text-gray-600 hover:text-primary-600">
                              {treatment.name}
                            </button>
                          </li>)}
                      </ul>
                    </div>}
                </li>
                {navLinks.slice(2).map(link => <li key={link.name}>
                    <button onClick={() => handleNavigation(link.path)} className={`w-full flex items-center space-x-3 px-4 py-3 text-left ${location.pathname === link.path ? 'bg-secondary-50 text-primary-600 border-r-4 border-primary-600' : 'text-gray-600 hover:bg-secondary-50 hover:text-primary-600'}`}>
                      <span>{link.icon}</span>
                      <span>{link.name}</span>
                    </button>
                  </li>)}
              </ul>
            </nav>
            <div className="p-4 border-t">
              <button onClick={() => handleNavigation('/book-appointment')} className="w-full">
                <Button fullWidth>Book Appointment</Button>
              </button>
            </div>
          </div>
        </div>}
    </>
  );
};