import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../../context';
import './Products.css';


export default class Product extends Component {
    render() {
        const {id,title,img,price,inCart} = this.props.product;
        return (
          <div className="col-xs-9 mx-auto col-md-6 col-lg-4">
                <div className="card prodcard">
                    <ProductConsumer>
                        {(val) => (
                             <div className="img-container p-5">
                                <Link to ="/detail">
                                    <img src={img} alt="products" className="card-img-top" onClick={()=>val.handleDetails(id)}></img>
                                </Link>
                                <div className="card-body">
                                <button className="fav-btn" 
                                onClick={()=>{val.addToMyFavourites(id)}}>
                                    <i className="fa fa-heart favheart"></i>
                                </button>
                                <button 
                                disabled ={inCart?true:false}
                                className="cart-btn" 
                                onClick={()=> val.addToCart(id)}>
                                    {inCart?(
                                <p className='incartText text-capitalize mb-0'disabled>
                                    {"In cart"}
                                    </p>
                                    ):(
                                    <i className="fa fa-shopping-cart prodcart"/>)}
                                </button>
                                </div>
                            </div>
                       
                        )}

                    </ProductConsumer>            

                            

                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                           {title}
                        </p><br></br>
                        <h5 className="text-blue font-italic mb-0">
                            <span className="mr-1">$</span>
                            {price}
                        </h5>
                    </div>
                    

                </div>            
                <br/>

              
                
            </div>
        )
    }
}

