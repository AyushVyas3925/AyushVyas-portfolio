import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Mail, Phone, MessageCircle, Share2, Terminal } from 'lucide-react';

const PythonProjects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Send Email",
      description: "Automated email sender with HTML templates and attachment support",
      icon: <Mail className="w-8 h-8" />,
      github: "https://github.com/AyushVyas3925/python-task/blob/main/send_mail.py"
    },
    {
      title: "Send SMS",
      description: "SMS automation tool with bulk messaging capabilities",
      icon: <MessageCircle className="w-8 h-8" />,
      github: "https://github.com/AyushVyas3925/python-task/blob/main/message.py"
    },
    {
      title: "Make Phone Call",
      description: "VoIP integration for automated phone calls",
      icon: <Phone className="w-8 h-8" />,
      github: "https://github.com/AyushVyas3925/python-task/blob/main/call.py"
    },
    {
      title: "Social Media Auto-Post",
      description: "Auto-post to LinkedIn, Twitter, Instagram, Facebook",
      icon: <Share2 className="w-8 h-8" />,
      github: "https://github.com/AyushVyas3925/python-task/blob/main/insta.ipynb"
    },
    {
      title: "WhatsApp Messenger",
      description: "Automated WhatsApp message sender with scheduling",
      icon: <MessageCircle className="w-8 h-8" />,
      github: "https://github.com/AyushVyas3925/python-task/blob/main/wtp_msg.py"
    },
    {
      title: "CLI Menu App",
      description: "Interactive command-line interface with menu navigation",
      icon: <Terminal className="w-8 h-8" />,
      github: "https://github.com/AyushVyas3925/Manu"
    }
  ];

  return (
    <section id="python-projects" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-sora mb-4">
            Python <span className="text-purple-500">Mini Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Automation tools and utilities built with Python
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group perspective-1000"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="relative w-full h-64 transform-style-preserve-3d group-hover:rotate-y-180 transition-transform duration-700">
                {/* Front Face */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-teal-500/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center text-center backface-hidden">
                  <div className="text-purple-500 mb-4">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold font-sora mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {project.description}
                  </p>
                </div>

                {/* Back Face */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center text-center rotate-y-180 backface-hidden">
                  <div className="text-teal-500 mb-4">
                    <Github className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold font-sora mb-4 text-white">
                    View Source Code
                  </h3>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 neon-glow"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    data-cursor-hover
                  >
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PythonProjects;