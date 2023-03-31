import React from 'react';
import { motion } from 'framer-motion';
import cards from '../../assets/cards.png';
import tictac from '../../assets/tictac.png';
import gym from '../../assets/gym.png';
import { SelectedPage } from "../../shared/types";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Projects = ({ setSelectedPage }: Props) => {
    return (
        <section id="projects" className='pt-28 pb-12 md:min-h-screen mb-12'>
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}>
                <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: -50 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        className="md:w-1/2 mx-auto text-center"
                    >
                        <p className='relative font-semibold text-6xl mb-5'>My <span className='text-red'>PRO</span>JECTS</p>
                </motion.div>
                <motion.div 
                    className='md:flex gap-32 mx-12 my-24 md:bg-board-gradient md:py-24 justify-center'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1 }}
                    variants={{
                        hidden: { opacity: 0, x: -65 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <motion.div 
                        className='relative rounded-md p-4 my-6'
                        whileHover={{ 
                            x: 0,
                            y: -45,
                            scale: 1.2,
                            rotate: 1
                        }}
                        whileTap={{
                            scale: 0.8,
                            rotate: -90,
                            borderRadius: "100%"
                        }}
                    >
                        <img className='h-[250px] w-[250px] xs:mx-auto' src={gym} />
                        <div className='absolute top-0 left-0 w-full flex flex-col rounded-md h-full justify-center items-center bg-slate-500 opacity-0 hover:h-full hover:opacity-90 duration-500'>
                            <a className='text-2xl text-lighter-blue font-bold' href='www.google.com'>GYM WEBSITE</a>
                        </div>
                    </motion.div>
                    <motion.div 
                        className='relative rounded-md p-4 my-6'
                        whileHover={{ 
                            x: 0,
                            y: -45,
                            scale: 1.2,
                            rotate: 1
                        }}
                        whileTap={{
                            scale: 0.8,
                            rotate: -90,
                            borderRadius: "100%"
                        }}
                    >
                        <img className='h-[250px] w-[250px] xs:mx-auto' src={tictac} />
                        <div className='absolute top-0 left-0 w-full flex flex-col h-full rounded-md  justify-center items-center bg-slate-500 opacity-0 hover:h-full hover:opacity-90 duration-500'>
                            <a className='text-2xl text-lighter-blue font-bold'>TASK APP</a>
                        </div>
                    </motion.div>
                    <motion.div 
                        className='relative rounded-md p-4  my-6'
                        whileHover={{ 
                            x: 0,
                            y: -45,
                            scale: 1.2,
                            rotate: 1
                        }}
                        whileTap={{
                            scale: 0.8,
                            rotate: -90,
                            borderRadius: "100%"
                        }}
                    >
                        <img className='h-[250px] w-[250px] xs:mx-auto' src={cards} />
                        <div className='absolute top-0 left-0 w-full flex flex-col h-full rounded-md justify-center items-center bg-slate-500 opacity-0 hover:h-full hover:opacity-90 duration-500'>
                            <a className='text-2xl text-lighter-blue font-bold'>CARD GAME</a>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Projects