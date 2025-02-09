import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { TypeAnimation } from 'react-type-animation';

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

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

    const springY = useSpring(y, { stiffness: 100, damping: 30 });
    const springOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });
    const springScale = useSpring(scale, { stiffness: 100, damping: 30 });

    return (
        <div ref={containerRef} className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
            {/* Animated Particles Background */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    background: {
                        color: {
                            value: "transparent",
                        },
                    },
                    particles: {
                        number: { value: 20, density: { enable: true, value_area: 800 } },
                        color: { value: "#ffffff" },
                        opacity: { value: 0.1 },
                        size: { value: 3 },
                        move: {
                            enable: true,
                            speed: 0.5,
                            direction: "none",
                            random: true,
                        },
                    },
                }}
                className="absolute inset-0 -z-10"
            />

            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <GlowingOrb delay={0} style={{ top: '10%', left: '15%' }} />
                <GlowingOrb delay={2} style={{ top: '60%', right: '15%' }} />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
            </div>

            <motion.div
                style={{ y: springY, opacity: springOpacity, scale: springScale }}
                className="relative z-10 w-full max-w-5xl mx-auto px-6"
            >
                {/* Main Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="mb-6 relative inline-block"
                    >
                        <span className="text-sm font-light tracking-[0.2em] text-gray-400 uppercase">
                            Welcome to my digital space
                        </span>
                    </motion.div>

                    <motion.h1
                        className="text-6xl md:text-7xl font-bold mb-6 relative"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
                            Hello, I'm{' '}
                        </span>
                        <motion.span
                            className="relative inline-block"
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.2 }
                            }}
                        >
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600 animate-gradient">
                                Ranjeet
                            </span>
                            <motion.span
                                className="absolute -inset-1 border border-sky-500/20 rounded-lg"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 0.6, 0.3],
                                    borderColor: ['rgba(14,165,233,0.2)', 'rgba(99,102,241,0.2)', 'rgba(14,165,233,0.2)']
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </motion.span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-400 font-light mb-12 tracking-wide h-[60px]"
                    >
                        <TypeAnimation
                            sequence={[
                                'Engineering Student',
                                2000,
                                'Frontend Developer',
                                2000,
                                'UI/UX Enthusiast',
                                2000,
                                'Problem Solver',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-wrap justify-center gap-6 mb-16"
                    >
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 0 25px rgba(14,165,233,0.5)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-600 rounded-lg text-white font-medium backdrop-blur-sm transition-all duration-300 relative overflow-hidden group"
                        >
                            <span className="relative z-10">Get My Resume</span>
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-sky-500"
                                initial={{ x: "100%" }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.button>
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                borderColor: "rgba(255,255,255,0.5)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-transparent border border-white/10 rounded-lg text-gray-300 font-medium hover:bg-white/5 transition-all duration-300"
                        >
                            Get in Touch
                        </motion.button>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex justify-center gap-8"
                    >
                        {[
                            { icon: <FaGithub className="w-6 h-6" />, url: "https://github.com/ranjeetjs644" },
                            { icon: <FaLinkedin className="w-6 h-6" />, url: "https://linkedin.com/in/yourusername" },
                            { icon: <SiLeetcode className="w-6 h-6" />, url: "https://leetcode.com/yourusername" }
                        ].map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-sky-400 transition-all duration-300"
                                whileHover={{
                                    y: -3,
                                    filter: "drop-shadow(0 0 8px rgba(14,165,233,0.5))"
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Hero;