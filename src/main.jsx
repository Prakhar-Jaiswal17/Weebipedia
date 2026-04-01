import { createRoot } from 'react-dom/client'
import Nav from './components/Navbar.jsx'
import AnimeDisplay from './components/AnimeDisplay.jsx'


createRoot(document.getElementById('root')).render(
    <>
        <Nav />
        <AnimeDisplay />
    </>
)