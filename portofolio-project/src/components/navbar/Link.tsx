import React from 'react'
import { SelectedPage } from '@/shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
    const pageHref = page.toLowerCase().replace(/ /g, "") as SelectedPage;

    return (
        <AnchorLink
            className={`${selectedPage === pageHref ? "text-yellow" : ""} transition duration-500 hover:text-yellow`}
            href={`#${pageHref}`}
            onClick={() => setSelectedPage(pageHref)}
        >
            {page}
        </AnchorLink>
    )
}

export default Link