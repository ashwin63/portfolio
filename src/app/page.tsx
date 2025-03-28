'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useContactForm } from '@/hooks/useContactForm';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const {
    formData,
    isLoading,
    error,
    success,
    handleChange,
    handleSubmit,
  } = useContactForm();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <motion.h1 
              className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ashwin Senthil Arumugam
            </motion.h1>
            <motion.p 
              className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Software Developer | AI Researcher | Full Stack Engineer
            </motion.p>
            <motion.div 
              className="flex justify-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com/your-username"
                target="_blank"
                className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100"
              >
                GitHub
              </Link>
            </motion.div>
            <motion.button 
              className="btn-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-xl font-semibold mb-4">Background</h3>
              <p className="text-gray-600 dark:text-gray-300">
                I am a passionate software developer with expertise in enterprise applications and AI research.
                Currently pursuing my Master's in Computer Science at Penn State University, I combine academic
                knowledge with practical industry experience to create innovative solutions.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <ul className="space-y-4">
                <li>
                  <h4 className="font-medium">Master of Science in Computer Science and Engineering</h4>
                  <p className="text-gray-600 dark:text-gray-300">Penn State University (Expected April 2025)</p>
                </li>
                <li>
                  <h4 className="font-medium">Bachelor of Technology in Information Technology</h4>
                  <p className="text-gray-600 dark:text-gray-300">College of Engineering Guindy, Anna University, Chennai</p>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Skills
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Languages & Frameworks",
                items: ["Java", "JUnit", "REST API", "OData API", "SQL", "ReactJS", "AngularJS", "NodeJS", "Python"]
              },
              {
                title: "Tools & Technologies",
                items: ["AWS", "Docker", "TensorFlow", "PyTorch", "BOPF", "Android", "UI5", "Fiori"]
              },
              {
                title: "Developer Tools",
                items: ["Git", "CI/CD", "TDD", "Agile", "Postman", "SaaS", "Linux", "Deep Learning"]
              }
            ].map((skillGroup, index) => (
              <motion.div
                key={skillGroup.title}
                className="card"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-4">{skillGroup.title}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((item) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Experience
          </motion.h2>
          <motion.div 
            className="space-y-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: "SAP - Associate Developer",
                period: "Jul 2020 - Jul 2023",
                achievements: [
                  "Developed and optimized front-end and back-end modules for SAP Public Cloud",
                  "Led API development (REST & OData) to automate transportation cost transfers",
                  "Revamped system architecture, improving SAP TM's quotation speed by 90%",
                  "Built an enterprise ML model with 80% accuracy for automated data extraction"
                ]
              },
              {
                title: "Samsung - Deep Learning Intern",
                period: "May 2019 - Jul 2019",
                achievements: [
                  "Researched page ranking algorithms and trained an efficient neural network-based model"
                ]
              }
            ].map((exp, index) => (
              <motion.div
                key={exp.title}
                className="card"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{exp.period}</p>
                <ul className="mt-4 space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                    >
                      • {achievement}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Projects & Research
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: "5G Network Fuzzing",
                tech: "GoLang, Python, 5G Network",
                description: "Developed feedback-driven testing for 5G microservices, improving code coverage.",
                github: "https://github.com/ashwin63/restler-fuzzer"
              },
              {
                title: "KV Paxos",
                tech: "GoLang, Multithreading",
                description: "Built a fault-tolerant distributed key-value store using the Paxos protocol.",
                github: "https://github.com/ashwin63/Paxos_protocol"
              },
              {
                title: "CEG Prints",
                tech: "Android, Java, Python Flask, Firebase",
                description: "Created a mobile app for wireless printing, with 4,000+ downloads on Play Store.",
                github: "https://github.com/ashwin63/CEG-Prints"
              },
              {
                title: "AI Image Classification",
                tech: "Vision Transformer, PyTorch",
                description: "Led a team to build a Vision Transformer model achieving 80% accuracy in detecting AI-generated images.",
                github: "https://github.com/ashwin63/AI_Human_Image_Classification"
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                className="card group cursor-pointer"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Link 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <svg 
                      className="w-5 h-5 text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.tech}</p>
                  <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Contact
          </motion.h2>
          <motion.div 
            className="max-w-2xl mx-auto"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={fadeInUp}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
                />
              </motion.div>
              <motion.div variants={fadeInUp}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
                />
              </motion.div>
              <motion.div variants={fadeInUp}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
                />
              </motion.div>
              {error && (
                <motion.div 
                  className="text-red-600 dark:text-red-400 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {error}
                </motion.div>
              )}
              {success && (
                <motion.div 
                  className="text-green-600 dark:text-green-400 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Message sent successfully!
                </motion.div>
              )}
              <motion.button
                type="submit"
                disabled={isLoading}
                className="btn-primary w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                variants={fadeInUp}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
            <motion.div 
              className="mt-8 text-center space-y-2"
              variants={fadeInUp}
            >
              <p className="text-gray-600 dark:text-gray-300">Email: ashwinsenthil63@gmail.com</p>
              <p className="text-gray-600 dark:text-gray-300">Phone: +1 582-203-8086</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
