import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Core Team Member",
    company: "KJSCE CodeCell",
    location: "Mumbai, India",
    period: "Nov. 2023 - Present",
    logo: "🏢",
    achievements: [
      "Delivered high-impact tech sessions to 200+ attendees on Competitive Programming, Development, and Web3",
      "Led organization of national-level hackathons (CodeUnCode, KJSCE HACK 8) with 500+ participants",
      "Mentored juniors in full-stack technologies, enabling collaborative project work"
    ]
  },
  {
    title: "Operations & Marketing Assistant",
    company: "Fresh@Home",
    location: "Mumbai, India",
    period: "2023-24",
    logo: "🏪",
    achievements: [
      "Spearheaded inventory and procurement strategies, reducing wastage and maximizing profitability",
      "Analyzed sales trends and seasonal demand for data-driven purchasing decisions",
      "Improved packaging and presentation to enhance shelf life"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Experience & <span className="text-gradient">Leadership</span>
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-shadow bg-card p-6 hover:scale-[1.02] transition-transform">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="text-4xl">{exp.logo}</div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <Badge variant="secondary" className="w-fit">
                      {exp.period}
                    </Badge>
                  </div>
                  
                  <div className="text-primary font-medium mb-1">{exp.company}</div>
                  <div className="text-muted-foreground text-sm mb-4">{exp.location}</div>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;