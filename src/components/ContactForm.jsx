import React, { useState, useRef, useEffect } from 'react';
import { FaEnvelope, FaUser, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });
    const form = useRef();

    // Initialize EmailJS
    useEffect(() => {
        emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
        // print aboe data 
        console.log("This is myid",import.meta.env.VITE_EMAILJS_SERVICE_ID);
        console.log(import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
        console.log(import.meta.env.VITE_EMAILJS_PUBLIC_ID);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            const result = await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            if (result.text === 'OK') {
                setStatus({
                    type: 'success',
                    message: 'Message sent successfully!'
                });
                setFormData({ user_name: '', user_email: '', message: '' });
            }
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus({
                type: 'error',
                message: 'Failed to send message. Please try again.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const formFields = [
        {
            name: 'user_name', // Changed to match EmailJS template
            type: 'text',
            placeholder: 'Your Name',
            icon: <FaUser />
        },
        {
            name: 'user_email', // Changed to match EmailJS template
            type: 'email',
            placeholder: 'your@email.com',
            icon: <FaEnvelope />
        },
        {
            name: 'message',
            type: 'textarea',
            placeholder: 'What would you like to say?',
            icon: null
        }
    ];

    return (
        <form ref={form} onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            {status.message && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg ${status.type === 'success'
                        ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                        : 'bg-red-500/10 text-red-400 border border-red-500/20'
                        }`}
                >
                    {status.message}
                </motion.div>
            )}
            {formFields.map((field) => (
                <div key={field.name} className="relative">
                    {field.icon && (
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                            {field.icon}
                        </div>
                    )}
                    {field.type === 'textarea' ? (
                        <textarea
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            required
                            rows="4"
                            className="w-full p-2 pl-10 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder={field.placeholder}
                        />
                    ) : (
                        <input
                            type={field.type}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            required
                            className="w-full p-2 pl-10 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder={field.placeholder}
                        />
                    )}
                </div>
            ))}
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 p-2 bg-blue-900 text-white rounded-lg hover:bg-blue-600 transition-colors cursor-pointer"
            >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <FaPaperPlane />
            </button>
        </form>
    );
};

export default ContactForm;