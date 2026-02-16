'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Clean text-based logo
const Logo = ({ size = 'default', onClick }) => {
    const sizes = {
        small: 'text-lg',
        default: 'text-xl',
        large: 'text-2xl',
    };

    return (
        <motion.button
            onClick={onClick}
            className={`
                ${sizes[size]}
                font-semibold
                tracking-tight
                text-text-primary
                hover:text-accent
                transition-colors duration-200
            `}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            keshav
        </motion.button>
    );
};

// Alternative: Monogram version
export const LogoMonogram = ({ size = 40, onClick }) => {
    return (
        <motion.button
            onClick={onClick}
            className="
                flex items-center justify-center
                rounded-lg
                bg-dark-surface
                border border-dark-border
                text-text-primary
                font-semibold
                hover:border-dark-border-hover
                hover:text-accent
                transition-all duration-200
            "
            style={{ width: size, height: size, fontSize: size * 0.45 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            K
        </motion.button>
    );
};

export default Logo;
