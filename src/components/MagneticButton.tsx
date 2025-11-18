import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef, type ReactNode, type MouseEvent } from 'react';

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

export function MagneticButton({
  children,
  className = '',
  strength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // More stable spring config - less aggressive
  const springConfig = { damping: 35, stiffness: 200 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Throttle updates to reduce flickering
    const deltaX = (e.clientX - centerX) * strength * 0.5;
    const deltaY = (e.clientY - centerY) * strength * 0.5;
    
    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        x: springX, 
        y: springY,
        willChange: 'transform',
        transform: 'translateZ(0)',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

