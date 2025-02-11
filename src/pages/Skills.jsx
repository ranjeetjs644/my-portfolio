import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaGitAlt, FaGithub, FaDocker, FaLinux, FaBootstrap } from "react-icons/fa";
import { SiTypescript, SiExpress, SiMongodb, SiMysql, SiPostman, SiRemix, SiTailwindcss } from "react-icons/si";
import { TbBrandPython, TbCloudComputing } from "react-icons/tb";

const GlowingOrb = ({ delay = 0 }) => (
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
    className="absolute w-[30vw] h-[30vw] bg-gradient-radial from-white/5 to-transparent rounded-full blur-3xl"
    style={{
      background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
    }}
  />
);

const skills = {
  "Frontend": [
    { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" /> },
    { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "Remix", icon: <SiRemix className="text-white" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-[#7952B3]" /> }
  ],
  "Backend": [
    { name: "Python", icon: <TbBrandPython className="text-[#3776AB]" /> },
    { name: "Node.js", icon: <FaNode className="text-[#339933]" /> },
    { name: "Express", icon: <SiExpress className="text-white" /> }
  ],
  "MERN Stack": [
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "Express", icon: <SiExpress className="text-white" /> },
    { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "Node.js", icon: <FaNode className="text-[#339933]" /> }
  ],
  "Database & Tools": [
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
    { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
    { name: "Docker", icon: <FaDocker className="text-[#2496ED]" /> },
    { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
    { name: "Linux", icon: <FaLinux className="text-white" /> },
    { name: "Cloud", icon: <TbCloudComputing className="text-white" /> }
  ]
};

const Skills = () => {
  return (
    <div className="min-h-screen py-12 md:py-24 px-4 relative overflow-hidden ">
      {/* Modern grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Minimal header */}
        <motion.div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-blue-400/80 text-sm tracking-wider uppercase mb-3"
          >
            Technology Stack
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold tracking-tight"
          >
            Skills & Expertise
          </motion.h1>
          <div className="mt-6 h-px w-20 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent mx-auto"></div>
        </motion.div>

        {/* Modern skills grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {Object.entries(skills).map(([category, skills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="group h-full relative p-6 rounded-2xl 
                bg-gradient-to-b from-gray-900/50 to-gray-900/30
                backdrop-blur-sm border border-gray-800/50
                hover:border-blue-500/20 transition-all duration-500"
              >
                {/* Minimal category header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-400/20 blur-xl rounded-full"></div>
                    <div className="relative w-12 h-12 rounded-xl 
                      bg-gray-900/80 flex items-center justify-center
                      border border-gray-800/50"
                    >
                      {getCategoryIcon(category)}
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-white/90">
                      {category}
                    </h2>
                    <p className="text-sm text-gray-400 mt-1">
                      {getCategoryDescription(category)}
                    </p>
                  </div>
                </div>

                {/* Modern skills layout */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="flex items-center gap-3 p-3
                        rounded-xl bg-white/[0.02] border border-gray-800/50
                        hover:border-blue-500/20 hover:bg-white/[0.04]
                        transition-all duration-300"
                    >
                      <span className="text-xl opacity-80 group-hover:opacity-100 transition-opacity">
                        {skill.icon}
                      </span>
                      <span className="text-sm text-gray-400 font-medium">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-500/[0.02] to-transparent pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Minimal footer text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-gray-500 mt-12 max-w-2xl mx-auto"
        >
          These technologies represent my current toolkit, constantly evolving as I explore new possibilities.
        </motion.p>
      </div>

      {/* Subtle background effects */}
      <div className="hidden md:block absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 
          bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 
          bg-gradient-to-tl from-indigo-500/5 to-transparent rounded-full blur-[100px]" />
      </div>
    </div>
  );
};

const getCategoryIcon = (category) => {
  switch (category) {
    case "Frontend":
      return <FaReact className="text-3xl text-indigo-400" />;
    case "Backend":
      return <FaNode className="text-3xl text-emerald-400" />;
    case "MERN Stack":
      return <SiMongodb className="text-3xl text-green-400" />;
    case "Database & Tools":
      return <FaDocker className="text-3xl text-cyan-400" />;
    default:
      return null;
  }
};

const getCategoryDescription = (category) => {
  switch (category) {
    case "Frontend":
      return "Building interactive and responsive user interfaces";
    case "Backend":
      return "Handling server-side logic and API development";
    case "MERN Stack":
      return "Full-stack development with MongoDB, Express, React & Node.js";
    case "Database & Tools":
      return "Database management and development tools";
    default:
      return "";
  }
};

export default Skills;