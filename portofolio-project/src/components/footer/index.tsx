import React from 'react'
import Socials from '../socials'

type Props = {}

const Footer = (props: Props) => {
    return (
        <footer className='bg-footer-gradient h-64 pt-10'>
            <div className='w-5/6 mx-auto'>
                <Socials />
                <div className='md:flex justify-center md:justify-between text-center'>
                    <p className='font-semibold text-2xl text-yellow'>MITU CRISTIAN</p>
                    <p className='text-md text-rose-600'>©All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer