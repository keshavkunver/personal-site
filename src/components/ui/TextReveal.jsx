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
                className="inline-flex flex-wrap justify-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {items.map((item, index) => (
                    <span
                        key={index}
                        className="inline-block overflow-hidden"
                        style={{ marginRight: type === 'words' && index < items.length - 1 ? '0.3em' : '0' }}
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

export default TextReveal;
