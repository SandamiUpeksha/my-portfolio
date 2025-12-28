'use client';

import { ExternalLink, Github, VideoOff, Linkedin } from 'lucide-react';
import FadeInSection from '@/components/FadeInSection';

export default function Projects() {
  const projects = [
    {
      title: "CoupleCore relationship helper",
      problem: "This is a system that helps to keep relationships more easier.",
      features: [
        "Daily mood tracker", 
        "Share Calender",
        "AI powered solution maker"
      ],
      techStack: "React, Vite, TailwindCSS, Node.js, Express, FastAPI, Python, scikit-learn, MongoDB",
      liveLink: null, // Update with your actual Vercel URL
      githubLink: null, // Update with your actual GitHub URL
      linkedinLink: null,
      status: "In Progress"
    },
    {
      title: "CoupleCoreAI",
      problem: "AI-powered relationship assistant that analyzes couple problems and provides personalized solutions using machine learning.",
      features: [
        "Text-based problem input",
        "ML-powered category prediction (Chores, Finances, Affection)",
        "Personalized solution suggestions",
        "User feedback system",
        "MongoDB logging for analysis"
      ],
      techStack: "React, Vite, TailwindCSS, Node.js, Express, FastAPI, Python, scikit-learn, MongoDB",
      liveLink: "https://couplecore-ai.vercel.app/", // Update with your actual Vercel URL
      githubLink: "https://github.com/praveen-de-silva/Proj_AIPoweredProblemSolver", // Update with your actual GitHub URL
      linkedinLink: "https://www.linkedin.com/posts/praveen-de-silva-854a732a2_se-datascience-ai-activity-7411021923201216512-a6Ua?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEkg6AABOq2dXdWOGUX3vzM4-Jm8Pzn8mAg",
      status: "Completed"
    },
    {
      title: "Dog vs Cat Specifier",
      problem: "Predicts whether an uploaded image is a dog or a cat using deep learning.",
      features: [
            "Uploads image",
            "Runs TensorFlow model",
            "Displays prediction result",
            "Shows confidence score"
      ],
      techStack: "Python, TensorFlow, Streamlit",
      liveLink: "https://dogcatspecifierpds.streamlit.app/",
      githubLink: "https://github.com/username/weather-app",
      linkedinLink: "https://www.linkedin.com/posts/praveen-de-silva-854a732a2_ml-ai-datascience-activity-7411013210624987136-2-i9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEkg6AABOq2dXdWOGUX3vzM4-Jm8Pzn8mAg",
      status: "Completed"
    },
    {
      title: "B-Trust MBMS",
      problem: "Developing a secure, high integrity DBMS for microbanking operations with automated financial logic and role based access.",
      features: [
        "Role-driven dashboards (Admin, Manager, Agent)",
        "Automated interest accrual for Savings and FD via scheduled jobs",
        "Real-time transaction analytics and reporting views",
        "Comprehensive audit logging and database-level triggers"
      ],
      techStack: "PostgreSQL, Express.js, React, Node.js (PERN), TypeScript, CSS",
      liveLink: null,
      githubLink: "https://github.com/microbanking-system/DBMS_Microbanking_System",
      linkedinLink: "https://www.linkedin.com/posts/praveen-de-silva-854a732a2_webdev-dbms-ts-activity-7410811630453874688--ZWZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEkg6AABOq2dXdWOGUX3vzM4-Jm8Pzn8mAg",
      status: "Completed"
    },
    {
      title: "Driver Safety MS - SLIOT'25",
      problem: "System for make the driver taks easier and safe. This brings us to the FINAL round of this competition.",
      features: [
        "Digital documentation handelling",
        "Driver intoxication detection",
        "Driver drowsiness (sleep) detection",
        "NFC card scanning for easy identification"
      ],
      techStack: "Python, IoT, Arduino",
      liveLink: null,
      githubLink: "https://github.com/KeshRD/Driver-Sleep-detector",
      linkedinLink: "https://www.linkedin.com/posts/thashira-devindu-49a1b6349_sliotchallenge2025-iot-sltmobitel-ugcPost-7309617829874434048-ljBo?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEkg6AABOq2dXdWOGUX3vzM4-Jm8Pzn8mAg",
      status: "Completed"
    },
    {
      title: "Moonscake E-Commerce Platform",
      problem: "Full-stack web application for a private cake business.",
      features: [
        "Product catalog management",
        "Shopping cart functionality",
        "Secure payment via reciept photo transfering",
        "Order tracking system"
      ],
      techStack: "React, Node.js, MongoDB, Express, Stripe",
      liveLink: null,
      githubLink: null,
      linkedinLink: null,
      status: "In Progress"
    },
    {
      title: "My Portfolio - 02",
      problem: "Modern responsive portfolio website built as a professional digital presence to showcase projects, skills, and achievements to potential employers and collaborators.",
      features: [
        "Responsive design with dark theme",
        "Interactive project showcase with filtering",
        "Skills carousel with progress indicators",
        "Contact form with validation"
        // "Smooth animations and transitions"
      ],
      techStack: "Next.js, React, TypeScript, Tailwind CSS, Lucide Icons",
      liveLink: "https://relaxed-mermaid-821c62.netlify.app",
      githubLink: "https://github.com/praveen-de-silva/my-portfolio",
      linkedinLink: "https://www.linkedin.com/posts/praveen-de-silva-854a732a2_proud-to-announce-the-completion-of-my-activity-7410786064627494914-xONa?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEkg6AABOq2dXdWOGUX3vzM4-Jm8Pzn8mAg",
      status: "Completed"
    },
    {
      title: "My Portfolio - 01",
      problem: "Static site for my career purpose.",
      features: [
        "Creative UI",
        "Easy maanageble"
      ],
      techStack: "HTML, CSS, JS",
      liveLink: "relaxed-mermaid-821c62.netlify.app",
      githubLink: "https://github.com/praveen-de-silva/MyProjects",
      linkedinLink: "https://www.linkedin.com/posts/praveen-de-silva-854a732a2_proud-to-announce-the-completion-of-my-activity-7410786064627494914-xONa?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEkg6AABOq2dXdWOGUX3vzM4-Jm8Pzn8mAg",
      status: "Completed"
    }
  ];

  return (
    <div className="container mx-auto px-6 pt-20 pb-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-light mb-4">Projects</h1>
        <p className="text-xl font-light text-gray-300 mb-12">
          Featured work and personal projects
        </p>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <FadeInSection key={index} delay={index * 0.05}>
              <div className="bg-black bg-opacity-40 backdrop-blur-md rounded-lg p-8 shadow-xl shadow-white/20 transition-all duration-300">
              {/* Title and Status */}
              <div className="flex justify-between items-start mb-4 text-2xl font-light mb-6 text-black border-b border-white border-opacity-20 pb-3">
                <h2 className="text-3xl font-light text-white">
                  {project.title}
                </h2>
                <span className={`px-4 py-1 rounded-full text-sm font-light border ${
                  project.status === 'Completed' 
                    ? 'border-green-500 text-green-400 bg-gradient-to-r from-green-500/20 to-emerald-500/20' 
                    : project.status === 'In Progress'
                    ? 'border-orange-500 text-orange-400 bg-gradient-to-r from-orange-500/20 to-amber-500/20'
                    : 'border-white border-opacity-20 text-white bg-white bg-opacity-10'
                }`}>
                  {project.status}
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
      </div>
    </div>
  );
}
