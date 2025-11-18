import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') !== null ||
        target.closest('button') !== null
      );
    };

    const handleMouseEnter = () => setIsHidden(false);
    const handleMouseLeave = () => setIsHidden(true);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden lg:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          animate={{
            scale: isPointer ? 1.5 : 1,
            opacity: isHidden ? 0 : 1,
          }}
          transition={{ duration: 0.15 }}
          className="relative -translate-x-1/2 -translate-y-1/2"
        >
          {/* Outer ring */}
          <motion.div
            animate={{
              scale: isPointer ? 1.2 : 1,
            }}
            className="size-8 rounded-full border-2 border-cyan-400/50 bg-cyan-400/10 backdrop-blur-sm"
          />
          {/* Inner dot */}
          <motion.div
            animate={{
              scale: isPointer ? 0 : 1,
            }}
            className="absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400"
          />
        </motion.div>
      </motion.div>

      {/* Trailing effect */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden lg:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          animate={{
            scale: isPointer ? 2 : 1.5,
            opacity: isHidden ? 0 : 0.3,
          }}
          transition={{ duration: 0.3 }}
          className="size-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20 blur-xl"
        />
      </motion.div>
    </>
  );
}

