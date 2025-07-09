import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Add event listeners
    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    
    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [data-cursor-hover], input, textarea, select');
    
    const addHoverListeners = () => {
      const elements = document.querySelectorAll('button, a, [data-cursor-hover], input, textarea, select');
      elements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    // Initial setup
    addHoverListeners();

    // Re-setup on DOM changes (for dynamically added elements)
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      const elements = document.querySelectorAll('button, a, [data-cursor-hover], input, textarea, select');
      elements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: cursorPosition.x - 16,
          y: cursorPosition.y - 16,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <motion.div
          className="w-8 h-8 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full"
          animate={{
            scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
          }}
        />
      </motion.div>

      {/* Cursor Trail */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-40"
        animate={{
          x: cursorPosition.x - 24,
          y: cursorPosition.y - 24,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          mass: 0.8,
        }}
      >
        <motion.div
          className="w-12 h-12 border-2 border-purple-500/50 rounded-full"
          animate={{
            scale: isHovering ? 1.8 : 1,
            opacity: isHovering ? 0.8 : 0.3,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        />
      </motion.div>

      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-30"
        animate={{
          x: cursorPosition.x - 32,
          y: cursorPosition.y - 32,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          mass: 1.2,
        }}
      >
        <motion.div
          className="w-16 h-16 border border-teal-500/30 rounded-full"
          animate={{
            scale: isHovering ? 2 : 1,
            opacity: isHovering ? 0.6 : 0.2,
            rotate: isHovering ? 180 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 25,
          }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;