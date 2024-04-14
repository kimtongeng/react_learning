import React from 'react';
import "./Poster.css";
import imgTest from "../assets/woman.png";
export const Poster = ({image,name ,text ,children}) => {
  return (
        <div className="poster">
            
            <div className="img">
            <img src={image} alt="" />
            </div>
            <h2>{name}</h2>
            {children}
            <p>{text}</p>
        </div>
  )
}
