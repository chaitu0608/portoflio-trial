import React from 'react';
import { motion } from "framer-motion";
import { User, Target, Zap, Heart, Code, Rocket, Award, Coffee } from "lucide-react";
import GlassCard from "@/components/ui/glass-card";
import { personalInfo } from "@/data/portfolio";

const About = () => {
  const highlights = [
    { label: "Projects", value: "5+", icon: Rocket },
    { label: "Technologies", value: "20+", icon: Zap },
    { label: "Hackathons", value: "3", icon: Target },
    { label: "Mentored", value: "50+", icon: User }
  ];

  const interests = [
    "Full-Stack Development", "Web3 Technologies", "Machine Learning", 
    "Open Source", "UI/UX Design", "DevOps"
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate developer crafting digital experiences with modern technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-display font-semibold">
                I'm <span className="text-gradient">Chaitanya</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {personalInfo.description}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm passionate about creating innovative solutions that solve real-world problems. 
                With a strong foundation in computer engineering and hands-on experience in full-stack development, 
                I enjoy building scalable applications and mentoring others in their coding journey.
              </p>
            </div>

                  {/* Highlights */}
                  <div className="grid grid-cols-2 gap-4">
                    {highlights.map((highlight, index) => {
                      const Icon = highlight.icon;
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <GlassCard className="p-4 text-center">
                            <Icon className="w-6 h-6 text-accent mx-auto mb-2" />
                            <div className="text-2xl font-display font-bold text-accent mb-1">
                              {highlight.value}
                            </div>
                            <div className="text-sm text-muted-foreground">{highlight.label}</div>
                          </GlassCard>
                        </motion.div>
                      );
                    })}
                  </div>

            {/* Interests */}
            <div className="space-y-4">
              <h4 className="text-xl font-display font-semibold">What I'm passionate about</h4>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-muted/50 text-muted-foreground rounded-full text-sm"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <GlassCard className="p-8 premium-glow">
              <div className="w-full h-80 bg-gradient-accent rounded-2xl flex items-center justify-center">
                <div className="text-8xl">👨‍💻</div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;