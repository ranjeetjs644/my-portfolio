import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenuFold2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { id: "home", name: "Home" },
        { id: "about", name: "About" },
        { id: "skills", name: "Skills" },
        { id: "projects", name: "Projects" }
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 w-full backdrop-blur-sm z-50 bg-transparent  ">
            <div className="md:w-[75%] lg:w-[70%] mx-auto flex items-center justify-between px-4 py-2 mt-4">
                <HashLink
                    smooth
                    to="/#home"
                    className="flex items-center space-x-2 cursor-pointer"
                >
                    <motion.img
                        src="/logo.png"
                        alt="logo"
                        className="w-8 filter invert brightness-100 logo-glow"
                        whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                    />
                </HashLink>

                {/* Desktop Navigation */}
                <div className="hidden lg:block">
                    <ul className="flex gap-x-6">
                        {navItems.map((item, index) => (
                            <motion.li key={index}>
                                <HashLink
                                    smooth
                                    to={`/#${item.id}`}
                                    className="text-[14px] font-semibold relative group cursor-pointer text-secondary-dark hover:text-gray-600"
                                >
                                    {item.name}
                                </HashLink>
                            </motion.li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden z-50 p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
                >
                    {isOpen ? (
                        <RxCross2 className="text-2xl text-white" />
                    ) : (
                        <RiMenuFold2Fill className="text-2xl text-white" />
                    )}
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                            className="fixed top-0 left-0 h-screen w-full bg-gray-950/95 backdrop-blur-lg 
                            text-white shadow-xl lg:hidden z-40 flex flex-col justify-center"
                        >
                            <div className="flex flex-col items-center justify-center gap-8">
                                {navItems.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <HashLink
                                            smooth
                                            to={`/#${item.id}`}
                                            className="text-xl font-semibold text-white hover:text-blue-400 
                                            transition-colors cursor-pointer px-6 py-2"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.name}
                                        </HashLink>
                                    </motion.div>
                                ))}
                                {/* Add Contact and GitHub buttons for mobile */}
                                <motion.div
                                    className="flex flex-col gap-4 mt-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: navItems.length * 0.1 }}
                                >
                                    <HashLink
                                        smooth
                                        to="/#contact"
                                        className="px-8 py-2 bg-blue-500 text-white rounded-lg 
                                        hover:bg-blue-600 transition-colors text-center"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Contact
                                    </HashLink>
                                    <a
                                        href="https://github.com/ranjeetjs644"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-8 py-2 bg-gray-800 text-white rounded-lg 
                                        hover:bg-gray-700 transition-colors text-center flex items-center justify-center gap-2"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <FaGithub className="text-xl" />
                                        GitHub
                                    </a>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Right Section */}
                <div className="hidden lg:flex items-center">
                    <HashLink
                        smooth
                        to={`/#contact`}
                        className="cursor-pointer"
                    >
                        <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-50 border border-gray-700 rounded-l-lg hover:bg-gray-800"
                        >
                            Contact
                        </button>
                    </HashLink>
                    <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-black border border-gray-700 rounded-r-lg hover:bg-gray-800"
                    >
                        <motion.a
                            href="https://github.com/ranjeetjs644"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ rotate: 15, scale: 1.1 }}
                        >
                            <FaGithub className="text-xl text-white" />
                        </motion.a>

                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;