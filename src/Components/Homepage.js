import React, {useState} from "react";
import Popular from "./Popular";
import Upcoming from "./Upcoming";
import Airing from "./Airing";
import { useGlobalContext } from "../Context/global";

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
        <div className="home">
            <header>
                <div className="logo">
                    <h1>
                        {rendered === 'popular' ? 'Popular Anime' : 
                        ( rendered === 'airing' ? 'Airing Anime' : 'Upcoming Anime')}
                    </h1>
                </div>
                <div className="search-container">
                    <div className="filter-btn popular-filter">
                        <button onClick={() => {
                            setRendered('popular')
                        }}>Popular<i className="fas fa-fire"></i></button>
                    </div>
                    <form action="" className="search-form" onSubmit={handleSubmit}>
                        <div className="input-control">
                            <input type="text" placeholder="Search Anime" value={search} onChange={handleChange}></input>
                            <button type="submit">Search</button>
                        </div>
                    </form>
                    <div className="filter-btn airing-filter">
                        <button onClick={() =>{
                            setRendered('airing');
                            getAiringAnime();
                        }}>Airing</button>
                    </div>
                    <div className="filter-btn upcoming-filter">
                        <button onClick={() => {
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