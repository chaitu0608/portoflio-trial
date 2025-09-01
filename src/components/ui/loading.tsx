import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const LoadingSpinner = ({ size = 'md', className }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <div
      className={cn(
        "animate-spin rounded-full border-2 border-border border-t-primary",
        sizeClasses[size],
        className
      )}
    />
  );
};

interface LoadingCardProps {
  className?: string;
}

export const LoadingCard = ({ className }: LoadingCardProps) => {
  return (
    <div className={cn("animate-pulse", className)}>
      <div className="bg-muted rounded-lg h-48 w-full"></div>
      <div className="space-y-3 pt-4">
        <div className="bg-muted rounded h-4 w-3/4"></div>
        <div className="bg-muted rounded h-4 w-1/2"></div>
        <div className="bg-muted rounded h-4 w-5/6"></div>
      </div>
    </div>
  );
};