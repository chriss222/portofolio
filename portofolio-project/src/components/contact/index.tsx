import { SelectedPage } from '@/shared/types';
import React from 'react';
import post from "../../assets/post.png";
import { useForm } from "react-hook-form";
import { motion } from 'framer-motion';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const index = ({ setSelectedPage }: Props) => {
    const inputStyle = `mt-5 rounded-lg px-5 py-3 placeholder-red`

    const {
        register,
        trigger,
        formState: { errors }
    } = useForm()

    const handleSubmit = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }

    return (
        <section id='contact' className='py-48 px-14 mt-32 bg-[#090746]'>
            <motion.div 
                className='md:flex flex-row justify-center gap-52' 
                onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 }
                }}
            >
                <div className='md:flex flex-col gap-7'>
                    <div className='border-4 p-4 rounded-3xl bg-[#02011d] border-[#02011d] mt-4 mb-2 shadow-custom-left'>
                        <div className='md:visible my-auto md:flex flex-col gap-12'>
                            <h4 className='text-center py-[5px] font-semibold text-md'>LET'S <span className='text-yellow'>CONNECT</span></h4>
                            <h1 className='text-center pb-12 text-3xl font-bold'><span className='text-red'>CONTACT</span> ME</h1>
                        </div>
                    </div>
                    <div className='border-4 p-4 rounded-3xl bg-[#02011d] border-[#02011d] shadow-custom-left'>
                        <img className='max-w-[250px] max-h-[350px]' src={post} />
                    </div>
                </div>
                <div className='justify-between gap-8 md:flex border-4 p-4 rounded-3xl bg-[#02011d] border-[#02011d] mt-5 shadow-custom-right'>
                    <form 
                        target="_blank"
                        className='flex flex-col gap-4'
                        onSubmit={handleSubmit}
                        method="POST"
                        action="https://formsubmit.co/el/duxako"
                    >
                        <input 
                            className={inputStyle}
                            type="text"
                            placeholder='NAME'
                            {...register("name", {
                                required: true,
                                maxLength: 100
                            })}
                        />
                        {errors.name && (
                            <p className='mt-1 text-rose-600'>
                                {errors.name.type === "required" && "This field is required."}
                                {errors.name.type === "maxLength" && "Max length is 100 characters."}
                            </p>
                        )}
                        <input 
                            className={inputStyle}
                            type="text"
                            placeholder='EMAIL'
                            {...register("email", {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                            })}
                        />
                        {errors.email && (
                            <p className='mt-1 text-rose-600'>
                                {errors.email.type === "required" && "This field is required."}
                                {errors.email.type === "pattern" && "Not a vaild email address"}
                            </p>
                        )}
                        <textarea 
                            className={inputStyle}
                            placeholder="MESSAGE"
                            rows={4}
                            cols={50}
                            {...register("message", {
                                required: true,
                                maxLength: 2000
                            })}
                        />
                        {errors.message && (
                            <p className='mt-1 text-rose-600'>
                                {errors.message.type === "required" && "This field is required."}
                                {errors.message.type === "maxLength" && "Max length is 2.000 characters."}
                            </p>
                        )}
                        <button
                            type="submit"
                            className='mt-5 rounded-lg bg-red text-yellow font-bold text-xl px-20 py-3 transition duration-500 hover:text-white'
                        >
                            SUBMIT
                        </button>
                    </form>
                </div>
            </motion.div>
        </section>
    )
}

export default index