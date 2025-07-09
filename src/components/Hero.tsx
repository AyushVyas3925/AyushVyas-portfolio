import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail, Sparkles, Code, Cpu } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 z-0">
        {/* Primary Background Orbs */}
        <motion.div 
          className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-16 h-16 bg-gradient-to-r from-purple-500/30 to-teal-500/30 rounded-full blur-xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-gradient-to-r from-teal-500/20 to-purple-500/20 rounded-full blur-xl"
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(217, 87, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(217, 87, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }} />
        </div>
      </div>

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center z-10 relative">
        {/* Left Column - Enhanced Text Content */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-6">
            {/* Greeting */}
            <motion.div
              className="flex items-center gap-2 text-teal-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Sparkles className="w-5 h-5 animate-pulse" />
              <span className="text-sm font-medium tracking-wide uppercase">Hello, I'm</span>
            </motion.div>

            {/* Name with Enhanced Typography */}
            <motion.h1
              className="heading-xl text-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span 
                className="block text-gradient-purple"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Ayush
              </motion.span>
              <motion.span 
                className="block text-white"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Vyas
              </motion.span>
            </motion.h1>
            
            {/* Enhanced Role */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-xl md:text-2xl font-semibold font-poppins text-gray-300">
                Data Scientist & ML Engineer
              </p>
              <div className="flex items-center gap-2 text-purple-400">
                <Code className="w-4 h-4" />
                <span className="text-sm font-medium">Building Intelligent Systems</span>
              </div>
            </motion.div>
            
            {/* Enhanced Description */}
            <motion.p
              className="body-lg text-gray-400 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Transforming complex problems into elegant solutions through{' '}
              <span className="text-purple-400 font-medium">automation</span>,{' '}
              <span className="text-teal-400 font-medium">cloud technologies</span>, and{' '}
              <span className="text-purple-400 font-medium">artificial intelligence</span>.
            </motion.p>
          </div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              className="btn-primary flex items-center gap-2 shadow-lg animate-glow"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 30px rgba(217, 87, 255, 0.6)' 
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToNext()}
              data-cursor-hover
            >
              <Cpu className="w-5 h-5" />
              View Projects
            </motion.button>
            
            <motion.button
              className="btn-secondary flex items-center gap-2"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 30px rgba(20, 184, 166, 0.5)' 
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              data-cursor-hover
            >
              <Mail size={20} />
              Contact
            </motion.button>
            
            <motion.a
              href="/AyushVyas_Resume.pdf"
              download
              className="btn-outline flex items-center gap-2"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 20px rgba(107, 114, 128, 0.5)' 
              }}
              whileTap={{ scale: 0.95 }}
              data-cursor-hover
            >
              <Download size={20} />
              Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Column - Enhanced 3D Floating Section with Photo */}
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative w-full h-96 flex items-center justify-center">
            {/* Orbiting Elements */}
            <motion.div
              className="absolute w-20 h-20 bg-gradient-to-r from-purple-500/30 to-transparent rounded-full blur-xl"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              style={{ transformOrigin: '200px' }}
            />
            
            <motion.div
              className="absolute w-16 h-16 bg-gradient-to-r from-teal-500/30 to-transparent rounded-full blur-xl"
              animate={{
                rotate: [360, 0],
                scale: [1.2, 1, 1.2],
              }}
              transition={{
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }
              }}
              style={{ transformOrigin: '-150px' }}
            />

            {/* Floating Tech Icons */}
            <motion.div
              className="absolute -top-10 -left-10 w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-purple-500/30"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Code className="w-6 h-6 text-purple-400" />
            </motion.div>
            
            <motion.div
              className="absolute -bottom-10 -right-10 w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-teal-500/30"
              animate={{
                y: [0, 20, 0],
                rotate: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <Cpu className="w-6 h-6 text-teal-400" />
            </motion.div>
            
            {/* Central Photo Container */}
            <motion.div
              className="relative w-80 h-80 rounded-full bg-gradient-to-br from-purple-500/20 via-teal-500/20 to-purple-500/20 flex items-center justify-center backdrop-blur-sm border border-purple-500/30 shadow-2xl overflow-hidden"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 2, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.05,
                rotate: 5,
                transition: { duration: 0.3 }
              }}
            >
              {/* Inner Glow Effect */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-purple-600/50 to-teal-600/50 animate-pulse" />
              
              {/* Photo Container */}
              <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-inner border-4 border-gradient-to-br from-purple-600 to-teal-600">
                <motion.img
                  src="/ayush_vyas.jpg"
                  alt="Ayush Vyas"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                
                {/* Overlay gradient for better integration */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-teal-600/20 mix-blend-overlay" />
              </div>

              {/* Shimmer Effect */}
              <div className="absolute inset-0 rounded-full shimmer opacity-30" />
            </motion.div>

            {/* Particle Effect */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-purple-400 rounded-full"
                animate={{
                  x: [0, Math.random() * 200 - 100],
                  y: [0, Math.random() * 200 - 100],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer flex flex-col items-center gap-2"
        onClick={scrollToNext}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.1 }}
        data-cursor-hover
      >
        <span className="text-sm text-gray-400 font-medium">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-purple-500 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-purple-500 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
        <ChevronDown size={24} className="text-purple-500" />
      </motion.div>
    </section>
  );
};

export default Hero;