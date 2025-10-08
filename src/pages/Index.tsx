import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Download, Phone, MapPin } from "lucide-react";

const Index = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-background to-purple-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-purple-400/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">CD</span>
              </div>
              <span className="text-xl font-bold text-white">Chaitanya Dhamdhere</span>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('home')} className="text-white hover:text-purple-300 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-purple-300 transition-colors">About</button>
              <button onClick={() => scrollToSection('projects')} className="text-white hover:text-purple-300 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="text-white hover:text-purple-300 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-purple-300 transition-colors">Contact</button>
            </div>

            <Button 
              onClick={() => setIsContactModalOpen(true)}
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
              Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Chaitanya</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6">
              Full Stack Developer & Computer Engineering Student
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              Passionate about building innovative web applications with modern technologies. 
              I love creating beautiful, functional, and user-friendly digital experiences.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700 text-white"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-purple-400 text-purple-300 hover:bg-purple-400/10"
              onClick={() => window.open('https://github.com/chaitu0608', '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-purple-400 text-purple-300 hover:bg-purple-400/10"
              onClick={() => window.open('https://linkedin.com/in/chaitanya-dhamdhere', '_blank')}
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+91 9876543210</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>chaitanya@example.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Mumbai, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">I'm a Passionate Developer</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm a Computer Engineering student with a strong passion for full-stack development. 
                I enjoy building scalable applications and solving complex problems through code.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                With experience in React, Node.js, and modern web technologies, I love creating 
                innovative solutions that make a difference. I'm always eager to learn new 
                technologies and take on challenging projects.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-purple-800/30 backdrop-blur-sm border border-purple-400/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-300 mb-1">5+</div>
                  <div className="text-sm text-gray-400">Projects</div>
                </div>
                <div className="bg-purple-800/30 backdrop-blur-sm border border-purple-400/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-300 mb-1">20+</div>
                  <div className="text-sm text-gray-400">Technologies</div>
                </div>
                <div className="bg-purple-800/30 backdrop-blur-sm border border-purple-400/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-300 mb-1">3</div>
                  <div className="text-sm text-gray-400">Hackathons</div>
                </div>
                <div className="bg-purple-800/30 backdrop-blur-sm border border-purple-400/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-300 mb-1">50+</div>
                  <div className="text-sm text-gray-400">Mentored</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <div className="text-8xl">👨‍💻</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-purple-900/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                description: "Full-stack e-commerce application with React, Node.js, and MongoDB",
                tech: ["React", "Node.js", "MongoDB", "Stripe"],
                image: "🛒"
              },
              {
                title: "Task Management App",
                description: "Collaborative task management tool with real-time updates",
                tech: ["React", "Socket.io", "Express", "PostgreSQL"],
                image: "📋"
              },
              {
                title: "Weather Dashboard",
                description: "Beautiful weather dashboard with location-based forecasts",
                tech: ["React", "API Integration", "Chart.js", "CSS3"],
                image: "🌤️"
              }
            ].map((project, index) => (
              <div key={index} className="bg-purple-800/30 backdrop-blur-sm border border-purple-400/20 rounded-xl p-6 hover:border-purple-400/40 transition-all duration-300">
                <div className="text-4xl mb-4">{project.image}</div>
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-purple-700/30 text-purple-200 text-xs rounded-full border border-purple-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
              </div>
            </section>
            
      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Technical <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { category: "Frontend", skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"] },
              { category: "Backend", skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL"] },
              { category: "Tools", skills: ["Git", "GitHub", "Vercel", "Docker"] },
              { category: "Languages", skills: ["JavaScript", "Python", "Java", "C++"] }
            ].map((category, index) => (
              <div key={index} className="bg-purple-800/30 backdrop-blur-sm border border-purple-400/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-purple-300 mb-4">{category.category}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-gray-300 text-sm">{skill}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Get In <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always interested in new opportunities and exciting projects. Let's connect!
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Button 
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white"
              onClick={() => setIsContactModalOpen(true)}
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Message
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-purple-400 text-purple-300 hover:bg-purple-400/10"
              onClick={() => window.open('https://github.com/chaitu0608', '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-purple-400 text-purple-300 hover:bg-purple-400/10"
              onClick={() => window.open('https://linkedin.com/in/chaitanya-dhamdhere', '_blank')}
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-purple-400/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Chaitanya Dhamdhere. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6">
          <div className="bg-background border border-purple-400/20 rounded-xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Me</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-300 text-sm mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 bg-purple-800/30 border border-purple-400/20 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 bg-purple-800/30 border border-purple-400/20 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-2 bg-purple-800/30 border border-purple-400/20 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                  placeholder="Your message"
                />
              </div>
              <div className="flex gap-3">
                <Button 
                  className="flex-1 bg-purple-600 hover:bg-purple-700 text-white"
                  onClick={() => setIsContactModalOpen(false)}
                >
                  Send Message
                </Button>
                <Button 
                  variant="outline"
                  className="border-purple-400 text-purple-300 hover:bg-purple-400/10"
                  onClick={() => setIsContactModalOpen(false)}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;