import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology in Computer Engineering",
    institution: "K.J. Somaiya College of Engineering",
    location: "Mumbai, India",
    period: "Jul. 2023 - May 2027",
    gpa: "Currently pursuing",
    icon: "🎓"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-gradient">Education</span>
        </h2>
        
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
      </div>
    </section>
  );
};

export default Education;