import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaGitAlt, FaGithub, FaDocker, FaLinux, FaBootstrap } from "react-icons/fa";
import { SiTypescript, SiExpress, SiMongodb, SiMysql, SiPostman, SiRemix, SiTailwindcss } from "react-icons/si";
import { TbBrandPython, TbCloudComputing } from "react-icons/tb";

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
    <div className="min-h-screen py-20 px-8 lg:px-24 relative overflow-hidden bg-[#0A0A0A]">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      {/* Glow Effects */}
      <div className="absolute top-0 -left-4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-[0.05] animate-blob"></div>
      <div className="absolute top-0 -right-4 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-lg opacity-[0.05] animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-lg opacity-[0.05] animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-2xl font-bold mt-6 text-white border-b border-gray-800 inline-block hover:border-gray-400 transition-colors duration-300">
            My Skills
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-6 rounded-xl backdrop-blur-sm bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-all duration-300 cursor-pointer"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">
                {category}
              </h2>
              <div className="flex flex-wrap gap-3 cursor-pointer">
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 bg-black/20 backdrop-blur-md rounded-md border border-white/[0.05] text-base transition-all hover:border-white/[0.1] cursor-pointer"
                  >
                    {skill.icon}
                    <span className="text-gray-300">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;