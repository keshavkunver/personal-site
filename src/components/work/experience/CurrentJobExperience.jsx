import React from 'react';
import ExperienceTemplate from './ExperienceTemplate';

const CurrentJobExperience = () => {
    const experienceData = {
        jobTitle: "Software Engineer",
        company: "Infosys",
        duration: "Mar 2021 - Present",
        description: "I design and implement comprehensive test automation frameworks for enterprise backend systems and APIs. Working remotely with distributed teams, I create detailed API test scripts, validate database integrations, and ensure system reliability across Java applications. My role requires deep understanding of backend architecture, data flows, and system interactions to create effective testing strategies that catch issues before they reach production.",
        achievements: [
            "Designed and developed comprehensive API test scripts for REST services and Java backend endpoints",
            "Built automated testing frameworks for enterprise web applications using Java and modern backend technologies",
            "Created database validation scripts and data integrity testing for MySQL systems",
            "Collaborated on full-stack testing projects involving React.js, TypeScript, and Java backend services",
            "Implemented CI/CD testing pipelines and automation workflows using GitLab",
            "Applied collaborative leadership in cross-functional teams using Scrum methodology"
        ],
        technologies: ["Java", "REST APIs", "MySQL", "Database Systems", "React.js", "TypeScript", "JavaScript", "Test Automation", "CI/CD", "GitLab", "JSON", "OOP", "Backend Development", "Scrum", "C#", "ASP.NET MVC"]
    };

    return <ExperienceTemplate {...experienceData} />;
};

export default CurrentJobExperience; 