import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../Context/global";
import { Link, useParams } from "react-router-dom";
import Style from "./Modules/Character.module.css";

function Character() {
    const {getAnimePictures, pictures} = useGlobalContext();
    const {id} = useParams();

    const [index, setIndex] = useState(0);

    const handleImageClick = (i) => {
        setIndex(i);
    }

    useEffect(() => {
        getAnimePictures(id);
    }, [id]);

    return(
        <div className={Style.characterPage}>
            <div className={Style.back}>
                <Link to="/"><i className="fas fa=arrow-left"></i>Back To Home</Link>
            </div>
            <div className={Style.bigImage}>
                <img src={pictures[index]?.jpg.image_url} alt=""></img>
            </div>
            <div className={Style.smallImages}>
                {pictures?.map((picture, i) => {
                    return <div id={Style.level}  onClick={()=> { handleImageClick(i);
                    }} key={i}>
                        <img className={`${Style.image_tap} ${i === index ? Style.equal : Style.notEqual}`} src={picture?.jpg.image_url}/>
                    </div>
                })}
            </div>
        </div>
    )
}
export default Character;