import { useEffect, useState } from 'react'
import { useMediaQuery } from './hooks/useMediaQuery';
import { SelectedPage } from './shared/types';
import Navbar from './components/navbar';
import Scroll from './components/scroll';
import LandingPage from './components/landingPage';

function App() {
    const [selectedPage, setSelectedPage] = useState(SelectedPage.Home);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) setIsTopOfPage(true);
            else setIsTopOfPage(false);
        }
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className="app bg-deep-blue">
            <Navbar 
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
            <div className='w-5/6 mx-auto md:h-full'>
                {isAboveMediumScreens && (
                    <Scroll 
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                )}
                <LandingPage 
                    setSelectedPage={setSelectedPage}
                />
            </div>
        </div>
    )
}

export default App
