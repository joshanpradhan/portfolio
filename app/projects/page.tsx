// app/projects/page.tsx

import { projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-3 md:mb-4">
              <span className="text-blue-400 font-mono text-xs md:text-sm">
                &lt;projects&gt;
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 px-4">
              Featured Work
            </h1>

            <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
              From healthcare apps to financial platforms, here's a showcase of
              projects where I've contributed to building scalable and impactful
              solutions.
            </p>

            <div className="inline-block mt-4 md:mt-6">
              <span className="text-blue-400 font-mono text-xs md:text-sm">
                &lt;/projects&gt;
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto space-y-10 md:space-y-16">
            {projects.map((project, index) => (
              <div key={project.id} id={project.id} className="group relative">
                {/* Project Card */}
                <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-xl md:rounded-2xl border border-white/10 overflow-hidden hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-500/10">
                  {/* Gradient Overlay */}
                  <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative p-5 md:p-8 lg:p-12">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6 md:mb-8">
                      <div className="flex-1">
                        <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                          {/* Project Number */}
                          <div className="text-4xl md:text-6xl font-bold text-blue-500/20 font-mono leading-none">
                            {String(index + 1).padStart(2, "0")}
                          </div>

                          <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-3 group-hover:text-blue-400 transition-colors">
                              {project.title}
                            </h2>

                            <div className="flex flex-wrap gap-2 md:gap-3 items-center mb-3 md:mb-4">
                              <span className="px-3 py-1 md:px-4 md:py-1.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-300 text-xs md:text-sm font-semibold">
                                {project.company}
                              </span>
                              <span className="text-gray-500 font-mono text-xs md:text-sm"></span>
                            </div>

                            <p className="text-gray-400 text-sm md:text-lg leading-relaxed">
                              {project.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Key Achievements */}
                    <div className="mb-6 md:mb-8">
                      <h3 className="text-xs md:text-sm font-mono text-gray-500 mb-3 md:mb-4 flex items-center">
                        <span className="text-green-400 mr-2">//</span>
                        Key Achievements
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                        {project.highlights.map((highlight, hIndex) => (
                          <div
                            key={hIndex}
                            className="flex items-start gap-2 md:gap-3 p-3 md:p-4 bg-white/[0.02] rounded-lg border border-white/5 hover:border-blue-500/20 hover:bg-white/[0.04] transition-all"
                          >
                            <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-xs font-bold mt-0.5">
                              ✓
                            </div>
                            <span className="text-gray-300 text-xs md:text-sm leading-relaxed">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h3 className="text-xs md:text-sm font-mono text-gray-500 mb-3 md:mb-4 flex items-center">
                        <span className="text-blue-400 mr-2">$</span>
                        Tech Stack
                      </h3>

                      <div className="flex flex-wrap gap-2 md:gap-3">
                        {project.technologies.map((tech) => (
                          <div key={tech} className="group/tech relative">
                            <div className="px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg text-blue-300 text-xs md:text-sm font-mono hover:border-blue-400/50 hover:from-blue-500/20 hover:to-purple-500/20 transition-all cursor-default">
                              {tech}
                            </div>

                            {/* Glow effect */}
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl opacity-0 group-hover/tech:opacity-50 transition-opacity -z-10" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Side Accent */}
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 md:w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 md:mt-24">
            <div className="inline-block p-6 md:p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-xl md:rounded-2xl border border-white/10">
              <p className="text-gray-400 mb-4 md:mb-6 text-base md:text-lg">
                Interested in collaborating or learning more?
              </p>
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:scale-105 transition-all hover:shadow-2xl hover:shadow-blue-500/50 font-semibold text-sm md:text-base"
              >
                Let's Talk
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
