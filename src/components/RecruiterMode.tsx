import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, Github, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react';
import { personalInfo, contactInfo, projects } from '@/data/portfolio';

interface RecruiterModeProps {
  isActive: boolean;
  onToggle: (active: boolean) => void;
}

const RecruiterMode: React.FC<RecruiterModeProps> = ({ isActive, onToggle }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show recruiter mode toggle after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const topProjects = projects.slice(0, 3);

  const handleDownloadResume = () => {
    if (contactInfo.resumeUrl) {
      window.open(contactInfo.resumeUrl, '_blank');
    }
  };

  const handleOpenLink = (url: string) => {
    window.open(url, '_blank');
  };

  if (!isVisible && !isActive) return null;

  return (
    <div className="fixed top-4 right-4 z-40">
      <Card className="glass-panel border-2 border-cyan-400 p-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-mono text-cyan-400">RECRUITER_MODE</span>
          </div>
          <Switch
            checked={isActive}
            onCheckedChange={onToggle}
            className="data-[state=checked]:bg-cyan-400"
          />
        </div>
      </Card>
    </div>
  );
};

export const RecruiterModeContent: React.FC = () => {
  const topProjects = projects.slice(0, 3);

  return (
    <div className="min-h-screen bg-background grid-bg-animated">
      {/* Header */}
      <div className="glass-panel border-2 border-cyan-400 m-4 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gradient">{personalInfo.name}</h1>
            <h2 className="text-xl text-muted-foreground mt-2">{personalInfo.title}</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl">{personalInfo.description}</p>
          </div>
          <div className="flex flex-col gap-2">
            <Button 
              variant="default" 
              className="glow-strong"
              onClick={() => window.open(contactInfo.resumeUrl, '_blank')}
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open(contactInfo.githubUrl, '_blank')}
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open(contactInfo.linkedinUrl, '_blank')}
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Top 3 Projects */}
      <div className="glass-panel border-2 border-cyan-400 m-4 p-6">
        <h3 className="text-2xl font-bold text-gradient mb-6">Top 3 Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topProjects.map((project, index) => (
            <Card key={index} className="glass border border-cyan-400 p-4 hover:glow transition-all">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold text-cyan-400">{project.title}</h4>
                  <Badge variant="secondary" className="text-xs">
                    {project.type}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.tech.length - 3} more
                    </Badge>
                  )}
                </div>
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Live
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact Information */}
      <div className="glass-panel border-2 border-cyan-400 m-4 p-6">
        <h3 className="text-2xl font-bold text-gradient mb-6">Contact Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-cyan-400" />
              <span>{contactInfo.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-cyan-400" />
              <span>{contactInfo.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 text-cyan-400">📍</div>
              <span>{contactInfo.location}</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="text-sm text-muted-foreground">
              <strong>Quick Summary:</strong>
            </div>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Computer Engineering Student at K.J. Somaiya College</li>
              <li>• Core Team Member at KJSCE CodeCell</li>
              <li>• Full-stack developer with 4+ projects</li>
              <li>• Experience in React, Node.js, Python, and more</li>
              <li>• Available for internships and full-time opportunities</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterMode;
