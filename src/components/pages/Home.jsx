'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import Link from 'next/link';
import { Button, Section, TextReveal } from '../ui';
import { personalInfo } from '../../config/content';
import headshotImage from '../../assets/images/profile/headshot.png';

const QuickLink = ({ href, title, desc, align = 'left' }) => (
    <Link
        href={href}
        className={`block w-full lg:w-[300px] rounded-2xl border border-dark-border bg-dark-surface/45 backdrop-blur-sm px-6 py-4 transition-all duration-200 hover:border-dark-border-hover hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg ${
            align === 'right' ? 'lg:text-right' : ''
        }`}
    >
        <p className="font-heading font-semibold text-text-primary">{title}</p>
        <p className="text-sm text-text-tertiary mt-1 leading-relaxed">{desc}</p>
    </Link>
);

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
    const spotlightBackground = useMotionTemplate`radial-gradient(600px circle at ${smoothX}px ${smoothY}px, rgba(255, 255, 255, 0.04), transparent 60%)`;

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

            {/* Aurora sky: teal upper-left, gold lower-right, under film grain */}
            <motion.div
                className="absolute inset-0 bg-aurora pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
            />
            <div className="absolute inset-0 bg-grain opacity-[0.05] mix-blend-screen pointer-events-none" />

            {/* Centered monument */}
            <motion.div
                className="relative z-10 w-full flex flex-col items-center text-center hero-lg:pb-24"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div
                    variants={itemVariants}
                    className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden ring-2 ring-text-primary/25 shadow-2xl shadow-black/50 mb-8"
                >
                    <Image
                        src={headshotImage}
                        alt={personalInfo.name}
                        fill
                        sizes="112px"
                        className="object-cover object-top"
                        priority
                    />
                </motion.div>

                <h1 className="text-5xl sm:text-6xl lg:text-display font-medium text-text-primary mb-6">
                    <TextReveal delay={0.3} staggerDelay={0.1} duration={0.6}>
                        {personalInfo.name}
                    </TextReveal>
                </h1>

                <motion.p
                    className="text-xl sm:text-2xl text-text-secondary max-w-xl mb-5 leading-snug"
                    variants={itemVariants}
                >
                    {personalInfo.title}
                </motion.p>

                <motion.p
                    className="text-[15px] sm:text-base text-text-secondary max-w-2xl mb-3 leading-relaxed"
                    variants={itemVariants}
                >
                    {personalInfo.tagline}
                </motion.p>

                <motion.p
                    className="text-[13px] sm:text-sm text-text-secondary/80 max-w-xl mb-8 leading-relaxed"
                    variants={itemVariants}
                >
                    {personalInfo.experience}
                </motion.p>

                <motion.div
                    className="flex items-center gap-2.5 text-text-tertiary text-sm mb-9"
                    variants={itemVariants}
                >
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{personalInfo.location} · {personalInfo.availability}</span>
                </motion.div>

                <motion.div className="flex flex-wrap justify-center gap-4" variants={itemVariants}>
                    <Button variant="primary" size="lg" href="#contact">
                        Get in Touch
                    </Button>
                    <Button variant="secondary" size="lg" href="#work">
                        View Work
                    </Button>
                </motion.div>

                {/* Quick links: stacked rows on small screens */}
                <motion.div
                    className="mt-12 grid w-full max-w-md grid-cols-1 sm:grid-cols-2 gap-3 hero-lg:hidden"
                    variants={itemVariants}
                >
                    <QuickLink
                        href="/build"
                        title="Build with me"
                        desc="One-hour build sessions, on a screen share"
                    />
                    <QuickLink
                        href="/websites"
                        title="Websites"
                        desc="For local service businesses, live in two weeks"
                    />
                </motion.div>
            </motion.div>

            {/* Quick links: corner cards on desktop */}
            <motion.div
                className="hidden hero-lg:block absolute bottom-10 left-8 xl:left-14 z-10"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
            >
                <QuickLink
                    href="/build"
                    title="Build with me"
                    desc="One-hour build sessions, on a screen share"
                />
            </motion.div>
            <motion.div
                className="hidden hero-lg:block absolute bottom-10 right-8 xl:right-14 z-10"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0, ease: [0.25, 0.4, 0.25, 1] }}
            >
                <QuickLink
                    href="/websites"
                    title="Websites"
                    desc="For local service businesses, live in two weeks"
                    align="right"
                />
            </motion.div>
        </Section>
    );
};

export default Home;
