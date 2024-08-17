import React from "react";
import { useGlobalContext } from "../Context/global";
import { Link } from "react-router-dom";

function Sidebar() {
    const {popularAnime} = useGlobalContext();

    const sorted = popularAnime?.sort((a,b) => {
        return b.score - a.score
    })

    return (
        <div className="sidebar-style">
            <h3>Top 5 Anime</h3>
            <div className="anime">
                {sorted?.slice(0,5).map((anime) => {
                    return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                        <img src={anime.images.jpg.large_image_url} alt=""></img>
                        <h5>{anime.title}</h5>
                    </Link>
                })}
            </div>
        </div>
    )
    
}
export default Sidebar;