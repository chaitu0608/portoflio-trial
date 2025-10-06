import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail, Phone, MapPin, ArrowDown } from "lucide-react";
import { personalInfo, contactInfo } from "@/data/portfolio";
import { motion } from "framer-motion";
import GlassCard from "@/components/ui/glass-card";
import { exportToPDF } from "@/lib/cv-export";

interface HeroProps {
  onAvatarClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onAvatarClick }) => {
  const handleDownloadResume = async () => {
    try {
      await exportToPDF();
    } catch (error) {
      console.error('Error downloading CV:', error);
      // Fallback to original resume URL if available
      if (contactInfo.resumeUrl) {
        window.open(contactInfo.resumeUrl, '_blank');
      }
    }
  };

  const handleOpenLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section className="min-h-screen flex items-center px-4 py-20 relative">
      {/* Bokeh Background */}
      <div className="absolute inset-0 bokeh-bg opacity-40"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-accent opacity-5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-gold opacity-5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.05, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-2"
          >
            <p className="text-accent font-mono text-sm tracking-wider">Hello, I'm</p>
            <h1 className="text-6xl md:text-8xl font-display font-bold leading-tight">
              <span className="text-gradient">Chaitanya</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
              Full Stack Developer
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg text-muted-foreground leading-relaxed max-w-lg"
          >
            {personalInfo.description}
          </motion.p>

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-panel border border-accent/20"
          >
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-accent font-mono text-sm">Available for new projects</span>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-wrap gap-4"
          >
            <Button 
              size="lg" 
              className="btn-primary"
              onClick={handleDownloadResume}
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="btn-secondary"
              onClick={() => handleOpenLink(contactInfo.githubUrl)}
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="btn-secondary"
              onClick={() => handleOpenLink(contactInfo.linkedinUrl)}
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm"
          >
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-accent" />
              <span className="text-muted-foreground">{contactInfo.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-accent" />
              <span className="text-muted-foreground">{contactInfo.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-muted-foreground">{contactInfo.location}</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - Avatar */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center lg:justify-end"
        >
          <GlassCard 
            className="p-8 premium-glow"
            variant="elevated"
            onClick={onAvatarClick}
          >
            <div className="relative">
              {/* Avatar */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="w-64 h-64 bg-gradient-accent rounded-2xl flex items-center justify-center cursor-pointer relative overflow-hidden"
              >
                <div className="w-56 h-56 bg-background rounded-xl flex items-center justify-center">
                  <div className="text-6xl">👨‍💻</div>
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-3 h-3 bg-accent rounded-full"
                  animate={{ 
                    y: [0, -10, 0],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-gold rounded-full"
                  animate={{ 
                    y: [0, 10, 0],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                />
              </motion.div>
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div 
          className="flex flex-col items-center gap-2 text-muted-foreground"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs font-mono">Scroll to explore</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;