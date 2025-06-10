import { React, useState, useEffect } from 'react'
import { HiArrowNarrowRight, HiLocationMarker } from 'react-icons/hi';
import { Link } from 'react-scroll';
import headshotImage from '../../assets/images/profile/headshot.jpg';

const Home = () => {
    const [nav, setNav] = useState(false);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    const handleClick = () => setNav(!nav);

    const rotatingTexts = [
        "I'm a Software Engineer.",
        "I'm a Hooper 🏀",
        "I'm a Lakers Fan 💜💛",
        "I'm a Car Enthusiast 🏎️",
        "I'm an Entrepreneur 💡",
        "I'm a Tech Innovator 🚀",
        "I'm a Problem Solver 🧩",
        "I'm a Mentor 🤝",
        "I'm a Lifelong Learner 📚",
        "I'm a Wellness Optimizer 🌱",
        "I'm an Explorer 🌍"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(false); // Start fade out

            setTimeout(() => {
                setCurrentTextIndex((prevIndex) =>
                    (prevIndex + 1) % rotatingTexts.length
                );
                setIsVisible(true); // Start fade in
            }, 300); // Wait for fade out to complete
        }, 3000); // Change text every 3 seconds

        return () => clearInterval(interval);
    }, [rotatingTexts.length]);

    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <div className='flex flex-col lg:flex-row lg:items-center lg:gap-12'>
                    {/* Text Content */}
                    <div className='lg:flex-1'>
                        <p className='text-[#a32638] text-xl mb-2'>Hi, my name is</p>
                        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Keshav</h1>
                        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0] min-h-[1.2em]'>
                            <span
                                className={`transition-opacity duration-300 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'
                                    }`}
                            >
                                {rotatingTexts[currentTextIndex]}
                            </span>
                        </h2>
                        <p className='text-[#8892b0] py-4 max-w-[700px] flex items-center text-lg'>
                            <HiLocationMarker className='mr-2 text-[#a32638]' />
                            Greater LA
                        </p>
                        <div className='text-[#64ffda] text-base mb-4'>
                            🚀 Currently building innovative solutions • Open to full-time & freelance opportunities
                        </div>
                        <div>
                            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                                <button className='text-white border-2 group px-6 py-3 my-2 flex  items-center hover:bg-[#a32638] hover:border-[#a32638]'>
                                    View More
                                    <span className='group-hover:rotate-90 duration-300'>
                                        <HiArrowNarrowRight className='ml-3' />
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Headshot Photo */}
                    <div className='mt-8 lg:mt-0 lg:flex-shrink-0 lg:transform lg:translate-x-15'>
                        <div className='w-64 h-64 lg:w-80 lg:h-80 mx-auto lg:mx-0 rounded-full overflow-hidden border-4 border-[#a32638] shadow-lg bg-[#112240]'>
                            <img
                                src={headshotImage}
                                alt="Keshav's headshot"
                                className='w-full h-full object-cover object-top transition-opacity duration-300'
                                loading="eager"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home