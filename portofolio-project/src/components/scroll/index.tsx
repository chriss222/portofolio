import { SelectedPage } from '@/shared/types';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const navLinks: Array<string> = ["Home", "Skills", "Projects", "Contact"];

type Props = {
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void;
}

function Scroll({ selectedPage, setSelectedPage }: Props) {
    const selectedStyle = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;

    return (
        <div className='flex flex-col gap-6 fixed top-[60%] right-7 z-30'>
            {
                navLinks.map((link: string, i: number) => {
                    const page = SelectedPage[link as keyof typeof SelectedPage];

                    return <AnchorLink
                        key={i}
                        className={`${selectedPage === page ? selectedStyle : "bg-dark-grey"} w-3 h-3 rounded-full`}
                        href={`#${page}`}
                        onClick={() => setSelectedPage(page)}
                    />
                })
            }
        </div>
    )
}

export default Scroll