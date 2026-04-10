import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "../../icons/icons8-sun.json";

export default function Navbar({ handleGenre, handleSearch }) {

    // const [genre,setGenre] = useState("");
    const [searchText, setSearchText] = useState("");
    const [theme,setTheme] = useState('dark')
    
    function handleTheme(){
        if(theme==='dark'){
            setTheme('light')
            document.body.classList.add("light");
        }
        else{
            document.body.classList.remove("light");
            setTheme("dark");
        }
    }

    let themeIcon = theme==='dark'?<Lottie.default animationData={animationData} loop={true} style={{ height: 40, width: 40 }} /> : <img src="../../icons/dark.png" alt="Dark" />

    return (
        <nav>
            <h1>Weebipedia</h1>
            {/* <button id="home-button">Home</button> */}
            <select name="Genre" id="genre-input" onChange={(e) => handleGenre(e.target.value)}>
                <option value="">Genre</option>
                <option value="Action">Action</option>
                <option value="Adventure">Adventure</option>
                <option value="Comedy">Comedy</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Romance">Romance</option>
                <option value="Seinen">Seinen</option>
                <option value="Shounen">Shounen</option>
                <option value="Slice of life">Slice of life</option>
                <option value="Space">Space</option>
                <option value="Time Travel">Time Travel</option>
                <option value="Vampire">Vampire</option>
                <option value="Video Game">Video Game</option>
            </select>
            <div>
                <input type="search" id="search-input" placeholder="Search Anime" onChange={(e) => setSearchText(e.target.value)} />
                <button onClick={() => handleSearch(searchText)}>Search</button>
            </div>
            <button id="theme" onClick={handleTheme}>
                {themeIcon}
            </button>
        </nav>
    )
}