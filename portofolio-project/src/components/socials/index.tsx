import React from 'react';
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SlSocialReddit, SlSocialSteam } from "react-icons/sl";

const Socials = () => {
    return (
        <div className='flex justify-center md:justify-start my-10 gap-7'>
            <a 
                className='hover:opacity-50 transition duration-500'
                href="https://www.linkedin.com/in/cristian-mitu-a50b49195/"
                target="_blank"
                rel="noreferrer"
            >
                <BsLinkedin className='text-6xl text-yellow' />
            </a>
            <a 
                className='hover:opacity-50 transition duration-500'
                href="https://www.github.com/chriss222?tab=repositories"
                target="_blank"
                rel="noreferrer"
            >
                <BsGithub className='text-6xl text-red' />
            </a>
            <a 
                className='hover:opacity-50 transition duration-500'
                href="https://www.reddit.com"
                target="_blank"
                rel="noreferrer"
            >
                <SlSocialReddit className='text-6xl text-green' style={{"color": "red"}} />
            </a>
            <a 
                className='hover:opacity-50 transition duration-500'
                href="https://www.steam.com"
                target="_blank"
                rel="noreferrer"
            >
                <SlSocialSteam className='text-6xl text-green' style={{"color": "#1894ba"}} />
            </a>
        </div>
    )
}

export default Socials