import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Food Delivery Web",
    description:
      "A responsive food delivery web application with real-time order flow.",
    image: "/projects/project1.png",
    tags: ["React", "Node.js", "Vite", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/nethmalgeesaraux/Food-Delivery-App",
  },
  {
    id: 2,
    title: "DropZone File Upload",
    description:
      "A file upload web application with drag and drop functionality.",
    image: "/projects/project8.png",
    tags: ["React", "Node.js", "Vite", "MongoDB"],
    demoUrl: "",
    githubUrl:
      "https://github.com/nethmalgeesaraux/File-Sharing-App-Full-Stack-Project-Frontend-",
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
    title: "Pets-Store",
    description: "A modern simple neumorphic styled pets store design.",
    image: "/projects/project9.png",
    tags: ["React", "Tailwind CSS", "Vite"],
    demoUrl: "",
    githubUrl: "https://github.com/nethmalgeesaraux/Tail-Wag-My_pet_Site-",
  },
  {
    id: 5,
    title: "Flight-Booking-Landing-Page",
    description:
      "A modern simple neumorphic styled flight booking landing page design.",
    image: "/projects/project5.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://nethmalgeesaraux.github.io/Flight-Booking-Landing-Page/",
    githubUrl:
      "https://github.com/nethmalgeesaraux/Flight-Booking-Landing-Page",
  },
  {
    id: 6,
    title: "Video-Calling-Interview",
    description:
      "A live interview prep app that helps you prepare for interviews.",
    image: "/projects/project7.png",
    tags: ["Next.js", "Tailwind CSS", "Vite", "Clerk"],
    demoUrl: "",
    githubUrl: "https://github.com/nethmalgeesaraux/Video-Calling-Interview",
  },
];

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden border-y border-red-500/10 bg-[linear-gradient(180deg,rgba(0,0,0,0.03),rgba(127,29,29,0.09),rgba(0,0,0,0.03))] px-4 py-24 dark:bg-[linear-gradient(180deg,rgba(0,0,0,0.35),rgba(127,29,29,0.18),rgba(0,0,0,0.45))]"
    >
      <div className="container relative z-10 mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-bold md:text-5xl">
          Featured{" "}
          <span className="bg-gradient-to-r from-red-500 via-red-400 to-white bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-center text-sm leading-7 text-foreground/65 md:text-base">
          Selected builds crafted with sharp interfaces, fast performance, and
          clean code.
        </p>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, key) => (
            <article
              key={project.id}
              className="group relative overflow-hidden rounded-lg border border-red-500/15 bg-black/[0.03] shadow-[0_20px_70px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-all duration-500 animate-fade-in-up hover:-translate-y-2 hover:border-red-400/50 hover:shadow-[0_24px_80px_rgba(220,38,38,0.18)] dark:bg-black/55"
              style={{ animationDelay: `${key * 0.15}s` }}
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-red-500/18 via-transparent to-black/30 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-400/70 to-transparent" />

              <div className="relative h-48 overflow-hidden bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover opacity-90 saturate-[0.85] transition-all duration-700 group-hover:scale-110 group-hover:opacity-100 group-hover:saturate-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              </div>

              <div className="relative z-10 p-6">
                <div className="mb-3 flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={tag}
                      className="animate-fade-slide-up rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs font-medium text-red-500 opacity-0 dark:text-red-300"
                      style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="mb-2 text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                  {project.title}
                </h3>

                <p className="mb-5 min-h-10 text-sm leading-6 text-foreground/65">
                  {project.description}
                </p>

                <div className="flex items-center gap-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.title} live demo`}
                      className="rounded-full border border-red-500/20 bg-black/5 p-2 text-foreground/75 transition-all hover:border-red-400 hover:bg-red-500 hover:text-white dark:bg-white/5"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title} GitHub repository`}
                    className="rounded-full border border-red-500/20 bg-black/5 p-2 text-foreground/75 transition-all hover:border-red-400 hover:bg-red-500 hover:text-white dark:bg-white/5"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            className="cosmic-button mx-auto flex w-fit items-center gap-2 bg-gradient-to-r from-red-700 via-red-600 to-red-500 shadow-[0_16px_40px_rgba(220,38,38,0.22)]"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/nethmalgeesaraux"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
