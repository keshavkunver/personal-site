import React from 'react';
import ExperienceTemplate from './ExperienceTemplate';

const RelaymileExperience = () => {
    const experienceData = {
        jobTitle: "Software Engineer",
        company: "Relaymile (startup)",
        duration: "Jan 2021 - Mar 2021",
        description: "I improved frontend functionality for a React web app that optimizes truck routing. Working remotely with the SF Bay Area team, I enhanced the user experience for logistics professionals planning routes. Pretty cool seeing my code help truckers save time, fuel, and their energy on real routes.",
        achievements: [
            "Enhanced React frontend functionality for truck routing optimization platform",
            "Improved user experience for logistics professionals managing route planning",
            "Collaborated remotely with a distributed team across the San Francisco Bay Area",
            "Gained hands-on experience in transportation technology and logistics optimization"
        ],
        technologies: ["React", "JavaScript", "Debugging", "Frontend Development", "Web Applications", "Remote Collaboration"]
    };

    return <ExperienceTemplate {...experienceData} />;
};

export default RelaymileExperience; 