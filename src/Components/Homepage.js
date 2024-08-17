import React, {useState} from "react";
import Popular from "./Popular";
import Upcoming from "./Upcoming";
import Airing from "./Airing";
import { useGlobalContext } from "../Context/global";
import Style from "./Modules/Homepage.module.css"

function Homepage() {

    const {
        handleSubmit,
        search,
        searchAnime,
        handleChange,
        getUpcomingAnime,
        getAiringAnime,
        getPopularAnime,
    } = useGlobalContext();

    const [rendered, setRendered] = useState('popular');

    function switchComponent(rendered){
        switch(rendered){
            case 'popular':
                return <Popular rendered={rendered}></Popular>;
            case 'airing':
                return <Airing rendered={rendered}></Airing>;
            case 'upcoming':
                return <Upcoming rendered={rendered}></Upcoming>;
            default:
                return <Popular rendered={rendered}></Popular>
        }
    }

    return(
        <div className={Style.home}>
            <header>
                <div className={Style.logo}>
                    <h1>
                        {rendered === 'popular' ? 'Popular Anime' : 
                        ( rendered === 'airing' ? 'Airing Anime' : 'Upcoming Anime')}
                    </h1>
                </div>
                <div className={Style.searchContainer}>
                    <div>
                        <button className={Style.filterBtn} onClick={() => {
                            setRendered('popular')
                        }}>Popular<i className="fas fa-fire"></i></button>
                    </div>
                    <form action="" className={Style.searchForm} onSubmit={handleSubmit}>
                        <div className={Style.inputControl}>
                            <input type="text" placeholder="Search Anime" value={search} onChange={handleChange}></input>
                            <button className={Style.filterBtn} type="submit">Search</button>
                        </div>
                    </form>
                    <div>
                        <button className={Style.filterBtn} onClick={() =>{
                            setRendered('airing');
                            getAiringAnime();
                        }}>Airing</button>
                    </div>
                    <div>
                        <button className={Style.filterBtn} onClick={() => {
                            setRendered('upcoming');
                            getUpcomingAnime();
                        }}>Upcoming</button>
                    </div>
                </div>
            </header>
            {switchComponent(rendered)}
        </div>
    )
}
export default Homepage;