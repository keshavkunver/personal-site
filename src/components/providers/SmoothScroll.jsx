'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll({ children }) {
    const lenisRef = useRef(null);

    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        lenisRef.current = lenis;

        // Animation frame loop
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Handle anchor links for smooth scrolling
        const handleAnchorClick = (e) => {
            const target = e.target.closest('a[href^="#"]');
            if (target) {
                const href = target.getAttribute('href');
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    const element = document.querySelector(href);
                    if (element) {
                        lenis.scrollTo(element, {
                            offset: -60, // Account for fixed navbar
                            duration: 1.2,
                        });
                    }
                }
            }
        };

        // Handle button clicks that scroll to sections
        const handleButtonClick = (e) => {
            const target = e.target.closest('button');
            if (target) {
                // Check if there's an onclick that calls scrollToSection
                // This is handled by the component itself
            }
        };

        document.addEventListener('click', handleAnchorClick);

        // Expose lenis to window for debugging and external access
        window.lenis = lenis;

        // Cleanup
        return () => {
            document.removeEventListener('click', handleAnchorClick);
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    return children;
}
