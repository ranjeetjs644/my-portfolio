import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Hero = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-6 md:px-8 bg-gradient-to-br font-poppins   ">
            <div className="max-w-5xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-8"
                >
                    {/* Name and Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-5xl md:text-6xl font-bold text-white"
                    >
                        Hey, I'm{' '}
                        <span className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
                            Ranjeet Patel
                        </span>
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="space-y-2"
                    >
                        <p className="text-lg md:text-xl text-gray-400 font-medium font-inter">
                            Engineering Student | Full-Stack Developer
                        </p>
                        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-inter">
                            Crafting digital experiences with clean, efficient, and scalable code.
                        </p>
                    </motion.div>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex justify-center gap-4 pt-6"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-lg text-lg  shadow-lg hover:shadow-rose-500/30 transition-all cursor-pointer font-poppins"
                        >
                            Resume
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 border-2 border-rose-500/30 text-rose-400 rounded-lg text-lg font-poppins hover:bg-rose-500/10 transition-all cursor-pointer"
                        >
                            Contact
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;