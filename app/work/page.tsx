'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github, VideoOff, Linkedin } from 'lucide-react';
import FadeInSection from '@/components/FadeInSection';
import { motion, AnimatePresence } from 'framer-motion';

const SLIDE_STORAGE_KEY = 'work-current-slide';

export default function Work() {
  const [currentSlide, setCurrentSlide] = useState(() => {
    if (typeof window === 'undefined') return 0;
    const saved = sessionStorage.getItem(SLIDE_STORAGE_KEY);
    return saved !== null ? Number(saved) : 0;
  });
  const totalSlides = 2;

  useEffect(() => {
    sessionStorage.setItem(SLIDE_STORAGE_KEY, String(currentSlide));
  }, [currentSlide]);

  const projects = [
    {
      title: "SportsClub Management",
      problem: "A Java application for managing a sports club.",
      features: [
        "Java console application",
        "Developed with IntelliJ IDEA"
      ],
      techStack: "Java",
      liveLink: null,
      githubLink: "https://github.com/SandamiUpeksha/SportsClub-Management",
      linkedinLink: null,
      status: "In Progress",
      type: "Individual"
    },
    // Example entry - replace with a real project
    {
      title: "Example: Student Task Manager",
      problem: "Example: A web app that helps students organise assignments and deadlines in one place.",
      features: [
        "Example: Add, edit and delete tasks",
        "Example: Deadline reminders",
        "Example: Filter tasks by subject"
      ],
      techStack: "Example: React, Node.js, MongoDB",
      liveLink: null,     // optional: "https://..."
      githubLink: null,   // optional: "https://github.com/SandamiUpeksha/..."
      linkedinLink: null, // optional: "https://www.linkedin.com/posts/..."
      status: "Completed", // "Completed" or "In Progress"
      type: "Individual"   // "Individual" or "Group"
    },
    // Fill me - copy this block for each new project
    {
      title: "Fill me: Project title",
      problem: "Fill me: What problem does this project solve?",
      features: [
        "Fill me: Feature 1",
        "Fill me: Feature 2"
      ],
      techStack: "Fill me: Technologies used",
      liveLink: null,
      githubLink: null,
      linkedinLink: null,
      status: "In Progress",
      type: "Individual"
    }
  ];

  const research = [
    // Example entry - replace with real research
    {
      title: "Example: Predicting Crop Yield with Machine Learning",
      year: "2026",
      venue: "Example: Undergraduate Research Symposium, University of Peradeniya",
      description: "Example: Compared several machine-learning models to predict crop yield from weather and soil data.",
      techStack: "Example: Python, scikit-learn, pandas",
      githubLink: null,   // optional: "https://github.com/..."
      linkedinLink: null, // optional: "https://www.linkedin.com/posts/..."
      status: "Published"  // "Published", "Completed" or "In Progress"
    },
    // Fill me - copy this block for each new research item
    {
      title: "Fill me: Research title",
      year: "Fill me: Year",
      venue: "Fill me: Where it was published or presented",
      description: "Fill me: Short summary of the research.",
      techStack: "Fill me: Methods and tools used",
      githubLink: null,
      linkedinLink: null,
      status: "In Progress"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getTitle = () => {
    switch (currentSlide) {
      case 0: return "Projects";
      case 1: return "Research";
      default: return "Projects";
    }
  };

  const getSubtitle = () => {
    switch (currentSlide) {
      case 0: return "Featured work and personal projects";
      case 1: return "Publications and ongoing research";
      default: return "Featured work and personal projects";
    }
  };

  return (
    <div className="container mx-auto px-6 pt-10 pb-16 relative">
      {/* Slider Controls - Fixed Position */}
      <div className="absolute top-4 right-6 flex items-center space-x-4 text-lg z-10">
        <button onClick={prevSlide} className="hover:text-white transition-colors">
          <ChevronLeft size={24} />
        </button>
        <span className="text-2xl sm:text-3xl md:text-4xl font-light">{String(currentSlide + 1).padStart(2, '0')}</span>
        <span className="text-gray-400">/ {String(totalSlides).padStart(2, '0')}</span>
        <button onClick={nextSlide} className="hover:text-white transition-colors">
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <div className="mb-12">
            <motion.h1
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4"
            >
              {getTitle()}
            </motion.h1>
            <motion.p
              key={`subtitle-${currentSlide}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl font-light text-gray-300"
            >
              {getSubtitle()}
            </motion.p>
          </div>
        </FadeInSection>

        <AnimatePresence mode="wait">
          {/* Slide 0 - Projects */}
          {currentSlide === 0 && (
            <motion.div
              key="slide-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-8">
                {projects.map((project, index) => (
                  <FadeInSection key={index} delay={index * 0.05}>
                    <div className="bg-black bg-opacity-40 backdrop-blur-md rounded-lg p-8 shadow-xl shadow-white/20 transition-all duration-300">
                      {/* Title and Status */}
                      <div className="flex justify-between items-start mb-4 text-2xl font-light mb-6 text-black border-b border-white border-opacity-20 pb-3">
                        <h2 className="text-2xl sm:text-2xl md:text-3xl font-light text-white">
                          {project.title}
                        </h2>
                        <span className="flex items-center gap-2 shrink-0">
                          {project.type && (
                            <span className="px-2 py-0.5 sm:px-4 sm:py-1 rounded-full text-xs sm:text-sm font-light border border-blue-500 text-blue-400 bg-gradient-to-r from-blue-500/20 to-cyan-500/20">
                              {project.type}
                            </span>
                          )}
                          <span className={`px-2 py-0.5 sm:px-4 sm:py-1 rounded-full text-xs sm:text-sm font-light border ${
                            project.status === 'Completed'
                              ? 'border-green-500 text-green-400 bg-gradient-to-r from-green-500/20 to-emerald-500/20'
                              : project.status === 'In Progress'
                              ? 'border-orange-500 text-orange-400 bg-gradient-to-r from-orange-500/20 to-amber-500/20'
                              : 'border-white border-opacity-20 text-white bg-white bg-opacity-10'
                          }`}>
                            {project.status}
                          </span>
                        </span>
                      </div>

                      {/* Problem Statement */}
                      <div className="mb-6">
                        <h3 className="text-sm font-light text-gray-400 mb-2">Problem Statement</h3>
                        <p className="text-gray-200 font-light leading-relaxed">
                          {project.problem}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <h3 className="text-sm font-light text-gray-400 mb-3">Key Features</h3>
                        <ul className="space-y-2">
                          {project.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="text-gray-200 font-light flex items-start"
                            >
                              <span className="text-white mr-2">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack */}
                      <div className="mb-6 pb-6 relative">
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>
                        <h3 className="text-sm font-light text-gray-400 mb-2">Tech Stack</h3>
                        <p className="text-white font-light">
                          {project.techStack}
                        </p>
                      </div>

                      {/* Links */}
                      <div className="flex flex-wrap gap-4">
                        {project.liveLink ? (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-white font-light hover:text-gray-300 transition-colors"
                          >
                            <ExternalLink size={18} />
                            <span>Live Demo</span>
                          </a>
                        ) : (
                          <span className="flex items-center space-x-2 text-gray-400 font-light">
                            <VideoOff size={18} />
                            <span>Demo not available</span>
                          </span>
                        )}

                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-white font-light hover:text-gray-300 transition-colors"
                          >
                            <Github size={18} />
                            <span>Github</span>
                          </a>
                        )}

                        {project.linkedinLink && (
                          <a
                            href={project.linkedinLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-white font-light hover:text-blue-400 transition-colors"
                          >
                            <Linkedin size={18} />
                            <span>LinkedIn Post</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </FadeInSection>
                ))}
              </div>
            </motion.div>
          )}

          {/* Slide 1 - Research */}
          {currentSlide === 1 && (
            <motion.div
              key="slide-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-8">
                {research.map((item, index) => (
                  <FadeInSection key={index} delay={index * 0.05}>
                    <div className="bg-black bg-opacity-40 backdrop-blur-md rounded-lg p-8 shadow-xl shadow-white/20 transition-all duration-300">
                      {/* Title and Status */}
                      <div className="flex justify-between items-start mb-4 text-2xl font-light mb-6 text-black border-b border-white border-opacity-20 pb-3">
                        <h2 className="text-2xl sm:text-2xl md:text-3xl font-light text-white">
                          {item.title}
                        </h2>
                        <span className="flex items-center gap-2 shrink-0">
                          {item.year && (
                            <span className="text-gray-400 text-xs sm:text-sm font-light">
                              {item.year}
                            </span>
                          )}
                          <span className={`px-2 py-0.5 sm:px-4 sm:py-1 rounded-full text-xs sm:text-sm font-light border ${
                            item.status === 'Published'
                              ? 'border-blue-500 text-blue-400 bg-gradient-to-r from-blue-500/20 to-cyan-500/20'
                              : item.status === 'Completed'
                              ? 'border-green-500 text-green-400 bg-gradient-to-r from-green-500/20 to-emerald-500/20'
                              : item.status === 'In Progress'
                              ? 'border-orange-500 text-orange-400 bg-gradient-to-r from-orange-500/20 to-amber-500/20'
                              : 'border-white border-opacity-20 text-white bg-white bg-opacity-10'
                          }`}>
                            {item.status}
                          </span>
                        </span>
                      </div>

                      {/* Venue */}
                      <p className="text-gray-400 italic font-light mb-4">
                        {item.venue}
                      </p>

                      {/* Description */}
                      <div className="mb-6">
                        <h3 className="text-sm font-light text-gray-400 mb-2">Details</h3>
                        <p className="text-gray-200 font-light leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Tech Stack */}
                      <div className="mb-6 pb-6 relative">
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>
                        <h3 className="text-sm font-light text-gray-400 mb-2">Tech Stack</h3>
                        <p className="text-white font-light">
                          {item.techStack}
                        </p>
                      </div>

                      {/* Links */}
                      <div className="flex flex-wrap gap-4">
                        {item.githubLink && (
                          <a
                            href={item.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-white font-light hover:text-gray-300 transition-colors"
                          >
                            <Github size={18} />
                            <span>Github</span>
                          </a>
                        )}

                        {item.linkedinLink && (
                          <a
                            href={item.linkedinLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-white font-light hover:text-blue-400 transition-colors"
                          >
                            <Linkedin size={18} />
                            <span>LinkedIn Post</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </FadeInSection>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
