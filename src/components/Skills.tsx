import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '@/components/ui/glass-card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: "⚛️" },
        { name: "TypeScript", icon: "🔷" },
        { name: "Next.js", icon: "▲" },
        { name: "Tailwind CSS", icon: "🎨" },
        { name: "Framer Motion", icon: "🎭" },
        { name: "Vite", icon: "⚡" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "Express.js", icon: "🚀" },
        { name: "MongoDB", icon: "🍃" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "REST APIs", icon: "🔗" },
        { name: "GraphQL", icon: "📊" }
      ]
    },
    {
      title: "Tools & Cloud",
      skills: [
        { name: "Git", icon: "📝" },
        { name: "GitHub", icon: "🐙" },
        { name: "Vercel", icon: "▲" },
        { name: "Docker", icon: "🐳" },
        { name: "VS Code", icon: "💻" },
        { name: "Figma", icon: "🎨" }
      ]
    },
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", icon: "🟨" },
        { name: "Python", icon: "🐍" },
        { name: "Java", icon: "☕" },
        { name: "C++", icon: "⚙️" },
        { name: "HTML", icon: "🌐" },
        { name: "CSS", icon: "💅" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
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
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-6 h-full">
                <h3 className="text-xl font-display font-semibold text-accent mb-6 text-center">
                  {category.title}
                </h3>
                
                <div className="grid grid-cols-3 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center p-4 rounded-lg bg-muted/10 hover:bg-muted/20 transition-all duration-300 hover:scale-105"
                    >
                      <div className="text-2xl mb-2">{skill.icon}</div>
                      <span className="text-xs font-medium text-center">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;