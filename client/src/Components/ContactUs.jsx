import { useState, useEffect } from "react";
import { Truck, Shield, Star, Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight, ChevronRight, Users, Award, Link, MailIcon, LocateIcon, Send, Headphones, MessageSquare } from 'lucide-react';
import { Home, Info, MessageCircle, Youtube } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from "./Footer";
import Navbar from "../Navbar";
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import image11 from '../../Images/image11.jpg';
import image8 from '../../Images/image8.jpg';
import image7 from '../../Images/image7.jpg';
import image10 from '../../Images/image10.jpg';

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    pickup: '',
    dropoff: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const images = [image8, image7, image11, image10];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email.endsWith("@gmail.com")) {
      toast.error("Invalid email! Please use a valid Gmail address.");
      return;
    }
    setIsSubmitting(true);
    try {
      await axios.post("https://ameri-freight.vercel.app/web/api/enquiry/enquiry-insert", formData);
      toast.success("Message Sent Successfully!");
      setFormData({
        name: '',
        email: '',
        subject: '',
        pickup: '',
        dropoff: '',
        message: ''
      });
    } catch (err) {
      toast.error("Failed to send message. Please try again.");
      console.log(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactCards = [
    { icon: <Phone className="w-6 h-6" />, label: "Call us 24/7", value: "+1 (209) 395-8481", href: "tel:+12093958481", color: "#001E41" },
    { icon: <MapPin className="w-6 h-6" />, label: "Address", value: "2027 Bright Star Pl, Stockton, CA 95209", href: null, color: "#001E41" },
    { icon: <MailIcon className="w-6 h-6" />, label: "Email Us", value: "Info@AmeriFreightautologistics.com", href: "mailto:Info@AmeriFreightautologistics.com", color: "#001E41" },
  ];

  return (
    <>
      <Navbar />
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />

      {/* Hero Section with Image Slider */}
      <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={images[current]}
            alt="Contact Ameri Freight Autologistics"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-[#001E41]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F9F6F0] via-transparent to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6"
            >
              <MessageSquare className="w-4 h-4 text-[#001E41]" />
              <span className="text-sm font-medium text-white/90">Get in Touch</span>
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Contact 
              <span className="block text-[#FF8C00]">Ameri Freight Autologistics</span>
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Reach out to our expert team for personalized auto transport solutions
            </p>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="h-1 bg-[#FF8C00] mx-auto rounded-full mt-6"
            />
          </motion.div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`transition-all duration-300 rounded-full ${
                idx === current ? "w-8 h-2 bg-[#001E41]" : "w-2 h-2 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main Contact Section */}
      <section className="relative overflow-hidden bg-[#F9F6F0] py-16 md:py-24">
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#001E41]/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#001E41]/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeLeft}
            >
              <div className="mb-8">
                <span className="text-sm font-semibold text-[#001E41] tracking-wider uppercase">Get Your Quote</span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mt-2">
                  Request a Free 
                  <span className="text-[#001E41]"> Quote</span>
                </h2>
                <div className="w-20 h-1 bg-[#001E41] rounded-full mt-4" />
              </div>

              {/* Disclaimer */}
              <div className="mb-8 p-5 bg-[#001E41]/5 rounded-xl border-l-4 border-[#001E41]">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <span className="font-bold text-[#003366]">Disclaimer:</span> By providing my phone number to "Ameri Freight Autologistics LLC, California", I agree and acknowledge that "Ameri Freight Autologistics, LLC, California" may send text messages to my wireless phone number for any purpose. Message and data rates may apply. Message frequency will vary, and you will be able to opt out by replying "STOP", assistance can be found by texting "HELP". For more information on how your data will be handled please visit: <a href="/privacy-policy" className="text-[#001E41] font-semibold hover:underline">Privacy Policy</a>
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactCards.map((card, idx) => (
                  <motion.a
                    key={idx}
                    href={card.href || "#"}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ x: 5 }}
                    className={`flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group ${!card.href ? 'cursor-default' : 'cursor-pointer'}`}
                  >
                    <div className={`w-12 h-12 bg-[${card.color}] rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">{card.icon}</div>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-500">{card.label}</p>
                      <p className="text-base md:text-lg font-bold text-[#003366] group-hover:text-[#001E41] transition-colors">
                        {card.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-8 p-4 bg-white rounded-xl text-center shadow-md"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-[#001E41]" />
                  <span className="font-semibold text-[#003366]">100% Secure & Confidential</span>
                </div>
                <p className="text-xs text-gray-500">Your information is protected with industry-standard encryption</p>
              </motion.div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeRight}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#001E41] rounded-3xl blur-2xl opacity-20" />
              <div className="relative bg-white rounded-2xl shadow-2xl p-6 md:p-8 lg:p-10">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-[#001E41] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#003366]">Request A Free Quote</h3>
                  <p className="text-gray-500 text-sm mt-2">Fill out the form and we'll get back to you within 24 hours</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-[#001E41] focus:ring-4 focus:ring-[#001E41]/20 transition-all outline-none"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-[#001E41] focus:ring-4 focus:ring-[#001E41]/20 transition-all outline-none"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-[#001E41] focus:ring-4 focus:ring-[#001E41]/20 transition-all outline-none"
                      placeholder="Vehicle Transport Inquiry"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Pickup Location *</label>
                      <input
                        type="text"
                        name="pickup"
                        value={formData.pickup}
                        onChange={handleChange}
                        className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-[#001E41] focus:ring-4 focus:ring-[#001E41]/20 transition-all outline-none"
                        placeholder="City, State"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Dropoff Location *</label>
                      <input
                        type="text"
                        name="dropoff"
                        value={formData.dropoff}
                        onChange={handleChange}
                        className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-[#001E41] focus:ring-4 focus:ring-[#001E41]/20 transition-all outline-none"
                        placeholder="City, State"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="3"
                      className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-[#001E41] focus:ring-4 focus:ring-[#001E41]/20 transition-all outline-none resize-none"
                      placeholder="Tell us about your vehicle and any special requirements..."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="policy"
                      className="mt-1 w-5 h-5 rounded border-gray-300 text-[#001E41] focus:ring-[#001E41]"
                      required
                    />
                    <label htmlFor="policy" className="text-sm text-gray-600">
                      By providing your details you agree to receive transactional SMS according to our{' '}
                      <a href="/privacy-policy" className="text-[#001E41] font-semibold hover:underline">Privacy Policy</a>
                    </label>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#001E41] text-white rounded-xl font-bold text-lg shadow-lg hover:bg-[#001E41] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      "Get Free Quote →"
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-16 rounded-2xl overflow-hidden shadow-xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3138.123456789012!2d-121.2908!3d38.0406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8090c1c8a0a0a0a0%3A0x0!2s2027%20Bright%20Star%20Pl%2C%20Stockton%2C%20CA%2095209!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ameri Freight Autologistics Location"
              className="w-full"
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}