'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-blue-900 to-blue-700">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Ashwin Senthil Arumugam
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-12">
            Software Developer | AI Researcher | Full Stack Engineer
          </p>
          <Link 
            href="/resume.pdf"
            className="inline-block px-8 py-4 bg-white text-blue-900 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Download Resume
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">About Me</h2>
          <p className="text-lg text-black mb-6">
            I am a passionate software developer with expertise in full-stack development and artificial intelligence.
            With a strong foundation in computer science and years of experience in building scalable applications,
            I strive to create innovative solutions that make a difference.
          </p>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-black mb-2">Education</h3>
            <p className="text-black">B.Tech in Computer Science</p>
            <p className="text-black">2018 - 2022</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-black mb-2">Experience</h3>
            <p className="text-black">5+ years of professional experience</p>
            <p className="text-black">Full Stack Development & AI Research</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { category: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
              { category: "Backend", skills: ["Node.js", "Python", "Java", "SQL"] },
              { category: "AI/ML", skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Deep Learning"] },
              { category: "Tools", skills: ["Git", "Docker", "AWS", "CI/CD"] },
              { category: "Databases", skills: ["MongoDB", "PostgreSQL", "Redis", "Elasticsearch"] },
              { category: "Other", skills: ["REST APIs", "GraphQL", "Microservices", "System Design"] }
            ].map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold text-black mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.skills.map((skill) => (
                    <li key={skill} className="text-black">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">Experience</h2>
          <div className="space-y-8">
            {[
              {
                title: "Senior Software Engineer",
                company: "Tech Company",
                period: "2021 - Present",
                description: "Led development of scalable web applications using React and Node.js",
                achievements: [
                  "Implemented microservices architecture",
                  "Reduced load times by 40%",
                  "Led team of 5 developers"
                ]
              },
              {
                title: "Full Stack Developer",
                company: "Startup",
                period: "2019 - 2021",
                description: "Developed and maintained multiple client projects",
                achievements: [
                  "Built responsive web applications",
                  "Integrated payment systems",
                  "Optimized database queries"
                ]
              }
            ].map((job) => (
              <div
                key={job.title}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold text-black mb-2">{job.title}</h3>
                <p className="text-black mb-2">{job.company}</p>
                <p className="text-black mb-4">{job.period}</p>
                <p className="text-black mb-4">{job.description}</p>
                <ul className="list-disc list-inside space-y-2">
                  {job.achievements.map((achievement) => (
                    <li key={achievement} className="text-black">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI Image Recognition",
                description: "Deep learning model for real-time image classification",
                tech: ["Python", "TensorFlow", "React", "Node.js"],
                link: "https://github.com/yourusername/project1"
              },
              {
                title: "E-commerce Platform",
                description: "Full-stack e-commerce solution with payment integration",
                tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
                link: "https://github.com/yourusername/project2"
              },
              {
                title: "Task Management App",
                description: "Collaborative task management with real-time updates",
                tech: ["React", "Firebase", "Material-UI"],
                link: "https://github.com/yourusername/project3"
              }
            ].map((project) => (
              <div
                key={project.title}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold text-black mb-2">{project.title}</h3>
                <p className="text-black mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-black rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.link}
                  className="text-blue-600 hover:text-blue-700"
                >
                  View Project →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">Contact Me</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
