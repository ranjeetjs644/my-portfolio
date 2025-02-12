import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaGithub, FaLinkedin, FaXingSquare, FaInstagram } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    const contactInfo = [
        {
            icon: <FaMapMarkerAlt className="text-indigo-400" />,
            label: "Location",
            value: "Ahmedabad, India"
        },
        {
            icon: <FaEnvelope className="text-blue-400" />,
            label: "Email",
            value: "ranjeetjs644@gmail.com",
            link: "mailto:ranjeetjs644@gmail.com"
        }
    ];

    const socialLinks = [
        {
            icon: <FaGithub className="text-xl" />,
            url: "https://github.com/ranjeetjs644",
            label: "GitHub",
            color: "hover:text-violet-400"
        },
        {
            icon: <FaLinkedin className="text-xl" />,
            url: "https://www.linkedin.com/in/ranjeetjs/",
            label: "LinkedIn",
            color: "hover:text-blue-400"
        },
        {
            icon: <FaXingSquare className="text-xl" />,
            url: "https://x.com/ranjeetjs644",
            label: "X",
            color: "hover:text-gray-100"
        },
        {
            icon: <FaInstagram className="text-xl" />,
            url: "https://instagram.com/_ranjeetttt",
            label: "Instagram",
            color: "hover:text-pink-400"
        }
    ];

    return (
        <div id="contact" className="min-h-screen py-12 md:py-24 px-4 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="inline-block px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-full mb-4"
                    >
                        Get in Touch
                    </motion.span>
                    <h1 className="text-3xl md:text-4xl font-bold">
                        Let's <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Connect</span>
                    </h1>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
                        Have a project in mind or want to collaborate? Feel free to reach out.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-8"
                    >
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800/30">
                            <h2 className="text-xl font-bold text-white mb-6">Contact Information</h2>
                            <div className="space-y-4">
                                {contactInfo.map((item, index) => (
                                    <div key={index} className="flex items-center gap-4">
                                        <div className="p-3 rounded-lg bg-gray-800/50">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">{item.label}</p>
                                            {item.link ? (
                                                <a href={item.link} className="text-gray-300 hover:text-blue-400 transition-colors">
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <p className="text-gray-300">{item.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div className="mt-8 pt-6 border-t border-gray-800/50">
                                <p className="text-sm text-gray-500 mb-4">Connect on social media</p>
                                <div className="flex flex-wrap gap-4">
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ y: -2 }}
                                            className={`p-3 rounded-lg bg-gray-900/80 backdrop-blur-sm border border-gray-800/50 
                        text-gray-400 ${social.color} transition-all duration-300 
                        hover:border-gray-700/80 hover:shadow-[0_0_15px_rgba(59,130,246,0.1)]`}
                                        >
                                            {social.icon}
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className='border border-gray-800/30 rounded-2xl p-6'
                    >
                        <ContactForm />
                    </motion.div>
                </div>
            </div>

            {/* Background Gradient */}
            <div className="hidden md:block absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-indigo-500/5 to-transparent rounded-full blur-[100px]" />
            </div>
        </div>
    );
};

export default Contact;