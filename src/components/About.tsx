import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Rocket, Target, Cpu, Sparkles, Code, Brain } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cards = [
    {
      title: "My Background",
      content: "Started my journey from scripting automation to building intelligent AI systems. With expertise in Python, Linux, and cloud technologies, I transform complex problems into elegant solutions that scale.",
      icon: <Rocket className="w-8 h-8" />,
      gradient: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-400",
      borderColor: "border-purple-500/30"
    },
    {
      title: "My Vision",
      content: "Passionate about solving real-world problems through machine learning and automation. I believe in creating systems that not only work but make a meaningful impact on people's lives and business growth.",
      icon: <Target className="w-8 h-8" />,
      gradient: "from-teal-500/20 to-cyan-500/20",
      iconColor: "text-teal-400",
      borderColor: "border-teal-500/30"
    },
    {
      title: "My Tech Stack",
      content: "Proficient in Python, Java, JavaScript, Docker, Linux, and modern web technologies. I specialize in building scalable ML pipelines, automated systems, and full-stack applications.",
      icon: <Cpu className="w-8 h-8" />,
      gradient: "from-purple-500/20 to-blue-500/20",
      iconColor: "text-blue-400",
      borderColor: "border-blue-500/30"
    }
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-0 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30"
            style={{
              left: `${20 + (i * 10)}%`,
              top: `${30 + (i * 5)}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-400 tracking-wide">GET TO KNOW ME</span>
          </motion.div>

          <motion.h2
            className="heading-lg mb-6 text-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            About <span className="text-gradient-purple">Me</span>
          </motion.h2>
          
          <motion.p
            className="body-lg text-gray-400 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A passionate developer driven by curiosity and innovation, dedicated to creating 
            technology solutions that make a real difference in people's lives and business operations.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className={`card-elevated bg-gradient-to-br ${card.gradient} ${card.borderColor} group cursor-pointer overflow-hidden relative`}
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                rotateX: 5,
                rotateY: 5,
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)'
              }}
              data-cursor-hover
            >
              {/* Card Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              {/* Icon Container */}
              <motion.div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 mb-6 ${card.iconColor} group-hover:scale-110 transition-all duration-300`}
                whileHover={{ rotate: 5 }}
              >
                {card.icon}
              </motion.div>
              
              {/* Content */}
              <h3 className="heading-md mb-4 text-white group-hover:text-gradient-purple transition-all duration-300">
                {card.title}
              </h3>
              
              <p className="text-gray-300 font-poppins leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                {card.content}
              </p>

              {/* Decorative Elements */}
              <motion.div
                className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-4 left-4 w-1 h-1 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { number: "25+", label: "Projects Completed", icon: <Code className="w-5 h-5" /> },
            { number: "5+", label: "Technologies Mastered", icon: <Cpu className="w-5 h-5" /> },
            { number: "3+", label: "Years Experience", icon: <Brain className="w-5 h-5" /> },
            { number: "100%", label: "Client Satisfaction", icon: <Target className="w-5 h-5" /> },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-4 glass-card glass-card-hover group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-center mb-2 text-purple-400 group-hover:text-teal-400 transition-colors duration-300">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold font-sora text-white mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;