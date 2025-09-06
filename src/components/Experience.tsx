import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Award } from 'lucide-react';
import experienceData from '../data/experience.json';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const colorMap = {
    cyan: {
      gradient: 'from-cyan-500 to-blue-600',
      shadow: 'shadow-cyan-500/25',
      border: 'border-cyan-500/30',
      text: 'text-cyan-300',
      bg: 'bg-cyan-500/10'
    },
    violet: {
      gradient: 'from-violet-500 to-purple-600',
      shadow: 'shadow-violet-500/25',
      border: 'border-violet-500/30',
      text: 'text-violet-300',
      bg: 'bg-violet-500/10'
    },
    orange: {
      gradient: 'from-orange-500 to-red-600',
      shadow: 'shadow-orange-500/25',
      border: 'border-orange-500/30',
      text: 'text-orange-300',
      bg: 'bg-orange-500/10'
    },
    emerald: {
      gradient: 'from-emerald-500 to-green-600',
      shadow: 'shadow-emerald-500/25',
      border: 'border-emerald-500/30',
      text: 'text-emerald-300',
      bg: 'bg-emerald-500/10'
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-20 w-64 h-64 bg-gradient-to-r from-violet-500/5 to-purple-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-20 w-48 h-48 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            PROFESSIONAL <span className="bg-gradient-to-r from-violet-400 to-cyan-500 bg-clip-text text-transparent">EXPERIENCE</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            My journey through innovative companies and groundbreaking projects
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-violet-500 to-orange-500 transform md:-translate-x-1/2 rounded-full">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500 via-violet-500 to-orange-500 blur-sm"></div>
          </div>

          <div className="space-y-12">
            {experienceData.experience.map((exp, index) => {
              const colors = colorMap[exp.color as keyof typeof colorMap];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:gap-8`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`w-6 h-6 bg-gradient-to-r ${colors.gradient} rounded-full shadow-lg ${colors.shadow} border-4 border-slate-900`}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} rounded-full blur animate-pulse`}></div>
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.02,
                      rotateX: 2,
                      rotateY: isEven ? 2 : -2
                    }}
                    className={`w-full md:w-5/12 ${isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'} ml-16 md:ml-0`}
                  >
                    <div className={`relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border ${colors.border} rounded-2xl p-8 shadow-2xl ${colors.shadow}`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
                      
                      <div className="relative">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className={`px-3 py-1 ${colors.bg} ${colors.text} text-sm font-semibold rounded-full border ${colors.border}`}>
                            {exp.period}
                          </span>
                          <div className="flex items-center text-slate-400 text-sm">
                            <MapPin size={14} className="mr-1" />
                            {exp.location}
                          </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-2">
                          {exp.position}
                        </h3>
                        <h4 className={`text-lg ${colors.text} font-semibold mb-4`}>
                          {exp.company}
                        </h4>

                        <p className="text-slate-300 mb-6 leading-relaxed">
                          {exp.description}
                        </p>

                        <div className="space-y-3">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <motion.div
                              key={achievementIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={inView ? { opacity: 1, x: 0 } : {}}
                              transition={{ delay: 0.5 + achievementIndex * 0.1 }}
                              className="flex items-start gap-3"
                            >
                              <div className={`w-2 h-2 ${colors.gradient} bg-gradient-to-r rounded-full mt-2 flex-shrink-0`}></div>
                              <span className="text-slate-300 text-sm">{achievement}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Freelance Availability Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold rounded-full mb-6 shadow-lg shadow-emerald-500/25"
            >
              <Award size={20} />
              Available for Freelance
            </motion.div>
            
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              Ready for Your Next Project
            </h3>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
              Have an exciting project you need help with? Let's collaborate and create something amazing together.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-violet-500 to-cyan-500 text-white font-semibold rounded-xl shadow-2xl shadow-violet-500/25 hover:shadow-violet-500/40 transition-all duration-300"
            >
              Let's Work Together
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;