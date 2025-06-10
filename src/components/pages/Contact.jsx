import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaInstagram, FaPaperPlane, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

const Contact = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateForm = () => {
        const newErrors = {};

        // Check if name is empty
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        // Check if email is empty or invalid
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Check if message is empty
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = (e) => {
        if (!validateForm()) {
            e.preventDefault();
            return;
        }

        setIsSubmitting(true);

        // Let the form submit naturally to getform.io
        setTimeout(() => {
            setFormSubmitted(true);
            setIsSubmitting(false);
        }, 1000);
    };

    return (
        <div name='contact' className='w-full min-h-screen bg-[#0a192f] flex justify-center items-center p-4 py-16'>
            <div className='max-w-[1000px] w-full'>
                <div className='pb-8 text-center'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#a32638] text-gray-300'>
                        Get In Touch
                    </p>
                    <p className='text-gray-300 py-6 text-lg max-w-[600px] mx-auto'>
                        I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
                        Let's connect!
                    </p>
                </div>

                <div className='flex flex-col lg:flex-row gap-8 items-start'>
                    {/* Contact Methods */}
                    <div className='lg:w-1/2 w-full'>
                        <h3 className='text-2xl font-bold text-[#ccd6f6] mb-6'>Let's Connect</h3>

                        {/* Direct Contact Options */}
                        <div className='space-y-4 mb-8'>
                            <a
                                href="mailto:keshav@kunver.com"
                                className='flex items-center gap-4 p-4 bg-[#112240] rounded-lg hover:bg-[#233554] transition-colors duration-300 group'
                            >
                                <FaEnvelope className='text-[#a32638] text-xl group-hover:scale-110 transition-transform duration-300' />
                                <div>
                                    <p className='text-[#ccd6f6] font-semibold'>Email</p>
                                    <p className='text-[#8892b0]'>keshav@kunver.com</p>
                                </div>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/keshav-kunver/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='flex items-center gap-4 p-4 bg-[#112240] rounded-lg hover:bg-[#233554] transition-colors duration-300 group'
                            >
                                <FaLinkedin className='text-[#0077B5] text-xl group-hover:scale-110 transition-transform duration-300' />
                                <div>
                                    <p className='text-[#ccd6f6] font-semibold'>LinkedIn</p>
                                    <p className='text-[#8892b0]'>Connect professionally</p>
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/keshavkunver/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='flex items-center gap-4 p-4 bg-[#112240] rounded-lg hover:bg-[#233554] transition-colors duration-300 group'
                            >
                                <FaInstagram className='text-[#E4405F] text-xl group-hover:scale-110 transition-transform duration-300' />
                                <div>
                                    <p className='text-[#ccd6f6] font-semibold'>Instagram</p>
                                    <p className='text-[#8892b0]'>Follow my journey</p>
                                </div>
                            </a>
                        </div>

                        <div className='bg-[#112240] p-6 rounded-lg'>
                            <h4 className='text-[#ccd6f6] font-semibold mb-3'>Quick Response</h4>
                            <p className='text-[#8892b0] text-sm'>
                                I typically respond to emails within 24 hours. For urgent matters,
                                LinkedIn messages tend to get faster responses.
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className='lg:w-1/2 w-full'>
                        {!formSubmitted ? (
                            <form
                                method='POST'
                                action="https://getform.io/f/bef0e966-a282-442e-ac04-d2bc6df24986"
                                className='bg-[#112240] p-6 rounded-lg shadow-lg'
                                onSubmit={handleSubmit}
                            >
                                <h3 className='text-2xl font-bold text-[#ccd6f6] mb-6'>Send a Message</h3>

                                <div className='space-y-4'>
                                    <div>
                                        <label className='block text-[#ccd6f6] text-sm font-semibold mb-2'>Name</label>
                                        <input
                                            className={`w-full bg-[#0a192f] border rounded-lg p-3 text-[#ccd6f6] placeholder-[#8892b0] focus:outline-none transition-colors duration-300 ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-[#233554] focus:border-[#a32638]'
                                                }`}
                                            type="text"
                                            placeholder='Your Name'
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                        />
                                        {errors.name && (
                                            <div className='flex items-center gap-2 mt-2 text-red-500 text-sm'>
                                                <FaExclamationTriangle className='text-xs' />
                                                {errors.name}
                                            </div>
                                        )}
                                    </div>

                                    <div>
                                        <label className='block text-[#ccd6f6] text-sm font-semibold mb-2'>Email</label>
                                        <input
                                            className={`w-full bg-[#0a192f] border rounded-lg p-3 text-[#ccd6f6] placeholder-[#8892b0] focus:outline-none transition-colors duration-300 ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-[#233554] focus:border-[#a32638]'
                                                }`}
                                            type="email"
                                            placeholder='your.email@example.com'
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                        />
                                        {errors.email && (
                                            <div className='flex items-center gap-2 mt-2 text-red-500 text-sm'>
                                                <FaExclamationTriangle className='text-xs' />
                                                {errors.email}
                                            </div>
                                        )}
                                    </div>

                                    <div>
                                        <label className='block text-[#ccd6f6] text-sm font-semibold mb-2'>Message</label>
                                        <textarea
                                            className={`w-full bg-[#0a192f] border rounded-lg p-3 text-[#ccd6f6] placeholder-[#8892b0] focus:outline-none transition-colors duration-300 resize-none ${errors.message ? 'border-red-500 focus:border-red-500' : 'border-[#233554] focus:border-[#a32638]'
                                                }`}
                                            name="message"
                                            rows="5"
                                            placeholder='Tell me about your project, question, or just say hello!'
                                            value={formData.message}
                                            onChange={handleInputChange}
                                        ></textarea>
                                        {errors.message && (
                                            <div className='flex items-center gap-2 mt-2 text-red-500 text-sm'>
                                                <FaExclamationTriangle className='text-xs' />
                                                {errors.message}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className='w-full mt-6 bg-[#a32638] hover:bg-[#8a2131] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed'
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <FaPaperPlane />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        ) : (
                            <div className='bg-[#112240] p-6 rounded-lg shadow-lg text-center'>
                                <FaCheckCircle className='text-green-500 text-4xl mx-auto mb-4' />
                                <h3 className='text-2xl font-bold text-[#ccd6f6] mb-2'>Message Sent!</h3>
                                <p className='text-[#8892b0]'>
                                    Thanks for reaching out! I'll get back to you as soon as possible.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;