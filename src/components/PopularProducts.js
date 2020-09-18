import React, { Component } from 'react';
import './PopularProducts.css';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';



export default function PopularProducts({product}){
    const {id,img,title} = product;
        return (
            <div className="col-lg-3">
                <div className="card">
                             <div className="popularprodcontainer">
                                    <img src={img} alt="products"></img>
                                <h6 className="mt-5">{title}</h6>
                                
                            </div>
                       
                      
                    
               
                </div>
                
            </div>
            
        )
    
}
