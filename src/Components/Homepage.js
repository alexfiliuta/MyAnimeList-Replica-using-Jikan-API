import React, {useState} from "react";
import Popular from "./Popular";
import Upcoming from "./Upcoming";
import Airing from "./Airing";
import { useGlobalContext } from "../Context/global";
import Style from "./Modules/Homepage.module.css"
import { setSelectionRange } from "@testing-library/user-event/dist/utils";

function Homepage() {

    const {
        handleSubmit,
        search,
        clearInput,
        handleChange,
        getUpcomingAnime,
        getAiringAnime,
        getPopularAnime,
        isSearch,
        searchResults,
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
                        {isSearch ? ` ${searchResults.length} results found` :
                        rendered === 'popular' ? 'Popular Anime' : 
                        ( rendered === 'airing' ? 'Airing Anime' : 'Upcoming Anime')}
                    </h1>
                </div>
                <div className={Style.searchContainer}>
                    <div>
                        <button className={Style.filterBtn} onClick={() => {
                            setRendered('popular');
                            clearInput();
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
                            clearInput();
                        }}>Airing</button>
                    </div>
                    <div>
                        <button className={Style.filterBtn} onClick={() => {
                            setRendered('upcoming');
                            getUpcomingAnime();
                            clearInput();
                        }}>Upcoming</button>
                    </div>
                </div>
            </header>
            {switchComponent(rendered)}
        </div>
    )
}
export default Homepage;
