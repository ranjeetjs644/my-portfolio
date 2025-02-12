import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaXingSquare, FaHeart } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const navLinks = [
        { name: "Home", path: "/#home" },
        { name: "About", path: "/#about" },
        { name: "Skills", path: "/#skills" },
        { name: "Projects", path: "/#projects" },
        { name: "Contact", path: "/#contact" },
    ];

    const socialLinks = [
        { icon: <FaGithub size={18} />, url: "https://github.com/ranjeetjs644" },
        { icon: <FaLinkedin size={18} />, url: "https://www.linkedin.com/in/ranjeetjs/" },
        { icon: <FaXingSquare size={18} />, url: "https://x.com/ranjeetjs644" },
        { icon: <FaInstagram size={18} />, url: "https://instagram.com/_ranjeetttt" },
    ];

    return (
        <footer className="w-full bg-gray-950/30 backdrop-blur-sm border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex flex-col items-center gap-4">
                    {/* Navigation Links */}
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
                        {navLinks.map((link, index) => (
                            <HashLink
                                key={index}
                                smooth
                                to={link.path}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                {link.name}
                            </HashLink>
                        ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-3">
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 text-gray-400 hover:text-white transition-colors"
                                whileHover={{ y: -2 }}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>

                    {/* Made with Love */}
                    <div className="flex items-center justify-center gap-1.5 text-sm text-gray-400">
                        Made with <FaHeart className="text-red-500 animate-pulse" /> by
                        <a
                            href="https://github.com/ranjeetjs644"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                            Ranjeet
                        </a>
                    </div>

                    {/* Copyright */}
                    <p className="text-xs text-gray-500">
                        © {currentYear} All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;