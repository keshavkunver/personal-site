import React from 'react';

const ExperienceTemplate = ({
    jobTitle,
    company,
    duration,
    description,
    achievements,
    technologies
}) => {
    return (
        <div className='bg-[#112240] rounded-lg p-6 mb-6 shadow-lg'>
            <div className='flex flex-col md:flex-row md:justify-between md:items-start mb-4'>
                <div>
                    <h4 className='text-xl font-bold text-[#a32638]'>{company}</h4>
                    <p className='text-[#ccd6f6] font-semibold'>{jobTitle}</p>
                </div>
                <p className='text-[#8892b0] mt-2 md:mt-0'>{duration}</p>
            </div>

            <p className='text-[#8892b0] mb-4 text-base leading-relaxed'>
                {description}
            </p>

            {achievements && achievements.length > 0 && (
                <ul className='text-[#8892b0] space-y-2 mb-4'>
                    {achievements.map((achievement, index) => (
                        <li key={index}>• {achievement}</li>
                    ))}
                </ul>
            )}

            <div>
                <h5 className='text-[#ccd6f6] font-semibold mb-2'>Technology & Skills:</h5>
                <div className='flex flex-wrap gap-2'>
                    {technologies.map((tech, index) => (
                        <span key={index} className='bg-[#233554] px-3 py-1 rounded-full text-sm'>
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExperienceTemplate; 