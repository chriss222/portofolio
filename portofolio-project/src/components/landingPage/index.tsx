import { SelectedPage } from '@/shared/types'
import React from 'react'

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const LandingPage = ({ setSelectedPage }: Props) => {
    return (
        <div>LandingPage</div>
    )
}

export default LandingPage