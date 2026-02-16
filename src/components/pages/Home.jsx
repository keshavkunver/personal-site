'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { Button, Section, TextReveal, MagneticButton } from '../ui';
import { personalInfo, socialLinks } from '../../config/content';
import headshotImage from '../../assets/images/profile/headshot.png';

const Home = () => {
    const sectionRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    
    // Cursor spotlight position with spring physics
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springConfig = { damping: 30, stiffness: 200 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);
    
    // Create the gradient template
    const spotlightBackground = useMotionTemplate`radial-gradient(600px circle at ${smoothX}px ${smoothY}px, rgba(59, 130, 246, 0.07), transparent 60%)`;

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const handleMouseMove = (e) => {
            const rect = section.getBoundingClientRect();
            mouseX.set(e.clientX - rect.left);
            mouseY.set(e.clientY - rect.top);
        };

        const handleMouseEnter = () => setIsHovered(true);
        const handleMouseLeave = () => setIsHovered(false);

        section.addEventListener('mousemove', handleMouseMove);
        section.addEventListener('mouseenter', handleMouseEnter);
        section.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            section.removeEventListener('mousemove', handleMouseMove);
            section.removeEventListener('mouseenter', handleMouseEnter);
            section.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [mouseX, mouseY]);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1], delay: 0.3 },
        },
    };

    return (
        <Section id="home" fullHeight className="flex items-center relative overflow-hidden">
            {/* Cursor spotlight container */}
            <div ref={sectionRef} className="absolute inset-0">
                <motion.div
                    className="pointer-events-none absolute inset-0 z-0"
                    style={{
                        background: spotlightBackground,
                        opacity: isHovered ? 1 : 0,
                        transition: 'opacity 0.3s ease',
                    }}
                />
            </div>

            {/* Animated background glow effect */}
            <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-hero-glow opacity-50 pointer-events-none"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.5 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full relative z-10">

                {/* Left: Text Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Location badge */}
                    <motion.p 
                        className="text-text-tertiary text-xs uppercase tracking-[0.2em] mb-6 font-medium"
                        variants={itemVariants}
                    >
                        {personalInfo.location}
                    </motion.p>

                    {/* Name as Main Headline */}
                    <h1 className="text-5xl sm:text-6xl lg:text-display font-bold text-text-primary mb-4 tracking-tight">
                        <TextReveal delay={0.3} staggerDelay={0.1} duration={0.6}>
                            {personalInfo.name}
                        </TextReveal>
                    </h1>

                    {/* Title/Role */}
                    <motion.p 
                        className="text-xl sm:text-2xl text-text-secondary mb-6 font-medium tracking-wide"
                        variants={itemVariants}
                    >
                        {personalInfo.title}
                    </motion.p>

                    {/* Tagline */}
                    <motion.p 
                        className="text-lg text-text-tertiary max-w-lg mb-6 leading-relaxed"
                        variants={itemVariants}
                    >
                        {personalInfo.tagline}
                    </motion.p>

                    {/* Availability */}
                    <motion.div 
                        className="flex items-center gap-2 text-text-tertiary text-sm mb-10"
                        variants={itemVariants}
                    >
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>{personalInfo.availability}</span>
                    </motion.div>

                    {/* CTAs with Magnetic Effect */}
                    <motion.div 
                        className="flex flex-wrap gap-4 mb-10"
                        variants={itemVariants}
                    >
                        <MagneticButton strength={0.4} radius={100}>
                            <Button variant="primary" size="lg" href="#contact">
                                Get in Touch
                            </Button>
                        </MagneticButton>
                        <MagneticButton strength={0.4} radius={100}>
                            <Button variant="secondary" size="lg" href="#work">
                                View Work
                            </Button>
                        </MagneticButton>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div 
                        className="flex items-center gap-6 text-sm"
                        variants={itemVariants}
                    >
                        <a 
                            href={socialLinks.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-text-tertiary hover:text-text-primary transition-colors duration-200"
                        >
                            LinkedIn
                        </a>
                        <a 
                            href={socialLinks.github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-text-tertiary hover:text-text-primary transition-colors duration-200"
                        >
                            GitHub
                        </a>
                        <a 
                            href={`mailto:${personalInfo.email}`} 
                            className="text-text-tertiary hover:text-text-primary transition-colors duration-200"
                        >
                            Email
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right: Headshot */}
                <motion.div 
                    className="relative order-first lg:order-last flex justify-center lg:justify-end"
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Glow effect behind photo */}
                    <motion.div 
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <div className="w-72 h-72 sm:w-96 sm:h-96 bg-accent/10 blur-3xl rounded-full" />
                    </motion.div>

                    <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border border-dark-border shadow-2xl shadow-black/50">
                        <Image
                            src={headshotImage}
                            alt={personalInfo.name}
                            fill
                            className="object-cover object-top"
                            priority
                        />
                        {/* Subtle overlay for premium feel */}
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/20 to-transparent" />
                    </div>
                </motion.div>

            </div>
        </Section>
    );
};

export default Home;
