import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ProjectTemplate from './ProjectTemplate';
import { usePopup } from './PopupContext';

const DocPilotAIProject = () => {
    const { showPopup, isPopupVisible } = usePopup();

    const handleGithubClick = () => {
        showPopup('docpilot-github', '🔧 In Development');
    };

    const handleWebsiteClick = () => {
        showPopup('docpilot-website', '🚀 Coming Soon!');
    };

    const projectData = {
        title: "DocPilot AI",
        description: "Intelligent document analysis and processing platform that uses AI to extract insights, summarize content, and answer questions from large document collections. Streamlines document workflows with natural language understanding and smart search capabilities.",
        technologies: ["React", "Node.js", "OpenAI API", "Vector DB"],
        links: [
            [
                {
                    onClick: handleGithubClick,
                    icon: <FaGithub />,
                    text: "GitHub",
                    popup: "🔧 In Development",
                    showPopup: isPopupVisible('docpilot-github')
                },
                {
                    onClick: handleWebsiteClick,
                    icon: <FaExternalLinkAlt />,
                    text: "Website",
                    popup: "🚀 Coming Soon!",
                    showPopup: isPopupVisible('docpilot-website')
                }
            ]
        ],
        status: {
            icon: "🔧",
            title: "In Development",
            subtitle: "Crafting intelligent document workflows"
        },
        hasCarousel: false
    };

    return <ProjectTemplate {...projectData} />;
};

export default DocPilotAIProject; 