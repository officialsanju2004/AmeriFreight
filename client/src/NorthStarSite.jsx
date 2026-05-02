import { Truck, Shield, Star, Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight, ChevronRight, Users, Award, Link, Car, Route, Wrench, Calendar, Trophy, ShieldCheck, HardHat, Tag } from 'lucide-react';
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

// Modern Professional Color Palette
const colors = {
  primary: '#003366',      // Navy Blue
  secondary: '#FF8C00',    // Orange
  accent: '#FFB347',       // Light Orange
  light: '#F9F6F0',        // Cream White
  dark: '#1B2A3B',         // Dark Slate
  gradientStart: '#003366',
  gradientEnd: '#FF8C00',
  highlight: '#E27D60',
  textLight: '#F9F6F0',
  textDark: '#1B2A3B',
  cardBg: '#FFFFFF',
};

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const scaleOnHover = {
  whileHover: { scale: 1.03, transition: { duration: 0.3, ease: "easeInOut" } },
  whileTap: { scale: 0.98 }
};

const glassMorphism = "backdrop-blur-sm bg-white/90 shadow-xl";

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
    { icon: <Truck className="w-8 h-8" />, title: "Trusted Carriers", desc: "We partner only with licensed, verified, and highly rated carriers. Your vehicle is handled by professionals who prioritize safety and care." },
    { icon: <Shield className="w-8 h-8" />, title: "Hassle-Free", desc: "No pressure, no hidden fees, and no unnecessary complications. We keep the process simple, transparent and stress-free." },
    { icon: <Clock className="w-8 h-8" />, title: "On-Time Delivery", desc: "We respect your time and stick to committed schedules. Your vehicle reaches its destination safely and right on time." },
    { icon: <Users className="w-8 h-8" />, title: "Real Relationships", desc: "We believe in honest communication and long term trust. Our team stays connected with you at every step." },
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
        <div className="text-5xl md:text-6xl font-bold text-[#003366] mb-2">{count.toLocaleString()}+</div>
        <div className="text-lg text-gray-600 font-medium">{label}</div>
      </div>
    );
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % services.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);

  return (
    <div className="min-h-screen bg-[#F9F6F0]">
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
      <style jsx>{`
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes shimmer { 0% { background-position: -1000px 0; } 100% { background-position: 1000px 0; } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
        .animate-fade-in-up { animation: fade-in-up 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }
        .animate-float { animation: float 5s ease-in-out infinite; }
        .hover-card { transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .hover-card:hover { transform: translateY(-12px) scale(1.02); box-shadow: 0 25px 40px -12px rgba(0,0,0,0.25); }
        .glass-effect { background: rgba(255,255,255,0.1); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.2); }
        .gradient-border { position: relative; background: white; border-radius: 1rem; }
        .gradient-border::before { content: ''; position: absolute; inset: -2px; background: #FF8C00; border-radius: 1rem; z-index: -1; opacity: 0; transition: opacity 0.4s; }
        .gradient-border:hover::before { opacity: 1; }
      `}</style>

      <Navbar />

      {/* Hero Section - Modern Redesign */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={image1} alt="Luxury Auto Transport" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-[#003366]/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F9F6F0] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
              Reliable & Budget
              <span className="block text-[#FF8C00] mt-2">Auto Transport</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mb-10 leading-relaxed">Nationwide vehicle shipping with premium care, transparent pricing, and on-time delivery guaranteed.</p>
            <motion.button onClick={() => window.location.href = "/contact"} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="px-10 py-4 bg-[#FF8C00] text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-xl transition-all duration-300">
              Free Quote
            </motion.button>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center gap-2">
              
              <motion.div animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 1.8 }} className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                <div className="w-1.5 h-3 bg-white/70 rounded-full mt-2" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Form Section - Redesigned */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#FF8C00]/20 rounded-full blur-3xl" />
                <h2 className="text-5xl font-bold text-[#003366] mb-8 leading-tight">
                  Car Transport isn't Just Our Business <span className="text-[#FF8C00]">—It's Our Passion.</span>
                </h2>
                <div className="space-y-6 text-gray-700">
                  <p className="text-lg font-semibold text-[#003366]">At Ameri Freight Autologistics LLC, California, we pride ourselves on delivering top-tier auto transport services at some of the most competitive prices in the market.</p>
                  <p className="text-lg leading-relaxed">Let's be real — the industry is flooded with brokers. So, what makes us different? Simple: <span className="font-bold text-[#FF8C00]">we actually care.</span> We don't see you as just another number.</p>
                  <p className="text-lg leading-relaxed">We work only with <span className="font-bold text-[#FF8C00]">the most trusted and reliable carriers</span> to ensure your vehicle gets where it needs to go, safely and on time.</p>
                </div>
                <div className="mt-10 p-6 bg-[#003366]/5 rounded-2xl border-l-4 border-[#FF8C00]">
                  <div className="flex flex-wrap items-center gap-6">
                    <Phone className="w-10 h-10 text-[#FF8C00]" />
                    <div>
                      <p className="text-sm text-gray-500">24/7 Customer Support</p>
                      <a href="tel:+12093958481" className="text-3xl font-bold text-[#003366] hover:text-[#FF8C00] transition">+1 (209) 395-8481</a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
              <div className="absolute inset-0 bg-[#003366] rounded-3xl blur-2xl opacity-20" />
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-10">
                <h3 className="text-3xl font-bold text-center mb-8 text-[#003366]">Request A Free Quote</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div><label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label><input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-[#FF8C00] focus:ring-4 focus:ring-[#FF8C00]/20 transition-all outline-none" placeholder="John Doe" required /></div>
                    <div><label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label><input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-[#FF8C00] focus:ring-4 focus:ring-[#FF8C00]/20 transition-all outline-none" placeholder="john@example.com" required /></div>
                  </div>
                  <div><label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label><input type="text" name="subject" value={formData.subject} onChange={handleChange} className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-[#FF8C00] focus:ring-4 focus:ring-[#FF8C00]/20 transition-all outline-none" placeholder="Vehicle Transport Inquiry" required /></div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div><label className="block text-sm font-semibold text-gray-700 mb-2">Pickup Location *</label><input type="text" name="pickup" value={formData.pickup} onChange={handleChange} className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-[#FF8C00] focus:ring-4 focus:ring-[#FF8C00]/20 transition-all outline-none" placeholder="City, State" required /></div>
                    <div><label className="block text-sm font-semibold text-gray-700 mb-2">Dropoff Location *</label><input type="text" name="dropoff" value={formData.dropoff} onChange={handleChange} className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-[#FF8C00] focus:ring-4 focus:ring-[#FF8C00]/20 transition-all outline-none" placeholder="City, State" required /></div>
                  </div>
                  <div><label className="block text-sm font-semibold text-gray-700 mb-2">Additional Message</label><textarea name="message" value={formData.message} onChange={handleChange} rows="3" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-[#FF8C00] focus:ring-4 focus:ring-[#FF8C00]/20 transition-all outline-none resize-none" placeholder="Tell us about your vehicle..."></textarea></div>
                  <div className="flex items-center gap-3"><input type="checkbox" id="policy" className="w-5 h-5 rounded border-gray-300 text-[#FF8C00] focus:ring-[#FF8C00]" required /><label htmlFor="policy" className="text-sm text-gray-600">By providing your details you agree to our <a href="/privacy-policy" className="text-[#FF8C00] font-semibold hover:underline">Privacy Policy</a></label></div>
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full py-4 bg-[#FF8C00] text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl transition-all">Get Free Quote →</motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - Modern Cards */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#003366] mb-4">What Makes Us <span className="text-[#FF8C00]">Different</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We don't see you as just another number. We're committed to providing exceptional service.</p>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div key={idx} variants={fadeUp} whileHover={{ y: -10 }} className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
                <div className="w-16 h-16 bg-[#FF8C00] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md"><div className="text-white">{feature.icon}</div></div>
                <h3 className="text-2xl font-bold text-[#003366] mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#F9F6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#003366] mb-4">Premium <span className="text-[#FF8C00]">Services</span></h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Comprehensive vehicle transport solutions tailored to your needs</p>
          </motion.div>

          {/* Mobile Carousel */}
          <div className="md:hidden relative">
            <div className="overflow-hidden"><div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>{services.map((service, idx) => (<div key={idx} onClick={() => window.location.href = service.link} className="w-full flex-shrink-0 px-4 cursor-pointer"><div className="bg-white rounded-2xl shadow-xl overflow-hidden hover-card"><div className="h-56 overflow-hidden"><img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" /></div><div className="p-6"><h3 className="text-2xl font-bold text-[#003366] mb-3">{service.title}</h3><p className="text-gray-600">{service.description}</p></div></div></div>))}</div></div>
            <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 shadow-lg"><ChevronLeft className="w-6 h-6 text-[#003366]" /></button>
            <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 shadow-lg"><ChevronRight className="w-6 h-6 text-[#003366]" /></button>
            <div className="flex justify-center mt-8 gap-2">{services.map((_, idx) => (<button key={idx} onClick={() => setCurrentSlide(idx)} className={`w-2.5 h-2.5 rounded-full transition-all ${currentSlide === idx ? 'w-8 bg-[#FF8C00]' : 'bg-gray-300'}`} />))}</div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div key={idx} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} whileHover={{ y: -8 }} onClick={() => window.location.href = service.link} className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl group">
                <div className="h-56 overflow-hidden"><img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" /></div>
                <div className="p-6"><h3 className="text-2xl font-bold text-[#003366] mb-3">{service.title}</h3><p className="text-gray-600 leading-relaxed">{service.description}</p></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16"><h2 className="text-5xl font-bold text-[#003366]">Why Choose Us</h2></motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{ title: "On Time Shipping", icon: <Clock className="w-8 h-8" />, desc: "Guaranteed on-time pickup and delivery, every single time." }, { title: "Licensed And Insured", icon: <ShieldCheck className="w-8 h-8" />, desc: "Fully licensed and insured for complete peace of mind." }, { title: "Quick Response", icon: <MessageCircle className="w-8 h-8" />, desc: "Speedy support, instant updates, and zero delays." }, { title: "Trained Workers", icon: <HardHat className="w-8 h-8" />, desc: "Skilled professionals ensuring safe and timely transport." }].map((item, idx) => (<motion.div key={idx} variants={fadeUp} whileHover={{ y: -8 }} className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all border border-gray-100"><div className="w-16 h-16 bg-[#FF8C00] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition"><div className="text-white">{item.icon}</div></div><h3 className="text-xl font-bold text-[#003366] mb-3">{item.title}</h3><p className="text-gray-600">{item.desc}</p></motion.div>))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Factors */}
      <section className="py-24 bg-[#F9F6F0]">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <span className="text-sm font-semibold text-[#FF8C00] tracking-wider uppercase">Pricing Transparency</span>
            <h2 className="text-5xl font-bold text-[#003366] mt-2">Understanding Your Quote</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-4">Key factors that influence your shipping cost — no surprises, just clarity.</p>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{ title: "Vehicle Specifications", icon: <Car className="w-8 h-8" />, desc: "Size, weight, and type affect costs. We provide competitive rates for all vehicles." }, { title: "Distance & Route", icon: <Route className="w-8 h-8" />, desc: "Longer distances mean lower per-mile rates. We optimize for cost-effectiveness." }, { title: "Vehicle Condition", icon: <Wrench className="w-8 h-8" />, desc: "Non-running vehicles require special equipment. Our team handles it safely." }, { title: "Seasonal Timing", icon: <Calendar className="w-8 h-8" />, desc: "Book in advance for the best rates during peak seasons." }].map((item, idx) => (<motion.div key={idx} variants={fadeUp} whileHover={{ y: -8 }} className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all"><div className="w-14 h-14 bg-[#FF8C00] rounded-xl flex items-center justify-center mb-5"><div className="text-white">{item.icon}</div></div><h3 className="text-xl font-bold text-[#003366] mb-2">{item.title}</h3><p className="text-gray-600">{item.desc}</p></motion.div>))}
          </motion.div>
        </div>
      </section>

      <TestimonialsSection />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <Counter end={3} label="Years in Business" /><Counter end={53520} label="Happy Clients" /><Counter end={563} label="Daily Projects" /><Counter end={173} label="Trained Staff" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}