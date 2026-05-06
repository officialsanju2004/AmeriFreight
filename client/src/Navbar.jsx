// src/components/layout/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaUser, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../Images/logo.jpeg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const Bike = location.pathname === "/BikeAtvRtvTransport";
  const Boat = location.pathname === "/BoatShipping";
  const Enclose = location.pathname === "/EnclosedTrailerTransport";
  const Open = location.pathname === "/OpenTrailers";
  const heavy = location.pathname === "/HeavyVehicleTransport";
  const flat = location.pathname === "/FlatbedTrailer";
  const contact = location.pathname === "/contact";
  const PrivacyPolicy = location.pathname === "/privacy-policy";

  const navItems = [
    { name: 'About Us', path: '/about' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Conditions', path: '/termsAndConditions' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const serviceItems = [
    { name: 'Open Trailers', path: '/OpenTrailers' },
    { name: 'Enclosed Trailer Transport', path: '/EnclosedTrailerTransport' },
    { name: 'Flatbed Trailers Transport', path: '/FlatbedTrailer' },
    { name: 'BIKE/ATV/RTV Transport', path: '/BikeAtvRtvTransport' },
    { name: 'Boat Shipping', path: '/BoatShipping' },
    { name: 'Heavy Vehicles', path: '/HeavyVehicleTransport' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if transparent background should be used
  const shouldBeTransparent = () => {
    if (isScrolled) return false;
    if (isHome) return true;
    if (flat || Open || contact || PrivacyPolicy || Bike || Enclose || Boat || heavy) return true;
    return false;
  };

  const isTransparent = shouldBeTransparent();

  // Animation variants
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.4, ease: "easeInOut" } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.3, ease: "easeInOut" } }
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
    exit: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.15 } }
  };

  // Handle service selection
  const handleServiceSelect = (path) => {
    navigate(path);
    setIsServicesOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-100' 
            : isTransparent 
              ? 'bg-black/40 backdrop-blur-sm' 
              : 'bg-white shadow-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            
            {/* Logo and Brand */}
            <Link to="/" className="flex items-center space-x-3 group">
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-[#FF8C00] rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                <img
                  src={logo}
                  alt="Ameri Freight Autologistics"
                  className="relative object-cover h-10 w-10 sm:h-12 sm:w-12 rounded-full ring-2 ring-white/20 group-hover:ring-[#FF8C00]/50 transition-all duration-300"
                />
              </motion.div>
              <div>
                <span className={`block text-base sm:text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 ${
                  isScrolled || !isTransparent ? 'text-[#003366]' : 'text-white'
                } group-hover:text-[#FF8C00] transition-colors`}>
                  Ameri Freight Autologistics
                </span>
                <span className={`block text-xs sm:text-sm font-medium transition-colors duration-300 ${
                  isScrolled || !isTransparent ? 'text-gray-500' : 'text-white/80'
                }`}>
                  LLC, California
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              <Link
                to="/"
                className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-lg group ${
                  location.pathname === "/"
                    ? 'text-[#FF8C00]'
                    : isScrolled || !isTransparent ? 'text-gray-700 hover:text-[#FF8C00]' : 'text-white/90 hover:text-white'
                }`}
              >
                Home
                {location.pathname === "/" && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#FF8C00] rounded-full"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className={`flex items-center px-4 py-2 font-medium transition-all duration-300 rounded-lg group ${
                    serviceItems.some(item => location.pathname === item.path)
                      ? 'text-[#FF8C00]'
                      : isScrolled || !isTransparent ? 'text-gray-700 hover:text-[#FF8C00]' : 'text-white/90 hover:text-white'
                  }`}
                >
                  <span>Services</span>
                  <motion.div
                    animate={{ rotate: isServicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-1.5"
                  >
                    <FaChevronDown className="w-3 h-3" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100"
                    >
                      {serviceItems.map((service, idx) => (
                        <motion.button
                          key={service.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.03 }}
                          onClick={() => handleServiceSelect(service.path)}
                          className="block w-full text-left px-5 py-3 hover:bg-[#F9F6F0] transition-all duration-300 text-gray-700 font-medium text-sm group"
                        >
                          <span className="relative inline-block">
                            {service.name}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF8C00] group-hover:w-full transition-all duration-300" />
                          </span>
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navItems.map((item, idx) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-lg group ${
                    location.pathname === item.path
                      ? 'text-[#FF8C00]'
                      : isScrolled || !isTransparent ? 'text-gray-700 hover:text-[#FF8C00]' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#FF8C00] rounded-full"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
              
              {/* Contact Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/contact"
                  className={`ml-4 px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-xl ${
                    isScrolled || !isTransparent
                      ? 'bg-[#001E41] text-white hover:bg-[#001E41]'
                      : 'bg-white text-[#001E41] hover:bg-gray-50'
                  }`}
                >
                  Get A Quote
                </Link>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="lg:hidden p-2 rounded-lg focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <FaTimes className={`text-xl transition-colors duration-300 ${isScrolled || !isTransparent ? 'text-[#003366]' : 'text-white'}`} />
              ) : (
                <FaBars className={`text-xl transition-colors duration-300 ${isScrolled || !isTransparent ? 'text-[#003366]' : 'text-white'}`} />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            />
            
            {/* Mobile Menu */}
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-16 left-0 right-0 z-40 lg:hidden overflow-hidden"
            >
              <div className="bg-white shadow-2xl rounded-b-2xl mx-4 mt-2 overflow-hidden">
                <div className="px-4 py-4 space-y-1">
                  <Link
                    to="/"
                    className={`block py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                      location.pathname === "/"
                        ? 'bg-[#F9F6F0] text-[#003366] border-l-4 border-[#FF8C00]'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>

                  {/* Mobile Services Dropdown */}
                  <div className="py-2">
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className={`flex items-center justify-between w-full py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                        serviceItems.some(item => location.pathname === item.path)
                          ? 'text-[#FF8C00]'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <span>Services</span>
                      <motion.div
                        animate={{ rotate: isServicesOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FaChevronDown className="w-3 h-3" />
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-3 mt-1 space-y-1 border-l-2 border-[#FF8C00]/30 ml-4">
                            {serviceItems.map((service, idx) => (
                              <motion.button
                                key={service.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.03 }}
                                onClick={() => handleServiceSelect(service.path)}
                                className="block w-full text-left py-2.5 px-4 rounded-lg hover:bg-gray-50 text-gray-600 font-medium text-sm transition-all duration-200"
                              >
                                {service.name}
                              </motion.button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`block py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                        location.pathname === item.path
                          ? 'bg-[#F9F6F0] text-[#003366] border-l-4 border-[#FF8C00]'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  
                  {/* Mobile Contact Section */}
                  <div className="pt-4 mt-2 border-t border-gray-100 space-y-4">
                    <Link
                      to="/contact"
                      className="block bg-[#001E41] text-white px-6 py-3 rounded-xl font-semibold text-center hover:bg-[#FF8C00] transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Get A Quote
                    </Link>
                    <div className="flex flex-col space-y-3 px-2">
                      <a
                        href="tel:+12098214888"
                        className="flex items-center space-x-3 text-gray-600 hover:text-[#FF8C00] transition-colors py-2"
                      >
                        <div className="w-8 h-8 bg-[#F9F6F0] rounded-full flex items-center justify-center">
                          <FaPhone className="w-3.5 h-3.5 text-[#FF8C00]" />
                        </div>
                        <span className="text-sm">+1 (209) 821-4888</span>
                      </a>
                      <a
                        href="mailto:Info@AmeriFreightautologistics.com"
                        className="flex items-center space-x-3 text-gray-600 hover:text-[#FF8C00] transition-colors py-2"
                      >
                        <div className="w-8 h-8 bg-[#F9F6F0] rounded-full flex items-center justify-center">
                          <FaEnvelope className="w-3.5 h-3.5 text-[#FF8C00]" />
                        </div>
                        <span className="text-sm break-all">Info@AmeriFreightautologistics.com</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;