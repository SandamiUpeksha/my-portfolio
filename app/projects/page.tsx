import { ExternalLink, Github, VideoOff } from 'lucide-react';

export default function Projects() {
  const projects = [
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
      status: "Completed"
    },
    {
      title: "Driver Safety MS - SLIOT'25",
      problem: "System for make the driver taks easier and safe. This brings us to the FINAL round of this competition.",
      features: [
        "Digital documentation handelling",
        "Driver drunk detaila",
        "Sleep detection"
      ],
      techStack: "Python, IoT, MQTT, InfluxDB, Grafana",
      liveLink: null,
      githubLink: null,
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
      status: "In Progress"
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
            <div 
              key={index}
              className="bg-black bg-opacity-40 backdrop-blur-md rounded-lg p-8 shadow-xl shadow-white/20 hover:shadow-white/30 transition-all duration-300"
            >
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
                
                <a 
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-white font-light hover:text-gray-300 transition-colors"
                >
                  <Github size={18} />
                  <span>Github</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
