import { useState } from 'react'
import { useMediaQuery } from './hooks/useMediaQuery';
import { SelectedPage } from './shared/types';
import Navbar from './components/navbar';

function App() {
    const [selectedPage, setSelectedPage] = useState(SelectedPage.Home);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <div className="app bg-deep-blue">
            <Navbar 
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
        </div>
    )
}

export default App
