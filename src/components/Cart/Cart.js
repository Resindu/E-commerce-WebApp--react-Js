import React, { Component } from 'react';
import {ProductConsumer} from '../../context';
import EmptyCart from './EmptyCart';
import CartColumns from './CartColumns';
import CartList from './CartList';
import CartTotal from './CartTotal';
import './CartStyles.css';
import Footer from '../Footer/Footer';


export default class Cart extends Component {
    render() {
        return (
            <section>            
                <ProductConsumer>
                {value => {
                    const cart = value.cart;
                    if(cart.length>0){
                        return(
                            <React.Fragment>
                                <h5 className="shoppingcartheading">Shopping Cart</h5><hr></hr>
                                <CartColumns/>
                                <CartList value={value}/>
                                <hr></hr>
                                <CartTotal value={value}/>
                                <Footer/>

                            </React.Fragment>
                            
                        );
                    }else{
                        return <EmptyCart/>


                    }
                }}
               </ProductConsumer>
            </section>

            
          
        )
    }
}
