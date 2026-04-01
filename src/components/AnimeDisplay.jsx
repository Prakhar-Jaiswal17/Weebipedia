import Card from './Card.jsx'

export default function AnimeDisplay({data}){
    // console.log(data);
    // console.log(anime);
    
    let anime = data.map((x)=>{
        return <Card  key = {x.mal_id} name = {x.title_english || x.title} poster = {x.images.webp.image_url} score = {x.score} description = {x.synopsis} episodes={x.episodes}/>
    })
    

    return (
        <>
            <h1 id='heading'>Top Rated Anime</h1>
            <div id='cards-container'>
                {anime.length>0? anime: <p className='loading'></p>}
            </div>
        </>
    )
}