'use client';

import { Linkedin } from 'lucide-react';
import FadeInSection from '@/components/FadeInSection';

export default function Achievements() {
  const achievements = [
    // Example entry - replace with a real achievement
    {
      name: "Example: Hackathon 2025",
      result: "Example: 1st Place",
      context: "Example: Won first place among 50+ teams in a 24-hour university hackathon.",
      linkedinLink: "" // optional: paste a LinkedIn post URL
    },
    // Fill me - copy this block for each new achievement
    {
      name: "Fill me: Achievement name",
      result: "Fill me: Result",
      context: "Fill me: Short description of the achievement.",
      linkedinLink: ""
    }
  ];

  return (
    <div className="container mx-auto px-6 pt-10 pb-16">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4">Achievements</h1>
          <p className="text-base sm:text-lg md:text-xl font-light text-gray-300 mb-12">
            Competitions, awards, and recognitions
          </p>
        </FadeInSection>

        <div className="space-y-8">
          {achievements.map((achievement, index) => (
            <FadeInSection key={index} delay={index * 0.05}>
              <div className="bg-black bg-opacity-40 backdrop-blur-md rounded-lg p-8 shadow-xl shadow-white/20 transition-all duration-300">
              {/* Name and Result */}
              <div className="flex flex-wrap justify-between items-start mb-4 pb-4 relative border-b">
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
                <h2 className="text-2xl sm:text-2xl md:text-3xl font-light text-white mb-2 md:mb-0">
                  {achievement.name} 
                </h2>
                <span className="px-2 py-0.5 sm:px-4 sm:py-1 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-500 text-yellow-400 rounded-full text-xs sm:text-sm font-light">
                  {achievement.result}
                </span>
              </div>
              
              {/* Context */}
              <div className="mb-6">
                <p className="text-gray-200 font-light leading-relaxed">
                  {achievement.context}
                </p>
              </div>

              {/* LinkedIn Link */}
              {achievement.linkedinLink && (
                <div>
                  <a
                    href={achievement.linkedinLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-white font-light hover:text-gray-300 transition-colors"
                  >
                    <Linkedin size={18} />
                    <span>View on LinkedIn</span>
                  </a>
                </div>
              )}
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </div>
  );
}
