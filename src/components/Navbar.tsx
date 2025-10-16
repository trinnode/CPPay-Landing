import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUp } from "lucide-react";
import logo from "./assets/logo.png";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      // Show scroll up button when user scrolls past center of viewport
      setShowScrollUp(window.scrollY > window.innerHeight / 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => scrollToSection("home")}
                className="flex items-center hover:opacity-80 transition-opacity"
              >
                <img
                  src={logo}
                  alt="CPPay Logo"
                  className="w-10 h-10 object-contain"
                />
                <span className="ml-3 text-2xl font-caro-pro font-bold text-gray-900 tracking-tight">
                  CPPay
                </span>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-700 hover:text-[#4D1B64] px-3 py-2 text-sm font-caro-pro font-medium transition-colors duration-200"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-gray-700 hover:text-[#4D1B64] px-3 py-2 text-sm font-caro-pro font-medium transition-colors duration-200"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-700 hover:text-[#4D1B64] px-3 py-2 text-sm font-caro-pro font-medium transition-colors duration-200"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("installation")}
                  className="text-gray-700 hover:text-[#4D1B64] px-3 py-2 text-sm font-caro-pro font-medium transition-colors duration-200"
                >
                  Get Started
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#4D1B64] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#4D1B64]"
              >
                {isMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-[#4D1B64] block px-3 py-2 text-base font-caro-pro font-medium w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-gray-700 hover:text-[#4D1B64] block px-3 py-2 text-base font-caro-pro font-medium w-full text-left"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-[#4D1B64] block px-3 py-2 text-base font-caro-pro font-medium w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("installation")}
                className="text-gray-700 hover:text-[#4D1B64] block px-3 py-2 text-base font-caro-pro font-medium w-full text-left"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Scroll to Top Button */}
      {showScrollUp && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-30 bg-[#4D1B64] hover:bg-[#3D1452] text-white p-3 rounded-full shadow-lg transition-all duration-200 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#4D1B64] focus:ring-opacity-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

export default Navbar;
