import Navbar from "../Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Truck, Clock, Phone, Shield, Award, CheckCircle, Star, HardHat, Wrench, Zap } from "lucide-react";
import image7 from '../../Images/image7.jpg';
import image15 from '../../Images/image15.jpg';

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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function FlatbedTrailer() {
  const images = [image7, image15];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { text: "Multi-Level Transport Trucks – Ready for Any Vehicle Type", icon: <Truck className="w-5 h-5" /> },
    { text: "24/7 Customer Support – We're Always Here to Help", icon: <Clock className="w-5 h-5" /> },
    { text: "Only Pay for What You Use – No Extra Costs", icon: <Award className="w-5 h-5" /> },
    { text: "No Hidden Fees – 100% Transparent Pricing", icon: <Shield className="w-5 h-5" /> },
    { text: "Licensed, Bonded & Insured – Your Vehicle is in Safe Hands", icon: <HardHat className="w-5 h-5" /> },
    { text: "On-Time, Every Time – Reliable Service You Can Count On", icon: <CheckCircle className="w-5 h-5" /> },
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section with Image Slider */}
      <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={images[current]}
            alt="Flatbed Trailer Transport"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2647]/85 via-[#0A2647]/70 to-[#2C5F2D]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F9F6F0] via-transparent to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
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
              <Wrench className="w-4 h-4 text-[#E8A87C]" />
              <span className="text-sm font-medium text-white/90">Heavy-Duty Transport</span>
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              Flatbed 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#E8A87C] to-[#2C5F2D]">Trailer Transport</span>
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">Specialized solutions for oversized and commercial vehicles</p>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="h-1 bg-gradient-to-r from-[#2C5F2D] to-[#E8A87C] mx-auto rounded-full mt-6"
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
                idx === current ? "w-8 h-2 bg-[#E8A87C]" : "w-2 h-2 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main Content Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#F9F6F0] to-white py-16 md:py-24">
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#0A2647]/5 to-[#2C5F2D]/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#E8A87C]/10 to-[#2C5F2D]/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeLeft}
            >
              <div className="mb-6">
                <span className="text-sm font-semibold text-[#2C5F2D] tracking-wider uppercase">Heavy-Duty Service</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2647] mt-2 leading-tight">
                  Flatbed 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2C5F2D] to-[#E8A87C]"> Trailer Transport</span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#2C5F2D] to-[#E8A87C] rounded-full mt-4" />
              </div>

              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4 mb-8"
              >
                {features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    variants={fadeUp}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/50 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#0A2647] to-[#2C5F2D] rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white w-4 h-4">{feature.icon}</div>
                    </div>
                    <span className="text-gray-700 font-medium leading-relaxed">{feature.text}</span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-4 pt-4 border-t border-gray-200"
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2C5F2D] to-[#E8A87C] flex items-center justify-center text-white text-xs font-bold border-2 border-white shadow-md">
                      ★
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-[#E8A87C] fill-[#E8A87C]" />
                    ))}
                  </div>
                  <p className="text-gray-500 text-xs">Trusted by 1,500+ commercial clients</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeRight}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2647]/30 to-transparent z-10" />
                <img
                  src={image7}
                  className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
                  alt="Flatbed Trailer Transport"
                />
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-xl p-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#2C5F2D] to-[#E8A87C] rounded-xl flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Oversized Load Experts</p>
                      <p className="text-white/70 text-sm">Specialized commercial transport</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section - Specialized Transport Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="mt-16 md:mt-20 p-6 md:p-10 bg-gradient-to-br from-[#0A2647] to-[#1B3A5B] rounded-2xl shadow-xl"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#2C5F2D] to-[#E8A87C] rounded-xl flex items-center justify-center flex-shrink-0">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  We're Focused on Fulfilling All Your Auto Transport Needs
                </h2>
              </div>
            </div>
            <div className="space-y-4 text-white/80 leading-relaxed pl-4 md:pl-16">
              <p>While flatbed trailers can technically transport standard vehicles, they're typically reserved for special cases. Vehicles that are oversized — too tall, long, or wide for standard open or enclosed carriers — require flatbed auto transport.</p>
              <p>This service is ideal for transporting specialized or commercial vehicles that don't fit conventional transport methods. Most requests for flatbed shipping come from businesses with unique vehicle transport needs.</p>
              <p className="font-semibold text-white pt-2">From construction equipment to oversized machinery, our flatbed solutions ensure safe and timely delivery.</p>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#0A2647] to-[#2C5F2D] text-white rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Get Your Flatbed Transport Quote
              <Wrench className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-gray-200"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#2C5F2D]" />
              <span className="text-sm text-gray-600">Fully Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#2C5F2D]" />
              <span className="text-sm text-gray-600">On-Time Delivery Guaranteed</span>
            </div>
            <div className="flex items-center gap-2">
              <HardHat className="w-5 h-5 text-[#2C5F2D]" />
              <span className="text-sm text-gray-600">Experienced Heavy Load Handlers</span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}