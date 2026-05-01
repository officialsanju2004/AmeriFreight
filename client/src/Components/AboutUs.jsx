import { Wallet, BadgeCheck, Eye, Goal, Shield, Award, TrendingUp, HeartHandshake } from "lucide-react";
import { Truck, Clock, CheckCircle, Users, HardHat, ShieldCheck, Trophy } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import Footer from "./Footer";
import Navbar from "../Navbar";
import image7 from '../../Images/image7.jpg';

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const cardHover = {
  whileHover: { y: -8, transition: { duration: 0.3 } }
};

const About = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden bg-gradient-to-br from-[#0A2647] via-[#0A2647] to-[#1B3A5B] pt-32 pb-20 md:pt-40 md:pb-28">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#2C5F2D]/20 to-[#E8A87C]/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#E8A87C]/10 to-[#2C5F2D]/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate={isHeroInView ? "visible" : "hidden"}
              variants={fadeLeft}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6"
              >
                <Truck className="w-4 h-4 text-[#E8A87C]" />
                <span className="text-sm font-medium text-white/90">Trusted Logistics Partner</span>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Driven To Deliver – 
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#E8A87C] to-[#2C5F2D] mt-2">
                  Ameri Freight Autologistics
                </span>
              </h1>

              <p className="text-white/80 text-lg leading-relaxed mb-8">
                We are a professional and expert freight logistics provider dedicated
                to delivering seamless, safe, and timely transportation solutions.
                With years of industry experience, skilled teams, and modern
                equipment, we handle every shipment with utmost care and precision.
              </p>

              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                animate={isHeroInView ? "visible" : "hidden"}
                className="grid sm:grid-cols-2 gap-4 mb-8"
              >
                {[
                  { text: "Certified Company", icon: <Shield className="w-5 h-5" /> },
                  { text: "Satisfaction Guaranteed", icon: <Award className="w-5 h-5" /> },
                  { text: "Affordable Pricing", icon: <Trophy className="w-5 h-5" /> },
                  { text: "24/7 Excellence Support", icon: <HeartHandshake className="w-5 h-5" /> },
                ].map((item, index) => (
                  <motion.div key={index} variants={fadeUp} className="flex items-center gap-3 group">
                    <div className="w-8 h-8 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-[#2C5F2D] transition-colors duration-300">
                      <div className="text-[#E8A87C] group-hover:text-white transition-colors duration-300">
                        {item.icon}
                      </div>
                    </div>
                    <span className="text-white/90 font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Trust Badge */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2C5F2D] to-[#E8A87C] flex items-center justify-center text-white text-xs font-bold border-2 border-[#0A2647]">
                      ★
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-[#E8A87C] fill-[#E8A87C]" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white/60 text-xs">Rated 4.9/5 by 2,500+ customers</p>
                </div>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial="hidden"
              animate={isHeroInView ? "visible" : "hidden"}
              variants={fadeRight}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2647]/50 to-transparent z-10" />
                <img
                  src={image7}
                  className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
                  alt="Ameri Freight  Autologistics Transport"
                />
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-xl p-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#2C5F2D] to-[#E8A87C] rounded-xl flex items-center justify-center">
                      <Truck className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Nationwide Coverage</p>
                      <p className="text-white/70 text-sm">Serving all 48 continental states</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="text-center mb-12 md:mb-16"
          >
            <span className="text-sm font-semibold text-[#2C5F2D] tracking-wider uppercase">What We Stand For</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2647] mt-2 mb-4">
              Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2C5F2D] to-[#E8A87C]">Values</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#2C5F2D] to-[#E8A87C] mx-auto rounded-full" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {[
              {
                title: "Affordable",
                icon: <Trophy className="w-8 h-8" />,
                desc: "We offer premium auto transport services at the most affordable prices, with zero hidden charges",
                gradient: "from-[#0A2647] to-[#2C5F2D]"
              },
              {
                title: "On Time Shipping",
                icon: <Clock className="w-8 h-8" />,
                desc: "We value your time — guaranteed on-time pickup and delivery, every single time, without excuses",
                gradient: "from-[#2C5F2D] to-[#E8A87C]"
              },
              {
                title: "Licensed And Insured",
                icon: <ShieldCheck className="w-8 h-8" />,
                desc: "Fully licensed and insured for your complete peace of mind — your vehicle is protected every mile",
                gradient: "from-[#0A2647] to-[#E8A87C]"
              },
              {
                title: "Trained Workers",
                icon: <HardHat className="w-8 h-8" />,
                desc: "Skilled professionals who know vehicle logistics, ensuring safe and timely transport every time",
                gradient: "from-[#2C5F2D] to-[#0A2647]"
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A2647] to-[#2C5F2D] rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                <div className="relative bg-white rounded-2xl p-6 lg:p-8 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <div className="text-white">{item.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-[#0A2647] mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-[#F9F6F0] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="text-center mb-12 md:mb-16"
          >
            <span className="text-sm font-semibold text-[#2C5F2D] tracking-wider uppercase">Our Purpose</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2647] mt-2 mb-4">
              Mission & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2C5F2D] to-[#E8A87C]">Vision</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#2C5F2D] to-[#E8A87C] mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeLeft}
              whileHover={{ y: -5 }}
              className="group relative bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#2C5F2D]/5 to-[#E8A87C]/5 rounded-bl-full" />
              <div className="w-20 h-20 bg-gradient-to-br from-[#0A2647] to-[#2C5F2D] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                <Goal className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A2647] mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Our mission is to provide reliable, efficient, and affordable freight logistics solutions that exceed customer expectations. We strive to ensure safe and timely delivery of every shipment by leveraging skilled professionals, cutting-edge technology, and transparent communication. Our goal is to build long-term partnerships by consistently delivering excellence and making logistics hassle-free for businesses and individuals alike.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeRight}
              whileHover={{ y: -5 }}
              className="group relative bg-gradient-to-br from-[#0A2647] to-[#1B3A5B] rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#E8A87C]/10 to-transparent rounded-bl-full" />
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/20">
                <Eye className="w-10 h-10 text-[#E8A87C]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-white/80 leading-relaxed text-lg">
                Our vision is to become the leading freight logistics provider known for innovation, reliability, and customer-centric solutions. We aim to revolutionize the transportation industry by integrating advanced technology, sustainable practices, and expert teams to deliver unmatched service quality. Our goal is to empower businesses with seamless logistics that drive growth, efficiency, and trust worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "5000+", label: "Vehicles Transported" },
              { value: "48", label: "States Covered" },
              { value: "98%", label: "Customer Satisfaction" },
              { value: "24/7", label: "Support Available" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-4"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0A2647] to-[#2C5F2D] bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-500 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;