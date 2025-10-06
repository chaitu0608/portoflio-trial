import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'flat' | 'outline';
  hover?: boolean;
  glow?: boolean;
  onClick?: () => void;
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  variant = 'default',
  hover = true,
  glow = false,
  onClick,
}) => {
  const baseClasses = 'glass-card';
  
  const variantClasses = {
    default: 'glass-card',
    elevated: 'glass-card shadow-card-hover',
    flat: 'glass bg-glass-bg border-glass-border',
    outline: 'glass bg-transparent border-glass-border-strong',
  };

  const hoverClasses = hover ? 'hover:shadow-card-hover hover:-translate-y-1' : '';
  const glowClasses = glow ? 'premium-glow' : '';

  return (
    <motion.div
      className={cn(
        baseClasses,
        variantClasses[variant],
        hoverClasses,
        glowClasses,
        className
      )}
      onClick={onClick}
      whileHover={hover ? { y: -2 } : undefined}
      whileTap={onClick ? { scale: 0.98 } : undefined}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
