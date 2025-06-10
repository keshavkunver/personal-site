import React from 'react';
import ExperienceTemplate from './ExperienceTemplate';

const PrathibhaManagementExperience = () => {
    const experienceData = {
        jobTitle: "Software Engineer",
        company: "Prathibha Management",
        duration: "Aug 2019 - Jan 2021",
        description: "I built a Django-powered web app that connected Desi LA talent with opportunities in Hollywood. Working in Los Angeles, I got to combine my love for tech with the entertainment industry, creating a platform that helped bridge the gap between talented individuals and casting opportunities. It was amazing seeing real people land roles through the platform.",
        achievements: [
            "Developed full-stack Django web application from concept to deployment",
            "Created talent-matching system connecting LA performers with Hollywood casting opportunities",
            "Built user-friendly interface for both talent profiles and casting directors",
            "Gained experience in entertainment industry workflows and talent management"
        ],
        technologies: ["Python", "Django", "Web Development", "Full-Stack Development", "Project Management", "Entertainment Tech"]
    };

    return <ExperienceTemplate {...experienceData} />;
};

export default PrathibhaManagementExperience; 