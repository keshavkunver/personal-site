'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

const TiltCard = ({
    children,
    className = '',
    tiltAmount = 10,
    glowColor = 'rgba(59, 130, 246, 0.15)',
    scale = 1.02,
}) => {
    const cardRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);
    const glowX = useMotionValue(50);
    const glowY = useMotionValue(50);

    const springConfig = { damping: 20, stiffness: 300 };
    const smoothRotateX = useSpring(rotateX, springConfig);
    const smoothRotateY = useSpring(rotateY, springConfig);
    const smoothGlowX = useSpring(glowX, springConfig);
    const smoothGlowY = useSpring(glowY, springConfig);

    const glowBackground = useMotionTemplate`radial-gradient(350px circle at ${smoothGlowX}% ${smoothGlowY}%, ${glowColor}, transparent 70%)`;

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        
        rotateX.set((y - 0.5) * -tiltAmount);
        rotateY.set((x - 0.5) * tiltAmount);
        glowX.set(x * 100);
        glowY.set(y * 100);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        rotateX.set(0);
        rotateY.set(0);
        glowX.set(50);
        glowY.set(50);
    };

    return (
        <div
            ref={cardRef}
            className={`relative ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: '1000px' }}
        >
            {/* Glow overlay - positioned absolutely, pointer-events-none */}
            <motion.div
                className="pointer-events-none absolute inset-0 rounded-xl"
                style={{
                    background: glowBackground,
                    opacity: isHovered ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                }}
            />
            
            {/* Content with tilt transform */}
            <motion.div
                className="h-full"
                style={{
                    rotateX: smoothRotateX,
                    rotateY: smoothRotateY,
                }}
                whileHover={{ scale }}
                transition={{ duration: 0.2 }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default TiltCard;
