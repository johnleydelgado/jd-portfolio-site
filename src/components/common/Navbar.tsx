"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 left-0 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="font-display font-bold text-xl text-black">JD</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl tracking-wider uppercase text-white leading-none">
                Johnley
              </span>
              <span className="font-display font-light text-sm tracking-widest uppercase text-gray-400 leading-none">
                Delgado
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-300 hover:text-white font-medium text-sm uppercase tracking-wide transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="rounded-full border border-white text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-wider font-display px-6 py-2 text-sm font-medium"
            >
              Contact Me
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-300 hover:text-white font-medium text-sm uppercase tracking-wide transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center rounded-full border border-white text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-wider font-display mt-4 py-2 text-sm font-medium"
            >
              Contact Me
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
