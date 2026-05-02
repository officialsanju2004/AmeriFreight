import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import male1 from '../../Images/male1.jpg';
import male2 from '../../Images/male2.jpg';
import male3 from '../../Images/Male3.jpg';
import female1 from '../../Images/female1.jpg';
import female2 from '../../Images/female2.jpg';
import female3 from '../../Images/female3.jpg';

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Michael Rodriguez",
    role: "Car Collector",
    content: "Ameri Freight transported my classic Corvette cross-country with incredible care. The enclosed trailer service was flawless, and the team kept me updated every step of the way. Professional, punctual, and priced fairly!",
    rating: 5,
    image: male1
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Relocating Family",
    content: "Moving from California to Texas with 3 vehicles seemed daunting, but Ameri Freight made it seamless. Their communication was excellent, prices were transparent, and all our cars arrived without a scratch. Highly recommended!",
    rating: 5,
    image: female1 
  },
  {
    id: 3,
    name: "David Chen",
    role: "Dealership Owner",
    content: "As a dealership, we ship multiple vehicles weekly. Ameri Freight consistently provides reliable service, competitive rates, and professional carriers. They've become our go-to transport partner for all interstate shipments.",
    rating: 5,
    image: male2
  },
  {
    id: 4,
    name: "Jessica Williams",
    role: "Military Family",
    content: "PCS move required shipping our SUV and sedan. Ameri Freight accommodated our tight schedule, provided military discount, and delivered both vehicles ahead of schedule. Exceptional service for military families!",
    rating: 5,
    image: female2
  },
  {
    id: 5,
    name: "Robert Thompson",
    role: "Luxury Car Owner",
    content: "Shipping my Porsche 911 was nerve-wracking, but Ameri Freight's enclosed transport gave me peace of mind. The carrier was experienced with high-end vehicles, and the delivery was perfectly timed. Top-tier service!",
    rating: 5,
    image: male3
  },
  {
    id: 6,
    name: "Maria Garcia",
    role: "Small Business Owner",
    content: "Needed to ship my work truck from Florida to Colorado. Ameri Freight found a carrier quickly, offered fair pricing, and the truck arrived ready for work. Will definitely use them for future business needs.",
    rating: 5,
    image: female3
  }
];

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.3 } }
};

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-slide effect with pause on hover
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex, isMobile, isAutoPlaying]);

  const nextSlide = () => {
    if (isMobile) {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    } else {
      setCurrentIndex((prev) => {
        const next = prev + 3;
        return next >= testimonials.length ? 0 : next;
      });
    }
  };

  const prevSlide = () => {
    if (isMobile) {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    } else {
      setCurrentIndex((prev) => {
        const next = prev - 3;
        return next < 0 ? testimonials.length - 3 : next;
      });
    }
  };

  // Get current testimonials to display
  const getCurrentTestimonials = () => {
    if (isMobile) {
      return [testimonials[currentIndex]];
    }
    return testimonials.slice(currentIndex, currentIndex + 3);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? 'text-[#FF8C00] fill-[#FF8C00]' : 'text-gray-300'}`} />
    ));
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#F9F6F0]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#003366]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#FF8C00]/10 rounded-full blur-3xl" />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#003366]/5 rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-2">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-[#FF8C00] tracking-wider uppercase mb-2 inline-block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#003366] mb-6">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-[#FF8C00] mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience.
          </p>
        </motion.div>

        {/* Testimonials Container */}
        <div 
          className="relative max-w-7xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Desktop Navigation Buttons */}
          {!isMobile && testimonials.length > 3 && (
            <>
              <motion.button
                whileHover={{ scale: 1.1, x: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 xl:-translate-x-20 z-20 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-[#003366] hover:text-[#FF8C00] transition-all duration-300 border border-[#003366]/10 hover:shadow-2xl"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, x: 3 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 xl:translate-x-20 z-20 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-[#003366] hover:text-[#FF8C00] transition-all duration-300 border border-[#003366]/10 hover:shadow-2xl"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </>
          )}

          {/* Mobile Navigation Buttons */}
          {isMobile && testimonials.length > 1 && (
            <>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-[#003366] hover:text-[#FF8C00] transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-[#003366] hover:text-[#FF8C00] transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </>
          )}

          {/* Testimonials Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'} gap-6 lg:gap-8`}
            >
              {getCurrentTestimonials().map((testimonial, idx) => (
                <motion.div
                  key={testimonial.id}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
                >
                  {/* Border Effect on Hover */}
                  <div className="absolute inset-0 bg-[#FF8C00] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10" />
                  <div className="absolute inset-[1px] bg-white rounded-2xl transition-all duration-500 group-hover:bg-white" />
                  
                  {/* Decorative Quote Background */}
                  <div className="absolute -top-6 -right-6 text-[#003366]/5 group-hover:text-[#FF8C00]/10 transition-all duration-500">
                    <Quote className="w-24 h-24" />
                  </div>

                  <div className="relative p-6 lg:p-8 z-10">
                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-5">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Testimonial Content */}
                    <p className="text-gray-700 italic mb-6 leading-relaxed text-base lg:text-lg">
                      "{testimonial.content}"
                    </p>

                    {/* Client Info */}
                    <div className="flex items-center gap-4 pt-5 border-t border-gray-100 group-hover:border-gray-200 transition-all">
                      {/* Avatar with Animated Ring */}
                      <div className="relative">
                        <motion.div 
                          whileHover={{ scale: 1.05 }}
                          className="w-14 h-14 rounded-full bg-[#001E41] p-[2px] shadow-md"
                        >
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full rounded-full object-cover bg-white"
                          />
                        </motion.div>
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2 }}
                          className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#FF8C00] rounded-full flex items-center justify-center shadow-sm"
                        >
                          <Quote className="w-3 h-3 text-white" />
                        </motion.div>
                      </div>

                      {/* Client Details */}
                      <div>
                        <h4 className="font-bold text-lg text-[#003366] group-hover:text-[#FF8C00] transition-colors">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-[#FF8C00] font-medium">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12 gap-2"
          >
            {isMobile ? (
              // Mobile dots
              testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? 'bg-[#FF8C00] w-8'
                      : 'bg-gray-300 w-2 hover:bg-gray-400'
                  }`}
                />
              ))
            ) : (
              // Desktop dots (grouped by 3)
              Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, groupIndex) => {
                const isActive = Math.floor(currentIndex / 3) === groupIndex;
                return (
                  <motion.button
                    key={groupIndex}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setCurrentIndex(groupIndex * 3)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      isActive
                        ? 'bg-[#FF8C00] w-8'
                        : 'bg-gray-300 w-2 hover:bg-gray-400'
                    }`}
                  />
                );
              })
            )}
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 pt-10 border-t border-[#003366]/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {[
              { value: "98%", label: "Satisfaction Rate", suffix: "" },
              { value: "5000+", label: "Vehicles Transported", suffix: "+" },
              { value: "48", label: "States Covered", suffix: "" },
              { value: "24/7", label: "Customer Support", suffix: "" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="text-center p-4 rounded-2xl bg-white/50 backdrop-blur-sm hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#003366] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-[#003366]/10">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 text-[#FF8C00] fill-[#FF8C00]" />
              ))}
            </div>
            <span className="text-sm text-gray-600">Rated 4.9/5 by 2,500+ customers</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}