import React from 'react'
import "./card.css"
const Card = ({image,title,description,price}) => {
  return (
    <article>
        <img src={image} alt="" />
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        <div className="price">{price}$</div>
    </article>
  )
}

export default Card