import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ProjectTemplate from './ProjectTemplate';
import { usePopup } from './PopupContext';

const IdeaVerseAIProject = () => {
    const { showPopup, isPopupVisible } = usePopup();

    const handleGithubClick = () => {
        showPopup('ideaverse-github', '🚧 In Development');
    };

    const handleWebsiteClick = () => {
        showPopup('ideaverse-website', '🚀 Coming Soon!');
    };

    const projectData = {
        title: "IdeaVerse AI",
        description: "AI-powered brainstorming and idea management platform that helps teams generate, organize, and develop creative concepts. Uses machine learning to suggest connections between ideas and provides intelligent insights for innovation workflows.",
        technologies: ["React", "Python", "OpenAI API", "Firebase"],
        links: [
            [
                {
                    onClick: handleGithubClick,
                    icon: <FaGithub />,
                    text: "GitHub",
                    popup: "🚧 In Development",
                    showPopup: isPopupVisible('ideaverse-github')
                },
                {
                    onClick: handleWebsiteClick,
                    icon: <FaExternalLinkAlt />,
                    text: "Website",
                    popup: "🚀 Coming Soon!",
                    showPopup: isPopupVisible('ideaverse-website')
                }
            ]
        ],
        status: {
            icon: "🚧",
            title: "In Development",
            subtitle: "Building the future of AI-powered ideation"
        },
        hasCarousel: false
    };

    return <ProjectTemplate {...projectData} />;
};

export default IdeaVerseAIProject; 