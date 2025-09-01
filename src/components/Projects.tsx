import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Padhle",
    subtitle: "Student Portal",
    description: "Role-based system with attendance tracking and course management. AJAX-powered interface with real-time updates. Secure session management and SQL injection prevention.",
    tech: ["AJAX", "PHP", "MySQL", "JavaScript", "HTML/CSS"],
    type: "Web Application"
  },
  {
    title: "JournalMate",
    subtitle: "JavaFX",
    description: "Built a secure and user-friendly digital diary application with a dynamic JavaFX interface, focusing on smooth navigation and interactivity. Implemented robust features like password-protected access and rich-text content editing.",
    tech: ["JavaFX", "Java", "SQLite", "CSS"],
    type: "Desktop Application"
  },
  {
    title: "Tutelage",
    subtitle: "Freelance",
    description: "Collaborated with a cross-functional team to build a production-ready React Native application for a freelance startup. Delivered a responsive, high-performance app with consistent functionality across Android and iOS platforms.",
    tech: ["React Native", "JavaScript", "Mobile Development"],
    type: "Mobile Application"
  },
  {
    title: "Ama-App",
    subtitle: "Full Stack Auth System",
    description: "Built a robust full-stack authentication system using Next.js (App Router), TypeScript, and MongoDB, following best practices from the 'Chai aur Code' Next.js Auth playlist.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Authentication"],
    type: "Full Stack Application"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        
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
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button variant="default" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;