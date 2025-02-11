import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool, FaMapMarkerAlt, FaEnvelope, FaCode, FaTerminal, FaRobot } from 'react-icons/fa';
import { TbCloudComputing } from "react-icons/tb";
import MobileCard from '../components/MobileCard';

const About = () => {
   const education = [
      {
         year: "2022 - 2026",
         degree: "Bachelor of Technology",
         school: "Silver Oak College of Engineering and Technology",
         details: "Computer Science Engineering",
         progress: 75
      },
      {
         year: "2020 - 2022",
         degree: "HSC Science",
         school: "Vivekanand Hindi High School",
         details: "Informatic Practices",
         progress: 100
      }
   ];

   const interests = [
      { icon: <FaTerminal />, label: "Full Stack Development", desc: "Building end-to-end web applications" },
      { icon: <TbCloudComputing />, label: "Edge Computing", desc: "Exploring distributed systems" },
      { icon: <FaRobot />, label: "AI/ML", desc: "Machine learning applications" }
   ];

   return (
      <div className="min-h-screen py-12 md:py-24 px-4 relative overflow-hidden ">
         {/* Modern grid background */}
         <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
         </div>

         <div className="container mx-auto max-w-6xl relative z-10">
            {/* Minimal header */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-center mb-16"
            >
               <h1 className="text-3xl md:text-4xl font-bold">
                  About <span className="text-gray-400">&</span> <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Journey</span>
               </h1>
               <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
                  A passionate developer focused on building elegant solutions to complex problems
               </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
               {/* Left Column - Bio & Interests */}
               <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-8"
               >
                  {/* Bio Card */}
                  <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800/30">
                     <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
                        Hi, I'm <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Ranjeet</span>
                     </h2>
                     <p className="text-gray-400 leading-relaxed">
                        A Computer Science student passionate about crafting digital experiences through code. Currently exploring the intersections of web development, edge computing, and artificial intelligence.
                     </p>

                     {/* Contact Info */}
                     <div className="mt-6 flex flex-col sm:grid sm:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3">
                           <FaMapMarkerAlt className="text-indigo-400 flex-shrink-0" />
                           <span className="text-sm text-gray-400 truncate">Ahmedabad, India</span>
                        </div>
                        <div className="flex items-center gap-3">
                           <FaEnvelope className="text-cyan-400 flex-shrink-0" />
                           <a
                              href="mailto:ranjeetjs644@gmail.com"
                              className="text-sm text-gray-400 hover:text-cyan-400 transition-colors truncate"
                           >
                              ranjeetjs644@gmail.com
                           </a>
                        </div>
                     </div>
                  </div>

                  {/* Interests Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                     {interests.map((item, index) => (
                        <motion.div
                           key={index}
                           whileHover={{ scale: 1.02 }}
                           className="p-4 rounded-xl bg-gray-900/50 border border-gray-800/30 hover:border-indigo-500/20 transition-all"
                        >
                           <div className="text-2xl text-indigo-400 mb-3">{item.icon}</div>
                           <h3 className="text-sm font-medium text-white mb-1">{item.label}</h3>
                           <p className="text-xs text-gray-500">{item.desc}</p>
                        </motion.div>
                     ))}
                  </div>
               </motion.div>

               {/* Right Column - Education Timeline */}
               <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-indigo-500/20 before:via-cyan-500/20 before:to-transparent"
               >
                  {education.map((edu, index) => (
                     <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="mb-8 relative"
                     >
                        {/* Timeline Node */}
                        <div className="absolute -left-[25px] top-0 w-[50px] h-[50px] rounded-full bg-gray-900/80 border border-gray-800/50 flex items-center justify-center">
                           {index === 0 ? (
                              <FaGraduationCap className="text-xl text-indigo-400" />
                           ) : (
                              <FaSchool className="text-xl text-cyan-400" />
                           )}
                        </div>

                        {/* Content Card */}
                        <div className="ml-8 p-6 rounded-xl bg-gray-900/50 border border-gray-800/30">
                           <span className="text-sm text-indigo-400">{edu.year}</span>
                           <h3 className="text-lg font-bold text-white mt-2">{edu.degree}</h3>
                           <p className="text-sm text-gray-400 mt-1">{edu.school}</p>
                           <p className="text-sm text-gray-500 mt-1">{edu.details}</p>

                           {/* Progress Bar */}
                           <div className="mt-4 h-1 bg-gray-800/50 rounded-full overflow-hidden">
                              <motion.div
                                 className="h-full bg-gradient-to-r from-indigo-400 to-cyan-400"
                                 initial={{ width: 0 }}
                                 animate={{ width: `${edu.progress}%` }}
                                 transition={{ duration: 1, delay: 0.5 }}
                              />
                           </div>
                        </div>
                     </motion.div>
                  ))}
               </motion.div>
            </div>
         </div>
      </div>
   );
};

export default About;