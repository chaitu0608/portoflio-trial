import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section, SectionHeader, Container } from "@/components/ui/section";
import { education } from "@/data/portfolio";

const Education = () => {
  return (
    <Section id="education">
      <Container size="md">
        <SectionHeader 
          title={<span className="text-gradient">Education</span>}
        />
        
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="card-shadow bg-card p-6 hover:scale-[1.02] transition-transform">
              <div className="flex items-start gap-4">
                <div className="text-4xl">{edu.icon}</div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                    <Badge variant="secondary" className="w-fit">
                      {edu.period}
                    </Badge>
                  </div>
                  
                  <div className="text-primary font-medium mb-1">{edu.institution}</div>
                  <div className="text-muted-foreground text-sm mb-2">{edu.location}</div>
                  <div className="text-muted-foreground">{edu.gpa}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Education;