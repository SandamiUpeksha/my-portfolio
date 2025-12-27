'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Skills() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const skills = [
    {
      category: "Programming Languages",
      items: ["JavaScript", "TypeScript", "Python", "Java", "C++"]
    },
    {
      category: "Web Development",
      items: ["React", "Next.js", "Node.js", "HTML/CSS", "Tailwind CSS"]
    },
    {
      category: "Tools & Technologies",
      items: ["Git", "Docker", "VS Code", "Figma", "Adobe Creative Suite"]
    },
    {
      category: "Engineering Skills",
      items: ["CAD Design", "Circuit Design", "Data Analysis", "Problem Solving"]
    }
  ];

  const languages = [
    { name: "Sinhala", level: 95 },
    { name: "English", level: 80 },
    { name: "Tamil", level: 30 }
  ];

  const softSkills = [
    "Teamwork", "Leadership", "Friendship", "Communication", 
    "Problem Solving", "Time Management", "Adaptability", "Creativity"
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getSubtitle = () => {
    switch(currentSlide) {
      case 0: return "Technical expertise and capabilities";
      case 1: return "Academic journey and achievements";
      case 2: return "Languages and interpersonal abilities";
      default: return "Technical expertise and capabilities";
    }
  };

  return (
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
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-light mb-4">Skills</h1>
          <p className="text-xl font-light text-gray-300">
            {getSubtitle()}
          </p>
        </div>

        {/* Slide 1 - Technical Skills */}
        <div className={`transition-all duration-700 ${currentSlide === 0 ? 'opacity-100 translate-x-0 block' : 'opacity-0 translate-x-10 pointer-events-none hidden'}`}>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillSet, index) => (
              <div 
                key={index}
                className="bg-black bg-opacity-40 backdrop-blur-md rounded-lg p-8 shadow-xl shadow-white/20 hover:shadow-white/30 transition-all duration-300"
              >
                <h2 className="text-2xl font-light mb-6 text-white border-b border-white border-opacity-20 pb-3">
                  {skillSet.category}
                </h2>
                <div className="flex flex-wrap gap-3">
                  {skillSet.items.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-4 py-2 bg-white/10 text-white rounded-full text-sm font-light hover:bg-white/20 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide 2 - Education */}
        <div className={`transition-all duration-700 ${currentSlide === 1 ? 'opacity-100 translate-x-0 block' : 'opacity-0 translate-x-10 pointer-events-none hidden'}`}>
          <div className="space-y-6">
            {/* School Education */}
            <div className="bg-black bg-opacity-40 backdrop-blur-md rounded-lg p-8 shadow-xl shadow-white/20">
              <h2 className="text-2xl font-light mb-6 text-white border-b border-white border-opacity-20 pb-3">
                School Education
              </h2>
              <div className="space-y-4 font-light">
                <div>
                  <h3 className="text-xl text-white mb-2">Kingswood College Kandy</h3>
                  <p className="text-gray-400 text-sm mb-4">2008 - 2022</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg text-white mb-2">GCE O/L (2019)</h4>
                    <p className="text-gray-300">Obtained <span className="text-white font-normal">9 As</span></p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg text-white mb-2">GCE A/L (2022)</h4>
                    <p className="text-gray-300">Physical Science Stream</p>
                    <p className="text-gray-300">Obtained <span className="text-white font-normal">3 As</span></p>
                    <p className="text-gray-300">Z-Score: <span className="text-white font-normal">2.5895</span> | IR: <span className="text-white font-normal">152</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Diploma */}
            <div className="bg-black bg-opacity-40 backdrop-blur-md rounded-lg p-8 shadow-xl shadow-white/20">
              <h2 className="text-2xl font-light mb-6 text-white border-b border-white border-opacity-20 pb-3">
                Diploma in IT and English
              </h2>
              <div className="font-light">
                <h3 className="text-xl text-white mb-2">ESOFT</h3>
                <p className="text-gray-400 text-sm">March 2023 - January 2024</p>
              </div>
            </div>

            {/* University */}
            <div className="bg-black bg-opacity-40 backdrop-blur-md rounded-lg p-8 shadow-xl shadow-white/20">
              <h2 className="text-2xl font-light mb-6 text-white border-b border-white border-opacity-20 pb-3">
                University Education
              </h2>
              <div className="font-light space-y-3">
                <h3 className="text-xl text-white mb-2">Computer Science Engineering</h3>
                <h4 className="text-lg text-gray-300 mb-2">University of Moratuwa</h4>
                <p className="text-gray-400 text-sm mb-3">Since March 2024</p>
                <div className="space-y-2">
                  <p className="text-gray-300">CGPA: <span className="text-white font-normal">3.8</span></p>
                  <p className="text-gray-300">Dean's List: <span className="text-white font-normal">Semester 1, Semester 2</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3 - Languages & Soft Skills */}
        <div className={`transition-all duration-700 ${currentSlide === 2 ? 'opacity-100 translate-x-0 block' : 'opacity-0 translate-x-10 pointer-events-none hidden'}`}>
          <div className="space-y-8">
            {/* Languages */}
            <div className="bg-black bg-opacity-40 backdrop-blur-md rounded-lg p-8 shadow-xl shadow-white/20">
              <h2 className="text-2xl font-light mb-6 text-white border-b border-white border-opacity-20 pb-3">
                Languages
              </h2>
              <div className="space-y-6">
                {languages.map((lang, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-light text-lg">{lang.name}</span>
                      <span className="text-gray-400 font-light">{lang.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-gray via-gray-200 to-gray-400 h-3 rounded-full transition-all duration-1000 ease-out shadow-lg shadow-white/30"
                        style={{ width: currentSlide === 2 ? `${lang.level}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-black bg-opacity-40 backdrop-blur-md rounded-lg p-8 shadow-xl shadow-white/20">
              <h2 className="text-2xl font-light mb-6 text-white border-b border-white border-opacity-20 pb-3">
                Other Skills
              </h2>
              <div className="flex flex-wrap gap-3 mb-8">
                {softSkills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-white/10 text-white rounded-full text-sm font-light hover:bg-white/20 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              {/* Skill Icons/Visuals */}
              <div className="grid grid-cols-4 gap-4 pt-6 border-t border-white border-opacity-20">
                <div className="aspect-square bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 transition-all duration-300">
                  <span className="text-4xl">🤝</span>
                </div>
                <div className="aspect-square bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 transition-all duration-300">
                  <span className="text-4xl">💡</span>
                </div>
                <div className="aspect-square bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 transition-all duration-300">
                  <span className="text-4xl">🎯</span>
                </div>
                <div className="aspect-square bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 transition-all duration-300">
                  <span className="text-4xl">⚡</span>
                </div>
                <div className="aspect-square bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 transition-all duration-300">
                  <span className="text-4xl">🚀</span>
                </div>
                <div className="aspect-square bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 transition-all duration-300">
                  <span className="text-4xl">💬</span>
                </div>
                <div className="aspect-square bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 transition-all duration-300">
                  <span className="text-4xl">🎨</span>
                </div>
                <div className="aspect-square bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 transition-all duration-300">
                  <span className="text-4xl">⏱️</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
