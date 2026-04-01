import { useState, useEffect } from 'react'
import AnimeDisplay from './AnimeDisplay'
import Navbar from './Navbar'

export default function App(){
    const [heading,setHeading] = useState('Top Rated Anime')
    const [genre,setGenre] = useState('')
    const [genreList,setGenreList] = useState([])
    const [animeData,setAnimeData] = useState([])

    useEffect(()=>{

        fetch("https://api.jikan.moe/v4/genres/anime")
        .then((res)=>{
            if(!res.ok){
                throw new Error('Error')
            }
            return res.json();
        })
        .then(result=>result.data)
        .then(data=>setGenreList(data))
        .catch((err)=>{
            console.log(err.message);
        })
    },[])

    useEffect(()=>{
        if(genre===''){
            fetch("https://api.jikan.moe/v4/top/anime")
            .then((res)=>{
                if(!res.ok){
                    throw new Error('Error')
                }
                return res.json();
            })
            .then(result=>result.data)
            .then(data=>setAnimeData(data))
            .catch((err)=>{
                console.log(err.message);
            })
            setHeading('Top Rated Anime')
            return;
        }

        const genreObj = genreList.find((x)=>{
            if(x.name.toLocaleLowerCase()===genre.toLocaleLowerCase()){
                return x
            }
        })
        const genreId = genreObj.mal_id;


        fetch(`https://api.jikan.moe/v4/anime?genres=${genreId}&order_by=score&sort=desc`)
        .then((res)=>{
            if(!res.ok){
                throw new Error("Error")
            }
            return res.json();
        })
        .then(result=>result.data)
        .then(data=>setAnimeData(data))
        .catch((err)=>{
            console.log(err.message);
        })
        setHeading(`Top Rated ${genre} Anime`)
    },[genre])

    return (
        <>
            <Navbar handleGenre = {setGenre} />
            <AnimeDisplay data = {animeData} heading = {heading}/>
        </>
    )
}