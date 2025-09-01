import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Section, SectionHeader, Container } from "@/components/ui/section";
import { projects } from "@/data/portfolio";

const Projects = () => {
  const handleOpenLink = (url?: string) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <Section id="projects">
      <Container>
        <SectionHeader 
          title={<>Featured <span className="text-gradient">Projects</span></>}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-shadow bg-card p-6 hover:scale-[1.02] transition-transform group">
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <Badge variant="outline">{project.type}</Badge>
                  </div>
                  <p className="text-primary font-medium mb-2">{project.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => handleOpenLink(project.githubUrl)}
                    disabled={!project.githubUrl}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => handleOpenLink(project.liveUrl)}
                    disabled={!project.liveUrl}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Projects;