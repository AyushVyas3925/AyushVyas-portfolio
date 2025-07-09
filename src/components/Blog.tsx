import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, User, X, ExternalLink } from 'lucide-react';

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedBlog, setSelectedBlog] = useState<number | null>(null);

  const blogs = [
    {
      id: 1,
      title: "Running Selenium Tool Tests in Docker",
      excerpt: "A beginner-friendly guide to containerizing Selenium tests for better consistency and scalability",
      content: "Learn how to run Selenium automated tests inside Docker containers. This comprehensive guide covers setting up Docker environments for Selenium, handling browser drivers, managing test execution, and ensuring consistent results across different environments. Perfect for beginners looking to improve their testing workflows with containerization.",
      author: "Ayush Vyas",
      date: "2024-12-20",
      readTime: "6 min read",
      category: "Docker",
      image: "https://images.pexels.com/photos/6804579/pexels-photo-6804579.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://medium.com/@s.ayushvyas3925/running-selenium-tool-tests-in-docker-a-beginner-friendly-guide-448384089596"
    },
    {
      id: 2,
      title: "How Companies Are Leveraging Docker",
      excerpt: "Real-world case studies showing Docker implementation in enterprise environments",
      content: "Explore how major companies are using Docker to solve real business problems. This article presents detailed case studies from various industries, showing practical Docker implementations, the challenges faced, and the benefits achieved. Learn from real-world examples of containerization strategies, deployment patterns, and operational improvements that companies have experienced with Docker adoption.",
      author: "Ayush Vyas",
      date: "2024-12-18",
      readTime: "10 min read",
      category: "Docker",
      image: "https://images.pexels.com/photos/6804579/pexels-photo-6804579.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://medium.com/@s.ayushvyas3925/how-companies-are-leveraging-docker-real-world-case-studies-64cdb3bbc4ff"
    },
    {
      id: 3,
      title: "Adding More Terminals and GUI Interfaces in Linux",
      excerpt: "Enhance your Linux experience with multiple terminal options and GUI customizations",
      content: "Discover how to expand your Linux desktop environment with additional terminal emulators and GUI interfaces. This comprehensive guide covers installing and configuring various terminal applications, customizing desktop environments, and setting up multiple GUI options for different use cases. Learn about terminal multiplexers, window managers, and desktop environment customization to create a more productive Linux workflow.",
      author: "Ayush Vyas",
      date: "2024-12-16",
      readTime: "8 min read",
      category: "Linux",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://medium.com/@s.ayushvyas3925/to-add-more-terminals-and-gui-interfaces-in-linux-a47b89ef20c4"
    }
  ];

  return (
    <section id="blog" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
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
            Latest <span className="text-purple-500">Blog Posts</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Insights and tutorials on modern development practices
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 20px 40px rgba(217, 87, 255, 0.2)' 
              }}
              onClick={() => setSelectedBlog(blog.id)}
              data-cursor-hover
            >
              <div className="relative overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {blog.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{blog.date}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold font-sora mb-2 text-white line-clamp-2">
                  {blog.title}
                </h3>
                
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-teal-400">
                    {blog.readTime}
                  </span>
                  <motion.button
                    className="text-purple-500 hover:text-purple-400 transition-colors"
                    whileHover={{ scale: 1.1, x: 5 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(blog.link, '_blank');
                    }}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Blog Modal */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedBlog(null)}
          >
            <motion.div
              className="bg-black/95 border border-white/20 rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const blog = blogs.find(b => b.id === selectedBlog);
                if (!blog) return null;

                return (
                  <>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {blog.category}
                        </span>
                        <span className="text-gray-400 text-sm">
                          {blog.readTime}
                        </span>
                      </div>
                      <button
                        onClick={() => setSelectedBlog(null)}
                        className="text-gray-400 hover:text-white transition-colors"
                        data-cursor-hover
                      >
                        <X size={24} />
                      </button>
                    </div>
                    
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-64 object-cover rounded-lg mb-6"
                    />
                    
                    <h1 className="text-3xl font-bold font-sora text-white mb-4">
                      {blog.title}
                    </h1>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{blog.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{blog.date}</span>
                      </div>
                    </div>
                    
                    <div className="prose prose-invert max-w-none">
                      <p className="text-gray-300 leading-relaxed text-lg">
                        {blog.content}
                      </p>
                      
                      <div className="mt-6 pt-6 border-t border-white/10">
                        <motion.a
                          href={blog.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-colors font-medium"
                          whileHover={{ scale: 1.05 }}
                          data-cursor-hover
                        >
                          <ExternalLink size={20} />
                          Read Full Article on Medium
                        </motion.a>
                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Blog;