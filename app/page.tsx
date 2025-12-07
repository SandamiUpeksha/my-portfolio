'use client';

import { useState } from 'react';
import { Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 6;

  const socialFeed = [
    {
      platform: 'Twitter',
      handle: '@DESIGNMEDIUM',
      time: '10 min',
      content: 'Design a new portfolio site with DesignMedium. Live now!'
    },
    {
      platform: 'Twitter',
      handle: '@DESIGNMEDIUM',
      time: '45 min',
      content: 'Will be starting a new design in some time. Stay tuned and don\'t miss out!'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000B4F] via-[#000000] to-[#000B4F] text-white font-sans overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex items-center justify-between">
        <div className="text-2xl font-light">Portfolio</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="hover:text-pink-300 transition-colors border-b border-white pb-1">HOME</a>
          <a href="#about" className="hover:text-pink-300 transition-colors">ABOUT</a>
          <a href="#projects" className="hover:text-pink-300 transition-colors">PROJECTS</a>
          <a href="#blog" className="hover:text-pink-300 transition-colors">BLOG</a>
          <a href="#contact" className="hover:text-pink-300 transition-colors">CONTACT</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-indigo-950 bg-opacity-95 flex flex-col items-center justify-center space-y-8 md:hidden">
          <a href="#home" className="text-2xl hover:text-pink-300 transition-colors">HOME</a>
          <a href="#about" className="text-2xl hover:text-pink-300 transition-colors">ABOUT</a>
          <a href="#projects" className="text-2xl hover:text-pink-300 transition-colors">PROJECTS</a>
          <a href="#blog" className="text-2xl hover:text-pink-300 transition-colors">BLOG</a>
          <a href="#contact" className="text-2xl hover:text-pink-300 transition-colors">CONTACT</a>
        </div>
      )}

      {/* Hero Section */}
      <div className="container mx-auto px-6 pt-32 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-6xl md:text-7xl font-light">Praveen De Silva</h1>
              <p className="text-xl font-light text-pink-200">Bsc ENG UG</p>
            </div>
            
            <button className="px-8 py-3 border border-white rounded-full hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105 font-light">
              Contact
            </button>
          </div>

          {/* Right Content - Profile Image Area */}
          <div className="relative">
            <div className="absolute top-0 right-0 flex items-center space-x-4 text-lg">
              <button onClick={prevSlide} className="hover:text-pink-300 transition-colors">
                <ChevronLeft size={24} />
              </button>
              <span className="text-4xl font-light">{String(currentSlide + 1).padStart(2, '0')}</span>
              <span className="text-gray-400">/ {String(totalSlides).padStart(2, '0')}</span>
              <button onClick={nextSlide} className="hover:text-pink-300 transition-colors">
                <ChevronRight size={24} />
              </button>
            </div>
            
            

            {/* Profile Image Placeholder */}
            <div className="relative h-[32rem] flex items-center justify-center">
              <div className="">
                <img 
                  src="/images/profile2.png" 
                  alt="Chris Doe" 
                  className="w-full h-full object-cover rounded-lg filter hover:brightness-110 transition-all duration-300"
                />
              </div>
            </div>
            
          </div>
        </div>

        {/* Social Feed Section */}
        <div className="mt-16 space-y-4">
          <div className="flex items-center space-x-4 text-sm text-gray-300 mb-6">
            <span className="font-light">SOCIAL</span>
            <a href="#twitter" className="hover:text-pink-300 transition-colors">Twitter</a>
            <span className="text-gray-500">|</span>
            <a href="#dribbble" className="hover:text-pink-300 transition-colors">Dribbble</a>
            <span className="text-gray-500">|</span>
            <a href="#facebook" className="hover:text-pink-300 transition-colors">Facebook</a>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {socialFeed.map((post, index) => (
              <div 
                key={index}
                className="bg-white bg-opacity-5 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-10 transition-all duration-300 border border-white border-opacity-10"
              >
                <div className="flex items-start space-x-3 mb-3">
                  <span className="font-light">{post.handle}</span>
                  <span className="text-gray-400">• {post.time}</span>
                </div>
                <p className="text-gray-200">{post.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}