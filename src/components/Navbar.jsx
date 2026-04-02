import { useState, useEffect } from "react";

export default function Navbar({handleGenre, handleSearch}){

    // const [genre,setGenre] = useState("");
    const [searchText,setSearchText] = useState("");

    return(
        <nav>
            <h1>Weebipedia</h1>
            {/* <button id="home-button">Home</button> */}
            <select name="Genre" id="genre-input" onChange={(e)=>handleGenre(e.target.value)}>
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
                <input type="search" id="search-input" placeholder="Search Anime" onChange={(e)=>setSearchText(e.target.value)}/>
                <button onClick={()=>handleSearch(searchText)}>Search</button>
            </div>
        </nav>
    )
}