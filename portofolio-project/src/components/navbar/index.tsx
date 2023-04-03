import React, { useState } from 'react'
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { SelectedPage } from '@/shared/types';
import Link from './Link';
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const navLinks: Array<string> = ["Home", "Skills", "Projects", "Contact"];

type Props = {
    isTopOfPage: boolean,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
    const navbarBackground = isTopOfPage ? "" : "bg-footer-gradient";

    return (
        <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
            <div className='flex items-center justify-between mx-auto w-5/6'>
                <AnchorLink 
                    className='inline text-lg font-bold p-2 bg-orange-500 border-2 border-orange-500 rounded-full text-white'
                    href={`#${SelectedPage.Home}`}
                    onClick={() => setSelectedPage(SelectedPage.Home)}
                >
                    CM
                </AnchorLink>

                {/* DESKTOP */}
                {isAboveSmallScreens ? (
                    <div className='flex justify-between gap-16 text-md font-semibold'>
                        {navLinks.map((link: string, i: number) => (
                            <Link 
                                key={i}
                                page={link}
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                        ))}
                    </div>
                ) : (
                    <button className='rounded-full bg-red p-2' onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <Bars4Icon className="h-6 w-6 text-white" />
                    </button>
                )}

                {/* MOBILE */}
                {!isAboveSmallScreens && isMenuToggled && (
                    <div className='fixed right-0 bottom-0 h-full bg-blue w-[300px]'>
                        <div className='flex justify-end p-12'>
                            <button className='rounded-full bg-red p-2' onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <XMarkIcon className='h-6 w-6 text-gray-400' />
                            </button>
                        </div>
                        <div className='flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue'>
                            {navLinks.map((link: string, i: number) => (
                                <Link 
                                    key={i}
                                    page={link}
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar