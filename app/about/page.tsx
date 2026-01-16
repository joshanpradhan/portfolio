// app/about/page.tsx

import { education, certifications, languages } from "@/lib/data";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/10 to-pink-600/10" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`,
            backgroundSize: "30px 30px",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-3 md:mb-4">
              <span className="text-purple-400 font-mono text-xs md:text-sm">
                &lt;about&gt;
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 px-4">
              My Story
            </h1>

            <p className="text-base md:text-xl text-gray-400 leading-relaxed px-4">
              A passionate developer's journey through code, innovation, and
              continuous learning
            </p>

            <div className="inline-block mt-4 md:mt-6">
              <span className="text-purple-400 font-mono text-xs md:text-sm">
                &lt;/about&gt;
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-12 md:py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-10 lg:p-16 border border-white/10 overflow-hidden">
              {/* Code-style decoration */}
              <div className="absolute top-3 left-3 md:top-4 md:left-4 font-mono text-xs text-gray-600">
                <div className="flex gap-1.5 md:gap-2 mb-1 md:mb-2">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/50" />
                </div>
                <span className="text-blue-400">const</span>{" "}
                <span className="text-purple-400">developer</span> = {"{"}
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold mb-6 md:mb-8 mt-8 md:mt-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Background
              </h2>

              <div className="space-y-4 md:space-y-6 text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
                <p>
                  I'm a Software Engineer based in Kathmandu, Nepal, with over 4
                  years of experience building full-stack web and mobile
                  applications. My journey in tech started with a strong
                  academic foundation, graduating with a{" "}
                  <span className="text-blue-400 font-semibold">
                    CGPA of 3.87
                  </span>{" "}
                  and receiving the{" "}
                  <span className="text-purple-400 font-semibold">
                    Dean's List Academic Achievement Award
                  </span>
                  .
                </p>

                <p>
                  Currently at{" "}
                  <span className="text-blue-400 font-semibold">
                    Fusemachines
                  </span>
                  , I've led critical projects including{" "}
                  <span className="text-purple-400">
                    migrating REST APIs to GraphQL
                  </span>
                  , developing healthcare applications, and creating internal
                  management systems. I'm particularly passionate about{" "}
                  <span className="text-pink-400">system architecture</span>,{" "}
                  <span className="text-blue-400">
                    performance optimization
                  </span>
                  , and{" "}
                  <span className="text-purple-400">
                    mentoring junior developers
                  </span>
                  .
                </p>

                <p>
                  Beyond coding, I've also served as an{" "}
                  <span className="text-blue-400 font-semibold">
                    Adjunct Faculty at Apex College
                  </span>
                  , where I guided students in their IT journey and helped them
                  with their projects, combining my technical expertise with a
                  passion for teaching and knowledge sharing.
                </p>
              </div>

              <div className="mt-6 md:mt-8 font-mono text-xs text-gray-600">
                {"};"}
              </div>

              {/* Glow effect */}
              <div className="absolute -bottom-10 md:-bottom-20 -right-10 md:-right-20 w-32 h-32 md:w-64 md:h-64 bg-purple-500/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-12 md:py-20 relative bg-black/40">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 md:mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Education
            </h2>

            <div className="space-y-6 md:space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative group">
                  <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-xl md:rounded-2xl p-5 md:p-8 lg:p-10 border border-white/10 hover:border-blue-500/50 transition-all">
                    {/* Timeline connector */}
                    {index < education.length - 1 && (
                      <div className="hidden md:block absolute left-6 md:left-8 top-full w-0.5 h-6 md:h-8 bg-gradient-to-b from-purple-500/50 to-transparent" />
                    )}

                    {/* Timeline dot */}
                    <div className="absolute -left-1.5 md:-left-3 top-8 md:top-10 w-4 h-4 md:w-6 md:h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 md:border-4 border-[#0a0a0a] group-hover:scale-125 transition-transform" />

                    <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                      <div className="text-3xl md:text-5xl flex-shrink-0">
                        🎓
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors break-words">
                          {edu.degree}
                        </h3>
                        <p className="text-base sm:text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-1 break-words">
                          {edu.institution}
                        </p>
                        <div className="flex flex-wrap gap-2 md:gap-4 text-gray-500 text-xs md:text-sm">
                          <span className="flex items-center gap-1">
                            📍 {edu.location}
                          </span>
                          <span className="flex items-center gap-1">
                            📅 {edu.period}
                          </span>
                        </div>
                      </div>
                    </div>

                    {edu.achievements && (
                      <div className="mb-4 md:mb-6">
                        <h4 className="text-xs md:text-sm font-mono text-gray-500 mb-2 md:mb-3 flex items-center">
                          <span className="text-yellow-400 mr-2">★</span>
                          Achievements
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                          {edu.achievements.map((achievement, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-2 p-2 md:p-3 bg-white/[0.02] rounded-lg border border-white/5"
                            >
                              <span className="text-blue-400 text-xs md:text-sm mt-0.5 flex-shrink-0">
                                ▹
                              </span>
                              <span className="text-gray-300 text-xs md:text-sm break-words">
                                {achievement}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {edu.coursework && (
                      <div>
                        <h4 className="text-xs md:text-sm font-mono text-gray-500 mb-2 md:mb-3 flex items-center">
                          <span className="text-green-400 mr-2">//</span>
                          Relevant Coursework
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course, i) => (
                            <span
                              key={i}
                              className="px-2 md:px-3 py-1 md:py-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-300 rounded-lg text-xs font-mono hover:bg-blue-500/20 hover:border-blue-400/40 transition-all"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-12 md:py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 md:mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Certifications & Training
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-xl p-5 md:p-6 border border-white/10 hover:border-purple-500/50 transition-all hover:scale-105"
                >
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="text-3xl md:text-4xl flex-shrink-0">
                      {cert.platform === "Udemy" && "📚"}
                      {cert.platform === "Fusemachines" && "🎤"}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-base sm:text-lg text-white mb-2 group-hover:text-purple-400 transition-colors leading-tight break-words">
                        {cert.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 md:gap-3 text-xs md:text-sm">
                        <span className="px-2 md:px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-300 rounded-full font-semibold">
                          {cert.platform}
                        </span>
                        <span className="text-gray-500 font-mono">
                          {cert.year}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 transition-all -z-10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-12 md:py-20 relative bg-black/40">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Languages
            </h2>

            <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
              {languages.map((language, index) => (
                <div key={language} className="group relative">
                  <div className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg font-semibold text-base md:text-lg hover:from-blue-500/20 hover:to-purple-500/20 hover:border-blue-400/50 transition-all hover:scale-105 cursor-default">
                    {language}
                  </div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity -z-10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
