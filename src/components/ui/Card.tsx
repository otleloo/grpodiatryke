import React from 'react';
import { motion } from 'framer-motion';
interface CardProps {
  children: React.ReactNode;
  className?: string;
  elevation?: 'flat' | 'low' | 'medium' | 'high';
}
export const Card = ({
  children,
  className = '',
  elevation = 'medium'
}: CardProps) => {
  const elevationStyles = {
    flat: 'border border-gray-200',
    low: 'shadow-sm',
    medium: 'shadow-md',
    high: 'shadow-lg'
  };
  return <motion.div className={`bg-white rounded-lg overflow-hidden ${elevationStyles[elevation]} ${className}`} whileHover={{
    y: -5
  }} transition={{
    type: 'spring',
    stiffness: 300
  }}>
      {children}
    </motion.div>;
};