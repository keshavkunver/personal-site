'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = ({ 
    color = 'bg-accent',
    height = 'h-[2px]',
    position = 'top', // 'top' or 'bottom'
}) => {
    const { scrollYProgress } = useScroll();
    
    // Smooth the scroll progress with spring physics
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            className={`fixed left-0 right-0 ${height} ${color} z-[100] origin-left ${
                position === 'top' ? 'top-0' : 'bottom-0'
            }`}
            style={{ scaleX }}
        />
    );
};

export default ScrollProgress;
