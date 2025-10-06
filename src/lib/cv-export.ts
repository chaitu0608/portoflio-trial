import { personalInfo, contactInfo, experiences, education, projects, techCategories } from '@/data/portfolio';

export interface CVData {
  personal: typeof personalInfo;
  contact: typeof contactInfo;
  experience: typeof experiences;
  education: typeof education;
  projects: typeof projects;
  skills: typeof techCategories;
}

export const generateCVData = (): CVData => {
  return {
    personal: personalInfo,
    contact: contactInfo,
    experience: experiences,
    education: education,
    projects: projects,
    skills: techCategories
  };
};

export const exportToPDF = async () => {
  try {
    // Create a simple HTML content for the CV
    const cvData = generateCVData();
    
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>${cvData.personal.name} - CV</title>
          <style>
            body {
              font-family: 'Inter', sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 800px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              text-align: center;
              margin-bottom: 30px;
              border-bottom: 2px solid #20E3B2;
              padding-bottom: 20px;
            }
            .name {
              font-size: 2.5em;
              font-weight: bold;
              color: #20E3B2;
              margin-bottom: 10px;
            }
            .title {
              font-size: 1.2em;
              color: #666;
              margin-bottom: 15px;
            }
            .contact {
              display: flex;
              justify-content: center;
              gap: 20px;
              flex-wrap: wrap;
            }
            .section {
              margin-bottom: 30px;
            }
            .section-title {
              font-size: 1.5em;
              font-weight: bold;
              color: #20E3B2;
              margin-bottom: 15px;
              border-bottom: 1px solid #eee;
              padding-bottom: 5px;
            }
            .experience-item, .project-item {
              margin-bottom: 20px;
              padding: 15px;
              border-left: 3px solid #20E3B2;
              background-color: #f9f9f9;
            }
            .item-header {
              font-weight: bold;
              font-size: 1.1em;
              margin-bottom: 5px;
            }
            .item-company, .item-tech {
              color: #666;
              font-size: 0.9em;
              margin-bottom: 10px;
            }
            .item-description {
              margin-bottom: 10px;
            }
            .achievements {
              list-style-type: disc;
              margin-left: 20px;
            }
            .skills-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
              gap: 15px;
            }
            .skill-category {
              background-color: #f9f9f9;
              padding: 15px;
              border-radius: 8px;
            }
            .skill-category h4 {
              margin: 0 0 10px 0;
              color: #20E3B2;
            }
            .skill-list {
              display: flex;
              flex-wrap: wrap;
              gap: 5px;
            }
            .skill-tag {
              background-color: #20E3B2;
              color: white;
              padding: 2px 8px;
              border-radius: 12px;
              font-size: 0.8em;
            }
            @media print {
              body { margin: 0; padding: 15px; }
              .section { page-break-inside: avoid; }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="name">${cvData.personal.name}</div>
            <div class="title">${cvData.personal.title}</div>
            <div class="contact">
              <span>📧 ${cvData.contact.email}</span>
              <span>📱 ${cvData.contact.phone}</span>
              <span>📍 ${cvData.contact.location}</span>
              <span>🔗 ${cvData.contact.githubUrl}</span>
            </div>
          </div>

          <div class="section">
            <div class="section-title">About</div>
            <p>${cvData.personal.description}</p>
          </div>

          <div class="section">
            <div class="section-title">Experience</div>
            ${cvData.experience.map(exp => `
              <div class="experience-item">
                <div class="item-header">${exp.title}</div>
                <div class="item-company">${exp.company} • ${exp.period}</div>
                <div class="item-description">${exp.achievements.join(' ')}</div>
              </div>
            `).join('')}
          </div>

          <div class="section">
            <div class="section-title">Education</div>
            ${cvData.education.map(edu => `
              <div class="experience-item">
                <div class="item-header">${edu.degree}</div>
                <div class="item-company">${edu.institution} • ${edu.period}</div>
              </div>
            `).join('')}
          </div>

          <div class="section">
            <div class="section-title">Projects</div>
            ${cvData.projects.map(project => `
              <div class="project-item">
                <div class="item-header">${project.title}</div>
                <div class="item-tech">${project.tech.join(', ')}</div>
                <div class="item-description">${project.description}</div>
              </div>
            `).join('')}
          </div>

          <div class="section">
            <div class="section-title">Skills</div>
            <div class="skills-grid">
              ${cvData.skills.map(category => `
                <div class="skill-category">
                  <h4>${category.category}</h4>
                  <div class="skill-list">
                    ${category.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </body>
      </html>
    `;

    // Create a blob and download
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    
    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = url;
    link.download = `${cvData.personal.name.replace(' ', '_')}_CV.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up
    URL.revokeObjectURL(url);
    
    return true;
  } catch (error) {
    console.error('Error generating CV:', error);
    return false;
  }
};

// Alternative: Generate a simple text-based CV
export const generateTextCV = (): string => {
  const cvData = generateCVData();
  
  return `
${cvData.personal.name.toUpperCase()}
${cvData.personal.title}

CONTACT INFORMATION
Email: ${cvData.contact.email}
Phone: ${cvData.contact.phone}
Location: ${cvData.contact.location}
GitHub: ${cvData.contact.githubUrl}
LinkedIn: ${cvData.contact.linkedinUrl}

ABOUT
${cvData.personal.description}

EXPERIENCE
${cvData.experience.map(exp => `
${exp.title} at ${exp.company}
${exp.period}
${exp.achievements.map(achievement => `• ${achievement}`).join('\n')}
`).join('\n')}

EDUCATION
${cvData.education.map(edu => `
${edu.degree}
${edu.institution}
${edu.period}
`).join('\n')}

PROJECTS
${cvData.projects.map(project => `
${project.title}
Technologies: ${project.tech.join(', ')}
${project.description}
`).join('\n')}

SKILLS
${cvData.skills.map(category => `
${category.category}:
${category.skills.join(', ')}
`).join('\n')}
  `.trim();
};

export const exportTextCV = () => {
  const textCV = generateTextCV();
  const blob = new Blob([textCV], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = `${personalInfo.name.replace(' ', '_')}_CV.txt`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  URL.revokeObjectURL(url);
};
