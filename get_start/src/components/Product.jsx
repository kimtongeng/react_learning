import React from 'react'
import Card from './Card'
import "./card.css"
const Product = () => {
    const product = [
        {
            id:1,
            img:"https://images.pexels.com/photos/11292946/pexels-photo-11292946.jpeg?auto=compress&cs=tinysrgb&w=600",
            title:"Broxx z1",
            description:"Sport PEDRO Studio Kate Leather Mules for urban chic",
            price:"1000"

        },
        {
            id:2,
            img:"https://images.pexels.com/photos/11135667/pexels-photo-11135667.jpeg?auto=compress&cs=tinysrgb&w=600",
            title:"Broxx er1",
            description:"Retro-inspired, consciously crafted.",
            price:"500"

        },
        {
            id:3,
            img:"https://images.pexels.com/photos/10259873/pexels-photo-10259873.jpeg?auto=compress&cs=tinysrgb&w=600",
            title:"Broxx zi3",
            description:"The perfect fusion of casual and sporty style, the EOS Slip-On Sneakers",
            price:"700"

        }
    ]
  return (
    <div className="product">
        
        {product.map((pro)=>{
            const {id,img,title,description,price } = pro;
            return <Card key={id} image={img} title={title} description={description} price={price}></Card>
        })}

    </div>
    
  )
}

export default Product