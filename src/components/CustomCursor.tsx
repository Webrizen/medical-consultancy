import React, { useLayoutEffect, useState, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const hoverRef = useRef<NodeList | null>(null);

  useLayoutEffect(() => {
    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Event delegation for hover effects
    const handleMouseEnter = (e: MouseEvent) => {
      if ((e.target as Element).matches('.cursor-hover')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      if ((e.target as Element).matches('.cursor-hover')) {
        setIsHovering(false);
      }
    };

    // Attach global listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter, true); // Use capture phase
    document.addEventListener('mouseleave', handleMouseLeave, true);

    // Initial query for existing hover elements (optional, for debugging or effects)
    hoverRef.current = document.querySelectorAll('.cursor-hover');

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  return (
    <div style={{ zIndex: 99999 }} className='fixed inset-0 pointer-events-none'>
      {/* Inner Dot - Scales & Inverts */}
      <div
        className={`fixed pointer-events-none z-50 h-4 w-4 -translate-x-2 -translate-y-2 transform rounded-full bg-black transition-transform duration-150 ${isHovering ? 'scale-150' : 'scale-100'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          mixBlendMode: 'difference',
        }}
      />

      {/* Outer Ring - Slower, scales down slightly on hover */}
      <div
        className="fixed pointer-events-none z-40 h-8 w-8 -translate-x-4 -translate-y-4 transform rounded-full border-2 border-black/20 transition-transform duration-300"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 0.8 : 1})`,
        }}
      />
    </div>
  );
};

export default CustomCursor;