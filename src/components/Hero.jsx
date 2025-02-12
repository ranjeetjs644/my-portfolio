import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaXingSquare } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Hero = () => {
    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6">
            {/* Subtle grid background with animation */}
            <motion.div
                className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:32px_32px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            ></motion.div>

            <div className="max-w-screen-xl mx-auto py-12 sm:py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center md:text-left space-y-6"
                    >
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="inline-block px-3 py-1 text-sm font-medium bg-blue-500/10 text-blue-400 rounded-full"
                        >
                            Welcome to my portfolio
                        </motion.span>

                        <h1 className="text-[40px] sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                            Hello, I'm{' '}
                            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                                Ranjeet
                            </span>
                        </h1>

                        <div className="h-12 text-2xl sm:text-xl text-gray-400">
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

                        <p className="text-gray-400 text-lg sm:text-base max-w-lg mx-auto md:mx-0">
                            Crafting digital experiences with clean code and modern design.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center md:justify-start max-w-[80%] mx-auto md:mx-0">
                            <Link
                                to="https://drive.google.com/file/d/1oN3nQn4WJP1jGP7rai7gFa1uKCJ1dWGj/view?usp=sharing"
                                target="_blank"
                                className="group px-6 py-3 bg-blue-500/80 backdrop-blur-sm text-white rounded-xl text-sm font-medium 
                                hover:bg-blue-600/90 transition-all duration-300 cursor-pointer text-center
                                border border-blue-400/20 shadow-lg shadow-blue-500/20"
                            >
                                <span className="flex items-center justify-center gap-2">
                                    View Resume
                                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </Link>
                            <HashLink
                                to="/#contact"
                                smooth
                                className="group px-6 py-3 bg-gray-800/50 backdrop-blur-sm text-gray-200 rounded-xl text-sm font-medium 
                                hover:bg-gray-700/60 transition-all duration-300 cursor-pointer text-center
                                border border-gray-700/20 shadow-lg shadow-gray-900/20"
                            >
                                <span className="flex items-center justify-center gap-2">
                                    Get in Touch
                                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </HashLink>
                        </div>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative flex justify-center"
                    >
                        <div className="aspect-square w-48 sm:w-64 md:w-80 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            {/* Social Media Icons */}
                            <div className="flex md:grid md:grid-cols-2 gap-6 md:gap-3 p-4 w-full md:w-56 justify-start md:justify-center">
                                {[
                                    { icon: <FaGithub size={32} />, url: "https://github.com/ranjeetjs644" },
                                    { icon: <FaLinkedin size={32} />, url: "https://www.linkedin.com/in/ranjeetjs/" },
                                    { icon: <FaXingSquare size={32} />, url: "https://x.com/ranjeetjs644" },
                                    { icon: <FaInstagram size={32} />, url: "https://instagram.com/_ranjeetttt" },
                                ].map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center w-20 h-20 md:w-20 md:h-20
                                        bg-gray-800/30 backdrop-blur-sm 
                                        rounded-2xl text-gray-400 hover:text-white 
                                        hover:bg-gray-800/50 transition-all duration-300 
                                        border border-gray-700/20"
                                        whileHover={{ y: -2 }}
                                    >
                                        <span className="text-4xl md:text-3xl">
                                            {social.icon}
                                        </span>
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
