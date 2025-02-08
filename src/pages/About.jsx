import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool, FaMapMarkerAlt, FaEnvelope, FaCode, FaServer, FaRobot } from 'react-icons/fa';
import { TbCloudComputing } from "react-icons/tb";


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
      { icon: <FaCode />, label: "Full Stack" },
      { icon: <TbCloudComputing />, label: "Edge Computing" },
      { icon: <FaRobot />, label: "AI/ML" }
   ];

   return (
      <div className="min-h-screen py-20 px-8 lg:px-24 relative overflow-hidden bg-[#000000]">
         {/* Background Pattern */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

         {/* Glow Effects - Reduced intensity */}
         <div className="absolute top-0 -left-4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-[0.05] animate-blob"></div>
         <div className="absolute top-0 -right-4 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-lg opacity-[0.05] animate-blob animation-delay-2000"></div>
         <div className="absolute -bottom-8 left-20 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-lg opacity-[0.05] animate-blob animation-delay-4000"></div>

         <div className="max-w-7xl mx-auto relative z-10">
            {/* About Header */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-center mb-20"
            >
               <h1 className="text-4xl md:text-2xl font-bold mt-6 text-white border-b border-gray-800 inline">
                  About Me
               </h1>
            </motion.div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-10">
               {/* Left Section */}
               <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-8"
               >
                  {/* Intro Card */}
                  <motion.div
                     whileHover={{
                        scale: 1.02,
                        rotateX: 5,
                        rotateY: 5,
                     }}
                     className="p-8 rounded-2xl bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-800/50 backdrop-blur-sm transform transition-all duration-300 hover:border-blue-500/50"
                     style={{ transformStyle: "preserve-3d" }}
                  >
                     <h3 className="text-2xl font-bold text-white mb-4">
                        Hi, I'm <span className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">Ranjeet</span>
                     </h3>
                     <p className="text-gray-300 leading-relaxed">
                        A Computer Science student passionate about crafting digital experiences through code.
                     </p>
                  </motion.div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     <motion.div
                        whileHover={{
                           scale: 1.05,
                           rotateX: -5,
                           rotateY: 5,
                        }}
                        className="p-6 rounded-xl bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm 
                                   hover:border hover:border-rose-400/50 transform transition-all duration-300 border-transparent"
                        style={{ transformStyle: "preserve-3d" }}
                     >
                        <div className='flex items-center gap-4'>
                           <FaMapMarkerAlt className="text-2xl text-rose-400" />
                           <h4 className="text-white text-base md:text-lg font-medium">Location</h4>
                        </div>
                        <p className="text-sm md:text-base text-gray-400 mt-2">Ahmedabad, India</p>
                     </motion.div>

                     <motion.div
                        whileHover={{
                           scale: 1.05,
                           rotateX: -5,
                           rotateY: -5,
                        }}
                        className="p-6 rounded-xl bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm 
                                   hover:border hover:border-indigo-500/50 transform transition-all duration-300 border-transparent"
                        style={{ transformStyle: "preserve-3d" }}
                     >
                        <div className='flex items-center gap-4'>
                           <FaEnvelope className="text-2xl text-indigo-400" />
                           <h4 className="text-white text-base md:text-lg font-medium">Email</h4>
                        </div>
                        <p className="text-sm md:text-base text-gray-400 mt-2 break-words">
                           ranjeetjs644@gmail.com
                        </p>
                     </motion.div>
                  </div>

                  {/* Interest Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                     {interests.map((item, index) => (
                        <motion.div
                           key={index}
                           whileHover={{
                              scale: 1.05,
                              rotateX: 5,
                              rotateY: 5
                           }}
                           className="p-3 rounded-lg bg-gray-900/30 border border-gray-800 backdrop-blur-sm hover:border-blue-500/30 transform transition-all duration-300"
                           style={{ transformStyle: "preserve-3d" }}
                        >
                           <div className="text-blue-400 text-lg sm:text-xl mb-1">{item.icon}</div>
                           <p className="text-xs text-gray-400">{item.label}</p>
                        </motion.div>
                     ))}
                  </div>
               </motion.div>

               {/* Education Timeline - Right Section */}
               <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="relative"
               >
                  <div className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-rose-400/20 via-fuchsia-500/20 to-indigo-500/20"></div>

                  {education.map((edu, index) => (
                     <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="relative ml-16 mb-12"
                     >
                        <div className="absolute -left-20 top-0 w-8 h-8 rounded-full bg-gray-900  flex items-center justify-center">
                           {index === 0 ?
                              <FaGraduationCap className="text-blue-500" /> :
                              <FaSchool className="text-rose-400" />
                           }
                        </div>
                        <div className="p-6 rounded-lg bg-gray-900/20 border border-gray-800 backdrop-blur-sm hover:border-indigo-500/50 transition-all duration-300">
                           <div className="text-sm text-fuchsia-500">{edu.year}</div>
                           <h3 className="text-xl font-bold text-white mt-1">{edu.degree}</h3>
                           <p className="text-gray-400">{edu.school}</p>
                           <p className="text-sm text-gray-500 mt-2">{edu.details}</p>
                           <div className="mt-4 h-1 bg-gray-800 rounded-full overflow-hidden">
                              <motion.div
                                 className="h-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
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