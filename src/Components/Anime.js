import React, { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom"

function Anime() {
    
    const {id} = useParams();

    const [anime, setAnime] = useState({});
    const [characters, setCharacters] = useState([]);
    const [showMore, setShowMore] = useState(false);

    const {
        title, synopsis, trailer,
        duration, aired, season,
        images, rank, score,
        scored_by, popularity, status,
        rating, source } = anime
    
    async function getAnime(anime) {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}`);
        const data = await response.json();
        setAnime(data.data);
    }

    async function getCharacters(anime) {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}/characters`);
        const data = await response.json();
        setCharacters(data.data);
    }

    useEffect(()=> {
        getAnime(id);
        getCharacters(id);
    }, [])

    return (
        <div className="anime_page">
            
            <h1>{title}</h1>

            <div className="details">
                <div className="detail">
                    <div className="image"><img src={images?.jpg.large_image_url} alt=""></img></div>
                    <div className="anime-details">
                        <p><span>Aired:</span><span>{aired?.string}</span></p>
                        <p><span>Rating:</span><span>{rating}</span></p>
                        <p><span>Rank:</span><span>{rank}</span></p>
                        <p><span>Score:</span><span>{score}</span></p>
                        <p><span>Scored By:</span><span>{scored_by}</span></p>
                        <p><span>Popularity:</span><span>{popularity}</span></p>
                        <p><span>Status:</span><span>{status}</span></p>
                        <p><span>Source:</span><span>{source}</span></p>
                        <p><span>Season:</span><span>{season}</span></p>
                        <p><span>Duration:</span><span>{duration}</span></p>
                    </div>
                </div>
                <p className="description">
                    {showMore ? synopsis : synopsis?.substring(0, 250) + "..."}
                    <button onClick={() => {
                        setShowMore(!showMore)
                    }}>{showMore ? "Show Less" : "Read More"}</button>
                </p>
            </div>

            <h3 className="title">Trailer</h3>

            <div className="trailer-content">
                {trailer?.embed_url ? <iframe
                    src = {trailer?.embed_url} 
                    title="Inline Frame Example"
                    width={800}
                    height={450}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe> :
                <h3>Trailer not available</h3>
                }
            </div>

            <h3 className="title">Characters</h3>

            <div className="characters">
                {characters?.map((character, index) => {
                    const role = character.role;
                    const images = character.character.images;
                    const name = character.character.name;
                    const mal_id = character.character.mal_id;
                    return(
                        <Link to={`/character/${mal_id}`} key={index}>
                            <div className="character">
                                <img src={images?.jpg.image_url} alt=""></img>
                                <h4>{name}</h4>
                                <p>{role}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>

        </div>
    )

}
export default Anime;