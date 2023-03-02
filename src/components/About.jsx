import React from 'react'

export const About = () => {
    return (
        <div name='about' className='w-fullscreen h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#a32638]'>About Me
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Greetings! 👋</p>
                    </div>
                    <div>
                        <p>My name is Keshav and I am a Software Engineer with a Bachelor's degree in Computer Science and two years of experience in the industry. My mission is to provide value by developing intuitive and innovative software solutions that meet a user's unique needs. 💻</p>
                        <br />
                        <p>When I'm not immersed in technology and development, you can find me indulging in my passions for basketball and attending local car meetups. These interests inspire me and bring balance to my life. 🏀 🏎</p>
                    </div>
                </div>
            </div >
        </div >
    )
}
