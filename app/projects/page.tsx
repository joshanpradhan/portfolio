// app/projects/page.tsx
"use client";

import { projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-4">
              <span className="text-blue-400 font-mono text-sm">
                &lt;projects&gt;
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Featured Work
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              From healthcare apps to financial platforms, here's a showcase of
              projects where I've contributed to building scalable and impactful
              solutions.
            </p>

            <div className="inline-block mt-6">
              <span className="text-blue-400 font-mono text-sm">
                &lt;/projects&gt;
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto space-y-16">
            {projects.map((project, index) => (
              <div key={project.id} id={project.id} className="group relative">
                {/* Project Card */}
                <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-500/10">
                  {/* Gradient Overlay */}
                  <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative p-8 md:p-12">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                      <div className="flex-1">
                        <div className="flex items-start gap-4 mb-4">
                          {/* Project Number */}
                          <div className="text-6xl font-bold text-blue-500/20 font-mono leading-none">
                            {String(index + 1).padStart(2, "0")}
                          </div>

                          <div className="flex-1">
                            <h2 className="text-4xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                              {project.title}
                            </h2>

                            <div className="flex flex-wrap gap-3 items-center mb-4">
                              <span className="px-4 py-1.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-semibold">
                                {project.company}
                              </span>
                            </div>

                            <p className="text-gray-400 text-lg leading-relaxed">
                              {project.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Key Achievements */}
                    <div className="mb-8">
                      <h3 className="text-sm font-mono text-gray-500 mb-4 flex items-center">
                        <span className="text-green-400 mr-2">//</span>
                        Key Achievements
                      </h3>

                      <div className="grid md:grid-cols-2 gap-4">
                        {project.highlights.map((highlight, hIndex) => (
                          <div
                            key={hIndex}
                            className="flex items-start gap-3 p-4 bg-white/[0.02] rounded-lg border border-white/5 hover:border-blue-500/20 hover:bg-white/[0.04] transition-all"
                          >
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-xs font-bold mt-0.5">
                              ✓
                            </div>
                            <span className="text-gray-300 text-sm leading-relaxed">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h3 className="text-sm font-mono text-gray-500 mb-4 flex items-center">
                        <span className="text-blue-400 mr-2">$</span>
                        Tech Stack
                      </h3>

                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech) => (
                          <div key={tech} className="group/tech relative">
                            <div className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg text-blue-300 text-sm font-mono hover:border-blue-400/50 hover:from-blue-500/20 hover:to-purple-500/20 transition-all cursor-default">
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
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-24">
            <div className="inline-block p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10">
              <p className="text-gray-400 mb-6 text-lg">
                Interested in collaborating or learning more?
              </p>
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:scale-105 transition-all hover:shadow-2xl hover:shadow-blue-500/50 font-semibold"
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
