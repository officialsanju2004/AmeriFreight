import { Truck, Shield, Star, Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight, ChevronRight, Users, Award, Link, Car, Route, Wrench, Calendar, Trophy, ShieldCheck, HardHat, Tag, Sparkles, Zap, Compass, Target, Globe, TrendingUp, Shield as ShieldIcon, Headphones, Award as AwardIcon } from 'lucide-react';
import { Home, Info, MessageCircle, Youtube } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaHome, FaBuilding, FaChartLine, FaShieldAlt, FaSmile, FaClock, FaCloudscale } from 'react-icons/fa';
import axios from 'axios';
import logo from '../Images/logo.png';
import image5 from '../Images/image5.jpg';
import image6 from '../Images/image6.jpg';
import image7 from '../Images/image7.jpg';
import image8 from '../Images/image8.jpg';
import image9 from '../Images/image9.jpg';
import image10 from '../Images/image10.jpg';
import image11 from '../Images/image11.jpg';
import enclosed from '../Images/enclosed.jpg';
import atv from '../Images/Atv.jpg';
import heavy from '../Images/heavy.jpg';
import TestimonialsSection from './Components/Testimonials';
import image4 from '../Images/image4.jpg';
import image2 from '../Images/image2.jpg';
import { toast, ToastContainer } from 'react-toastify';
import { Menu, X, ChevronLeft } from 'lucide-react';
import Navbar from './Navbar';
import image1 from '../Images/image1.jpg';
import Footer from './Components/Footer';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const colors = {
  primary: '#001E41',
  secondary: '#fe930f',
  accent: '#FFB347',
  light: '#F9F6F0',
  dark: '#1B2A3B',
  gradientStart: '#003366',
  gradientEnd: '#FF8C00',
  highlight: '#E27D60',
  textLight: '#F9F6F0',
  textDark: '#1B2A3B',
  cardBg: '#FFFFFF',
};

const slideUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.21, 0.45, 0.27, 0.9] } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

const staggerItems = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
};

const cardHover = {
  whileHover: { y: -6, transition: { duration: 0.25, ease: "easeOut" } },
  whileTap: { scale: 0.98 }
};

