import React from 'react';
import ExperienceTemplate from './ExperienceTemplate';

const SkyTeamExperience = () => {
    const experienceData = {
        jobTitle: "Software Team Lead Researcher",
        company: "SkyTeam - Autonomous Drone Project",
        duration: "Jan 2018 - Jan 2019",
        description: "I led a technical software research sub-team focused on autonomous drone technology at UC Riverside. This was an incredible year-long journey into cutting-edge robotics, where I got to work with MATLAB and C programming while developing IT strategies for drone automation. Leading a research team taught me as much about collaboration as it did about autonomous systems.",
        achievements: [
            "Led technical software research team for autonomous drone technology development",
            "Developed IT strategies and technical roadmaps for drone automation systems",
            "Programmed drone control systems using MATLAB and C programming languages",
            "Applied collaborative leadership in academic research environment over 1+ year project"
        ],
        technologies: ["MATLAB", "C Programming", "IT Strategy", "Collaborative Leadership", "Autonomous Systems", "Robotics", "Problem Solving", "Debugging"]
    };

    return <ExperienceTemplate {...experienceData} />;
};

export default SkyTeamExperience; 