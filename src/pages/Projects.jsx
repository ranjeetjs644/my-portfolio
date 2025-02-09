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
      <div className="min-h-screen py-24 px-6 lg:px-16 relative overflow-hidden bg-[#070606]">
         {/* Background Pattern */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

         <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-center mb-12"
            >
               <h1 className="text-3xl font-bold text-white mb-3">Experience & Projects</h1>
               <p className="text-gray-400 text-sm">Showcasing my journey through internships and personal projects</p>
            </motion.div>

            {/* Grid Layout for Projects and Experiences */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
               {/* Left Side: Projects */}
               <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Projects</h2>
                  <div className="space-y-6">
                     {projects.map((project, index) => (
                        <motion.div
                           key={project.id}
                           variants={projectVariants}
                           className="relative p-6 rounded-xl backdrop-blur-sm bg-white/[0.02] border border-white/[0.05] 
                             hover:bg-white/[0.04] hover:border-sky-500/20 transition-all duration-300
                             group"
                        >
                           <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                           <div className="relative z-10">
                              <div className="flex items-start gap-4">
                                 <span className="p-2 rounded-lg bg-blue-500/10">
                                    <FaCode className="w-5 h-5 text-blue-400" />
                                 </span>
                                 <div className="space-y-3 flex-1">
                                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">{project.description}</p>

                                    {/* Technology sections */}
                                    {project.technologies && (
                                       <div className="space-y-2">
                                          {Object.entries(project.technologies).map(([category, techs]) => (
                                             <div key={category} className="flex flex-wrap gap-2">
                                                {techs.map((tech, idx) => (
                                                   <TechBadge key={idx} tag={tech} />
                                                ))}
                                             </div>
                                          ))}
                                       </div>
                                    )}

                                    {/* Project highlights */}
                                    {project.highlights && (
                                       <ul className="space-y-1 text-sm text-gray-400">
                                          {project.highlights.map((highlight, idx) => (
                                             <li key={idx} className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                                                {highlight}
                                             </li>
                                          ))}
                                       </ul>
                                    )}

                                    {/* Links */}
                                    <div className="flex gap-4 pt-4">
                                       <motion.a
                                          whileHover={{ scale: 1.05 }}
                                          whileTap={{ scale: 0.95 }}
                                          href={project.github}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="px-4 py-2 rounded-lg bg-white/5 text-sm text-gray-300 hover:bg-white/10 
                                       flex items-center gap-2 transition-colors"
                                       >
                                          <FiGithub className="w-4 h-4" /> View Code
                                       </motion.a>
                                       {project.live && (
                                          <motion.a
                                             whileHover={{ scale: 1.05 }}
                                             whileTap={{ scale: 0.95 }}
                                             href={project.live}
                                             target="_blank"
                                             rel="noopener noreferrer"
                                             className="px-4 py-2 rounded-lg bg-blue-500/10 text-sm text-blue-400 
                                         hover:bg-blue-500/20 flex items-center gap-2 transition-colors"
                                          >
                                             <FiExternalLink className="w-4 h-4" /> Live Demo
                                          </motion.a>
                                       )}
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </motion.div>
                     ))}
                  </div>
               </div>

               {/* Right Side: Experiences */}
               <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Experience</h2>
                  <div className="space-y-6">
                     {experiences.map((experience, index) => (
                        <motion.div
                           key={experience.id}
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           whileHover={{
                              scale: 1.02,
                              boxShadow: "0 0 20px rgba(59, 130, 246, 0.1)"
                           }}
                           transition={{
                              duration: 0.3,
                              delay: index * 0.2
                           }}
                           className="relative p-6 rounded-xl backdrop-blur-sm bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-sky-500/20 transition-all duration-300"
                        >
                           <div className="flex items-start gap-4">
                              <span className="p-2 rounded-lg bg-blue-500/10">
                                 <FaBriefcase className="w-5 h-5 text-blue-400" />
                              </span>
                              <div className="space-y-3 flex-1">
                                 <h3 className="text-xl font-semibold text-white">{experience.title}</h3>
                                 <p className="text-sm text-gray-400">{experience.company} • {experience.duration}</p>
                                 <p className="text-sm text-gray-400">{experience.description}</p>
                                 <div className="flex flex-wrap gap-2">
                                    {experience.tags.map((tag, idx) => (
                                       <span
                                          key={idx}
                                          className="px-3 py-1 text-xs font-medium bg-white/5 text-gray-300 rounded-full"
                                       >
                                          {tag}
                                       </span>
                                    ))}
                                 </div>
                                 <a
                                    href={experience.certificate}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-400 hover:text-blue-400 flex items-center gap-2 pt-2"
                                 >
                                    <FiExternalLink /> View Certificate
                                 </a>
                              </div>
                           </div>
                        </motion.div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Projects;