import React, { useState } from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { SelectedPage } from '@/shared/types';

type Props = {
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

    return (
        <nav className={`z-40 w-full fixed top-0 py-6`}>

        </nav>
    )
}

export default Navbar