// import '../index.css'
export default function Card({name, poster, score, description, episodes}){
    if(episodes===1){
        episodes='1 Episode';
    }
    else if(!episodes){
        episodes = 'Currently Airing';
    }
    else{
        episodes = episodes + ' Episodes'
    }
    return (
        <div className="cards">
            <img src={poster} alt={name} />
            <span>⭐️ {score}</span>
            <p style={{textAlign:"center", marginBottom: "15px", fontWeight: "bold"}}>{name}</p>

            <div id="hover-effect">
                <h4>{name}</h4>
                <p>⭐️ {score}</p>
                <p>{episodes}</p>
                <span>{description}</span>
            </div>
        </div>
    )
}