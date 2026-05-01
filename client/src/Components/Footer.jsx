import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Home, Info, Shield, FileText, MessageSquare, ArrowRight, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import logo from '../../Images/logo.png';

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Footer() {
  const navigate = useNavigate();

  const quickLinks = [
    { name: "Home", path: "/", icon: <Home className="w-4 h-4" /> },
    { name: "About Us", path: "/about", icon: <Info className="w-4 h-4" /> },
    { name: "Privacy Policy", path: "/privacy-policy", icon: <Shield className="w-4 h-4" /> },
    { name: "Terms and Conditions", path: "/termsAndConditions", icon: <FileText className="w-4 h-4" /> },
    { name: "Contact Us", path: "/contact", icon: <MessageSquare className="w-4 h-4" /> },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com", label: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com", label: "Instagram" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#0A2647] via-[#0A2647] to-[#1B3A5B] text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#2C5F2D]/10 to-[#E8A87C]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#E8A87C]/5 to-[#2C5F2D]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
      </div>

      {/* CTA SECTION */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="relative z-10 mx-4 md:mx-8 lg:mx-20 mt-8 rounded-2xl bg-gradient-to-r from-[#2C5F2D] to-[#1B3A5B] p-8 md:p-10 shadow-2xl"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-white to-[#E8A87C] bg-clip-text text-transparent">
              Don't Know What To Start With?
            </h2>
            <p className="text-white/80">Get a Solution For All Type Shipping</p>
          </div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="tel:+12093958481"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0A2647] rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            Call Us Now
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </motion.div>

      {/* MAIN FOOTER */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* ABOUT / BRAND */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-block mb-5"
          >
            <img
              src={logo}
              alt="Ameri Freight Autologistics LLC, California"
              className="w-24 h-24 rounded-full object-cover border-2 border-[#E8A87C] shadow-lg"
            />
          </motion.div>
          <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-white to-[#E8A87C] bg-clip-text text-transparent">
            Ameri Freight  Autologistics
          </h3>
          <p className="text-white/70 text-sm leading-relaxed mb-4">
            USDOT- 4512614<br />
            MC NUMBER- MC01786772
          </p>
          <p className="text-white/60 text-xs leading-relaxed">
            We pride ourselves on delivering top-tier auto transport services at some of the most competitive prices in the market.
          </p>
        </motion.div>

        {/* CONTACT INFO */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3 className="text-lg font-semibold mb-6 relative inline-block">
            Contact Us
            <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#E8A87C] to-transparent rounded-full mt-1" />
          </h3>
          <div className="space-y-4">
            <a
              href="https://maps.google.com/?q=2027+Bright+Star+Pl,+Stockton,+CA+95209"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-white/70 hover:text-white transition-colors duration-300 group"
            >
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-[#2C5F2D] transition-colors duration-300">
                <MapPin className="w-4 h-4 text-[#E8A87C]" />
              </div>
              <span className="text-sm">2027 Bright Star Pl, Stockton, CA 95209</span>
            </a>
            <a
              href="tel:+12093958481"
              className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300 group"
            >
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-[#2C5F2D] transition-colors duration-300">
                <Phone className="w-4 h-4 text-[#E8A87C]" />
              </div>
              <span className="text-sm">+1 (209) 395-8481</span>
            </a>
            <a
              href="mailto:Info@Ameri Freight autologistics.com"
              className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300 group"
            >
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-[#2C5F2D] transition-colors duration-300">
                <Mail className="w-4 h-4 text-[#E8A87C]" />
              </div>
              <span className="text-sm break-all">Info@Ameri Freight autologistics.com</span>
            </a>
          </div>
        </motion.div>

        {/* QUICK LINKS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3 className="text-lg font-semibold mb-6 relative inline-block">
            Quick Links
            <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#E8A87C] to-transparent rounded-full mt-1" />
          </h3>
          <ul className="space-y-3">
            {quickLinks.map((link, idx) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <a
                  href={link.path}
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-all duration-300 group"
                >
                  <div className="w-6 h-6 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-[#2C5F2D] transition-colors duration-300">
                    {link.icon}
                  </div>
                  <span>{link.name}</span>
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* SOCIAL & NEWSLETTER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3 className="text-lg font-semibold mb-6 relative inline-block">
            Connect With Us
            <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#E8A87C] to-transparent rounded-full mt-1" />
          </h3>
          <div className="flex gap-3 mb-6">
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-[#2C5F2D] hover:to-[#E8A87C] transition-all duration-300 group"
                aria-label={social.label}
              >
                <div className="text-white/70 group-hover:text-white transition-colors duration-300">
                  {social.icon}
                </div>
              </motion.a>
            ))}
          </div>
          <div className="mt-4">
            <p className="text-white/60 text-xs">Trusted Auto Transport Partner Since 2022</p>
            <div className="flex items-center gap-1 mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-4 h-4 text-[#E8A87C] fill-[#E8A87C]" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-white/50 text-xs ml-2">Rated 4.9/5</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM BAR */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="relative z-10 border-t border-white/10 px-6 md:px-12 lg:px-20 py-6"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <div className="flex flex-wrap items-center justify-center gap-1 text-white/60 text-sm">
            <span>© {new Date().getFullYear()}</span>
            <button
              onClick={() => window.location.href = 'https://Ameri Freight autologistics.com'}
              className="text-[#E8A87C] font-semibold hover:text-white transition-colors duration-300"
            >
              amerifreightautologistics.com
            </button>
            <span>All rights reserved.</span>
          </div>
          <div className="flex items-center gap-1 text-white/60 text-sm">
            <span>Developed and Managed by</span>
            <button
              onClick={() => window.location.href = 'https://growthflowmedia.com'}
              className="text-[#E8A87C] font-semibold hover:text-white transition-colors duration-300"
            >
              GROWTH FLOW MEDIA
            </button>
          </div>
        </div>
      </motion.div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-gradient-to-r from-[#2C5F2D] to-[#E8A87C] rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-all duration-300"
      >
        <ArrowRight className="w-5 h-5 rotate-[-90deg]" />
      </motion.button>
    </footer>
  );
}