import React from 'react';
import { motion } from "framer-motion";
import { User, Target, Zap, Heart, Code, Rocket, Award, Coffee } from "lucide-react";
import GlassCard from "@/components/ui/glass-card";
import { personalInfo } from "@/data/portfolio";

const About = () => {
  const stats = [
    { label: "Projects Built", value: "5+", icon: Rocket },
    { label: "Technologies", value: "20+", icon: Zap },
    { label: "Hackathons", value: "3", icon: Target },
    { label: "Students Mentored", value: "50+", icon: User }
  ];

  const interests = [
    "Full-Stack Development", "Competitive Programming", "Web3 Technologies", 
    "Machine Learning", "Open Source", "Tech Mentoring", "UI/UX Design", "DevOps"
  ];

  const funFacts = [
    "Fixed an infinite loop at 3 AM",
    "Believes console.log() is therapy",
    "Can debug CSS in dreams",
    "Once deployed to production on first try",
    "Coffee-powered coding sessions",
    "Always learning something new"
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

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
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
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
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

          {/* Right Content - Image & Fun Facts */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <GlassCard className="p-8 premium-glow">
              <div className="w-full h-80 bg-gradient-accent rounded-2xl flex items-center justify-center">
                <div className="text-8xl">👨‍💻</div>
              </div>
            </GlassCard>

            {/* Fun Facts */}
            <GlassCard className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-5 h-5 text-accent" />
                <h4 className="text-lg font-display font-semibold">Fun Facts</h4>
              </div>
              <div className="space-y-3">
                {funFacts.map((fact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    {fact}
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;