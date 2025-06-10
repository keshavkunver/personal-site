import React from 'react';
import EternalDharmaProject from './EternalDharmaProject';
import HoopIntelProject from './HoopIntelProject';
import IdeaVerseAIProject from './IdeaVerseAIProject';
import DocPilotAIProject from './DocPilotAIProject';
import { PopupProvider } from './PopupContext';

const ProjectsSection = () => {
    return (
        <PopupProvider>
            <div className='mb-12 w-full px-6'>
                <h3 className='text-2xl font-bold text-[#ccd6f6] mb-8 text-center'>Recent Projects</h3>

                {/* Projects Grid - Full Viewport Width */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-start'>
                    {/* Eternal Dharma Project */}
                    <EternalDharmaProject />

                    {/* HoopIntel Project */}
                    <HoopIntelProject />

                    {/* IdeaVerse AI Project */}
                    <IdeaVerseAIProject />

                    {/* DocPilot AI Project */}
                    <DocPilotAIProject />
                </div>
            </div>
        </PopupProvider>
    );
};

export default ProjectsSection; 