import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold">
            Hi, <span className="text-gradient">Chaitanya Dhamdhere</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground">
            Full Stack Developer & Problem Solver
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Computer Engineering student passionate about building innovative web applications
            and solving complex problems through code.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            +91 8369137838
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            c.dhamdhere@somaiya.edu
          </div>
          <div className="text-primary">Mumbai, India</div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="default" size="lg" className="glow">
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
          <Button variant="outline" size="lg">
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </Button>
          <Button variant="outline" size="lg">
            <Linkedin className="w-5 h-5 mr-2" />
            LinkedIn
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;