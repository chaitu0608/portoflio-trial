import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';
import { experiences } from '@/data/portfolio';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
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
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey in technology and development
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-purple-500 to-accent"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex items-start gap-8"
              >
                {/* Timeline Dot */}
                <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center border-4 border-background shadow-lg">
                  <Briefcase className="w-6 h-6 text-background" />
                </div>

                {/* Experience Card */}
                <div className="flex-1 bg-gradient-to-br from-purple-800/20 to-purple-900/30 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-6 hover:border-purple-400/40 transition-all duration-300">
                  <div className="space-y-4">
                    {/* Header */}
                    <div>
                      <h3 className="text-xl font-display font-bold text-white mb-1">
                        {experience.title}
                      </h3>
                      <p className="text-accent font-semibold mb-2">
                        {experience.company}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{experience.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-accent flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-muted-foreground text-sm flex items-start gap-2">
                            <span className="text-accent mt-1.5">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {experience.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-purple-700/30 text-purple-200 text-xs rounded-full border border-purple-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

