import React from 'react';
import ExperienceTemplate from './ExperienceTemplate';

const VistaITExperience = () => {
    const experienceData = {
        jobTitle: "Software Developer Intern",
        company: "Vista IT Solutions (VITS)",
        duration: "Jun 2019 - Aug 2019",
        description: "I engineered a Java-based application with GUI and MySQL database integration, focusing on clean code principles. Working remotely, I got hands-on experience with OOP and SOLID principles while building real software solutions. Great introduction to professional development practices and Scrum methodology.",
        achievements: [
            "Developed Java application with complete GUI interface and MySQL database integration",
            "Applied Object-Oriented Programming and SOLID principles in software design",
            "Collaborated with development team using Scrum methodology",
            "Gained experience in debugging and problem-solving in enterprise environment"
        ],
        technologies: ["Java", "SQL", "MySQL", "GUI Development", "OOP", "SOLID Principles", "Debugging", "Scrum"]
    };

    return <ExperienceTemplate {...experienceData} />;
};

export default VistaITExperience; 