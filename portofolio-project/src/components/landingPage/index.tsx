import { SelectedPage } from '@/shared/types';
import React from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { motion } from "framer-motion";
import dalle from "../../assets/dalle.png";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Socials from '../socials';
import Splash from '../../assets/splash.png';

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const LandingPage = ({ selectedPage, setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section id="home" className='md:h-full py-16 md:flex md:items-center'>
            <motion.div className='md:flex md:justify-between md:items-center gap-16 py-10' onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
                <div className='md:order-1 flex justify-center basis-3/4 z-10 mt-16 md:mt-32'>
                    {isAboveMediumScreens ? (
                        <div className='relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1] hover:before:opacity-0 before:duration-500'> 
                            <img className='max-w-[400px] max-h-[400px]' src={dalle} />
                            <div className='absolute top-0 left-0 w-full flex flex-col h-full justify-center items-center bg-slate-500 opacity-0 hover:h-full hover:opacity-70 duration-500'>
                                <h1 className='text-2xl text-red font-extrabold'>DALL-E</h1>
                                <p className='text-center text-xl text-pink-700 pt-8 font-medium italic'>"An A.I. controlled robot, in a cyberpunk style city, working on a personal project, at night."</p>
                            </div>
                        </div>
                    ) : (
                        <img src={dalle} />
                    )}
                </div>
                <div className='z-30 basis-1/4 mt-12 md:mt-32'>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >   
                        <p className='relative text-4xl font-semibold z-10 md:text-start'>
                            Cristian {""}
                            <span className='xs:relative font-semibold z-20 px-5'>Mitu</span>
                            <img className='absolute h-[160px] w-[200px] bg-splash z-[-1] -top-16 -left-8' src={Splash} />
                        </p>
                        <p className='mt-10 mb-7 text-sm text-center md:text-start'>
                            Welcome to my personal webpage! I am a front-end developer with a passion for creating beautiful and functional web interfaces.
                            I am equipped with the necessary skills to bring your digital designs to life. From developing interactive websites to building complex web applications, I am dedicated to providing an exceptional user experience.
                        </p>
                    </motion.div> 
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                        className='flex'
                    >
                        <AnchorLink
                            className='bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500'
                            href={`#${SelectedPage.Contact}`}
                            onClick={() => setSelectedPage(SelectedPage.Contact)}
                        >
                            Contact Me <span>📞</span>
                        </AnchorLink>
                        <AnchorLink
                            className='rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5'
                            href={`#${SelectedPage.Contact}`}
                            onClick={() => setSelectedPage(SelectedPage.Contact)}
                        >
                            <div className='bg-deep-blue hover:text-red transition duration-500 rounded-r-sm w-full h-full flex items-center justify-center px-10'>
                                Let's talk.
                            </div>
                        </AnchorLink>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <Socials />
                    </motion.div>                 
                </div>
            </motion.div>
        </section>
    )
}

export default LandingPage