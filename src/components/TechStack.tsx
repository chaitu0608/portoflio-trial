import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section, SectionHeader, Container } from "@/components/ui/section";
import { techCategories } from "@/data/portfolio";

const TechStack = () => {
  return (
    <Section id="skills">
      <Container>
        <SectionHeader 
          title={<>Technical <span className="text-gradient">Skills</span></>}
        />
        
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
      </Container>
    </Section>
  );
};

export default TechStack;