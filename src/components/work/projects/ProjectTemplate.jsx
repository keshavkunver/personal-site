import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProjectTemplate = ({
    title,
    description,
    futureFeatures,
    metrics,
    technologies,
    links,
    screenshots = [],
    hasCarousel = false,
    singleImage = null,
    status = null
}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prev) =>
            prev === screenshots.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? screenshots.length - 1 : prev - 1
        );
    };

    const goToImage = (index) => {
        setCurrentImageIndex(index);
    };

    // Helper function to render description(s)
    const renderDescription = () => {
        if (Array.isArray(description)) {
            // Multiple paragraphs
            return description.map((paragraph, index) => (
                <p key={index} className={`text-[#8892b0] text-base leading-relaxed ${index === description.length - 1 ? 'mb-0' : 'mb-4'}`}>
                    {paragraph}
                </p>
            ));
        } else {
            // Single paragraph (backward compatibility)
            return (
                <p className='text-[#8892b0] mb-0 text-base leading-relaxed'>
                    {description}
                </p>
            );
        }
    };

    return (
        <div className='bg-[#112240] rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col'>
            {/* Project Image/Carousel */}
            <div className='flex justify-center mb-8'>
                {hasCarousel && screenshots.length > 0 ? (
                    // Carousel for multiple screenshots - Smart consistent sizing
                    <div className='relative flex items-center'>
                        {/* Left Arrow */}
                        <button
                            onClick={prevImage}
                            className='absolute left-[-3rem] top-1/2 transform -translate-y-1/2 bg-[#233554] text-[#ccd6f6] p-3 rounded-full hover:bg-[#a32638] hover:text-white transition-all duration-200 shadow-lg z-10'
                        >
                            <FaChevronLeft size={16} />
                        </button>

                        <div className='relative'>
                            {/* Main Screenshot Container - Dynamic sizing */}
                            <div className='rounded-xl border-2 border-[#233554] shadow-lg overflow-hidden bg-[#0a192f] inline-block'>
                                <img
                                    src={screenshots[currentImageIndex]}
                                    alt={`${title} Screenshot ${currentImageIndex + 1}`}
                                    className='block rounded-xl max-w-full max-h-[32rem]'
                                />
                            </div>

                            {/* Dots Indicator */}
                            <div className='flex justify-center mt-4 space-x-2'>
                                {screenshots.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToImage(index)}
                                        className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentImageIndex
                                            ? 'bg-[#a32638]'
                                            : 'bg-[#8892b0] hover:bg-[#ccd6f6]'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Right Arrow */}
                        <button
                            onClick={nextImage}
                            className='absolute right-[-3rem] top-1/2 transform -translate-y-1/2 bg-[#233554] text-[#ccd6f6] p-3 rounded-full hover:bg-[#a32638] hover:text-white transition-all duration-200 shadow-lg z-10'
                        >
                            <FaChevronRight size={16} />
                        </button>
                    </div>
                ) : singleImage ? (
                    // Single image display with hover animation - Fully dynamic sizing
                    <div className='rounded-lg border-2 border-[#233554] overflow-visible bg-[#0a192f] inline-block'>
                        <img
                            src={singleImage}
                            alt={`${title} Screenshot`}
                            className='block rounded-lg hover:scale-125 hover:z-50 hover:shadow-2xl transition-transform duration-300 ease-in-out cursor-pointer relative will-change-transform max-h-80'
                            style={{
                                backfaceVisibility: 'hidden'
                            }}
                        />
                    </div>
                ) : status ? (
                    // Professional status banner for projects in development
                    <div className='bg-gradient-to-r from-[#233554] to-[#112240] rounded-lg border-2 border-[#a32638] p-8 w-full max-w-md'>
                        <div className='text-center'>
                            <div className='text-4xl mb-4'>{status.icon}</div>
                            <h5 className='text-[#ccd6f6] font-bold text-xl mb-2'>{status.title}</h5>
                            <p className='text-[#8892b0] text-base'>{status.subtitle}</p>
                        </div>
                    </div>
                ) : (
                    // Default placeholder
                    <div className='bg-[#0a192f] rounded-lg h-64 w-full flex items-center justify-center border-2 border-[#233554]'>
                        <p className='text-[#8892b0]'>Project Screenshot</p>
                    </div>
                )}
            </div>

            {/* Project Details */}
            <div className='flex-1 flex flex-col'>
                <h4 className='text-3xl font-bold text-[#ccd6f6] mb-4'>
                    {title}
                </h4>

                {/* Description - supports single or multiple paragraphs */}
                <div className='mb-6'>
                    {renderDescription()}
                </div>

                {/* Future Features (optional) */}
                {futureFeatures && futureFeatures.length > 0 && (
                    <div className='mb-6'>
                        <h5 className='text-[#ccd6f6] font-semibold mb-3 text-lg flex items-center gap-2'>
                            🚀 Future Enhancements:
                        </h5>
                        <ul className='text-[#8892b0] space-y-2'>
                            {futureFeatures.map((feature, index) => (
                                <li key={index} className='text-base leading-relaxed flex items-start gap-2'>
                                    <span className='text-[#a32638] mt-1'>•</span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Metrics (optional) */}
                {metrics && (
                    <div className='mb-6'>
                        <div className='flex flex-col gap-2 text-base'>
                            {metrics.map((metric, index) => (
                                <span key={index} className={index === 0 ? 'text-[#ccd6f6] font-semibold' : 'text-[#8892b0]'}>
                                    {metric}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Technologies */}
                <div className='mb-8'>
                    <h5 className='text-[#ccd6f6] font-semibold mb-4 text-lg'>
                        Technologies:
                    </h5>
                    <div className='flex flex-wrap gap-3'>
                        {technologies.map((tech, index) => (
                            <span
                                key={index}
                                className='bg-green-800 text-gray-100 px-3 py-2 rounded-full text-sm font-semibold'
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Links */}
                <div className='space-y-3'>
                    {links.map((linkGroup, groupIndex) => (
                        <div key={groupIndex} className='flex flex-wrap gap-6'>
                            {linkGroup.map((link, linkIndex) => (
                                <div key={linkIndex} className='relative'>
                                    {link.onClick ? (
                                        <button
                                            onClick={link.onClick}
                                            className={`flex items-center gap-2 text-[#ccd6f6] transition-colors duration-300 cursor-pointer text-base ${link.hoverColor || 'hover:text-[#a32638]'} ${link.opacity || ''}`}
                                        >
                                            {link.icon} {link.text}
                                        </button>
                                    ) : (
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex items-center gap-2 text-[#ccd6f6] transition-colors duration-300 text-base ${link.hoverColor || 'hover:text-[#a32638]'}`}
                                        >
                                            {link.icon} {link.text}
                                        </a>
                                    )}

                                    {/* Popup for buttons */}
                                    {link.popup && link.showPopup && (
                                        <div className='absolute top-full left-0 mt-2 bg-[#a32638] text-white px-3 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap z-10'>
                                            {link.popup}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectTemplate; 