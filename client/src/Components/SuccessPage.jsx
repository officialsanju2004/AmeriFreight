import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Mail, Phone, Clock, MessageSquare, Home, RefreshCw, Star, Shield, Truck } from 'lucide-react';

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, type: "spring", stiffness: 200 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const FormSubmissionConfirmation = () => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  useEffect(() => {
    if (countdown === 0) {
      navigate("/");
    }
  }, [countdown, navigate]);

  const keyPoints = [
    { icon: <Clock className="w-8 h-8" />, title: "Quick Response", desc: "We aim to respond to all inquiries within one business day.", color: "#FF8C00" },
    { icon: <MessageSquare className="w-8 h-8" />, title: "Direct Communication", desc: "A dedicated team member will personally handle your inquiry.", color: "#003366" },
    { icon: <Mail className="w-8 h-8" />, title: "Email Confirmation", desc: "We've sent a confirmation email to the address you provided.", color: "#FF8C00" },
  ];

  return (
    <div className="min-h-screen bg-[#F9F6F0] flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#001E41]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#FF8C00]/10 rounded-full blur-3xl" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#003366]/5 rounded-full"
        />
      </div>

      <div className="max-w-4xl w-full relative z-10">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center mb-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#001E41] rounded-full mb-6 shadow-lg"
          >
            <CheckCircle className="w-4 h-4 text-[#FF8C00]" />
            <span className="text-sm font-medium text-white">Submission Successful</span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#003366] mb-4">
            Thank You!
          </h1>
          <p className="text-lg text-gray-600">
            Your message has been successfully delivered to our team.
          </p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="h-1 bg-[#FF8C00] mx-auto rounded-full mt-4"
          />
        </motion.div>

        {/* Main Confirmation Card */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={scaleIn}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-8 hover:shadow-3xl transition-all duration-500"
        >
          <div className="grid md:grid-cols-5 gap-0">
            {/* Left side with icon */}
            <div className="md:col-span-2 bg-[#001E41] flex items-center justify-center p-8 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
              </div>
              <div className="relative">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-white rounded-full opacity-20"
                />
                <div className="relative bg-white rounded-full p-6 shadow-xl">
                  <Truck className="w-16 h-16 md:w-20 md:h-20 text-[#FF8C00]" />
                </div>
              </div>
            </div>

            {/* Right side with message */}
            <div className="md:col-span-3 p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#FF8C00] rounded-xl flex items-center justify-center shadow-md">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-[#003366]">
                  Form Submitted Successfully
                </h2>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 text-lg leading-relaxed">
                  We've received your contact form submission and will get back to you shortly. 
                  Our team typically responds within <span className="font-semibold text-[#FF8C00]">24 hours</span> during business days.
                </p>
                <div className="flex items-center gap-3 p-4 bg-[#F9F6F0] rounded-xl">
                  <Phone className="w-5 h-5 text-[#FF8C00]" />
                  <p className="text-gray-700">
                    Need urgent assistance? Call us at{' '}
                    <a href="tel:+12098214888" className="font-semibold text-[#FF8C00] hover:underline">+1 (209) 821-4888</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Points Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
        >
          {keyPoints.map((point, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className={`w-14 h-14 bg-[${point.color}] rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">{point.icon}</div>
              </div>
              <h3 className="font-bold text-[#003366] mb-2 text-lg">{point.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{point.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Action Buttons & Redirect Info */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-bold text-[#003366] mb-2 text-lg">Need immediate assistance?</h3>
              <p className="text-gray-600">
                Call us at{' '}
                <a href="tel:+12098214888" className="font-semibold text-[#FF8C00] hover:underline">+1 (209) 821-4888</a>{' '}
                during business hours.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = "/"}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#001E41] text-white font-medium rounded-xl transition-all duration-300 shadow-md hover:bg-[#002244]"
              >
                <Home className="w-4 h-4" />
                Return to Home
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = "/contact"}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 hover:border-[#FF8C00] text-gray-700 font-medium rounded-xl transition-all duration-300 hover:shadow-md"
              >
                <RefreshCw className="w-4 h-4" />
                Contact Again
              </motion.button>
            </div>
          </div>

          {/* Countdown Progress */}
          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <p className="text-gray-500 mb-3">
              You will be automatically redirected to our homepage in
              <span className="font-bold text-[#FF8C00] mx-1 text-lg">{countdown}</span>
              seconds.
            </p>
            <div className="w-full bg-gray-100 rounded-full h-2 max-w-md mx-auto overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: `${(5 - countdown) * 20}%` }}
                transition={{ duration: 0.5 }}
                className="bg-[#FF8C00] h-2 rounded-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center items-center gap-6 mt-8"
        >
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#FF8C00]" />
            <span className="text-xs text-gray-500">Secure Submission</span>
          </div>
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-3 h-3 text-[#FF8C00] fill-[#FF8C00]" />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#FF8C00]" />
            <span className="text-xs text-gray-500">24/7 Support</span>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="text-center mt-10 text-gray-400 text-xs">
          <p>© {new Date().getFullYear()} amerifreightautologistics.com. All rights reserved.</p>
          <p className="mt-1">
            Developed and Managed by{" "}
            <a href='https://growthflowmedia.com' target="_blank" rel="noopener noreferrer" className="text-[#FF8C00] font-semibold hover:underline">
              GROWTH FLOW MEDIA
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormSubmissionConfirmation;