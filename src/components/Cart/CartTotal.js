import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './CartStyles.css';



export default function CartTotal({value}) {

    const {cartSubTotal,cartTax,cartTotal,clearCart} = value;
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="valueContainer">
                            
                            <div className="totalpricecontainer">

                            <h5>
                                <span className="text-title">Subtotal :</span>
                                <strong>$ {cartSubTotal} </strong>
                            </h5>
                            <h5>
                                <span className="text-title">Tax       :</span>
                                <strong>$ {cartTax} </strong>
                            </h5>
                            <h5>
                                <span className="text-title">Total  :</span>
                                <strong>   $ {cartTotal} </strong>
                            </h5>
                            
                            </div>
                            <div className="totalpricebuttons">
                            <Link to="/cart">
                                <button className="clearcartbtn" type="button" onClick={()=>clearCart()}>clear cart</button>
                            </Link>
                            <Link to="/">
                                <button className="checkoutbtn" type="button">checkout</button>
                            </Link>
                            </div>

                            <hr></hr>

                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    
}
