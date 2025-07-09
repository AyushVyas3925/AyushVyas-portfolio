import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, FileText, ExternalLink } from 'lucide-react';

const Resume = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="resume" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
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
            My <span className="text-purple-500">Resume</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Download my latest resume or view it online
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Resume Preview */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-full">
                    <FileText className="w-8 h-8 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-sora text-white">
                      Ayush Vyas
                    </h3>
                    <p className="text-gray-400">
                      Data Scientist & ML Engineer
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Skills</h4>
                      <ul className="space-y-1 text-gray-400">
                        <li>• Python & Java</li>
                        <li>• Machine Learning</li>
                        <li>• Docker & Linux</li>
                        <li>• Web Development</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Experience</h4>
                      <ul className="space-y-1 text-gray-400">
                        <li>• ML Engineering</li>
                        <li>• System Automation</li>
                        <li>• Full-Stack Dev</li>
                        <li>• DevOps</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Download Actions */}
              <div className="space-y-6">
                <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Get My Resume
                  </h4>
                  <div className="space-y-4">
                    <motion.a
                      href="/Ayush_Resume.pdf"
                      download
                      className="w-full bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      data-cursor-hover
                    >
                      <Download className="w-5 h-5" />
                      Download PDF
                    </motion.a>
                    
                    <motion.a
                      href="/Ayush_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      data-cursor-hover
                    >
                      <ExternalLink className="w-5 h-5" />
                      View Online
                    </motion.a>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-gray-400 text-sm">
                    Last updated: December 2024
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;