'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AnimateOnScroll = ({ 
    children, 
    className = '',
    delay = 0,
    duration = 0.5,
    direction = 'up', // 'up', 'down', 'left', 'right', 'none'
    distance = 30,
    once = true,
    threshold = 0.2,
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { 
        once, 
        margin: `-${threshold * 100}% 0px` 
    });

    const getInitialPosition = () => {
        switch (direction) {
            case 'up': return { y: distance };
            case 'down': return { y: -distance };
            case 'left': return { x: distance };
            case 'right': return { x: -distance };
            case 'none': return {};
            default: return { y: distance };
        }
    };

    const variants = {
        hidden: {
            opacity: 0,
            ...getInitialPosition(),
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration,
                delay,
                ease: [0.25, 0.4, 0.25, 1],
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
        >
            {children}
        </motion.div>
    );
};

// Staggered children animation wrapper
export const StaggerContainer = ({ 
    children, 
    className = '',
    staggerDelay = 0.1,
    once = true,
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: '-10% 0px' });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: 0.1,
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            {children}
        </motion.div>
    );
};

// Child item for staggered animations
export const StaggerItem = ({ 
    children, 
    className = '',
    direction = 'up',
    distance = 20,
}) => {
    const getInitialPosition = () => {
        switch (direction) {
            case 'up': return { y: distance };
            case 'down': return { y: -distance };
            case 'left': return { x: distance };
            case 'right': return { x: -distance };
            default: return { y: distance };
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            ...getInitialPosition(),
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.4, 0.25, 1],
            },
        },
    };

    return (
        <motion.div className={className} variants={itemVariants}>
            {children}
        </motion.div>
    );
};

export default AnimateOnScroll;
