import React from 'react';
import { ProjectsSection } from './projects';
import { ExperienceSection } from './experience';

const Work = () => {
    return (
        <div name='work' className='w-full h-full bg-[#0a192f] text-gray-300 py-16'>
            {/* Header Section - Constrained Width */}
            <div className='max-w-[1000px] mx-auto px-4'>
                <div className='text-center mb-16'>
                    <h2 className='text-5xl md:text-6xl font-bold text-[#ccd6f6] mb-4'>
                        Work
                    </h2>
                    <div className='w-24 h-1 bg-[#a32638] mx-auto mb-6'></div>
                    <p className='text-[#8892b0] text-lg max-w-2xl mx-auto'>
                        Check out some of my recent work
                    </p>
                </div>
            </div>

            {/* Projects Section - Full Width */}
            <ProjectsSection />

            {/* Experience Section - Constrained Width */}
            <div className='max-w-[1000px] mx-auto px-4'>
                <ExperienceSection />
            </div>
        </div>
    );
};

export default Work;
