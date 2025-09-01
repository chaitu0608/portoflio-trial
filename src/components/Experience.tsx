import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section, SectionHeader, Container } from "@/components/ui/section";
import { experiences } from "@/data/portfolio";

const Experience = () => {
  return (
    <Section id="experience">
      <Container>
        <SectionHeader 
          title={<>Experience & <span className="text-gradient">Leadership</span></>}
        />
        
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
      </Container>
    </Section>
  );
};

export default Experience;