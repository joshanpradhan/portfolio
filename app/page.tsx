// app/page.tsx
"use client";

import Link from "next/link";
import { personalInfo, skills, experience } from "@/lib/data";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-white">
      {/* Hero Section with Gradient and Particles Effect */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Glowing Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-700" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Typing Effect Header */}
            <div className="mb-6 inline-block">
              <span className="text-blue-400 font-mono text-sm">
                &lt;developer&gt;
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient">
              {personalInfo.name}
            </h1>

            <div className="mb-8 font-mono text-xl md:text-2xl text-gray-300">
              <span className="text-green-400">const</span>{" "}
              <span className="text-blue-300">role</span>{" "}
              <span className="text-pink-400">=</span>{" "}
              <span className="text-yellow-300">"{personalInfo.title}"</span>
              <span className="text-gray-500">;</span>
            </div>

            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* CTA Buttons with Glow Effect */}
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50"
              >
                <span className="relative z-10 font-semibold flex items-center gap-2">
                  View Projects
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-blue-500/50 rounded-lg hover:bg-blue-500/10 hover:border-blue-400 transition-all hover:scale-105 backdrop-blur-sm font-semibold"
              >
                GitHub Profile
              </a>

              <Link
                href="/contact"
                className="px-8 py-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all hover:scale-105 backdrop-blur-sm font-semibold"
              >
                Let's Connect
              </Link>
            </div>

            {/* Close Tag */}
            <div className="mt-12 inline-block">
              <span className="text-blue-400 font-mono text-sm">
                &lt;/developer&gt;
              </span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-blue-400 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Terminal-style Stats */}
      <section className="py-20 border-y border-white/10 bg-black/40 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-[#1e1e1e] rounded-lg border border-white/10 overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="bg-[#323233] px-4 py-2 flex items-center gap-2 border-b border-white/10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-gray-400 text-sm ml-4 font-mono">
                stats.sh
              </span>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <span className="text-green-400">$</span>{" "}
                  <span className="text-gray-400">experience --years</span>
                  <div className="mt-2 text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                    4<span className="text-2xl text-gray-500">+</span>
                  </div>
                  <div className="text-gray-500 mt-1">Years of Experience</div>
                </div>

                <div>
                  <span className="text-green-400">$</span>{" "}
                  <span className="text-gray-400">projects --count</span>
                  <div className="mt-2 text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                    4
                  </div>
                  <div className="text-gray-500 mt-1">Major Projects</div>
                </div>

                <div>
                  <span className="text-green-400">$</span>{" "}
                  <span className="text-gray-400">tech-stack --size</span>
                  <div className="mt-2 text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400">
                    15<span className="text-2xl text-gray-500">+</span>
                  </div>
                  <div className="text-gray-500 mt-1">Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Card Grid */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/5 to-transparent" />

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Tech Arsenal
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Tools and technologies I use to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={skill.category}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon/Emoji */}
                <div className="text-4xl mb-4">
                  {index === 0 && "⚙️"}
                  {index === 1 && "🎨"}
                  {index === 2 && "☁️"}
                  {index === 3 && "📱"}
                </div>

                <h3 className="text-xl font-bold mb-4 text-blue-400 group-hover:text-blue-300 transition-colors">
                  {skill.category}
                </h3>

                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="text-gray-400 flex items-center group-hover:text-gray-300 transition-colors"
                    >
                      <span className="text-blue-500 mr-2 text-xs">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/10 group-hover:to-purple-600/10 transition-all -z-10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-32 bg-black/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Journey
            </h2>
            <p className="text-gray-400 text-lg">
              My professional path in tech
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-purple-500/50 transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-3 top-10 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-[#0a0a0a] group-hover:scale-125 transition-transform" />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {exp.position}
                    </h3>
                    <p className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                      {exp.company}
                    </p>
                    <p className="text-gray-500 text-sm">{exp.location}</p>
                  </div>
                  <div className="mt-2 md:mt-0 md:text-right">
                    <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-lg text-purple-300 text-sm font-mono">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {exp.projects.length > 0 && (
                  <div className="mt-4">
                    <p className="text-xs text-gray-500 mb-3 font-mono">
                      // Key Projects
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.projects.map((project) => (
                        <Link
                          key={project}
                          href={`/projects#${project}`}
                          className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-300 rounded-lg text-sm hover:bg-blue-500/20 hover:border-blue-400/50 transition-all font-mono"
                        >
                          {project}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Gradient */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Let's Build Something Epic
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Got a project in mind? I'm always open to discussing new
            opportunities and innovative ideas.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 font-semibold text-lg"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start a Conversation
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 border-2 border-purple-500/50 rounded-lg hover:bg-purple-500/10 hover:border-purple-400 transition-all hover:scale-105 backdrop-blur-sm font-semibold text-lg"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </main>
  );
}
