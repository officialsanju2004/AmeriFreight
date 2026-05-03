import Navbar from "../Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Clock, Phone, Award, CheckCircle, Truck, Star, ShieldCheck, HardHat, Lock } from "lucide-react";
import image8 from '../../Images/image8.jpg';
import car1 from '../../Images/car1.png';
import car2 from '../../Images/car2.jpg';
import enclosed from '../../Images/enclosed.jpg';

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

export default function EnclosedTrailerTransport() {
  const images = [image8, car1, car2];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { text: "Multi-Platform Transport Trucks, Always Ready", icon: <Truck className="w-5 h-5" /> },
    { text: "24/7 Customer Support – We're Just a Call Away", icon: <Clock className="w-5 h-5" /> },
    { text: "Pay Only for What You Need – No Extra Charges", icon: <Award className="w-5 h-5" /> },
    { text: "Transparent Pricing – No Hidden Surprises", icon: <Shield className="w-5 h-5" /> },
    { text: "Fully Licensed, Bonded & Insured for Your Protection", icon: <ShieldCheck className="w-5 h-5" /> },
    { text: "Reliable & Timely Service – We Deliver as Promised", icon: <CheckCircle className="w-5 h-5" /> },
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
            alt="Enclosed Trailer Transport"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#001E41]/85" />
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#F9F6F0]/70 via-[#F9F6F0]/20 to-transparent" />

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
              <Lock className="w-4 h-4 text-[#FF8C00]" />
              <span className="text-sm font-medium text-white/90">Maximum Protection</span>
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              Enclosed 
              <span className="block text-[#FF8C00]">Trailer Transport</span>
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">Premium protection for your most valuable vehicles</p>
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

      {/* Main Content Section */}
      <section className="relative overflow-hidden bg-[#F9F6F0] py-16 md:py-24">
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#001E41]/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#001E41]/10 rounded-full blur-3xl" />
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
                <span className="text-sm font-semibold text-[#001E41] tracking-wider uppercase">Premium Service</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FF8C00] mt-2 leading-tight">
                  Enclosed 
                  <span className="text-[#001E41]"> Trailer Transport</span>
                </h2>
                <div className="w-20 h-1 bg-[#001E41] rounded-full mt-4" />
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
                    <div className="flex-shrink-0 w-8 h-8 bg-[#001E41] rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
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
                    <div key={i} className="w-8 h-8 rounded-full bg-[#001E41] flex items-center justify-center text-white text-xs font-bold border-2 border-white shadow-md">
                      ★
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-[#001E41] fill-[#001E41]" />
                    ))}
                  </div>
                  <p className="text-gray-500 text-xs">Premium protection for luxury vehicles</p>
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/30 to-transparent z-10" />
                <img
                  src={enclosed}
                  className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
                  alt="Enclosed Trailer Transport"
                />
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-xl p-3">
                    <div className="w-10 h-10 bg-[#001E41] rounded-xl flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Maximum Protection</p>
                      <p className="text-white/70 text-sm">Hard-sided enclosed carriers</p>
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
            className="mt-16 md:mt-20 p-6 md:p-10 bg-[#001E41] rounded-2xl shadow-xl"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-[#001E41] rounded-xl flex items-center justify-center flex-shrink-0">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  We Specialize in Fulfilling All Your Auto Transport Needs
                </h2>
              </div>
            </div>
            <div className="space-y-4 text-white/80 leading-relaxed pl-4 md:pl-16">
              <p>When it comes to maximum protection, enclosed auto transport is the top choice. It keeps your vehicle safe from harsh weather, road debris, and unwanted attention during transit.</p>
              <p>There are two types of enclosed transport: soft-sided and hard-sided. While both offer protection, we recommend <span className="font-semibold text-white">hard-sided enclosed carriers</span> for the highest level of safety and peace of mind.</p>
              <p>This method shields your vehicle completely — rain, snow, dust, or rocks won't stand a chance. Plus, it adds privacy by keeping your vehicle out of sight during the journey.</p>
              <p className="font-semibold text-white pt-2">If you're transporting a high-value car or just want total protection, hard-sided enclosed transport is the way to go.</p>
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
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#001E41] text-white rounded-xl font-bold text-lg hover:bg-[#001E41] transform hover:scale-105 transition-all duration-300"
            >
              Get Your Enclosed Transport Quote
              <Shield className="w-5 h-5" />
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
              <ShieldCheck className="w-5 h-5 text-[#001E41]" />
              <span className="text-sm text-gray-600">Fully Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#001E41]" />
              <span className="text-sm text-gray-600">On-Time Delivery Guaranteed</span>
            </div>
            <div className="flex items-center gap-2">
              <HardHat className="w-5 h-5 text-[#001E41]" />
              <span className="text-sm text-gray-600">Professional Handling</span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}