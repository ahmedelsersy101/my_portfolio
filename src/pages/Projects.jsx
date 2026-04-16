import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Ghaith Elmuslim",
      description:
        "An Islamic app that provides Quran, prayers, supplications, and Qibla direction all in one place.",
      image: "ghaith.jpg",
      technologies: [
        "Flutter",
        "Dart",
        "Notifications",
        "Hive",
        "Localization",
        "Bolc-Cubit",
        "Responsive UI",
      ],
      githubUrl: "https://github.com/ahmedelsersy101/ghaith_muslim",
      liveUrl:
        "https://play.google.com/store/apps/details?id=com.ghaith.muslim.app",
    },
    // {
    //   title: "Salaty - Professional Prayer Companion",
    //   description:
    //     "A high-performance Islamic companion app featuring precise prayer timing, background fetch notifications, and advanced Qibla compass.",
    //   image: "salaty.jpg",
    //   technologies: [
    //     "Flutter",
    //     "GetX",
    //     "Adhan API",
    //     "Background Fetch",
    //     "Awesome Notifications",
    //   ],
    //   githubUrl: "https://github.com/ahmedelsersy101/salaty_app",
    //   liveUrl: "#",
    // },
    {
      title: "Weekly – Task & productivity app",
      description: "Task & productivity app with week-based tracking.",
      image: "weekly.jpg",
      technologies: [
        "Flutter",
        "Dart",
        "Supabase",
        "Notifications",
        "Hive",
        "Localization",
        "Bolc-Cubit",
        "Responsive UI",
      ],
      githubUrl: "https://github.com/ahmedelsersy101/weekly_app",
      liveUrl: "https://ahmedelsersy101.github.io/weekly_live/",
    },
    {
      title: "Masrofaty - Smart Finance Manager",
      description:
        "A sophisticated finance tracking app built with Clean Architecture and BLoC pattern. Features include multi-currency wallet management, real-time spending analytics, and PDF reports.",
      image: "monay.jpg", // تأكد من وجود / في البداية
      technologies: [
        "Flutter",
        "BLoC",
        "Clean Architecture",
        "Dio",
        "FL Chart",
        "Shared Prefs",
      ],
      githubUrl: "https://github.com/ahmedelsersy101/money_app",
      liveUrl: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen px-4 sm:px-6 lg:px-8 pt-24 pb-16 bg-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="text-blue-400">Work</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Some of the projects I’ve worked on recently.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900/40 border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 group"
            >
              {/* Project Image Area */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 backdrop-blur-md"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={18} className="mr-2" />
                      Source Code
                    </a>
                  </Button>

                  {project.liveUrl !== "#" && (
                    <Button
                      className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-900/20"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={18} className="mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              {/* Project Details Content */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={22} />
                    </a>
                    {project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <ExternalLink size={22} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>

                {/* Technologies Badges */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-medium rounded-md border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
