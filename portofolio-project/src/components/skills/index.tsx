import React from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { motion } from 'framer-motion';
import { SelectedPage } from "../../shared/types";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Skills = ({ setSelectedPage }: Props) => {
    return (
        <section id="skills" className='py-16 md:my-56 bg-deep-blue h-full md:flex flex-col justify-center'>
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Skills)}></motion.div>
                <div className='w-5/6 mx-auto text-center m-10'>
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
                        <p className='relative font-semibold text-6xl mb-5 before:absolute before:bg-red before:h-1 before:w-[20%] before:top-0'>My Skills</p>
                    </motion.div>
                </div>
                <div className='md:flex md:justify-between mt-16 gap-32 mx-24'>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: -50 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        className="md:w-1/3 mt-10"
                    >
                        <div className='relative h-32'>
                            <div className='relative z-20'>
                                <p className='font-semibold text-5xl'>01</p>
                                <p className='font-semibold text-3xl mt-3'>Experience</p>
                            </div>
                            <div className='w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-10' />
                        </div>
                        <p className='mt-8'>
                            My journey as a front-end developer began in my final year of university, where I developed JavaScript games. 
                            This experience allowed me to hone my coding skills and develop a deep understanding of the language. 
                            After graduation, I was promoted to a web developer role, where I started working with React, a popular JavaScript library used for building user interfaces. 
                            Through my experience, I have gained a strong foundation in front-end development and am constantly learning new technologies to enhance my skills.
                        </p>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: -50 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        className="md:w-1/3 mt-10"
                    >
                        <div className='relative h-32'>
                            <div className='relative z-20'>
                                <p className='font-semibold text-5xl'>02</p>
                                <p className='font-semibold text-3xl mt-3'>Technology Stack</p>
                            </div>
                            <div className='w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-10' />
                        </div>
                        <p className='mt-8'>
                            As a front-end developer, I am proficient in using HTML, CSS, and JavaScript to build interactive and responsive websites. 
                            I have also worked with React and Redux, which are popular JavaScript frameworks used for building complex web applications. 
                            In addition, I have experience working with WordPress, a popular content management system, and Tailwind, a utility-first CSS framework that allows for faster and more efficient styling. 
                        </p>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: -50 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        className="md:w-1/3 mt-10"
                    >
                        <div className='relative h-32'>
                            <div className='relative z-20'>
                                <p className='font-semibold text-5xl'>03</p>
                                <p className='font-semibold text-3xl mt-3'>Motivation</p>
                            </div>
                            <div className='w-1/2 md:w-3/4 h-32 bg-purple-800 absolute right-0 top-0 z-10' />
                        </div>
                        <p className='mt-8'>
                            My motivation for pursuing a career in front-end development is rooted in my passion for design and technology. 
                            Additionally, the constantly evolving nature of web technologies and the opportunity to work on a variety of projects makes this field both challenging and exciting. 
                            I am drawn to the idea of being able to continuously learn and develop my skills as a front-end developer, while making a meaningful impact on the digital world.
                        </p>
                    </motion.div>
                </div>
        </section>
    )
}

export default Skills