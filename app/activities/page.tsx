'use client';

import FadeInSection from '@/components/FadeInSection';

export default function Activities() {
  const activities = [
    // Example entry - replace with a real activity
    {
      title: "Example: Member, Computer Science Society",
      details: [
        "Example: Helped organise coding workshops for first-year students",
        "Example: University of Peradeniya (2024 - Present)"
      ]
    },
    // Fill me - copy this block for each new activity
    {
      title: "Fill me: Role / Activity name",
      details: [
        "Fill me: Organisation and years",
        "Fill me: What you did"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-6 pt-10 pb-16">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4">Activities</h1>
          <p className="text-base sm:text-lg md:text-xl font-light text-gray-300 mb-12">
            Extracurricular roles and experiences
          </p>
        </FadeInSection>

        <div className="space-y-8">
          {activities.map((activity, index) => (
            <FadeInSection key={index} delay={index * 0.05}>
              <div className="bg-black bg-opacity-40 backdrop-blur-md rounded-lg p-8 shadow-xl shadow-white/20 transition-all duration-300">
                {/* Title */}
                <div className="mb-4 pb-4 relative border-b">
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
                  <h2 className="text-2xl sm:text-2xl md:text-3xl font-light text-white">
                    {activity.title}
                  </h2>
                </div>

                {/* Details */}
                <ul className="space-y-2">
                  {activity.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="text-gray-200 font-light flex items-start"
                    >
                      <span className="text-white mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </div>
  );
}
