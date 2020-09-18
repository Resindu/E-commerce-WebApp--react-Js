import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import './Detail.css';
import Footer from '../components/Footer/Footer';


export default class Detail extends Component {
    render() {
        return (
           <ProductConsumer>
               {(value)=>{
                  const {id,title,img,price,info,inCart} = value.detailProducts;
                  const {addToCart} = value;
                  return(
                      <div className="detailcontainer">
                          <div className="detailImgcontainer col-lg-4">
                              <img src={img} className="detailimg"></img>
                          </div>
                          <div className="detaildescription col-lg-6">
                          <p className="descriptiontitle">{title}</p>

                              <p className="description"><b>Descripton:</b> <br></br><br></br>{info}</p>
                              <p className="detailprice"><b>Price :</b> US$ {price} .00</p>
                              <div className="detailbuttoncontainer">
                              <button 
                              className="detailbuttons"
                               onClick={()=>addToCart(id)}
                                disabled ={inCart?true:false}>
                                {inCart?(
                                <p className='incartDesText'disabled>
                                    {"In Cart"}
                                    </p>
                                    ):(
                                <p className="detail-btn">{"Add to cart"}</p>
                                )}
                              </button>
                              <Link to="/">
                              <button className="detail-btn">Continue Shopping</button>
                              </Link>
                          </div>

                          </div>
                          <Footer/>
                          
                         
                      </div>
                  )

               }}

           </ProductConsumer>
        )
    }
}
