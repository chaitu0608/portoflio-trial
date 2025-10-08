import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/portfolio";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Web3', 'Web Application', 'Mobile Application', 'Full Stack Application', 'Desktop Application'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-purple-900/20 via-background to-purple-800/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">
            The things I have <span className="text-gradient">built</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, featuring innovative solutions and modern technologies
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={`smooth-transition ${
                selectedCategory === category
                  ? "bg-accent text-background hover:bg-accent/90"
                  : "border-purple-400/30 text-purple-300 hover:bg-purple-400/10"
              }`}
            >
              <span>{category}</span>
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-purple-800/30 to-purple-900/50 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-6 h-full hover:border-purple-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
                {/* Project Image */}
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-purple-800/30 rounded-xl flex items-center justify-center">
                    <div className="text-6xl opacity-50">💻</div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-display font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-purple-700/30 text-purple-200 text-xs rounded-full border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-3 py-1 bg-purple-700/30 text-purple-200 text-xs rounded-full border border-purple-500/30">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-purple-400/30 text-purple-300 hover:bg-purple-400/10"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-purple-400/30 text-purple-300 hover:bg-purple-400/10"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-purple-800/30 to-purple-900/50 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-semibold mb-4 text-white">
              Interested in working together?
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited to take on new challenges and create amazing digital experiences.
            </p>
            <Button className="bg-accent hover:bg-accent/90 text-background">
              Let's discuss your project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;