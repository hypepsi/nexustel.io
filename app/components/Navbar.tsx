"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Smartphone, Briefcase, Headphones, Home, MapPin, Radio } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/mobile", label: "Mobile Plans", icon: Smartphone },
    { href: "/business", label: "Business", icon: Briefcase },
    { href: "/coverage", label: "Coverage", icon: MapPin },
    { href: "/support", label: "Support", icon: Headphones },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Empty Logo Space */}
          <div className="w-8"></div>

          {/* Desktop Navigation - Wider Spacing */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-700 hover:text-slate-900 font-medium transition-colors flex items-center space-x-2 hover:bg-slate-100/50 px-3 py-2 rounded-lg"
              >
                <link.icon className="w-4 h-4" />
                <span>{link.label}</span>
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-slate-700 hover:text-cyan-600 font-semibold transition-colors px-3 py-2 rounded-lg hover:bg-slate-100/50"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-slate-900" />
            ) : (
              <Menu className="w-6 h-6 text-slate-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <link.icon className="w-5 h-5 text-slate-700" />
                  <span className="text-slate-900 font-medium">{link.label}</span>
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-slate-700 hover:text-cyan-600 font-semibold px-4 py-2"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
