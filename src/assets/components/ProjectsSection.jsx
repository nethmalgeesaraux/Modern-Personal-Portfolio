import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Food Delivery Web",
    description: "A responsive food delivery web application with real-time order",
    image: "/projects/project1.png",
    tags: ["React", "Node.js", "Vite", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/nethmalgeesaraux/Food-Delivery-App",
  },
  {
    id: 2,
    title: "Clouthing Store",
    description:
      "An e-commerce clothing store with product listings and checkout.",
    image: "/projects/project2.png",
    tags: ["HTML", "Tailwindcss", "Javascript"],
    demoUrl: "https://tinyurl.com/BEETA-FASHION",
    githubUrl: "https://github.com/nethmalgeesaraux/BEETA-FASHION",
  },
  {
    id: 3,
    title: "Movie-App",
    description:
      "A movie browsing app that fetches API data and displays trending films.",
    image: "/projects/project3.png",
    tags: ["HTML", "API", "Javascript", "CSS"],
    demoUrl: "https://nethmalgeesaraux.github.io/Movie-app-2/",
    githubUrl: "https://github.com/nethmalgeesaraux/Movie-app-2",
  },
   {
    id: 4,
    title: "",
    description:
      "",
    image: "",
    tags: [],
    demoUrl: "",
    githubUrl: "",
  },
  {
    id: 5,
    title: "",
    description:
      "",
    image: "",
    tags: [],
    demoUrl: "",
    githubUrl: "",
  },
  {
    id: 6,
    title: "",
    description:
      "",
    image: "",
    tags: [],
    demoUrl: "",
    githubUrl: "",
  },

 
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Some of my best projects — crafted with performance, UI/UX, 
          and clean code in mind.
        </p>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, key) => (
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
              
              {/* Gradient Glow Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-purple-500/30 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700"></div>

              {/* Project Image */}
              <div className="h-48 overflow-hidden rounded-xl shadow-inner">
                <img
                  src={project.image}
                  alt={project.title}
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
                  {project.tags.map((tag, i) => (
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
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="hover:text-primary transition-all"
                    >
                      <ExternalLink size={22} />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="hover:text-primary transition-all"
                    >
                      <Github size={22} />
                    </a>
                  </div>
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
            Check My Github <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
};
