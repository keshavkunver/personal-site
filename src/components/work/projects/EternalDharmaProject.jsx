import React from 'react';
import { FaApple, FaGooglePlay, FaInstagram, FaLinkedin, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ProjectTemplate from './ProjectTemplate';
import { usePopup } from './PopupContext';

const EternalDharmaProject = () => {
    const { showPopup, isPopupVisible } = usePopup();

    // Eternal Dharma app screenshots
    const images = [
        require('../../../assets/images/projects/eternal-dharma/edharma1.jpg'),
        require('../../../assets/images/projects/eternal-dharma/edharma2.jpg'),
        require('../../../assets/images/projects/eternal-dharma/edharma3.jpg'),
        require('../../../assets/images/projects/eternal-dharma/edharma4.jpg')
    ];

    const handleComingSoonClick = () => {
        showPopup('eternal-dharma-coming-soon', '🚀 Coming Soon!');
    };

    const handleGithubClick = () => {
        showPopup('eternal-dharma-github', '🕵️ Code: Confidential');
    };

    const projectData = {
        title: "Eternal Dharma",
        description: "Meet Krishna AI - your intelligent spiritual guide that brings ancient wisdom to modern life. Solves the challenge of accessing authentic spiritual knowledge by delivering personalized teachings, daily guidance, and meditation practices directly to your phone.",
        futureFeatures: [
            "AI Voice/Conversational Mode",
            "Astrological Evaluation",
            "+ many more in the backlog!"
        ],
        metrics: [
            "200+ Registered Users",
            "• Live on App Store"
        ],
        technologies: ["React Native", "TypeScript", "Expo", "Firebase Auth", "Firestore"],
        links: [
            [
                {
                    href: "https://apps.apple.com/us/app/eternal-dharma/id6744546350",
                    icon: <FaApple className='text-[#A8A8A8]' />,
                    text: "App Store Link",
                    hoverColor: "hover:text-[#007AFF]"
                },
                {
                    href: "https://www.eternaldharma.org/",
                    icon: <FaExternalLinkAlt />,
                    text: "Website"
                },
                {
                    onClick: handleComingSoonClick,
                    icon: <FaGooglePlay className='text-[#34A853]' />,
                    text: "Google Play Link",
                    hoverColor: "hover:text-[#8892b0]",
                    popup: "🚀 Coming Soon!",
                    showPopup: isPopupVisible('eternal-dharma-coming-soon')
                }
            ],
            [
                {
                    href: "https://www.instagram.com/eternaldharma.ai/",
                    icon: <FaInstagram className='text-[#E4405F]' />,
                    text: "Instagram (1000+ followers)",
                    hoverColor: "hover:text-[#E4405F]"
                },
                {
                    href: "https://www.linkedin.com/company/eternal-dharma-ai",
                    icon: <FaLinkedin className='text-[#0077B5]' />,
                    text: "LinkedIn",
                    hoverColor: "hover:text-[#0077B5]"
                },
                {
                    onClick: handleGithubClick,
                    icon: <FaGithub className='text-[#6e5494]' />,
                    text: "🔒 Private Repo",
                    hoverColor: "hover:opacity-80",
                    opacity: "opacity-60",
                    popup: "🕵️ Code: Confidential",
                    showPopup: isPopupVisible('eternal-dharma-github')
                }
            ]
        ],
        screenshots: images,
        hasCarousel: true
    };

    return <ProjectTemplate {...projectData} />;
};

export default EternalDharmaProject; 