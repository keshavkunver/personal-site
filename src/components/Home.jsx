import { React, useState } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>

            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#a32638]'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Keshav</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Software Engineer.</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>A dedicated and detail-oriented developer from the Greater Los Angeles Metropolitan Area</p>
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
        </div >


    )
}

export default Home