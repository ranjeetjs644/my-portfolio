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
      <div className="w-[95%] lg:w-[70%] mx-auto flex items-center justify-between px-4 py-2 mt-4">
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
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden z-50">
          {isOpen ? (
            <RxCross2 className="text-3xl text-white" />
          ) : (
            <RiMenuFold2Fill className="text-3xl text-white" />
          )}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed -top-2 right-0 h-60 w-full bg-gray-950 bg-opacity-50 backdrop-blur-md text-white shadow-xl lg:hidden rounded-lg my-2"
            >
              <div className="flex flex-col items-center justify-center h-full gap-6">
                {navItems.map((item, index) => (
                  <motion.div key={index}>
                    <HashLink
                      smooth
                      to={`/#${item.id}`}
                      className="text-base font-semibold text-white cursor-pointer"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </HashLink>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Right Section */}
        <div className="hidden lg:flex items-center">
          <button 
            type="button"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-50 border border-gray-700 rounded-l-lg hover:bg-gray-800"
          >
            Contact
          </button>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-black border border-gray-700 rounded-r-lg hover:bg-gray-800"
          >
            <motion.div whileHover={{ rotate: 15, scale: 1.1 }}>
              <FaGithub className="text-xl text-white" />
            </motion.div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;