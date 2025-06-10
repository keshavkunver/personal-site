import React, { useState } from 'react';
import KeshavLogo from '../../assets/logos/keshav-logo/logo.png';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    return (
        <div className='fixed w-full h-[60px] flex justify-center items-center px-6 md:px-8 bg-[#0a192f]/95 backdrop-blur-md border-b border-gray-800/50 text-gray-300 z-50'>

            {/* Centered Logo + Navigation */}
            <div className='hidden md:flex items-center space-x-12'>
                {/* Logo */}
                <div className='flex items-center py-4'>
                    <img src={KeshavLogo} alt="Logo" style={{ width: '45px' }} />
                </div>

                {/* Navigation Links */}
                <ul className='flex space-x-2'>
                    <li className='relative'>
                        <Link to="home" smooth={true} duration={500}
                            className='px-4 py-4 text-sm font-medium tracking-wide hover:text-white transition-all duration-300 cursor-pointer relative group rounded-md hover:bg-white/5'>
                            Home
                            <span className='absolute bottom-2 left-4 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-[calc(100%-2rem)]'></span>
                        </Link>
                    </li>
                    <li className='relative'>
                        <Link to="about" smooth={true} duration={500}
                            className='px-4 py-4 text-sm font-medium tracking-wide hover:text-white transition-all duration-300 cursor-pointer relative group rounded-md hover:bg-white/5'>
                            About Me
                            <span className='absolute bottom-2 left-4 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-[calc(100%-2rem)]'></span>
                        </Link>
                    </li>
                    <li className='relative'>
                        <Link to="skills" smooth={true} duration={500}
                            className='px-4 py-4 text-sm font-medium tracking-wide hover:text-white transition-all duration-300 cursor-pointer relative group rounded-md hover:bg-white/5'>
                            Skills
                            <span className='absolute bottom-2 left-4 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-[calc(100%-2rem)]'></span>
                        </Link>
                    </li>
                    <li className='relative'>
                        <Link to="work" smooth={true} duration={500}
                            className='px-4 py-4 text-sm font-medium tracking-wide hover:text-white transition-all duration-300 cursor-pointer relative group rounded-md hover:bg-white/5'>
                            Work
                            <span className='absolute bottom-2 left-4 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-[calc(100%-2rem)]'></span>
                        </Link>
                    </li>
                    <li className='relative'>
                        <Link to="contact" smooth={true} duration={500}
                            className='px-4 py-4 text-sm font-medium tracking-wide hover:text-white transition-all duration-300 cursor-pointer relative group rounded-md hover:bg-white/5'>
                            Contact
                            <span className='absolute bottom-2 left-4 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-[calc(100%-2rem)]'></span>
                        </Link>
                    </li>
                </ul>

                {/* Social Icons - Desktop */}
                <div className='flex items-center space-x-3 pl-6 border-l border-gray-700/50'>
                    <a href="https://www.linkedin.com/in/keshav-kunver/" target="_blank" rel="noopener noreferrer"
                        className='w-10 h-10 rounded-full bg-gray-800/50 hover:bg-blue-500/20 flex items-center justify-center text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-125'>
                        <FaLinkedin size={16} />
                    </a>
                    <a href="https://github.com/keshavkunver" target="_blank" rel="noopener noreferrer"
                        className='w-10 h-10 rounded-full bg-gray-800/50 hover:bg-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-125'>
                        <FaGithub size={16} />
                    </a>
                    <a href="mailto:keshav@kunver.com" target="_blank" rel="noopener noreferrer"
                        className='w-10 h-10 rounded-full bg-gray-800/50 hover:bg-teal-500/20 flex items-center justify-center text-gray-400 hover:text-teal-400 transition-all duration-300 hover:scale-125'>
                        <HiOutlineMail size={18} />
                    </a>
                    <a href="https://instagram.com/keshavkunver" target="_blank" rel="noopener noreferrer"
                        className='w-10 h-10 rounded-full bg-gray-800/50 hover:bg-pink-500/20 flex items-center justify-center text-gray-400 hover:text-pink-400 transition-all duration-300 hover:scale-125'>
                        <FaInstagram size={16} />
                    </a>
                </div>
            </div>

            {/* Mobile Logo + Hamburger */}
            <div className='md:hidden flex justify-between items-center w-full'>
                <img src={KeshavLogo} alt="Logo" style={{ width: '45px' }} />
                <div onClick={handleClick} className='z-10'>
                    {!nav ? <FaBars /> : <FaTimes />}
                </div>
            </div>



            {/* Mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'} >
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                        Home
                    </Link></li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                        About Me
                    </Link></li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                        Skills
                    </Link></li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                        Work
                    </Link></li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                        Contact
                    </Link></li>

                {/* Social Icons - Mobile */}
                <div className='flex items-center space-x-6 mt-8'>
                    <a href="https://www.linkedin.com/in/keshav-kunver/" target="_blank" rel="noopener noreferrer"
                        className='text-gray-300 hover:text-blue-500 transition-colors duration-300'>
                        <FaLinkedin size={30} />
                    </a>
                    <a href="https://github.com/keshavkunver" target="_blank" rel="noopener noreferrer"
                        className='text-gray-300 hover:text-white transition-colors duration-300'>
                        <FaGithub size={30} />
                    </a>
                    <a href="mailto:keshav@kunver.com" target="_blank" rel="noopener noreferrer"
                        className='text-gray-300 hover:text-teal-400 transition-colors duration-300'>
                        <HiOutlineMail size={32} />
                    </a>
                    <a href="https://instagram.com/keshavkunver" target="_blank" rel="noopener noreferrer"
                        className='text-gray-300 hover:text-pink-500 transition-colors duration-300'>
                        <FaInstagram size={30} />
                    </a>
                </div>
            </ul>


        </div>
    )
}

export default Navbar