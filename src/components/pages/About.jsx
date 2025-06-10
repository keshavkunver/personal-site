import React from 'react'

export const About = () => {
    return (
        <div name='about' className='w-full min-h-screen bg-[#0a192f] text-gray-300 py-16'>
            <div className='max-w-[1200px] mx-auto px-4 flex flex-col justify-center h-full'>

                {/* Header Section */}
                <div className='text-center mb-16'>
                    <h2 className='text-5xl md:text-6xl font-bold text-[#ccd6f6] mb-4'>
                        About Me
                    </h2>
                    <div className='w-24 h-1 bg-[#a32638] mx-auto'></div>
                </div>

                {/* Main Content */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>

                    {/* Left Side - Visual/Stats */}
                    <div className='space-y-8'>
                        <div className='text-center lg:text-left'>
                            <h3 className='text-4xl lg:text-5xl font-bold text-[#ccd6f6] mb-6'>
                                Hey there! 👋
                            </h3>

                            {/* Credentials Cards */}
                            <div className='space-y-4'>
                                <div className='bg-[#112240] p-4 rounded-lg border-l-4 border-[#a32638]'>
                                    <h4 className='text-[#a32638] font-semibold text-sm uppercase tracking-wide'>Education</h4>
                                    <p className='text-[#ccd6f6] font-bold'>MS Software Engineering <span className='text-[#64ffda] text-sm font-normal'>• 4.0 GPA</span></p>
                                    <p className='text-[#8892b0] text-sm'>CSU Fullerton</p>
                                    <p className='text-[#ccd6f6] font-bold mt-2'>BS Computer Science</p>
                                    <p className='text-[#8892b0] text-sm'>UC Riverside</p>
                                </div>

                                <div className='bg-[#112240] p-4 rounded-lg border-l-4 border-[#a32638]'>
                                    <h4 className='text-[#a32638] font-semibold text-sm uppercase tracking-wide'>Experience</h4>
                                    <p className='text-[#ccd6f6] font-bold'>5+ Years in Tech Industry</p>
                                    <p className='text-[#8892b0] text-sm'>Development • Testing • Product Strategy</p>
                                </div>

                                <div className='bg-[#112240] p-4 rounded-lg border-l-4 border-[#a32638]'>
                                    <h4 className='text-[#a32638] font-semibold text-sm uppercase tracking-wide'>Current Focus</h4>
                                    <p className='text-[#ccd6f6] font-bold'>React & React Native</p>
                                    <p className='text-[#8892b0] text-sm'>AI Integration & Efficiency</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Story */}
                    <div className='space-y-6 text-lg leading-relaxed'>
                        <p className='text-[#8892b0]'>
                            I'm Keshav, a versatile Engineer with expertise in building robust backend systems,
                            APIs, and full-stack applications that solve real-world problems. 💻
                        </p>

                        <p className='text-[#8892b0]'>
                            Right now I'm really into web development with <span className='text-[#a32638] font-semibold'>React</span> and
                            recently started getting into mobile development using <span className='text-[#a32638] font-semibold'>React Native</span>.
                            I'm also fascinated by how <span className='text-[#a32638] font-semibold'>AI can be integrated into applications</span> and how it can 10x my efficiency as an engineer.
                        </p>

                        <p className='text-[#8892b0]'>
                            There's so much potential in combining solid backend architecture with smart AI features to build apps
                            that solve people's problems.
                        </p>

                        <div className='pt-4 border-t border-[#233554]'>
                            <p className='text-[#8892b0] mb-2'>
                                When I'm not coding, you'll find me checking out nature trails, playing basketball, attending car meets, or researching the latest tech. Have you seen the latest content AI can make? It's insane.
                            </p>
                            <p className='text-[#8892b0]'>
                                I'm a huge Lakers fan and I really appreciate the engineering behind the cars I see on the road. 🏀 🏎️
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