export default function AutoTransportWebsite() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    pickup: '',
    dropoff: '',
    message: ''
  });
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email.endsWith("@gmail.com")) {
      toast.error("Incorrect email!!");
      return;
    }
    axios.post("https://ameri-freight.vercel.app/web/api/enquiry/enquiry-insert", formData)
      .then((res) => {
        toast.success("Message Sent!!!");
        setFormData({ name: '', email: '', subject: '', pickup: '', dropoff: '', message: '' });
        navigate("/success-page");
      }).catch((err) => {
        toast.error("Failed to send message");
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const services = [
    { title: "Open Trailers", description: "Open trailer transport offers cost-effective shipping with high efficiency. Perfect for standard cars and bikes ensuring timely delivery with reliable handing across all distances.", link: "/OpenTrailers", image: image4 },
    { title: "Enclosed Trailers", description: "Enclosed Trailers provide maximum protection for your vehicle from weather and road debris. Ideal for luxury, classic, or exotic cars, ensuring safe, secure, and damage-free transport every time.", link: "/EnclosedTrailerTransport", image: enclosed },
    { title: "Flatbed Trailers", description: "Flatbed trailers handle oversized and heavy vehicles with ease, offering versatile and secure transport solutions. Perfect for trucks, construction equipment, and non-standard loads across long distances safely.", link: "/FlatbedTrailer", image: image7 },
    { title: "Bike/RTV/ATV Shipping", description: "Specialized shipping for bikes, RTVs, and ATVs with secure loading and handling. Fast, reliable transport ensuring your ride reaches safely, whether across cities or states.", link: "/BikeAtvRtvTransport", image: atv },
    { title: "Boat Shipping", description: "Safe and reliable boat shipping with expert handling and secure transport. We ensure timely delivery of your boat, protecting it from damage during transit, anywhere across coastal or inland routes.", link: "/BoatShipping", image: image11 },
    { title: "Heavy Vehicles", description: "Expert transport solutions for heavy vehicles like trucks and machinery. Our Specialized trailers and trained-crew ensure safe, on-time delivery, handling weight and size challenges effortlessly.", link: "/HeavyVehicleTransport", image: heavy }
  ];

  const features = [
    { icon: <Truck className="w-6 h-6" />, title: "Trusted Carriers", desc: "We partner only with licensed, verified, and highly rated carriers. Your vehicle is handled by professionals who prioritize safety and care." },
    { icon: <Shield className="w-6 h-6" />, title: "Hassle-Free", desc: "No pressure, no hidden fees, and no unnecessary complications. We keep the process simple, transparent and stress-free." },
    { icon: <Clock className="w-6 h-6" />, title: "On-Time Delivery", desc: "We respect your time and stick to committed schedules. Your vehicle reaches its destination safely and right on time." },
    { icon: <Users className="w-6 h-6" />, title: "Real Relationships", desc: "We believe in honest communication and long term trust. Our team stays connected with you at every step." },
  ];

  useEffect(() => {
    const interval = setInterval(() => setCurrentSlide((prev) => (prev + 1) % services.length), 4000);
    return () => clearInterval(interval);
  }, []);

  const Counter = ({ end, duration = 2000, label }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let start = 0;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start > end) { setCount(end); clearInterval(timer); }
          else setCount(Math.floor(start));
        }, 16);
        return () => clearInterval(timer);
      }
    }, { threshold: 0.5 });
    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, [end, duration]);
  return (
    <div className="text-center" ref={countRef}>
      <div className="text-4xl md:text-5xl font-black text-[#fe930f] mb-2">{count.toLocaleString()}+</div>
      <div className="text-sm text-white/70 font-medium tracking-wide uppercase">{label}</div>
    </div>
  );
};

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % services.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#F9F6F0] to-white">
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
      
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .glass-card { background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.3); }
        .gradient-text { background: linear-gradient(135deg, #001E41 0%, #003366 100%); -webkit-background-clip: text; background-clip: text; }
        .hover-lift { transition: all 0.3s cubic-bezier(0.34, 1.2, 0.64, 1); }
        .hover-lift:hover { transform: translateY(-8px) scale(1.02); box-shadow: 0 25px 40px -12px rgba(0,0,0,0.15); }
      `}</style>

      <Navbar />

      {/* Hero Section - Split Layout with Asymmetry */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#001E41]/90 via-[#001E41]/70 to-[#001E41]/90 z-10" />
          <img src={image1} alt="Luxury Auto Transport" className="w-full h-full object-cover scale-110" loading="eager" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
                <Zap className="w-4 h-4 text-[#fe930f]" />
                <span className="text-sm font-medium text-white tracking-wide">Nationwide Coverage • 24/7 Support</span>
              </div>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tight mb-6">
                Ship Your Car
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#fe930f] to-[#FFB347] mt-3">Stress-Free</span>
              </h1>
              <p className="text-xl text-white/80 max-w-lg mb-10 leading-relaxed">Premium auto transport with transparent pricing, real-time tracking, and white-glove service across all 50 states.</p>
              <div className="flex flex-wrap gap-4">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => window.location.href = "/contact"} className="px-8 py-4 bg-gradient-to-r from-[#fe930f] to-[#FFB347] text-[#001E41] rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300">
                  Get Instant Quote
                </motion.button>
                <motion.button onClick={() => window.location.href = "/about"} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-xl font-semibold text-lg hover:bg-white/20 transition-all">
                  Learn More →
                </motion.button>
              </div>
              <div className="flex items-center gap-8 mt-12 pt-8 border-t border-white/20">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-[#fe930f] to-[#FFB347] border-2 border-white flex items-center justify-center text-xs font-bold text-[#001E41]">
                      ✓
                    </div>
                  ))}
                </div>
                <p className="text-sm text-white/70">Trusted by 50,000+ customers</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="hidden lg:block relative">
              <div className="absolute top-20 -left-20 w-72 h-72 bg-[#fe930f]/20 rounded-full blur-3xl animate-pulse-glow" />
              <div className="relative glass-card rounded-3xl shadow-2xl p-1">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#001E41] to-[#003366] flex items-center justify-center">
                      <Truck className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Live Quote</p>
                      <p className="text-sm font-bold text-[#001E41]">Get pricing in 2 minutes</p>
                    </div>
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
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white/60 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Value Proposition - Full Width Cards with Offset */}
      <section className="py-24 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#fe930f]/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fe930f]/10 border border-[#fe930f]/20 mb-5">
              <Sparkles className="w-4 h-4 text-[#fe930f]" />
              <span className="text-xs font-bold text-[#fe930f] uppercase tracking-wider">Why Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#001E41] mb-4">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fe930f] to-[#FFB347]">Ameri Freight</span> Difference
            </h2>
            <p className="text-lg text-gray-600">Redefining vehicle transport through innovation, reliability, and genuine care for every customer.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={cardHover}
                whileHover="whileHover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-400 border border-gray-100 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#fe930f]/5 to-transparent rounded-full blur-2xl" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#001E41] to-[#003366] flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-[#001E41] mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Grid Layout with proper sizing */}
      <section className="py-24 bg-gradient-to-b from-white to-[#F9F6F0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fe930f]/10 border border-[#fe930f]/20 mb-5">
              <Globe className="w-4 h-4 text-[#fe930f]" />
              <span className="text-xs font-bold text-[#fe930f] uppercase tracking-wider">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#001E41] mb-4">Comprehensive Transport <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fe930f] to-[#FFB347]">Solutions</span></h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Tailored vehicle shipping options for every need — from economy to ultra-premium.</p>
          </motion.div>

          {/* Mobile Carousel */}
          <div className="lg:hidden relative">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {services.map((service, idx) => (
                  <div key={idx} onClick={() => window.location.href = service.link} className="w-full flex-shrink-0 px-3 cursor-pointer">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover-lift">
                      <div className="h-52 overflow-hidden relative">
                        <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-[#001E41] mb-2">{service.title}</h3>
                        <p className="text-gray-600 text-sm line-clamp-3">{service.description}</p>
                        <div className="mt-4 flex items-center gap-2 text-[#fe930f] text-sm font-semibold">
                          Learn More <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center"><ChevronLeft className="w-5 h-5 text-[#001E41]" /></button>
            <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center"><ChevronRight className="w-5 h-5 text-[#001E41]" /></button>
          </div>

          {/* Desktop Grid - Standard 3-column grid that doesn't shrink */}
          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={cardHover}
                whileHover="whileHover"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                onClick={() => window.location.href = service.link}
                className="cursor-pointer group"
              >
                <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-400 overflow-hidden h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-[#001E41]">{service.title}</h3>
                      <Tag className="w-4 h-4 text-[#fe930f]" />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed flex-grow">{service.description}</p>
                    <div className="mt-4 flex items-center gap-2 text-[#fe930f] text-sm font-semibold group-hover:gap-3 transition-all">
                      Get Quote <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Horizontal Scroll */}
    {/* Stats Section - Orange Text Version */}
<section className="py-20 bg-gradient-to-r from-[#001E41] to-[#003366] relative overflow-hidden">
 <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />  <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <Counter end={3} label="Years of Excellence" />
      <Counter end={53520} label="Happy Clients" />
      <Counter end={563} label="Daily Shipments" />
      <Counter end={173} label="Expert Staff" />
    </div>
  </div>
</section>

      {/* Pricing Factors - Interactive Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fe930f]/10 border border-[#fe930f]/20 mb-5">
                <TrendingUp className="w-4 h-4 text-[#fe930f]" />
                <span className="text-xs font-bold text-[#fe930f] uppercase tracking-wider">Pricing Clarity</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#001E41] mb-4 leading-tight">
                What Determines Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fe930f] to-[#FFB347]">Shipping Quote</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8">We believe in complete transparency. No hidden fees, no surprises — just honest pricing based on real factors.</p>
              <div className="space-y-4">
                {[
                  { icon: <Car className="w-5 h-5" />, title: "Vehicle Specs", desc: "Size, weight, and operational status affect base pricing" },
                  { icon: <Route className="w-5 h-5" />, title: "Distance & Route", desc: "Longer hauls offer better per-mile rates" },
                  { icon: <Calendar className="w-5 h-5" />, title: "Seasonal Demand", desc: "Book early for peak season discounts" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md transition-all border border-gray-100">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#001E41] to-[#003366] flex items-center justify-center flex-shrink-0">
                      <div className="text-white">{item.icon}</div>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#001E41] mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#fe930f]/10 rounded-full blur-3xl" />
              <div className="relative bg-gradient-to-br from-[#001E41] to-[#003366] rounded-3xl p-1 shadow-2xl">
                <div className="bg-white rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Headphones className="w-8 h-8 text-[#fe930f]" />
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">24/7 Support</p>
                      <p className="text-2xl font-bold text-[#001E41]">Need help?</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">Our team is here to answer your questions and provide instant quotes.</p>
                  <a href="tel:+12093958481" className="block text-center py-4 bg-gradient-to-r from-[#fe930f] to-[#FFB347] text-[#001E41] rounded-xl font-bold text-lg hover:shadow-xl transition-all">
                    Call Now: +1 (209) 395-8481
                  </a>
                  <div className="mt-4 text-center text-xs text-gray-500">Free consultation • No obligation</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-16 bg-gradient-to-r from-[#F9F6F0] to-white border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-70">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-[#fe930f]" />
              <span className="text-sm font-semibold text-gray-600">Fully Insured</span>
            </div>
            <div className="flex items-center gap-3">
              <AwardIcon className="w-8 h-8 text-[#fe930f]" />
              <span className="text-sm font-semibold text-gray-600">A+ Rated</span>
            </div>
            <div className="flex items-center gap-3">
              <Star className="w-8 h-8 text-[#fe930f]" />
              <span className="text-sm font-semibold text-gray-600">4.9/5 Stars</span>
            </div>
            <div className="flex items-center gap-3">
              <Truck className="w-8 h-8 text-[#fe930f]" />
              <span className="text-sm font-semibold text-gray-600">10k+ Deliveries</span>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <Footer />
    </div>
  );
}