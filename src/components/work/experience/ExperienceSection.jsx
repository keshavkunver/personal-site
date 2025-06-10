import React from 'react';
import CurrentJobExperience from './CurrentJobExperience';
import PrathibhaManagementExperience from './PrathibhaManagementExperience';
import SkyTeamExperience from './SkyTeamExperience';

const ExperienceSection = () => {
    return (
        <div>
            <h3 className='text-2xl font-bold text-[#ccd6f6] mb-6'>Relevant Experience</h3>

            {/* Experience Overview */}
            <div className='bg-[#112240] p-6 rounded-lg mb-8 border-l-4 border-[#a32638]'>
                <p className='text-[#8892b0] text-lg leading-relaxed mb-4'>
                    My experience spans the <span className='text-[#a32638] font-semibold'>full software development lifecycle</span> —
                    from architecting backend systems and building robust APIs, to implementing comprehensive testing strategies
                    and driving product decisions based on user needs and technical feasibility.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-6'>
                    <div className='text-center'>
                        <div className='text-[#a32638] text-2xl mb-2'>⚡</div>
                        <h4 className='text-[#ccd6f6] font-semibold mb-1'>Development</h4>
                        <p className='text-[#8892b0] text-sm'>Backend systems, APIs, full-stack solutions</p>
                    </div>

                    <div className='text-center'>
                        <div className='text-[#a32638] text-2xl mb-2'>🔍</div>
                        <h4 className='text-[#ccd6f6] font-semibold mb-1'>Testing</h4>
                        <p className='text-[#8892b0] text-sm'>Quality assurance, automation, system reliability</p>
                    </div>

                    <div className='text-center'>
                        <div className='text-[#a32638] text-2xl mb-2'>🎯</div>
                        <h4 className='text-[#ccd6f6] font-semibold mb-1'>Product Strategy</h4>
                        <p className='text-[#8892b0] text-sm'>User-focused solutions, business impact</p>
                    </div>
                </div>
            </div>

            {/* Current Job Experience - Infosys */}
            <CurrentJobExperience />

            {/* Prathibha Management Experience */}
            <PrathibhaManagementExperience />

            {/* SkyTeam Experience */}
            <SkyTeamExperience />
        </div>
    );
};

export default ExperienceSection; 