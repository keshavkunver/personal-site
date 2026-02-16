'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Animated text that reveals word by word or character by character
const TextReveal = ({ 
    children, 
    className = '',
    delay = 0,
    duration = 0.5,
    staggerDelay = 0.08,
    type = 'words', // 'words' or 'chars'
    as: Component = 'span',
}) => {
    const text = typeof children === 'string' ? children : '';
    
    const items = type === 'chars' 
        ? text.split('') 
        : text.split(' ');

    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: delay,
            },
        },
    };

    const itemVariants = {
        hidden: { 
            y: '100%',
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration,
                ease: [0.25, 0.4, 0.25, 1],
            },
        },
    };

    return (
        <Component className={className}>
            <motion.span
                className="inline-flex flex-wrap"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {items.map((item, index) => (
                    <span 
                        key={index} 
                        className="inline-block overflow-hidden"
                        style={{ marginRight: type === 'words' ? '0.3em' : '0' }}
                    >
                        <motion.span
                            className="inline-block"
                            variants={itemVariants}
                        >
                            {item === ' ' ? '\u00A0' : item}
                        </motion.span>
                    </span>
                ))}
            </motion.span>
        </Component>
    );
};

// Alternative: Slide up reveal with mask effect (more dramatic)
export const TextRevealMask = ({ 
    children, 
    className = '',
    delay = 0,
    duration = 0.8,
}) => {
    return (
        <div className={`overflow-hidden ${className}`}>
            <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{
                    duration,
                    delay,
                    ease: [0.25, 0.4, 0.25, 1],
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};

// Gradient text animation
export const AnimatedGradientText = ({
    children,
    className = '',
}) => {
    return (
        <motion.span
            className={`bg-clip-text text-transparent bg-gradient-to-r from-text-primary via-accent to-text-primary bg-[length:200%_100%] ${className}`}
            animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
            }}
        >
            {children}
        </motion.span>
    );
};

export default TextReveal;
