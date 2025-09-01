import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  id?: string;
  className?: string;
}

export const Section = ({ children, id, className, ...props }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn("py-20 px-4", className)}
      {...props}
    >
      {children}
    </section>
  );
};

interface SectionHeaderProps {
  title: ReactNode;
  subtitle?: string;
  className?: string;
}

export const SectionHeader = ({ title, subtitle, className }: SectionHeaderProps) => {
  return (
    <div className={cn("text-center mb-12", className)}>
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
};

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Container = ({ children, size = 'lg', className, ...props }: ContainerProps) => {
  const sizeClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl', 
    lg: 'max-w-6xl',
    xl: 'max-w-7xl'
  };

  return (
    <div 
      className={cn("mx-auto", sizeClasses[size], className)}
      {...props}
    >
      {children}
    </div>
  );
};