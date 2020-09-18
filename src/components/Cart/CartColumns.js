import React, { Component } from 'react';
import './CartStyles.css';

export default class CartColumns extends Component {
    render() {
        return (
            <div className="container-fluid text-center d-none d-lg-block mt-200">
                <div className="row">
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="cartheading text-uppercase">Products</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="cartheading text-uppercase">name of product</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="cartheading text-uppercase">price</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className=" cartheading text-uppercase">quantity</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="cartheading text-uppercase">remove</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="cartheading text-uppercase">total</p>
                    </div>
                </div>
                
                
            </div>
        )
    }
}
