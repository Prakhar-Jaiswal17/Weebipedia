import Card from './Card.jsx'
import { useState, useEffect } from 'react'

export default function AnimeDisplay(){
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch('https://api.jikan.moe/v4/top/anime').then((res)=>{
            if(!res.ok)
                throw new Error("Error")
            return res.json();
        }).then((result)=>setData(result.data)).catch((err)=>console.log(err.message))
    },[]);
    // console.log(data);

    let anime = data.filter((x,i)=>{
        if(i!==9) return x;
    })
    console.log(anime);
    
    anime = anime.map((x)=>{
        return <Card  key = {x.mal_id} name = {x.title_english || x.title} poster = {x.images.webp.image_url} score = {x.score} description = {x.synopsis} episodes={x.episodes}/>
    })
    

    return (
        <>
            <h1 id='heading'>Top Rated Anime</h1>
            <div id='cards-container'>
                {anime}
            </div>
        </>
    )
}