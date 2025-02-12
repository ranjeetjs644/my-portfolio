import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: <FaGithub size={20} />, url: "https://github.com/ranjeetjs644" },
        { icon: <FaLinkedin size={20} />, url: "https://www.linkedin.com/in/ranjeetjs/" },
        { icon: <FaInstagram size={20} />, url: "https://instagram.com/_ranjeetttt" },
    ];

    const footerLinks = [
        { name: "Home", path: "/#home" },
        { name: "About", path: "/#about" },
        { name: "Skills", path: "/#skills" },
        { name: "Projects", path: "/#projects" },
        { name: "Contact", path: "/#contact" },
    ];

    return (
        <footer className="bg-gray-950 border-t border-gray-900">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Logo and Description */}
                    <div className="flex flex-col items-center md:items-start">
                        <HashLink to="/#home" className="flex items-center space-x-2">
                            <motion.img
                                src="/logo.png"
                                alt="logo"
                                className="w-8 filter invert brightness-100"
                                whileHover={{ scale: 1.1 }}
                            />
                        </HashLink>
                        <p className="mt-4 text-sm text-gray-400 text-center md:text-left">
                            Building digital experiences with passion and precision.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="flex flex-col gap-2">
                            {footerLinks.map((link, index) => (
                                <li key={index}>
                                    <HashLink
                                        smooth
                                        to={link.path}
                                        className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
                                    >
                                        {link.name}
                                    </HashLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-white font-semibold mb-4">Connect</h3>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-blue-400 transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-8 border-t border-gray-800">
                    <p className="text-center text-sm text-gray-400">
                        © {currentYear} Ranjeet Kumar. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;