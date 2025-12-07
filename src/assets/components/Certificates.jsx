import { ArrowRight, ExternalLink } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Software Design: From Requirements to Release Course Completion",
    description: "I successfully completed the “Software Design: From Requirements to Release” course on LinkedIn Learning.",
    image: "/Certificates/1.png",
    tags: ["Software Design", "Requirements", "Release", "LinkedIn Learning"],
    demoUrl: "/Certificates/1.pdf",
  },
  {
    id: 2,
    title: "Frontend Web Development",
    description: "HTML, CSS, Tailwind, JavaScript certification.",
    image: "/certificates/cert2.png",
    tags: ["Frontend", "UI/UX"],
    demoUrl: "#",
  },
  {
    id: 3,
    title: "React Mastery",
    description: "Certification for advanced React concepts.",
    image: "/certificates/cert3.png",
    tags: ["React", "Hooks"],
    demoUrl: "#",
  },
];

export const Certificates = () => {
  return (
    <section id="certificates" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          My <span className="text-primary">Certificates</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Certifications I have earned during my journey as a developer.
        </p>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {certificates.map((item, key) => (
            <div
              key={key}
              className="
                group relative px-1 pt-1 rounded-2xl 
                shadow-lg backdrop-blur-xl bg-white/5 
                border border-white/10 overflow-hidden 
                transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2
                animate-fade-in-up
              "
              style={{ animationDelay: `${key * 0.15}s` }}
            >

              {/* Glow Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-purple-500/30 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700"></div>

              {/* Certificate Image */}
              <div className="h-48 overflow-hidden rounded-xl shadow-inner">
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full h-full object-cover 
                    transition-transform duration-700 
                    group-hover:scale-110
                  "
                />
              </div>

              {/* Content */}
              <div className="p-6 relative z-10">

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="
                        px-3 py-1 text-xs font-medium rounded-full 
                        bg-primary/10 text-primary 
                        opacity-0 animate-fade-slide-up
                      "
                      style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4">
                  {item.description}
                </p>

                {/* Only external link remains */}
                <div className="flex items-center justify-start">
                  <a
                    href={item.demoUrl}
                    target="_blank"
                    className="hover:text-primary transition-all"
                  >
                    <ExternalLink size={22} />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/nethmalgeesaraux"
          >
            View My Work <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
};
