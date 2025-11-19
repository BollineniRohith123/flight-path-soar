import { motion } from "framer-motion";
import { Plane } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-primary via-accent to-primary" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center shadow-lg">
                <Plane className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-display font-black text-white">SKYLAR</span>
            </motion.div>
            <p className="text-white/70 max-w-md mb-6">
              The House of Advertising - Your complete marketing partner for aircraft branding, outdoor media, 
              digital campaigns, and integrated advertising solutions across all channels.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary hover:scale-110 transition-all flex items-center justify-center">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary hover:scale-110 transition-all flex items-center justify-center">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary hover:scale-110 transition-all flex items-center justify-center">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-white/70 hover:text-accent transition-colors">
                  Aircraft Advertising
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-accent transition-colors">
                  Outdoor Media
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-accent transition-colors">
                  Digital Campaigns
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-accent transition-colors">
                  Full-Service Production
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Get in Touch</h3>
            <ul className="space-y-2 text-white/70">
              <li>reach@theskylar.in</li>
              <li>+91 93461 48825</li>
              <li>#308, 3rd floor, 502B, Capital Pk Rd, VIP Hills, Madhapur, HITEC City, Hyderabad, Telangana 500081, India</li>
              <li>
                <a href="#contact" className="text-accent hover:text-accent-glow transition-colors">
                  Request a Quote →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          <p>© {currentYear} Skylar - The House of Advertising. All rights reserved. Complete marketing solutions across all channels.</p>
        </div>
      </div>
    </footer>
  );
};
