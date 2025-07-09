import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Database, 
  Globe, 
  Settings, 
  Brain, 
  Users, 
  Clock, 
  Target 
} from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "Java", "JavaScript", "Bash"],
      color: "purple"
    },
    {
      title: "Technologies",
      icon: <Settings className="w-6 h-6" />,
      skills: ["OOPS", "OS", "DBMS", "Git"],
      color: "teal"
    },
    {
      title: "Web Technologies",
      icon: <Globe className="w-6 h-6" />,
      skills: ["HTML", "CSS", "React", "Node.js"],
      color: "purple"
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6" />,
      skills: ["SQL", "MongoDB", "PostgreSQL"],
      color: "teal"
    },
    {
      title: "Tools & Platforms",
      icon: <Settings className="w-6 h-6" />,
      skills: ["VS Code", "Jupyter", "Power BI", "Docker"],
      color: "purple"
    },
    {
      title: "Soft Skills",
      icon: <Brain className="w-6 h-6" />,
      skills: ["Team Leadership", "Quick Learning", "Problem Solving"],
      color: "teal"
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
            Technical <span className="text-purple-500">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                rotateX: 5,
                boxShadow: category.color === 'purple' 
                  ? '0 20px 40px rgba(217, 87, 255, 0.2)' 
                  : '0 20px 40px rgba(20, 184, 166, 0.2)'
              }}
              data-cursor-hover
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${
                category.color === 'purple' 
                  ? 'bg-purple-500/20 text-purple-500' 
                  : 'bg-teal-500/20 text-teal-500'
              }`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-bold font-sora mb-4 text-white">
                {category.title}
              </h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2 ${
                      category.color === 'purple'
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                        : 'bg-teal-500/20 text-teal-300 border border-teal-500/30'
                    }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: (index * 0.1) + (skillIndex * 0.05) }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;