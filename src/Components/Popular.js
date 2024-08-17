import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context/global";
import Sidebar from "./Sidebar";
import Style from "./Modules/Popular.module.css"

function Popular({rendered}){
    const {popularAnime, isSearch, searchResults} = useGlobalContext()
    
    const conditionalRender = () => {
        if(!isSearch && rendered === 'popular') {
            return popularAnime?.map((anime) =>{
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
        <div className={Style.popularPage}>
            <div className={Style.popularAnime}>
                {conditionalRender()}
            </div>
            <Sidebar></Sidebar>
        </div>
    )
}
export default Popular;