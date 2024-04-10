import React from 'react';
import "./Poster.css";
import imgTest from "../assets/woman.png";
export const Poster = ({image,name ,text}) => {
  return (
        <div className="poster">
            
            <div className="img">
            <img src={image} alt="" />
            </div>
            <h2>{name}</h2>
            <p>{text}</p>
        </div>
  )
}
