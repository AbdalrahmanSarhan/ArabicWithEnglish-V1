import { useEffect } from 'react';
import { useAnimation as useFramerAnimation } from 'framer-motion';
import { AnimationProps } from '../types';
export function useAnimation({
  delay = 0,
  duration = 0.5,
  initialScale = 0.95
} = {}) {
  const controls = useFramerAnimation();
  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay,
        duration,
        ease: 'easeOut'
      }
    });
  }, [controls, delay, duration]);
  return {
    initial: {
      opacity: 0,
      y: 20,
      scale: initialScale
    },
    animate: controls
  };
}