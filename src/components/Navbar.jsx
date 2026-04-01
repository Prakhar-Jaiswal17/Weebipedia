export default function Navbar(){
    return(
        <nav>
            <h1>Weebipedia</h1>
            <select name="Genre" id="genre-input">
                <option value="">Genre</option>
                <option value="Action">Action</option>
                <option value="Adventure">Adventure</option>
                <option value="Comedy">Comedy</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Romance">Romance</option>
                <option value="Seinen">Seinen</option>
                <option value="Shounen">Shounen</option>
                <option value="Slice of life">Slice of life</option>
                <option value="Thriller">Thriller</option>
            </select>
            <div>
                <input type="search" id="search-input" placeholder="Search Anime" />
                <button>Search</button>
            </div>
        </nav>
    )
}