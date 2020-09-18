import React, { Component } from 'react';
import './CartStyles.css';

export default class EmptyCart extends Component {
    render() {
        return (
            <div className="mx-auto">
                <p className="empty mx-auto">your cart is empty</p>
                
            </div>
        )
    }
}
