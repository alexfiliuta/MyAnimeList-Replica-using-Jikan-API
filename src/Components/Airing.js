import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context/global";
import Sidebar from "./Sidebar";

function Airing({rendered}){
    const {airingAnime, isSearch, searchResults} = useGlobalContext()
    
    const conditionalRender = () => {
        if(!isSearch && rendered === 'airing') {
            return airingAnime?.map((anime) =>{
                return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                    <img src={anime.images.jpg.large_image_url} alt=""></img>
                </Link>
            })
        } else {
            return searchResults?.map((anime) => {
                return<Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                    <img src={anime.images.jpg.large_image_url} alt=""></img>
                </Link>
            })
        }    
    }

    return (
        <div className="popular-page">
            <div className="airing-anime">
                {conditionalRender()}
            </div>
            <Sidebar></Sidebar>
        </div>
    )
}
export default Airing;