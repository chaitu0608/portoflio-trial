import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h3 className="text-2xl font-bold">
          Let's <span className="text-gradient">Connect</span>
        </h3>
        
        <p className="text-muted-foreground max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, interesting projects, 
          or just having a chat about technology and innovation.
        </p>
        
        <div className="flex justify-center gap-4">
          <Button variant="outline" size="sm">
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
          <Button variant="outline" size="sm">
            <Linkedin className="w-4 h-4 mr-2" />
            LinkedIn
          </Button>
          <Button variant="outline" size="sm">
            <Mail className="w-4 h-4 mr-2" />
            Email
          </Button>
          <Button variant="outline" size="sm">
            <Phone className="w-4 h-4 mr-2" />
            Call
          </Button>
        </div>
        
        <div className="pt-6 border-t border-border text-sm text-muted-foreground">
          <p>&copy; 2024 Chaitanya Dhamdhere. Built with React & TypeScript.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;