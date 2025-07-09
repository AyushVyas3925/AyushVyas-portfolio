import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, MessageCircle, ArrowUp } from 'lucide-react';

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/AyushVyas3925",
      label: "GitHub",
      color: "hover:text-purple-400"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/ayush-vyas-287980286",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      href: "https://wa.me/918319319455",
      label: "WhatsApp",
      color: "hover:text-green-400"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:s.ayush3925@gmail.com",
      label: "Email",
      color: "hover:text-teal-400"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-20 relative overflow-hidden border-t border-white/10">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Logo */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold font-sora">
              <span className="text-purple-500">Ayush</span>
              <span className="text-teal-500">Vyas</span>
            </h3>
            <p className="text-gray-400 mt-2">
              Data Scientist & ML Engineer
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-400 transition-all duration-300 ${link.color}`}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  boxShadow: '0 10px 20px rgba(255, 255, 255, 0.1)' 
                }}
                whileTap={{ scale: 0.95 }}
                data-cursor-hover
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {['Home', 'About', 'Skills', 'Projects', 'Blog', 'Contact'].map((item) => (
              <motion.button
                key={item}
                onClick={() => {
                  const element = document.querySelector(`#${item.toLowerCase()}`);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-gray-400 hover:text-white transition-colors duration-300 relative"
                whileHover={{ y: -2 }}
                data-cursor-hover
              >
                {item}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="border-t border-white/10 pt-8"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Ayush Vyas. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-purple-500 hover:bg-purple-600 text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ 
            y: { duration: 2, repeat: Infinity, repeatType: "reverse" }
          }}
          data-cursor-hover
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;