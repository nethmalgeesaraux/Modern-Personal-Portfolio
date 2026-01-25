import React from "react";

const Education = () => {
  const educationData = [
    {
      degree: "Higher Diploma in Computer Engineering Technology",
      institution: "Institute of Computer Engineering Technology (iCET)",
      year: "2025 – 2026",
      description:
        "Specializing in software engineering, Java development, web technologies, databases, and system design. Gaining strong hands-on experience through practical projects."
    },
    // {
    //   degree: "Secondary Education",
    //   institution: "Kahatagasdigiliya Central College",
    //   year: "2010 – 2024",
    //   description:
    //     "Completed secondary education with a strong foundation in mathematics, science, and information technology. Developed early interest in programming and problem-solving."
    // }
  ];

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-14 text-gray-900 dark:text-white">
          Education
        </h2>

        {/* Timeline */}
        <div className="relative border-l-4 border-primary pl-8 space-y-10">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[14px] top-8 w-6 h-6 bg-primary rounded-full border-4 border-white dark:border-gray-900"></span>

              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                {edu.degree}
              </h3>

              <p className="text-lg font-medium text-primary mb-1">
                {edu.institution}
              </p>

              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {edu.year}
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
