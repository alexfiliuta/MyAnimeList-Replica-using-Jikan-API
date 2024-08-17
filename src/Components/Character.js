import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../Context/global";
import { Link, useParams } from "react-router-dom";

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
        <div className="character-page">
            <div className="back">
                <Link to="/"><i className="fas fa=arrow-left"></i>Back To Home</Link>
            </div>
            <div className="big-image">
                <img src={pictures[index]?.jpg.image_url} alt=""></img>
            </div>
            <div className="small-images">
                {pictures?.map((picture, i) => {
                    return <div className="image-con" onClick={()=> {
                        handleImageClick(i);
                    }} key={i}>
                        <img className={`image-tap ${i === index ? 'equal' : 'notEqual' }`} src={picture?.jpg.image_url}/>
                    </div>
                })}
            </div>
        </div>
    )
}
export default Character;