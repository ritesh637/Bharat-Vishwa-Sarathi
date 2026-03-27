import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: 'chars' | 'words';
  from?: any;
  to?: any;
  threshold?: number;
  rootMargin?: string;
  textAlign?: 'left' | 'center' | 'right';
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 0,
  duration = 0.5,
  ease = 'easeOut',
  splitType = 'chars',
  from = { opacity: 0, y: 20 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-50px',
  textAlign = 'left'
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold, margin: rootMargin as any });
  const controls = useAnimation();
  const [splitElements, setSplitElements] = useState<string[]>([]);

  useEffect(() => {
    if (splitType === 'chars') {
      const chars = text.split('');
      setSplitElements(chars);
    } else {
      const words = text.split(' ');
      setSplitElements(words);
    }
  }, [text, splitType]);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: delay / 1000,
        delayChildren: 0.1
      }
    }
  };

  const childVariants = {
    hidden: from,
    visible: {
      ...to,
      transition: {
        duration,
        ease
      }
    }
  };

  const textAlignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }[textAlign];

  return (
    <motion.div
      ref={ref}
      className={`${className} ${textAlignClass} overflow-hidden`}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {splitElements.map((element, index) => (
  <motion.span
    key={index}
    className="inline-block mr-2"
    variants={childVariants}
  >
    {element}
  </motion.span>
))}

    </motion.div>
  );
};

export default SplitText;