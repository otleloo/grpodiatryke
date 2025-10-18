import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
export const Footer = () => {
  return <footer className="bg-secondary-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src="/logo.webp" alt="GR Podiatry Logo" className="h-auto w-[180px] bg-white rounded-md p-2" />
            </div>
            <p className="text-secondary-50 mb-4">
              Professional foot care services dedicated to improving your
              mobility and quality of life.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-50 hover:text-white" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-secondary-50 hover:text-white" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-secondary-50 hover:text-white" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
            <div className="mt-6">
              <img src="/cert.jpeg" alt="Certifications" className="h-auto w-full max-w-[200px]" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-secondary-50 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary-50 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-secondary-50 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/book-appointment" className="text-secondary-50 hover:text-white">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-50 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-secondary-50 hover:text-white">
                  General Podiatry
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-secondary-50 hover:text-white">
                  Sports Podiatry
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-secondary-50 hover:text-white">
                  Diabetic Foot Care
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-secondary-50 hover:text-white">
                  Orthotic Therapy
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-secondary-50 hover:text-white">
                  Nail Surgery
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>
                  5th Avenue Medical and Day Centre, 5th Ngong Avenue, Nairobi,
                  Kenya
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span>(+254) 700-186-73</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span>pod.almurray.2020@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-2 mt-1 flex-shrink-0" />
                <div>
                  <div>Mon-Fri: 9:00 AM - 6:00 PM</div>
                  <div>Saturday: 9:00 AM - 2:00 PM</div>
                  <div>Sunday: Closed</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-secondary-800 mt-12 pt-6 text-center text-secondary-100">
          <p>
            &copy; {new Date().getFullYear()} GR Podiatry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};