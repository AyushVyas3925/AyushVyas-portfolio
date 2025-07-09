import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Award } from 'lucide-react';

const Timeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineData = [
    {
      year: "2025",
      title: "Advanced ML & AI Research",
      type: "experience",
      location: "Current",
      description: "Leading research in machine learning workflows and AI automation systems. Developing production-ready ML pipelines with Docker and cloud integration.",
      icon: <Award className="w-5 h-5" />,
      color: "purple"
    },
    {
      year: "2024",
      title: "Full-Stack Development & DevOps",
      type: "experience",
      location: "Professional Development",
      description: "Specialized in building scalable web applications with modern frameworks. Implemented CI/CD pipelines and containerized applications using Docker.",
      icon: <Award className="w-5 h-5" />,
      color: "teal"
    },
    {
      year: "2023",
      title: "Project Automation & System Integration",
      type: "experience",
      location: "Freelance & Personal Projects",
      description: "Developed automation tools for various platforms including social media integration, messaging systems, and data analysis platforms.",
      icon: <Award className="w-5 h-5" />,
      color: "purple"
    },
    {
      year: "2022",
      title: "Linux System Administration",
      type: "experience",
      location: "Self-Taught & Certification",
      description: "Mastered Linux system administration, shell scripting, and server management. Built tools for system optimization and process automation.",
      icon: <Award className="w-5 h-5" />,
      color: "teal"
    },
    {
      year: "2021",
      title: "Python Programming Mastery",
      type: "education",
      location: "Self-Directed Learning",
      description: "Intensive focus on Python programming, data structures, and algorithm optimization. Built foundation for machine learning and automation projects.",
      icon: <Calendar className="w-5 h-5" />,
      color: "purple"
    },
    {
      year: "2020",
      title: "Programming Foundation",
      type: "education",
      location: "Computer Science Studies",
      description: "Established strong foundation in programming concepts, object-oriented programming, and database management systems.",
      icon: <Calendar className="w-5 h-5" />,
      color: "teal"
    }
  ];

  return (
    <section id="timeline" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
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
            My <span className="text-purple-500">Journey</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience and education milestones
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500 to-teal-500"></div>

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <motion.div
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  data-cursor-hover
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
                      item.color === 'purple' 
                        ? 'bg-purple-500/20 text-purple-500' 
                        : 'bg-teal-500/20 text-teal-500'
                    }`}>
                      {item.icon}
                    </div>
                    <span className="text-sm text-gray-400 font-medium">
                      {item.type === 'experience' ? 'Experience' : 'Education'}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold font-sora mb-2 text-white">
                    {item.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-3 text-sm text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span>{item.location}</span>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </div>

              {/* Timeline Node */}
              <div className="relative z-10">
                <motion.div
                  className={`w-12 h-12 rounded-full border-4 flex items-center justify-center font-bold text-white ${
                    item.color === 'purple'
                      ? 'bg-purple-500 border-purple-300'
                      : 'bg-teal-500 border-teal-300'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  animate={inView ? { scale: [0.8, 1.2, 1] } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  {item.year.slice(-2)}
                </motion.div>
              </div>

              <div className="w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;