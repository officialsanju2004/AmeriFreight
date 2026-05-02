import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Lock, Eye, Trash2, Database, Cookie, Phone, Mail, ChevronRight, AlertCircle, CheckCircle, ExternalLink, Users, FileText, Menu, X, Clock, MessageSquare, Smartphone } from 'lucide-react';
import { FaFileContract } from 'react-icons/fa';
import Navbar from '../Navbar';
import Footer from './Footer';

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function TermsAndConditions() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('terms');

  const sections = [
    { id: 'sms', title: 'SMS Communications', icon: <Smartphone className="w-5 h-5" /> },
    { id: 'services', title: 'Use of Services', icon: <Shield className="w-5 h-5" /> },
    { id: 'intellectual', title: 'Intellectual Property', icon: <FileText className="w-5 h-5" /> },
    { id: 'liability', title: 'Limitation of Liability', icon: <AlertCircle className="w-5 h-5" /> },
    { id: 'privacy', title: 'Privacy Policy', icon: <Lock className="w-5 h-5" /> },
    { id: 'data', title: 'Data Protection', icon: <Database className="w-5 h-5" /> },
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#F9F6F0]">
        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#003366]/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#FF8C00]/10 rounded-full blur-3xl" />
        </div>

        {/* Hero Header */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative bg-[#003366] text-white overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-[#FF8C00] rounded-2xl mb-8 shadow-xl"
              >
                <FaFileContract className="w-10 h-10 text-white" />
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
              >
                Terms and Conditions
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-white/80 mb-8"
              >
                Effective Date: 1 January 2026
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full"
              >
                <Clock className="w-4 h-4" />
                <span className="text-sm">Last updated: January 2026</span>
              </motion.div>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#F9F6F0]" />
        </motion.div>

        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Mobile Menu Button */}
            <div className="lg:hidden sticky top-20 z-30 bg-white/90 backdrop-blur-md rounded-xl shadow-md p-3 mb-4">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex items-center justify-between w-full text-left"
              >
                <span className="font-semibold text-[#003366]">Navigation Menu</span>
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

            {/* Sidebar Navigation */}
            <AnimatePresence>
              {(mobileMenuOpen || window.innerWidth >= 1024) && (
                <motion.aside 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="lg:w-72 flex-shrink-0"
                >
                  <div className="sticky top-24 bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
                    <div className="mb-4 pb-4 border-b border-gray-100">
                      <h3 className="font-bold text-[#003366]">On this page</h3>
                    </div>
                    <nav className="space-y-1">
                      {sections.map((section) => (
                        <button
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 group ${
                            activeSection === section.id
                              ? 'bg-[#FF8C00] text-white shadow-md'
                              : 'text-gray-600 hover:bg-[#F9F6F0] hover:text-[#003366]'
                          }`}
                        >
                          <span className={activeSection === section.id ? 'text-white' : 'text-[#FF8C00] group-hover:text-[#003366]'}>
                            {section.icon}
                          </span>
                          <span className="text-sm font-medium">{section.title}</span>
                          {activeSection === section.id && (
                            <ChevronRight className="w-4 h-4 ml-auto" />
                          )}
                        </button>
                      ))}
                    </nav>
                    
                    {/* Contact Card */}
                    <div className="mt-6 p-4 bg-[#F9F6F0] rounded-xl border border-[#003366]/10">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-[#FF8C00] rounded-lg flex items-center justify-center">
                          <Phone className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm font-semibold text-[#003366]">Questions?</span>
                      </div>
                      <a href="tel:+12093958481" className="text-sm text-[#FF8C00] font-medium hover:underline">
                        +1 (209) 395-8481
                      </a>
                    </div>
                  </div>
                </motion.aside>
              )}
            </AnimatePresence>

            {/* Content Area */}
            <div className="flex-1">
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-10 border border-gray-100">
                {/* Introduction */}
                <motion.section 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mb-10"
                >
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Welcome to Ameri Freight Autologistics LLC. By accessing or using our website and services, including SMS communications, you agree to the following Terms and Conditions.
                  </p>
                </motion.section>

                {/* 1. SMS Communications */}
                <motion.section 
                  id="sms"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mb-10 scroll-mt-24"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 bg-[#FF8C00] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <Smartphone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-[#003366]">1. SMS Communications</h2>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    By providing your phone number and opting in to receive text messages, you consent to receive SMS communications from Ameri Freight Autologistics LLC regarding:
                  </p>
                  <div className="space-y-2 mb-6">
                    {["Load updates", "Dispatch notifications", "Customer service communications", "Appointment confirmations", "Account-related updates"].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#FF8C00] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-[#F9F6F0] p-4 rounded-xl space-y-2">
                    <p className="text-gray-700"><span className="font-semibold">Messaging frequency:</span> May vary.</p>
                    <p className="text-gray-700"><span className="font-semibold">Message and data rates:</span> May apply.</p>
                    <p className="text-gray-700">
                      <span className="font-semibold">For assistance:</span> Text HELP or visit{' '}
                      <a href="https://AmeriFreightautologistics.com" className="text-[#FF8C00] font-semibold hover:underline">AmeriFreightautologistics.com</a>
                    </p>
                    <p className="text-gray-700 text-sm mt-2">
                      We verbally ask customers for consent to receive SMS messages. This opt-in allows us to send important updates, support confirmations, and service notifications. By obtaining verbal consent, we ensure compliance with communication and privacy guidelines.
                    </p>
                  </div>
                </motion.section>

                {/* 2. Use of Services */}
                <motion.section 
                  id="services"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mb-10 scroll-mt-24"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 bg-[#FF8C00] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-[#003366]">2. Use of Services</h2>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    You agree to use our services only for lawful purposes and in compliance with all applicable federal and state regulations.
                  </p>
                </motion.section>

                {/* 3. Intellectual Property */}
                <motion.section 
                  id="intellectual"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mb-10 scroll-mt-24"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 bg-[#FF8C00] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-[#003366]">3. Intellectual Property</h2>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    All content, branding, and materials on this website are the property of Ameri Freight Autologistics LLC and may not be reproduced without written permission.
                  </p>
                </motion.section>

                {/* 4. Limitation of Liability */}
                <motion.section 
                  id="liability"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mb-10 scroll-mt-24"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 bg-[#FF8C00] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <AlertCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-[#003366]">4. Limitation of Liability</h2>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Ameri Freight Autologistics LLC shall not be held liable for delays, service interruptions, or technical issues beyond our control.
                  </p>
                </motion.section>

                {/* 5. Privacy */}
                <motion.section 
                  id="privacy"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mb-10 scroll-mt-24"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 bg-[#FF8C00] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <Lock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-[#003366]">5. Privacy Policy</h2>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Your use of our services is also governed by our Privacy Policy. Please review our Privacy Policy page for more details.
                  </p>
                  
                  <div className="mt-6 p-5 bg-[#F9F6F0] rounded-xl border border-[#003366]/10">
                    <h3 className="text-xl font-bold text-[#003366] mb-4">SMS Communications Privacy</h3>
                    <p className="text-gray-700 mb-3">When you opt in to receive SMS communications:</p>
                    <div className="space-y-2">
                      {[
                        "We collect your phone number and consent information.",
                        "We use this information solely for business communication purposes.",
                        "We do not sell, rent, or share your mobile information with third parties for marketing purposes."
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-[#FF8C00] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-gray-700">You may opt out at any time by texting <span className="font-semibold">STOP</span>.</p>
                      <p className="text-gray-700 mt-2">
                        For assistance, text <span className="font-semibold">HELP</span> or visit{' '}
                        <a href="https://amerifreightautologistics.com" className="text-[#FF8C00] font-semibold hover:underline">AmeriFreightautologistics.com</a>
                      </p>
                    </div>
                  </div>
                </motion.section>

                {/* Data Protection */}
                <motion.section 
                  id="data"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mb-10 scroll-mt-24"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 bg-[#FF8C00] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <Database className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-[#003366]">6. Data Protection</h2>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    We implement reasonable security measures to protect your information from unauthorized access or disclosure.
                  </p>
                </motion.section>

                {/* Terms Reference */}
                <motion.section 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="pt-6 border-t border-gray-100"
                >
                  <div className="text-center">
                    <a href="/privacy-policy" className="inline-flex items-center gap-2 text-[#FF8C00] font-semibold hover:gap-3 transition-all duration-300">
                      View Our Privacy Policy
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}