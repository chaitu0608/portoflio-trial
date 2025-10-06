import React, { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Calendar, MapPin, Award } from 'lucide-react';
import { experiences, education } from '@/data/portfolio';

interface TimelineItem {
  id: string;
  type: 'experience' | 'education';
  title: string;
  subtitle: string;
  location: string;
  period: string;
  description?: string;
  achievements?: string[];
  icon: string;
  gpa?: string;
}

const InteractiveTimeline: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout>();

  // Combine and sort timeline items
  const timelineItems: TimelineItem[] = [
    ...experiences.map(exp => ({
      id: `exp-${exp.company}`,
      type: 'experience' as const,
      title: exp.title,
      subtitle: exp.company,
      location: exp.location,
      period: exp.period,
      achievements: exp.achievements,
      icon: exp.logo
    })),
    ...education.map(edu => ({
      id: `edu-${edu.institution}`,
      type: 'education' as const,
      title: edu.degree,
      subtitle: edu.institution,
      location: edu.location,
      period: edu.period,
      gpa: edu.gpa,
      icon: edu.icon
    }))
  ].sort((a, b) => {
    // Sort by period (most recent first)
    const aYear = parseInt(a.period.split(' ').pop() || '0');
    const bYear = parseInt(b.period.split(' ').pop() || '0');
    return bYear - aYear;
  });

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setActiveIndex(prev => (prev + 1) % timelineItems.length);
      }, 4000);
    } else {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, timelineItems.length]);

  useEffect(() => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current;
      const cardWidth = 400; // Approximate card width
      const scrollPosition = activeIndex * (cardWidth + 24); // 24px gap
      
      scrollContainer.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [activeIndex]);

  const nextItem = () => {
    setActiveIndex(prev => (prev + 1) % timelineItems.length);
  };

  const prevItem = () => {
    setActiveIndex(prev => (prev - 1 + timelineItems.length) % timelineItems.length);
  };

  const goToItem = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="space-y-8">
      {/* Timeline Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">
            <span className="text-gradient">Journey</span> Timeline
          </h2>
          <p className="text-muted-foreground mt-2">
            Interactive timeline of my education and experience
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={isAutoPlaying ? 'glow' : ''}
          >
            {isAutoPlaying ? 'Pause' : 'Auto Play'}
          </Button>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={prevItem}>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={nextItem}>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Timeline Navigation Dots */}
      <div className="flex justify-center gap-2">
        {timelineItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToItem(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === activeIndex 
                ? 'bg-cyan-400 glow' 
                : 'bg-muted-foreground hover:bg-cyan-400'
            }`}
          />
        ))}
      </div>

      {/* Timeline Cards */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {timelineItems.map((item, index) => (
          <Card
            key={item.id}
            className={`glass-panel border-2 min-w-[400px] flex-shrink-0 transition-all duration-500 ${
              index === activeIndex 
                ? 'border-cyan-400 glow-strong scale-105' 
                : 'border-muted-foreground hover:border-cyan-400'
            }`}
            style={{ scrollSnapAlign: 'start' }}
          >
            <div className="p-6 space-y-4">
              {/* Header */}
              <div className="flex items-start gap-4">
                <div className="text-3xl">{item.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge 
                      variant={item.type === 'experience' ? 'default' : 'secondary'}
                      className={item.type === 'experience' ? 'gradient-primary' : 'gradient-accent'}
                    >
                      {item.type === 'experience' ? 'Experience' : 'Education'}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold text-cyan-400 mb-1">
                    {item.title}
                  </h3>
                  
                  <h4 className="text-lg font-semibold mb-2">
                    {item.subtitle}
                  </h4>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {item.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {item.location}
                    </div>
                  </div>
                  
                  {item.gpa && (
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mt-2">
                      <Award className="w-4 h-4" />
                      GPA: {item.gpa}
                    </div>
                  )}
                </div>
              </div>

              {/* Achievements/Description */}
              {item.achievements && item.achievements.length > 0 && (
                <div className="space-y-2">
                  <h5 className="font-semibold text-cyan-400">Key Achievements:</h5>
                  <ul className="space-y-1">
                    {item.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Progress Indicator */}
              <div className="flex items-center gap-2">
                <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full gradient-cyber transition-all duration-1000"
                    style={{ 
                      width: `${((index + 1) / timelineItems.length) * 100}%` 
                    }}
                  />
                </div>
                <span className="text-xs text-muted-foreground">
                  {index + 1} / {timelineItems.length}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Timeline Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="glass-panel border border-cyan-400 p-4 text-center">
          <div className="text-2xl font-bold text-cyan-400">
            {experiences.length}
          </div>
          <div className="text-sm text-muted-foreground">Work Experiences</div>
        </Card>
        
        <Card className="glass-panel border border-cyan-400 p-4 text-center">
          <div className="text-2xl font-bold text-cyan-400">
            {education.length}
          </div>
          <div className="text-sm text-muted-foreground">Education</div>
        </Card>
        
        <Card className="glass-panel border border-cyan-400 p-4 text-center">
          <div className="text-2xl font-bold text-cyan-400">
            {timelineItems.length}
          </div>
          <div className="text-sm text-muted-foreground">Total Milestones</div>
        </Card>
      </div>
    </div>
  );
};

export default InteractiveTimeline;
