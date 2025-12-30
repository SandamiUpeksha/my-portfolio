'use client';

import { Linkedin } from 'lucide-react';
import FadeInSection from '@/components/FadeInSection';

export default function Achievements() {
  const achievements = [
    {
      name: "University Academic Achievements",
      result: "Dean list",
      context: "I could perform my academics to be in the Dean lists in semester 1, semester 2",
      linkedinLink: ""
    },
    {
      name: "CodeAréna ’25",
      result: "Finalist",
      context: "This is a programing competition which was organized by KDU.",
      linkedinLink: "https://www.linkedin.com/posts/praveen-de-silva-854a732a2_problemsolving-finalists-kdu-activity-7411004597332455424-UlYP?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEkg6AABOq2dXdWOGUX3vzM4-Jm8Pzn8mAg"
    },
    {
      name: "Mini Xtream",
      result: "Rank #9",
      context: "This is a programing competition which had to be participated for all entire 200 of cse 23 students.",
      linkedinLink: "https://www.linkedin.com/posts/praveen-de-silva-854a732a2_thrilled-to-have-placed-in-the-top-10-at-activity-7410997408609775616-IlwR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEkg6AABOq2dXdWOGUX3vzM4-Jm8Pzn8mAg"
    },
    {
      name: "SLIOT '25",
      result: "Finalist",
      context: "This is a IOT based hackathon which was organized by cse batch of University of Moratuwa.",
      linkedinLink: "https://www.linkedin.com/posts/thashira-devindu-49a1b6349_sliotchallenge2025-iot-sltmobitel-ugcPost-7309617829874434048-ljBo?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEkg6AABOq2dXdWOGUX3vzM4-Jm8Pzn8mAg"
    }
  ];

  return (
    <div className="container mx-auto px-6 pt-20 pb-16">
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
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </div>
  );
}
