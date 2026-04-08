import Card from './Card.jsx'

export default function AnimeDisplay({data,heading}){
    // console.log(data);
    // console.log(anime);

    let anime;
    if(data!==undefined){
        anime = data.map((x)=>{
            return <Card  key = {x.mal_id} name = {x.title_english || x.title} poster = {x.images.webp.image_url} score = {x.score} description = {x.synopsis} episodes={x.episodes}/>
        })
    }
    

    return (
        <>
            <h1 id='heading'>{heading}</h1>
            <div id='cards-container'>
                {anime===undefined? <h1 style={{marginTop:"30vh"}}>No Results</h1> : (anime.length>0? anime: <p className='loading'></p>)}
            </div>
        </>
    )
}