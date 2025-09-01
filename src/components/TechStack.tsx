import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const techCategories = [
  {
    category: "Languages",
    skills: ["C++", "Python", "C", "Java", "HTML", "CSS", "JavaScript", "TypeScript", "SQL", "PHP", "R"],
    color: "bg-gradient-primary"
  },
  {
    category: "Web Development",
    skills: ["React.js", "Next.js", "Node.js", "Express.js", "Web3.js", "Tailwind CSS", "Bootstrap", "FastAPI"],
    color: "bg-gradient-secondary"
  },
  {
    category: "Cloud / Databases",
    skills: ["MongoDB", "PostgreSQL", "Firebase", "Supabase", "Microsoft Azure"],
    color: "bg-gradient-accent"
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Docker", "Arduino"],
    color: "bg-gradient-primary"
  },
  {
    category: "Data Science & AI",
    skills: ["NumPy", "pandas", "OpenCV", "Matplotlib"],
    color: "bg-gradient-secondary"
  },
  {
    category: "Soft Skills",
    skills: ["Adaptability", "Leadership", "Team Collaboration", "Problem Solving", "Quick Learning", "Presentation"],
    color: "bg-gradient-accent"
  }
];

const TechStack = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => (
            <Card key={index} className="card-shadow bg-card p-6 hover:scale-[1.02] transition-transform">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                  <h3 className="text-lg font-bold">{category.category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge 
                      key={i} 
                      variant="secondary" 
                      className="text-xs hover:scale-105 transition-transform cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;