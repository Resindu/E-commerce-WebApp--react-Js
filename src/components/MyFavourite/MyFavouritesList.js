import React, { Component } from 'react';
import {ProductConsumer} from '../../context';
import MyFavouritesItem from './MyFavouriteItem';
import Footer from '../Footer/Footer';

export default function MyFavouritesList({value}) {
    const {myFavourites} = value;
        return (
            <div className="container-fluid">
            <h5 className="shoppingcartheading">My Favourites</h5>
 
                 {myFavourites.map(item=>{
                     return (
                     <MyFavouritesItem item ={item} value={value} 
                     />)
                 })}
                 <Footer/>
             </div>
        )
    
}
