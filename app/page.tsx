'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeInSection from '@/components/FadeInSection';
import Link from 'next/link';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getSubtitle = () => {
    switch(currentSlide) {
      case 0: return "Full Stack Developer & Engineer";
      case 1: return "My background and journey";
      default: return "Full Stack Developer & Engineer";
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div className="container mx-auto px-6 pt-20 pb-16 relative">
        {/* Slider Controls - Fixed Position */}
        <div className="absolute top-10 right-6 flex items-center space-x-4 text-lg z-10">
          <button onClick={prevSlide} className="hover:text-white transition-colors">
            <ChevronLeft size={24} />
          </button>
          <span className="text-4xl font-light">{String(currentSlide + 1).padStart(2, '0')}</span>
          <span className="text-gray-400">/ {String(totalSlides).padStart(2, '0')}</span>
          <button onClick={nextSlide} className="hover:text-white transition-colors">
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Grid - Header and Image at Same Level */}
          <div className="grid md:grid-cols-2 md:gap-12  items-start">
            {/* Left - Header Content */}
            <FadeInSection delay={0.2}>
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-2">
                  Praveen De Silva t2
                </h1>
                <p className="text-sm sm:text-base md:text-xl font-light text-pink-200 mb-8">
                  Bsc Eng (hons) - University of Moratuwa (UG)
                </p>
                
                <Link href="/contact">
                  <button className="px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 font-light">
                    Contact Me
                  </button>
                </Link>
              </div>
            </FadeInSection>

            {/* Right - Profile Image */}
            <FadeInSection delay={0.4}>
              <div>
                <AnimatePresence mode="wait">
                  {/* Slide 0 - Profile Image */}
                  {currentSlide === 0 && (
                    <motion.div 
                      key="slide-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="relative h-[32rem] flex items-center justify-center">
                        <div className="relative">
                          <img 
                            src="/images/profile2.png" 
                            alt="Praveen De Silva" 
                            className="rounded-lg h-full object-cover"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Slide 1 - About Card */}
                  {currentSlide === 1 && (
                    <motion.div 
                      key="slide-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="relative h-[32rem] flex items-center justify-center">
                        <div className="bg-opacity-5 backdrop-blur-md rounded-lg p-8  border-opacity-20  w-full h-full flex flex-col justify-center">
                          <h2 className="text-3xl font-light text-white mb-6">About Me</h2>
                          <p className="text-lg text-gray-200 font-light leading-relaxed mb-4 text-justify">
                            I'm a passionate engineering undergraduate pursuing my BSc in Engineering, dedicated to innovation and creative problem-solving.
                          </p>
                          <p className="text-lg text-gray-200 font-light leading-relaxed text-justify">
                            Currently at University of Moratuwa, I combine academic excellence with practical experience.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeInSection>
          </div>

          {/* Slide Content Below for Additional Slides */}
          <div className="grid md:grid-cols-2 gap-12 items-start mt-16">
            {/* Left - Content */}
            <div>

              {/* Slides 1-5 - Content Cards */}
              {/* {[1, 2, 3, 4, 5].map((slideIndex) => (
                <div key={slideIndex} className={`transition-all duration-700 ${currentSlide === slideIndex ? 'opacity-100 translate-x-0 block' : 'opacity-0 translate-x-10 pointer-events-none hidden'}`}>
                  <div className="relative h-[32rem] flex items-center justify-center">
                    <div className="bg-white bg-opacity-5 backdrop-blur-md rounded-lg p-8 border border-white border-opacity-20 shadow-2xl shadow-white/20 max-w-md w-full h-full flex flex-col items-center justify-center text-center">
                      <div className="text-6xl mb-4 text-pink-400">0{slideIndex + 1}</div>
                      <p className="text-gray-200 font-light text-lg">{getSubtitle()}</p>
                    </div>
                  </div>
                </div>
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}