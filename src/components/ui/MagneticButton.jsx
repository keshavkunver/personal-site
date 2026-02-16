'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const MagneticButton = ({
    children,
    className = '',
    strength = 0.3, // How strong the magnetic pull is (0-1)
    radius = 150, // Detection radius in pixels
    ...props
}) => {
    const buttonRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    // Motion values for position
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Spring config for smooth movement
    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const smoothX = useSpring(x, springConfig);
    const smoothY = useSpring(y, springConfig);

    const handleMouseMove = (e) => {
        if (!buttonRef.current) return;

        const rect = buttonRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
        const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

        if (distance < radius) {
            // Calculate pull strength based on distance (closer = stronger)
            const pullStrength = (1 - distance / radius) * strength;
            x.set(distanceX * pullStrength);
            y.set(distanceY * pullStrength);
        }
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setIsHovered(false);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    return (
        <motion.div
            ref={buttonRef}
            className={`inline-block ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            style={{
                x: smoothX,
                y: smoothY,
            }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default MagneticButton;
