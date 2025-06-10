import React from 'react';
import ExperienceTemplate from './ExperienceTemplate';

const ForkaiaExperience = () => {
    const experienceData = {
        jobTitle: "Data Analyst Intern",
        company: "Forkaia",
        duration: "Mar 2019 - May 2019",
        description: "I led data analysis initiatives to enhance itinerary planning and boost user engagement for a hospitality web application. Working remotely from Irvine, I got to dive into user behavior data and translate insights into actionable improvements. Really cool seeing how data could directly impact user experience in the travel industry.",
        achievements: [
            "Led data analysis projects focused on improving itinerary planning features",
            "Enhanced user engagement metrics through data-driven insights and recommendations",
            "Collaborated with cross-functional teams to implement data-backed improvements",
            "Applied collaborative leadership skills while working with remote development team"
        ],
        technologies: ["Python", "Data Analysis", "Collaborative Leadership", "Problem Solving", "Scrum", "User Engagement Analytics"]
    };

    return <ExperienceTemplate {...experienceData} />;
};

export default ForkaiaExperience; 