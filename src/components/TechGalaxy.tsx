import React, { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Section, SectionHeader, Container } from '@/components/ui/section';
import { techCategories, projects } from '@/data/portfolio';

interface Planet {
  id: string;
  name: string;
  category: string;
  x: number;
  y: number;
  radius: number;
  color: string;
  description: string;
  relatedProjects: string[];
  angle: number;
  distance: number;
}

const TechGalaxy: React.FC = () => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [hoveredPlanet, setHoveredPlanet] = useState<Planet | null>(null);
  const [centerGlow, setCenterGlow] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    generatePlanets();
    startAnimation();
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const generatePlanets = () => {
    const newPlanets: Planet[] = [];
    const centerX = 300;
    const centerY = 300;
    
    techCategories.forEach((category, categoryIndex) => {
      const categoryPlanets = category.skills.slice(0, 8); // Limit to 8 skills per category
      
      categoryPlanets.forEach((skill, skillIndex) => {
        const angle = (categoryIndex * 60 + skillIndex * 7.5) * (Math.PI / 180);
        const distance = 120 + categoryIndex * 40 + skillIndex * 5;
        const x = centerX + Math.cos(angle) * distance;
        const y = centerY + Math.sin(angle) * distance;
        
        // Find related projects
        const relatedProjects = projects
          .filter(project => project.tech.includes(skill))
          .map(project => project.title);
        
        newPlanets.push({
          id: `${category.category}-${skill}`,
          name: skill,
          category: category.category,
          x,
          y,
          radius: 8 + Math.random() * 4,
          color: getCategoryColor(category.category),
          description: getSkillDescription(skill),
          relatedProjects,
          angle,
          distance
        });
      });
    });
    
    setPlanets(newPlanets);
  };

  const getCategoryColor = (category: string): string => {
    const colors: { [key: string]: string } = {
      'Languages': '#00d4ff',
      'Web Development': '#ff6b6b',
      'Cloud / Databases': '#a8e6cf',
      'Tools': '#ffd93d',
      'Data Science & AI': '#ff9ff3',
      'Soft Skills': '#6c5ce7'
    };
    return colors[category] || '#00d4ff';
  };

  const getSkillDescription = (skill: string): string => {
    const descriptions: { [key: string]: string } = {
      'React.js': 'A JavaScript library for building user interfaces',
      'Node.js': 'JavaScript runtime for server-side development',
      'Python': 'High-level programming language for various applications',
      'TypeScript': 'Typed superset of JavaScript for better development',
      'MongoDB': 'NoSQL database for modern applications',
      'Git': 'Version control system for tracking code changes',
      'Docker': 'Containerization platform for application deployment',
      'JavaScript': 'Programming language for web development',
      'Next.js': 'React framework for production applications',
      'Express.js': 'Web application framework for Node.js',
      'Tailwind CSS': 'Utility-first CSS framework',
      'C++': 'General-purpose programming language',
      'Java': 'Object-oriented programming language',
      'HTML': 'Markup language for web pages',
      'CSS': 'Styling language for web pages',
      'SQL': 'Structured Query Language for databases',
      'PHP': 'Server-side scripting language',
      'Firebase': 'Google\'s mobile and web application platform',
      'Supabase': 'Open source Firebase alternative',
      'Microsoft Azure': 'Cloud computing platform',
      'NumPy': 'Python library for numerical computing',
      'pandas': 'Python library for data manipulation',
      'OpenCV': 'Computer vision library',
      'Matplotlib': 'Python plotting library'
    };
    return descriptions[skill] || `Expertise in ${skill}`;
  };

  const startAnimation = () => {
    const animate = () => {
      setPlanets(prevPlanets => 
        prevPlanets.map(planet => ({
          ...planet,
          angle: planet.angle + 0.005,
          x: 300 + Math.cos(planet.angle) * planet.distance,
          y: 300 + Math.sin(planet.angle) * planet.distance
        }))
      );
      
      setCenterGlow(prev => !prev);
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
  };

  const handlePlanetClick = (planet: Planet) => {
    if (planet.relatedProjects.length > 0) {
      // Scroll to projects section
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <Section id="skills">
      <Container>
        <SectionHeader 
          title={<>Tech Stack <span className="text-gradient">Galaxy</span></>}
          description="Hover over planets to explore my technical universe"
        />
        
        <div className="relative">
          <Card className="glass-panel border-2 border-cyan-400 p-8 overflow-hidden">
            <div className="relative w-full h-[600px]">
              {/* Center Node (Me) */}
              <div 
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full gradient-cyber flex items-center justify-center text-white font-bold text-lg z-10 cursor-pointer transition-all duration-300 ${
                  centerGlow ? 'glow-strong' : 'glow'
                }`}
                onMouseEnter={() => setCenterGlow(true)}
                onMouseLeave={() => setCenterGlow(false)}
              >
                CD
              </div>
              
              {/* Planets */}
              {planets.map((planet) => (
                <div
                  key={planet.id}
                  className="absolute rounded-full cursor-pointer transition-all duration-300 hover:scale-125 z-20"
                  style={{
                    left: planet.x - planet.radius,
                    top: planet.y - planet.radius,
                    width: planet.radius * 2,
                    height: planet.radius * 2,
                    backgroundColor: planet.color,
                    boxShadow: `0 0 ${planet.radius * 3}px ${planet.color}50`
                  }}
                  onMouseEnter={() => setHoveredPlanet(planet)}
                  onMouseLeave={() => setHoveredPlanet(null)}
                  onClick={() => handlePlanetClick(planet)}
                />
              ))}
              
              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {planets.map((planet) => (
                  <line
                    key={`line-${planet.id}`}
                    x1="300"
                    y1="300"
                    x2={planet.x}
                    y2={planet.y}
                    stroke="rgba(0, 212, 255, 0.2)"
                    strokeWidth="1"
                  />
                ))}
              </svg>
            </div>
          </Card>
          
          {/* Planet Info Panel */}
          {hoveredPlanet && (
            <Card className="absolute top-4 right-4 glass-panel border-2 border-cyan-400 p-4 w-80 z-30">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: hoveredPlanet.color }}
                  />
                  <h3 className="text-lg font-bold text-cyan-400">{hoveredPlanet.name}</h3>
                </div>
                
                <div className="text-sm text-muted-foreground">
                  <strong>Category:</strong> {hoveredPlanet.category}
                </div>
                
                <div className="text-sm text-muted-foreground">
                  {hoveredPlanet.description}
                </div>
                
                {hoveredPlanet.relatedProjects.length > 0 && (
                  <div>
                    <div className="text-sm font-semibold text-cyan-400 mb-2">Related Projects:</div>
                    <div className="flex flex-wrap gap-1">
                      {hoveredPlanet.relatedProjects.map((project, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {project}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
                
                {hoveredPlanet.relatedProjects.length === 0 && (
                  <div className="text-sm text-muted-foreground">
                    Click to explore more projects below
                  </div>
                )}
              </div>
            </Card>
          )}
        </div>
        
        {/* Legend */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {techCategories.map((category, index) => (
            <div key={index} className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: getCategoryColor(category.category) }}
              />
              <span className="text-sm text-muted-foreground">{category.category}</span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default TechGalaxy;
