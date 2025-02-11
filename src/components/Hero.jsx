import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center relative">
            {/* Subtle grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:32px_32px]"></div>

            <div className="max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-left space-y-6"
                    >
                        <div>
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="inline-block px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-full"
                            >
                                Welcome to my portfolio
                            </motion.span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                            Hello, I'm{' '}
                            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                                Ranjeet
                            </span>
                        </h1>

                        <div className="h-12 text-xl text-gray-400">
                            <TypeAnimation
                                sequence={[
                                    'Engineering Student',
                                    2000,
                                    'Frontend Developer',
                                    2000,
                                    'Backend Developer',
                                    2000,
                                    'ML-AI Enthusiast',
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </div>

                        <p className="text-gray-400 text-lg max-w-lg">
                            Crafting digital experiences with clean code and modern design.
                        </p>

                        <div className="flex gap-4 pt-4">
                            <motion.a
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                href="/resume.pdf"
                                className="px-6 py-3 bg-blue-500 text-white rounded-lg text-sm font-medium 
                  hover:bg-blue-600 transition-colors"
                            >
                                View Resume
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                href="#contact"
                                className="px-6 py-3 bg-gray-800 text-gray-200 rounded-lg text-sm font-medium 
                  hover:bg-gray-700 transition-colors"
                            >
                                Get in Touch
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="relative"
                    >
                        <div className="aspect-square w-full max-w-md mx-auto bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="grid grid-cols-2 gap-4 p-8">
                                {[
                                    { icon: <FaGithub size={24} />, url: "https://github.com/ranjeetjs644" },
                                    { icon: <FaLinkedin size={24} />, url: "https://linkedin.com/in/yourusername" },
                                    { icon: <SiLeetcode size={24} />, url: "https://leetcode.com/yourusername" },
                                ].map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-4 bg-gray-800/50 rounded-lg text-gray-400 hover:text-white 
                      hover:bg-gray-800 transition-all duration-300"
                                        whileHover={{ y: -2 }}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;