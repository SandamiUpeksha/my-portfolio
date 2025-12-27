import { Linkedin } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      name: "Google Hash Code 2024",
      result: "Top 5%",
      context: "Solved algorithm problems in a team of 4 using Python and Graph Algorithms",
      linkedinLink: "https://linkedin.com/posts/username/hash-code-2024"
    },
    {
      name: "IEEE Hackathon 2024",
      result: "Winner",
      context: "Built a working IoT prototype under time pressure for smart agriculture",
      linkedinLink: "https://linkedin.com/posts/username/ieee-hackathon"
    },
    {
      name: "National Engineering Competition",
      result: "Rank #27",
      context: "Developed an optimized solution for routing problem using advanced algorithms",
      linkedinLink: "https://linkedin.com/posts/username/eng-competition"
    },
    {
      name: "Kaggle Competition - ML Challenge",
      result: "Completed with Silver Badge",
      context: "Built machine learning model for predictive analytics with 92% accuracy",
      linkedinLink: "https://linkedin.com/posts/username/kaggle-ml"
    },
    {
      name: "University Coding Marathon",
      result: "Finalist",
      context: "Solved complex algorithmic challenges demonstrating problem-solving skills",
      linkedinLink: "https://linkedin.com/posts/username/coding-marathon"
    }
  ];

  return (
    <div className="container mx-auto px-6 pt-20 pb-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-light mb-4">Achievements</h1>
        <p className="text-xl font-light text-gray-300 mb-12">
          Competitions, awards, and recognitions
        </p>

        <div className="space-y-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-black bg-opacity-40 backdrop-blur-md rounded-lg p-8 shadow-xl shadow-white/20 hover:shadow-white/30 transition-all duration-300"
            >
              {/* Name and Result */}
              <div className="flex flex-wrap justify-between items-start mb-4 pb-4 relative border-b">
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
                <h2 className="text-3xl font-light text-white mb-2 md:mb-0">
                  {achievement.name} 
                </h2>
                <span className="px-4 py-1 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-500 text-yellow-400 rounded-full text-sm font-light">
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
          ))}
        </div>
      </div>
    </div>
  );
}
