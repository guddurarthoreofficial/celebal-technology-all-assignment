import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-blue-600">RideX Rentals</h2>
          <p className="mt-3 text-sm text-gray-300">
            Your trusted partner for affordable and premium car & bike rentals across the city.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="/about" className="hover:text-yellow-400">About Us</a></li>
            <li><a href="/services" className="hover:text-yellow-400">Services</a></li>
            <li><a href="/fleet" className="hover:text-yellow-400">Fleet</a></li>
            <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-center gap-2"><MdLocationOn /> 123 Main Street, Cityville</li>
            <li className="flex items-center gap-2"><FaPhoneAlt /> +91 98765 43210</li>
            <li className="flex items-center gap-2"><FaEnvelope /> support@ridex.com</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="text-gray-300 hover:text-yellow-400"><FaFacebookF /></a>
            <a href="#" className="text-gray-300 hover:text-yellow-400"><FaTwitter /></a>
            <a href="#" className="text-gray-300 hover:text-yellow-400"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} RideX Rentals. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
