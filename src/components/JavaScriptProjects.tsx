import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Camera, 
  Mail, 
  MessageCircle, 
  Video, 
  MapPin, 
  Navigation, 
  Store, 
  Inbox, 
  Share2, 
  Eye, 
  Globe,
  X,
  Github,
  ExternalLink
} from 'lucide-react';

const JavaScriptProjects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Take Photo Using JavaScript",
      description: "Access webcam and capture photos using JavaScript MediaDevices API",
      icon: <Camera className="w-8 h-8" />,
      category: "Media",
      tech: ["JavaScript", "WebRTC", "Canvas API"],
      details: "Create a JavaScript function to access the webcam and capture a photo using the getUserMedia API. Includes camera permissions, photo preview, and download functionality.",
      github: "https://github.com/AyushVyas3925/javaScriptproj/blob/main/task1.html"
    },
    {
      id: 2,
      title: "Send Email Using JavaScript",
      description: "Send emails through JavaScript using EmailJS or backend API integration",
      icon: <Mail className="w-8 h-8" />,
      category: "Communication",
      tech: ["JavaScript", "EmailJS", "API"],
      details: "Use EmailJS or a backend API to send email through a JavaScript-based interface. Includes form validation, email templates, and delivery confirmation.",
      github: "https://github.com/AyushVyas3925/javaScriptproj/blob/main/task2.html"
    },
    {
      id: 3,
      title: "Send Captured Photo to Email",
      description: "Capture photos and automatically send them via email service API",
      icon: <Camera className="w-8 h-8" />,
      category: "Media",
      tech: ["JavaScript", "File API", "Email API"],
      details: "After capturing the photo, attach and send it via email using an email service API. Combines camera functionality with email delivery.",
      github: "https://github.com/AyushVyas3925/javaScriptproj/blob/main/sendpng/form.html"
    },
    {
      id: 4,
      title: "Record Video & Send via Email",
      description: "Record video on button click and send through email using MediaRecorder API",
      icon: <Video className="w-8 h-8" />,
      category: "Media",
      tech: ["JavaScript", "MediaRecorder", "Blob API"],
      details: "Use JS MediaRecorder API to record video, then send it via email. Includes start/stop recording controls and video compression.",
      github: "https://github.com/AyushVyas3925/javaScriptproj/blob/main/task4/uploads/video.html"
    },
    {
      id: 5,
      title: "Send WhatsApp Message",
      description: "Initiate WhatsApp messages using JavaScript and WhatsApp web URL scheme",
      icon: <MessageCircle className="w-8 h-8" />,
      category: "Communication",
      tech: ["JavaScript", "WhatsApp API", "URL Scheme"],
      details: "Use WhatsApp web URL scheme or API to initiate a WhatsApp message from JS. Includes contact validation and message formatting.",
      github: "https://github.com/AyushVyas3925/javaScriptproj/blob/main/task5.html"
    },
    {
      id: 6,
      title: "Send SMS Using JavaScript",
      description: "Send SMS messages using Twilio API integration with JavaScript",
      icon: <MessageCircle className="w-8 h-8" />,
      category: "Communication",
      tech: ["JavaScript", "Twilio API", "Backend"],
      details: "Use Twilio API with JS or backend to send an SMS. Includes phone number validation and delivery status tracking.",
      github: "https://github.com/AyushVyas3925/javaScriptproj/blob/main/task6/sms.html"
    },
    {
      id: 7,
      title: "Show Current Geo Location",
      description: "Fetch and display user's live location using JavaScript geolocation API",
      icon: <MapPin className="w-8 h-8" />,
      category: "Location",
      tech: ["JavaScript", "Geolocation API", "GPS"],
      details: "Use JS navigator.geolocation to fetch the user's live location. Includes accuracy settings and error handling for location access.",
      github: "https://github.com/AyushVyas3925/javaScriptproj/blob/main/task7.html"
    },
    {
      id: 8,
      title: "Live Location on Google Maps",
      description: "Integrate Google Maps API to show user's real-time location",
      icon: <Navigation className="w-8 h-8" />,
      category: "Location",
      tech: ["JavaScript", "Google Maps API", "Real-time"],
      details: "Integrate Google Maps API to show user's real-time location. Includes map customization and live location updates.",
      github: "https://github.com/AyushVyas3925/javaScriptproj/blob/main/task7.html"
    },
    {
      id: 9,
      title: "Route to Destination",
      description: "Plot routes from current location to destination using Directions API",
      icon: <Navigation className="w-8 h-8" />,
      category: "Location",
      tech: ["JavaScript", "Directions API", "Routing"],
      details: "Use Google Maps Directions API to plot the route. Includes multiple route options and turn-by-turn navigation.",
      github: "https://github.com/AyushVyas3925/javaScriptproj/blob/main/task8.html"
    },
    {
      id: 10,
      title: "Nearby Grocery Stores",
      description: "Find and display nearby grocery stores using Google Maps Places API",
      icon: <Store className="w-8 h-8" />,
      category: "Location",
      tech: ["JavaScript", "Places API", "Search"],
      details: "Use Google Maps Places API to find and display nearby grocery stores. Includes store ratings, hours, and contact information.",
      github: "https://github.com/AyushVyas3925/javaScriptproj/blob/main/task9.html"
    },
    {
      id: 11,
      title: "Fetch Last Email from Gmail",
      description: "Read and display information from the last received Gmail email",
      icon: <Inbox className="w-8 h-8" />,
      category: "Communication",
      tech: ["JavaScript", "Gmail API", "OAuth"],
      details: "Use Gmail API (OAuth required) to read and display info from the last received email. Includes authentication and email parsing.",
      github: "https://github.com/AyushVyas3925/javaScriptproj/tree/main"
    },
    {
      id: 12,
      title: "Post to Social Media",
      description: "Automate social media posting from Chrome browser to various platforms",
      icon: <Share2 className="w-8 h-8" />,
      category: "Social",
      tech: ["JavaScript", "Social APIs", "Automation"],
      details: "Use browser automation or social media APIs to post to Instagram, X (Twitter), etc. Includes content scheduling and multi-platform support.",
      github: "https://github.com/AyushVyas3925/javaScriptproj/tree/main"
    },
    {
      id: 13,
      title: "Product Recommendation System",
      description: "Track most viewed products and show personalized recommendations",
      icon: <Eye className="w-8 h-8" />,
      category: "Analytics",
      tech: ["JavaScript", "LocalStorage", "Analytics"],
      details: "Monitor which product is viewed most and suggest it. Track skipped products and use view time for personalized reports.",
      github: "https://github.com/AyushVyas3925/javaScriptproj/tree/main"
    },
    {
      id: 14,
      title: "IP Address & Location Tracker",
      description: "Get user's IP address and location information on website interaction",
      icon: <Globe className="w-8 h-8" />,
      category: "Analytics",
      tech: ["JavaScript", "IP API", "Geolocation"],
      details: "On website click, get user's IP address and location (city, state, country). Show message like: 'Your current IP address is _ and your location is _.'",
      github: "https://github.com/AyushVyas3925/javaScriptproj/tree/main"
    }
  ];

  const categories = ["All", "Media", "Communication", "Location", "Social", "Analytics"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const getCategoryColor = (category: string) => {
    const colors = {
      "Media": "from-yellow-500/20 to-orange-500/20 border-yellow-500/30",
      "Communication": "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
      "Location": "from-green-500/20 to-emerald-500/20 border-green-500/30",
      "Social": "from-pink-500/20 to-purple-500/20 border-pink-500/30",
      "Analytics": "from-indigo-500/20 to-violet-500/20 border-indigo-500/30"
    };
    return colors[category as keyof typeof colors] || "from-gray-500/20 to-gray-600/20 border-gray-500/30";
  };

  const getCategoryIconColor = (category: string) => {
    const colors = {
      "Media": "text-yellow-400",
      "Communication": "text-blue-400",
      "Location": "text-green-400",
      "Social": "text-pink-400",
      "Analytics": "text-indigo-400"
    };
    return colors[category as keyof typeof colors] || "text-gray-400";
  };

  return (
    <section id="javascript-projects" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
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
            JavaScript <span className="text-purple-500">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Interactive web applications and browser-based solutions
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-yellow-500 text-black'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-cursor-hover
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`bg-gradient-to-br ${getCategoryColor(project.category)} backdrop-blur-sm border rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group cursor-pointer`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(255, 193, 7, 0.2)' 
              }}
              onClick={() => setSelectedProject(project.id)}
              data-cursor-hover
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 bg-white/10 ${getCategoryIconColor(project.category)}`}>
                {project.icon}
              </div>
              
              <div className="mb-3">
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getCategoryIconColor(project.category)} bg-white/10`}>
                  {project.category}
                </span>
              </div>
              
              <h3 className="text-lg font-bold font-sora mb-2 text-white group-hover:text-yellow-400 transition-colors line-clamp-2">
                {project.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {project.tech.slice(0, 2).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 2 && (
                  <span className="text-gray-400 text-xs px-2 py-1">
                    +{project.tech.length - 2}
                  </span>
                )}
              </div>
              
              <div className="flex items-center justify-between">
                <motion.button
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-yellow-400 hover:text-yellow-300"
                  whileHover={{ scale: 1.1 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.github, '_blank');
                  }}
                  data-cursor-hover
                >
                  <Github className="w-5 h-5" />
                </motion.button>
                <motion.div
                  className="text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <ExternalLink className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-black/95 border border-white/20 rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const project = projects.find(p => p.id === selectedProject);
                if (!project) return null;

                return (
                  <>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${getCategoryIconColor(project.category)} bg-white/10`}>
                          {project.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold font-sora text-white">
                            {project.title}
                          </h3>
                          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryIconColor(project.category)} bg-white/10 mt-1`}>
                            {project.category}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="text-gray-400 hover:text-white transition-colors"
                        data-cursor-hover
                      >
                        <X size={24} />
                      </button>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.details}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg transition-colors font-medium"
                        whileHover={{ scale: 1.05 }}
                        data-cursor-hover
                      >
                        <Github size={20} />
                        View Code
                      </motion.a>
                      <motion.button
                        className="flex items-center gap-2 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-4 py-2 rounded-lg transition-colors font-medium"
                        whileHover={{ scale: 1.05 }}
                        data-cursor-hover
                      >
                        <ExternalLink size={20} />
                        Live Demo
                      </motion.button>
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

export default JavaScriptProjects;