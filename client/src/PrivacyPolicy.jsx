import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Shield, Lock, Eye, Trash2, Database, Cookie, Phone, Mail, ChevronRight, AlertCircle, CheckCircle, ExternalLink, Users, FileText, Menu, X } from 'lucide-react';
import Footer from './Components/Footer';
import Navbar from './Navbar';

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const cardHover = {
  whileHover: { y: -5, transition: { duration: 0.3 } }
};

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'overview', title: 'Overview', icon: <Shield className="w-5 h-5" /> },
    { id: 'information', title: 'Information We Collect', icon: <Database className="w-5 h-5" /> },
    { id: 'usage', title: 'How We Use Information', icon: <Eye className="w-5 h-5" /> },
    { id: 'sharing', title: 'Information Sharing', icon: <Users className="w-5 h-5" /> },
    { id: 'rights', title: 'Your Rights', icon: <FileText className="w-5 h-5" /> },
    { id: 'children', title: "Children's Privacy", icon: <Lock className="w-5 h-5" /> },
  ];

  const privacyPoints = [
    { icon: <Shield className="w-6 h-6" />, text: "No mobile information shared with third parties for marketing", color: "#001E41" },
    { icon: <Lock className="w-6 h-6" />, text: "We don't ask for personal information unless truly needed", color: "#001E41" },
    { icon: <Database className="w-6 h-6" />, text: "We don't store personal information unnecessarily", color: "#001E41" },
  ];

  const rights = [
    { icon: <Eye className="w-6 h-6" />, title: "Right to Access", desc: "You have the right to request copies of your personal data. We may charge you a small fee for this service." },
    { icon: <FileText className="w-6 h-6" />, title: "Right to Rectification", desc: "You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete." },
    { icon: <Trash2 className="w-6 h-6" />, title: "Right to Erasure", desc: "You have the right to request that we erase your personal data, under certain conditions." },
    { icon: <Lock className="w-6 h-6" />, title: "Right to Restrict", desc: "You have the right to request that we restrict the processing of your personal data, under certain conditions." },
    { icon: <Shield className="w-6 h-6" />, title: "Right to Object", desc: "You have the right to object to our processing of your personal data, under certain conditions." },
    { icon: <Database className="w-6 h-6" />, title: "Data Portability", desc: "You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions." },
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
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#001E41]/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#001E41]/10 rounded-full blur-3xl" />
        </div>

        {/* Hero Header */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative bg-[#001E41] text-white overflow-hidden"
        >
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-[#001E41] rounded-2xl mb-8 shadow-xl"
              >
                <Shield className="w-10 h-10 text-white" />
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
              >
                Privacy Policy
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-white/80 mb-8"
              >
                Protecting your privacy is our top priority at Ameri Freight Autologistics LLC, California
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full"
              >
                <Lock className="w-4 h-4" />
                <span className="text-sm">Last updated: March 2025</span>
              </motion.div>
            </div>
          </div>
          
          {/* Curved bottom edge */}
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
                <span className="font-semibold text-[#001E41]">Navigation Menu</span>
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
                      <h3 className="font-bold text-[#001E41]">On this page</h3>
                    </div>
                    <nav className="space-y-1">
                      {sections.map((section) => (
                        <button
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 group ${
                            activeSection === section.id
                              ? 'bg-[#001E41] text-white shadow-md'
                              : 'text-gray-600 hover:bg-[#F9F6F0] hover:text-[#001E41]'
                          }`}
                        >
                          <span className={activeSection === section.id ? 'text-white' : 'text-[#001E41] group-hover:text-[#001E41]'}>
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
                    <div className="mt-6 p-4 bg-[#F9F6F0] rounded-xl border border-[#001E41]/10">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-[#001E41] rounded-lg flex items-center justify-center">
                          <Phone className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm font-semibold text-[#001E41]">Need help?</span>
                      </div>
                      <a href="tel:+12093958481" className="text-sm text-[#001E41] font-medium hover:underline">
                        +1 (209) 395-8481
                      </a>
                    </div>
                  </div>
                </motion.aside>
              )}
            </AnimatePresence>

            {/* Content Area */}
            <div className="flex-1">
              {/* Key Privacy Points */}
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
              >
                {privacyPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    whileHover={{ y: -5 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-[#001E41] rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                    <div className="relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <div className={`w-12 h-12 bg-[${point.color}] rounded-xl flex items-center justify-center mb-4 shadow-md`}>
                        <div className="text-white">{point.icon}</div>
                      </div>
                      <p className="text-gray-700 font-medium leading-relaxed">{point.text}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Main Policy Content */}
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-10 border border-gray-100">
                {/* Consent Section */}
                <motion.section 
                  id="overview"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mb-10 scroll-mt-24"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 bg-[#001E41] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-[#001E41]">Consent</h2>
                      <p className="text-gray-600 mt-1">By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
                    </div>
                  </div>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.</p>
                    <p>At Ameri Freight Autologistics LLC, California accessible from <a href="https://northstarautologistics.com" className="text-[#001E41] font-medium hover:underline transition-colors">https://northstarautologistics.com</a>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Ameri Freight Autologistics LLC, California and how we use it.</p>
                    <p>We emphasize <strong className="text-[#001E41]">not sharing/disclosing/selling/trading our customers' data to any third party.</strong></p>
                  </div>
                </motion.section>

                {/* Information Collection */}
                <motion.section 
                  id="information"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mb-10 scroll-mt-24"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 bg-[#001E41] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <Database className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-[#001E41]">Information We Collect</h2>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
                  </p>
                  <div className="bg-[#F9F6F0] p-6 rounded-xl border border-[#001E41]/10">
                    <h4 className="font-bold text-[#001E41] mb-4">When you contact us directly, we may receive:</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {['Name', 'Email address', 'Phone number', 'Message contents', 'Attachments', 'Company name'].map((item) => (
                        <motion.div key={item} whileHover={{ x: 3 }} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#001E41] rounded-full" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.section>

                {/* How We Use Information */}
                <motion.section 
                  id="usage"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mb-10 scroll-mt-24"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 bg-[#001E41] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-[#001E41]">How We Use Your Information</h2>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Provide, operate, and maintain our website",
                      "Improve, personalize, and expand our website",
                      "Understand and analyze how you use our website",
                      "Develop new products, services, features, and functionality",
                      "Communicate with you for customer service and updates",
                      "Find and prevent fraud"
                    ].map((use, index) => (
                      <motion.div key={index} whileHover={{ x: 3 }} className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#F9F6F0] transition-colors">
                        <CheckCircle className="w-5 h-5 text-[#001E41] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{use}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>

                {/* Log Files */}
                <motion.section 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mb-10"
                >
                  <h3 className="text-2xl font-bold text-[#001E41] mb-4">Log Files</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Ameri Freight Autologistics LLC, California follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
                  </p>
                </motion.section>

                {/* Your Rights */}
                <motion.section 
                  id="rights"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mb-10 scroll-mt-24"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 bg-[#001E41] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-[#001E41]">GDPR Data Protection Rights</h2>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {rights.map((right, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ y: -3 }}
                        className="bg-[#F9F6F0] p-5 rounded-xl border border-[#001E41]/10 hover:shadow-md transition-all duration-300"
                      >
                        <div className="w-10 h-10 bg-[#001E41] rounded-lg flex items-center justify-center mb-3">
                          <div className="text-white">{right.icon}</div>
                        </div>
                        <h4 className="font-bold text-[#001E41] mb-2">{right.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{right.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>

                {/* Children's Privacy */}
                <motion.section 
                  id="children"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mb-10 scroll-mt-24"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 bg-[#001E41] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <Lock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-[#001E41]">Children's Information</h2>
                    </div>
                  </div>
                  <div className="bg-[#F9F6F0] p-6 rounded-xl border border-[#001E41]/10">
                    <p className="text-gray-700 leading-relaxed">
                      Northstar Autologistics does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
                    </p>
                  </div>
                </motion.section>

                {/* Disclaimer */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-[#001E41] p-6 md:p-8 rounded-2xl text-white mt-6"
                >
                  <h4 className="font-bold text-xl mb-4 text-[#001E41]">Disclaimer</h4>
                  <p className="text-white/80 text-sm leading-relaxed">
                    All pictures of equipment are meant for general reference and do not imply automatic use of that equipment. We operate as a brokerage working with a vetted group of contracted drivers. SMS consent is only for our business and not for any other purpose.
                  </p>
                </motion.div>

                {/* Terms Link */}
                <div className="mt-8 text-center">
                  <a href="/termsAndConditions" className="inline-flex items-center gap-2 text-[#001E41] font-semibold hover:gap-3 transition-all duration-300">
                    View Our Terms & Conditions
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}