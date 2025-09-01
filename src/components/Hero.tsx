import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import { personalInfo, contactInfo } from "@/data/portfolio";

const Hero = () => {
  const handleDownloadResume = () => {
    if (contactInfo.resumeUrl) {
      window.open(contactInfo.resumeUrl, '_blank');
    }
  };

  const handleOpenLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold">
            Hi, <span className="text-gradient">{personalInfo.name}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground">
            {personalInfo.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {personalInfo.description}
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            {contactInfo.phone}
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            {contactInfo.email}
          </div>
          <div className="text-primary">{contactInfo.location}</div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button 
            variant="default" 
            size="lg" 
            className="glow"
            onClick={handleDownloadResume}
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => handleOpenLink(contactInfo.githubUrl)}
          >
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => handleOpenLink(contactInfo.linkedinUrl)}
          >
            <Linkedin className="w-5 h-5 mr-2" />
            LinkedIn
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;