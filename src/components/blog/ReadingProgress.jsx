'use client';

import { useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function ReadingProgress({ targetRef }) {
  const smoothProgress = useSpring(0, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const updateProgress = () => {
      const el = targetRef?.current;
      if (!el) return;

      const scrollY = window.scrollY ?? document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const elementBottom = el.offsetTop + el.offsetHeight;

      // Progress = 100% when signature bottom reaches viewport bottom
      // scrollY + windowHeight = elementBottom at completion
      const maxScrollForReading = Math.max(0, elementBottom - windowHeight);

      let value = 0;
      if (maxScrollForReading > 0) {
        value = Math.min(1, Math.max(0, scrollY / maxScrollForReading));
      } else {
        value = scrollY > 0 ? 1 : 0;
      }

      smoothProgress.set(value);
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, [targetRef, smoothProgress]);

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 h-[2px] bg-accent z-[100] origin-left"
      style={{ scaleX: smoothProgress }}
    />
  );
}
