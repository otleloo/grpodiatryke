import React from 'react';
import { motion } from 'framer-motion';
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'light' | 'accent';
}
export const Section = ({
  children,
  className = '',
  id,
  background = 'white'
}: SectionProps) => {
  const backgroundStyles = {
    white: 'bg-white',
    light: 'bg-secondary-50',
    accent: 'bg-primary-50'
  };
  return <motion.section id={id} className={`py-16 md:py-24 ${backgroundStyles[background]} ${className}`} initial={{
    opacity: 0
  }} whileInView={{
    opacity: 1
  }} viewport={{
    once: true
  }} transition={{
    duration: 0.6
  }}>
      <div className="container mx-auto px-4 md:px-6">{children}</div>
    </motion.section>;
};