import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { FaCode, FaBriefcase } from 'react-icons/fa';

// Add these animation variants
const containerVariants = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: {
         staggerChildren: 0.2
      }
   }
};

const projectVariants = {
   hidden: { y: 20, opacity: 0 },
   visible: {
      y: 0,
      opacity: 1,
      transition: {
         duration: 0.5,
         ease: "easeOut"
      }
   }
};

// Add this component for project technologies
const TechBadge = ({ tag }) => (
   <motion.span
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-gray-300 rounded-full border border-blue-500/20"
   >
      {tag}
   </motion.span>
);

const GlowingOrb = ({ delay = 0, style }) => (
   <motion.div
      initial={{ opacity: 0 }}
      animate={{
         opacity: [0.1, 0.3, 0.1],
         scale: [1, 1.2, 1],
      }}
      transition={{
         duration: 8,
         repeat: Infinity,
         delay,
      }}
      className="absolute w-[30vw] h-[30vw] bg-gradient-radial from-indigo-500/5 to-transparent rounded-full blur-3xl"
      style={style}
   />
);

const projects = [
   {
      id: 1,
      title: 'Social Media Web Application Backend',
      description: 'A scalable backend system powering social media features including real-time updates, secure authentication, and cloud storage integration. Handles media uploads, user interactions, and content management.',
      technologies: {
         core: ['Node.js', 'Express.js', 'MongoDB'],
         features: ['JWT Auth', 'Cloudinary', 'REST API'],
         tools: ['Git', 'Postman']
      },
      tags: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Cloudinary', 'REST API'],
      github: 'https://github.com/ranjeetjs644/Backend-project',
      live: '',
      highlights: [
         'Implemented secure JWT authentication flow',
         'Built scalable file upload system with Cloudinary',
         'Designed RESTful API architecture'
      ]
   },
   {
      id: 2,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing my projects and skills. Built with React and enhanced with smooth animations using Framer Motion.',
      technologies: {  // Added technologies object
         core: ['React', 'Tailwind CSS'],
         features: ['Framer Motion'],
         tools: ['Git', 'VS Code']
      },
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/ranjeetjs644/my-portfolio',
      live: 'https://www.ranjettt.me/',
      highlights: [  // Added highlights
         'Built with React and Tailwind CSS',
         'Implemented smooth animations with Framer Motion',
         'Responsive design for all devices'
      ]
   }
];

const experiences = [
   {
      id: 1,
      type: 'internship',
      title: 'Frontend Developer Intern',
      company: 'Jack Infotech',
      description: 'Developed responsive front-end applications using React. Collaborated with senior developers to implement new features and improve UI/UX.',
      duration: '3 months',
      tags: ['React', 'JavaScript', 'HTML/CSS'],
      certificate: 'link-to-certificate',
   },
   {
      id: 2,
      type: 'internship',
      title: 'Web Developer Intern',
      company: 'Cod-soft',
      description: 'Built and deployed  features. Worked on both frontend and backend development, including API integration and cloud services.',
      duration: '1 months',
      tags: ['React', 'tailwind css', 'Git'],
      certificate: 'link-to-certificate',
   }
];

const Projects = () => {
   return (
      <div className="min-h-screen py-12 md:py-24 px-4 relative overflow-hidden">
         {/* Modern grid background */}
         <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
         </div>

         <div className="container mx-auto max-w-6xl relative z-10">
            {/* Keep original header */}
            <motion.div className="text-center mb-16">
               <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-gray-900/50 text-gray-400 mb-4"
               >
                  Portfolio & Experience
               </motion.span>
               <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl md:text-4xl font-bold tracking-tight"
               >
                  Projects <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent"><span className='text-gray-400'>&</span> Experience </span>
               </motion.h1>
            </motion.div>

            {/* Redesigned Projects Grid */}
            <div className="grid md:grid-cols-2 gap-4">
               {projects.map((project, index) => (
                  <motion.div
                     key={project.id}
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: index * 0.1 }}
                     className="group"
                  >
                     <div className="p-4 rounded-lg bg-gray-900/40 border border-gray-800/20 
        hover:border-gray-700/40 transition-all duration-300"
                     >
                        {/* Project Header - More Compact */}
                        <div className="flex items-start justify-between gap-4 mb-4">
                           <div>
                              <h3 className="text-lg font-bold text-white/90 group-hover:text-indigo-400/90 
              transition-colors mb-1"
                              >
                                 {project.title}
                              </h3>
                              <p className="text-xs text-gray-400/80 leading-relaxed">
                                 {project.description}
                              </p>
                           </div>

                           <div className="flex gap-2 flex-shrink-0">
                              <motion.a
                                 href={project.github}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="p-1.5 rounded-lg bg-gray-800/30 text-gray-400/80 
                hover:bg-gray-800/50 transition-all"
                              >
                                 <FiGithub className="w-4 h-4" />
                              </motion.a>
                              {project.live && (
                                 <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-1.5 rounded-lg bg-gray-800/30 text-gray-400/80 
                  hover:bg-gray-800/50 transition-all"
                                 >
                                    <FiExternalLink className="w-4 h-4" />
                                 </motion.a>
                              )}
                           </div>
                        </div>

                        {/* Technologies - More Compact */}
                        <div className="mb-4">
                           {Object.entries(project.technologies).map(([category, techs]) => (
                              <div key={category} className="mb-2 last:mb-0">
                                 <h4 className="text-[10px] uppercase tracking-wider text-gray-500/70 mb-1">{category}</h4>
                                 <div className="flex flex-wrap gap-1.5">
                                    {techs.map((tech, idx) => (
                                       <span
                                          key={idx}
                                          className="px-2 py-0.5 text-[10px] bg-gray-800/30 text-gray-400/90 
                      rounded-full border border-gray-700/20"
                                       >
                                          {tech}
                                       </span>
                                    ))}
                                 </div>
                              </div>
                           ))}
                        </div>

                        {/* Highlights - More Compact */}
                        <div className="grid grid-cols-1 gap-2">
                           {project.highlights.map((highlight, idx) => (
                              <div
                                 key={idx}
                                 className="p-2 rounded-lg bg-gray-800/20 border border-gray-800/10 
                text-gray-400/80 text-xs"
                              >
                                 {highlight}
                              </div>
                           ))}
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>

            {/* Experience Section - Simplified */}
            <div className="mt-16">
               <h2 className="text-lg font-semibold text-white/90 mb-6">Experience</h2>
               <div className="grid md:grid-cols-2 gap-4">
                  {experiences.map((exp, index) => (
                     <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="p-4 rounded-lg bg-gray-900/40 border border-gray-800/20 
          hover:border-gray-700/40 transition-all duration-300"
                     >
                        <div className="flex gap-3">
                           <div className="p-2 rounded-lg bg-gray-800/30">
                              <FaBriefcase className="w-4 h-4 text-gray-400/80" />
                           </div>
                           <div>
                              <h3 className="text-base font-medium text-white/90">
                                 {exp.title}
                              </h3>
                              <p className="text-xs text-gray-400/80 mt-1">
                                 {exp.company} • {exp.duration}
                              </p>
                              <p className="text-xs text-gray-500/80 mt-2">{exp.description}</p>
                              <div className="flex flex-wrap gap-2 mt-3">
                                 {exp.tags.map((tag, idx) => (
                                    <span
                                       key={idx}
                                       className="px-2 py-0.5 text-xs bg-gray-800/30 text-gray-400/80 
                    rounded-full border border-gray-800/10"
                                    >
                                       {tag}
                                    </span>
                                 ))}
                              </div>
                           </div>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Projects;