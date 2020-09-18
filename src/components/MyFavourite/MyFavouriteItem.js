import React, { Component } from 'react'
import './MyFavStyles.css';

export default function MyFavouriteItem({item,value}) {
    const {id,title,img,price,info,count} = item;
    const {removeFavItem,addToCart} = value;
    
        return (
            <div className="favItemContainer">
                <hr></hr>
                <div className="favitembox">
                    <div className="row">
                <div className=" col-lg-3 favImgContainer">
                    <img src={img} className="favImg"></img>
                </div>
                <div className="col-lg-4 favDescrption">
                    <p className="favTitle"><b>{title}</b></p>
                    <p className="favInfo">{info}</p>

                    <p className="favPrice">US${price} .00</p>
                    
                </div>
                <div className="col-lg-3 trash">
                      <button className="remove-btn" onClick={()=>removeFavItem(id)}><i className="fa fa-trash"></i></button><br></br>
                      <button className="favAddtocart" onClick={()=>addToCart(id)}>Add to cart</button>
                </div>
                </div>
                </div>
                
            </div>
        )
    
}
