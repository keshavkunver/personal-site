'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import { socialLinks } from '../../config/content';

// Animated Hamburger Component
const HamburgerIcon = ({ isOpen, toggle }) => {
    return (
        <button
            onClick={toggle}
            className='relative w-10 h-10 flex items-center justify-center z-50'
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
            <div className='w-6 h-5 relative flex flex-col justify-between'>
                <motion.span
                    className='w-full h-0.5 bg-text-primary rounded-full origin-left'
                    animate={{
                        rotate: isOpen ? 45 : 0,
                        y: isOpen ? 0 : 0,
                        width: isOpen ? '100%' : '100%',
                    }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                />
                <motion.span
                    className='w-full h-0.5 bg-text-primary rounded-full'
                    animate={{
                        opacity: isOpen ? 0 : 1,
                        x: isOpen ? 20 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                />
                <motion.span
                    className='w-full h-0.5 bg-text-primary rounded-full origin-left'
                    animate={{
                        rotate: isOpen ? -45 : 0,
                        y: isOpen ? 0 : 0,
                        width: isOpen ? '100%' : '70%',
                    }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                />
            </div>
        </button>
    );
};

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const handleClick = () => setNav(!nav);

    // Handle scroll state for navbar appearance
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Track active section with Intersection Observer
    useEffect(() => {
        const sections = ['home', 'work', 'capabilities', 'experience', 'education', 'writing', 'contact'];
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-20% 0px -60% 0px' }
        );

        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (nav) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [nav]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            // Use Lenis if available, fallback to native
            if (window.lenis) {
                window.lenis.scrollTo(element, {
                    offset: -60,
                    duration: 1.2,
                });
            } else {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            setNav(false);
        }
    };

    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'work', label: 'Work' },
        { id: 'capabilities', label: 'Capabilities' },
        { id: 'experience', label: 'Industry' },
        { id: 'education', label: 'Education' },
        { id: 'writing', label: 'Writing' },
        { id: 'contact', label: 'Contact' },
    ];

    // Animation variants for staggered menu
    const menuVariants = {
        closed: {
            opacity: 0,
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
        open: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        closed: { 
            opacity: 0, 
            y: 20,
            transition: { duration: 0.2 }
        },
        open: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
        },
    };

    const socialVariants = {
        closed: { opacity: 0, y: 10 },
        open: { 
            opacity: 1, 
            y: 0,
            transition: { delay: 0.5, duration: 0.3 }
        },
    };

    return (
        <>
            <motion.nav 
                className={`
                    fixed w-full h-[60px] flex justify-center items-center px-6 md:px-8 
                    text-text-secondary z-50 transition-all duration-300
                    ${scrolled 
                        ? 'bg-dark-bg/95 backdrop-blur-xl border-b border-dark-border/80 shadow-lg shadow-black/10' 
                        : 'bg-transparent border-b border-transparent'
                    }
                `}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            >
                {/* Desktop Navigation */}
                <div className='hidden md:flex items-center gap-10'>
                    {/* Logo */}
                    <Logo onClick={() => scrollToSection('home')} />

                    {/* Navigation Links */}
                    <ul className='flex items-center gap-1'>
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <button 
                                    onClick={() => scrollToSection(link.id)}
                                    className={`
                                        relative px-4 py-2 text-sm transition-colors duration-200 rounded-md
                                        ${activeSection === link.id 
                                            ? 'text-text-primary' 
                                            : 'text-text-secondary hover:text-text-primary'
                                        }
                                    `}
                                >
                                    {link.label}
                                    {activeSection === link.id && (
                                        <motion.div
                                            className='absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full'
                                            layoutId='activeSection'
                                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Social Links */}
                    <div className='flex items-center gap-6 pl-6 border-l border-dark-border/50'>
                        <a 
                            href={socialLinks.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='text-text-tertiary hover:text-text-primary transition-colors duration-200 text-sm'
                        >
                            LinkedIn
                        </a>
                        <a 
                            href={socialLinks.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='text-text-tertiary hover:text-text-primary transition-colors duration-200 text-sm'
                        >
                            GitHub
                        </a>
                    </div>
                </div>

                {/* Mobile Header */}
                <div className='md:hidden flex justify-between items-center w-full'>
                    <Logo onClick={() => scrollToSection('home')} />
                    <HamburgerIcon isOpen={nav} toggle={handleClick} />
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {nav && (
                    <motion.div
                        className='fixed inset-0 bg-dark-bg z-40 md:hidden'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Background gradient effect */}
                        <div className='absolute inset-0 overflow-hidden'>
                            <motion.div 
                                className='absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl'
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>

                        <motion.div
                            className='h-full flex flex-col justify-center items-center relative z-10'
                            variants={menuVariants}
                            initial='closed'
                            animate='open'
                            exit='closed'
                        >
                            <ul className='flex flex-col items-center gap-2'>
                                {navLinks.map((link, index) => {
                                    const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];
                                    return (
                                        <motion.li 
                                            key={link.id}
                                            variants={itemVariants}
                                        >
                                            <button 
                                                onClick={() => scrollToSection(link.id)} 
                                                className={`
                                                    text-4xl sm:text-5xl font-medium py-3 px-8
                                                    transition-colors duration-200
                                                    ${activeSection === link.id 
                                                        ? 'text-text-primary' 
                                                        : 'text-text-tertiary hover:text-text-primary'
                                                    }
                                                `}
                                            >
                                                <span className='text-accent/60 text-base mr-4 font-light tracking-wider'>
                                                    {romanNumerals[index]}
                                                </span>
                                                {link.label}
                                            </button>
                                        </motion.li>
                                    );
                                })}
                            </ul>

                            {/* Mobile Social Links */}
                            <motion.div 
                                className='flex items-center gap-8 mt-16 text-sm'
                                variants={socialVariants}
                            >
                                <a 
                                    href={socialLinks.linkedin} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className='text-text-tertiary hover:text-text-primary transition-colors duration-200'
                                >
                                    LinkedIn
                                </a>
                                <span className='text-dark-border'>·</span>
                                <a 
                                    href={socialLinks.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className='text-text-tertiary hover:text-text-primary transition-colors duration-200'
                                >
                                    GitHub
                                </a>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
