import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import projectsData from "../data/projects.json";

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };

  // Card animation
  const projectVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
      },
    },
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 relative overflow-hidden">
      {/* Floating 3D Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-1/4 w-20 h-20"
          animate={{
            rotateX: [0, 360],
            rotateZ: [0, 180],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 transform rotate-45 blur-sm"></div>
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-1/4 w-16 h-16"
          animate={{
            rotate: [0, -360],
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full blur-sm"></div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate="visible"
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            MY{" "}
            <span className="bg-gradient-to-r from-violet-400 to-orange-500 bg-clip-text text-transparent">
              WORK
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Innovative projects showcasing cutting-edge development and
            problem-solving
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate="visible"
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-orange-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>

            <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <motion.div whileHover={{ scale: 1.05 }} className="mb-6">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-violet-500 to-orange-500 text-white text-sm font-semibold rounded-full mb-4">
                      Featured Project
                    </span>
                    <h3 className="text-4xl md:text-5xl font-black text-white mb-4">
                      {projectsData.featured.title}
                    </h3>
                    <p className="text-xl text-slate-300 mb-6 leading-relaxed">
                      {projectsData.featured.description}
                    </p>
                    <p className="text-slate-400 mb-8">
                      {projectsData.featured.details}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-8">
                      {projectsData.featured.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/10 text-white text-sm rounded-lg backdrop-blur-sm border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <motion.button
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-500 to-orange-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-violet-500/25 transition-all duration-300"
                      >
                        <ExternalLink size={18} />
                        View Project
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 border-2 border-slate-600 text-slate-300 font-semibold rounded-xl hover:border-white/30 hover:text-white transition-all duration-300"
                      >
                        <Github size={18} />
                        Code
                      </motion.button>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  whileHover={{ rotateY: 5, rotateX: 5 }}
                  className="perspective-1000"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-orange-500 rounded-2xl blur-md opacity-20"></div>
                    <img
                      src={projectsData.featured.image}
                      alt={projectsData.featured.title}
                      className="relative w-full h-80 object-cover rounded-2xl shadow-2xl border border-white/10"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible" // ✅ Animate instantly on mount
          whileInView="visible" // ✅ Also animate when scrolled into view
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.projects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group cursor-pointer"
              onClick={() =>
                setSelectedProject(
                  selectedProject === project.id ? null : project.id
                )
              }
            >
              <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        project.category === "Mobile Development"
                          ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                          : project.category === "Web Development"
                          ? "bg-violet-500/20 text-violet-300 border border-violet-500/30"
                          : project.category === "AI/ML"
                          ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                          : "bg-orange-500/20 text-orange-300 border border-orange-500/30"
                      }`}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/10 text-white text-xs rounded border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-white/10 text-slate-400 text-xs rounded">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center text-violet-300 text-sm font-semibold group-hover:text-violet-200"
                  >
                    View Details
                    <ArrowRight
                      size={16}
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                    />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {selectedProject === project.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-t border-white/10 p-6"
                    >
                      <p className="text-slate-300 text-sm mb-4">
                        {project.details}
                      </p>
                      <div className="flex gap-3">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          className="flex-1 py-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                        >
                          View Live
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          className="flex-1 py-2 border border-slate-600 text-slate-300 text-sm font-semibold rounded-lg hover:border-white/30 transition-all duration-300"
                        >
                          Source Code
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
