import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ProjectTemplate from './ProjectTemplate';
import HoopIntelScreenshot from '../../../assets/images/projects/hoop-intel/hoopintel-screenshot.png';

const HoopIntelProject = () => {
    const projectData = {
        title: "HoopIntel",
        description: ["Basketball analytics platform that provides intelligent insights for coaches, scouts, and super-fans. AI-powered analysis to help improve performance and strategic decision-making on the court.",
        ],
        futureFeatures: [
            "AI-powered analysis",
            "Historical data (Player and team stats, rankings, etc.)",
            "Player and team trends",
            "Player and team predictions",
            "Player and team recommendations",
        ],
        technologies: ["Next.js", "Node.js", "D3.js", "Chart.js", "MongoDB"],
        links: [
            [
                {
                    href: "https://github.com/keshavkunver/hoopintel",
                    icon: <FaGithub />,
                    text: "GitHub"
                },
                {
                    href: "https://hoop-intel-y2gw.onrender.com/",
                    icon: <FaExternalLinkAlt />,
                    text: "Web Application"
                }
            ]
        ],
        singleImage: HoopIntelScreenshot,
        hasCarousel: false
    };

    return <ProjectTemplate {...projectData} />;
};

export default HoopIntelProject; 