import { Section, SectionHeader, Container } from "@/components/ui/section";

const About = () => {
  return (
    <Section id="about">
      <Container size="md">
        <SectionHeader 
          title={<>About <span className="text-gradient">Me</span></>}
        />
        
        <div className="card-shadow rounded-2xl bg-card p-8 space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a passionate Computer Engineering student at K.J. Somaiya College of Engineering, 
            currently pursuing my Bachelor of Technology degree. With a strong foundation in full-stack 
            development and a keen interest in competitive programming, I thrive on creating innovative 
            solutions to complex problems.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            My journey in technology spans from core team leadership roles where I've organized 
            national-level hackathons and tech sessions, to hands-on development experience in 
            building scalable web applications. I believe in the power of collaboration and 
            continuous learning to drive meaningful impact.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            When I'm not coding, you'll find me mentoring juniors, organizing tech events, or 
            exploring new technologies that push the boundaries of what's possible in web development.
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default About;