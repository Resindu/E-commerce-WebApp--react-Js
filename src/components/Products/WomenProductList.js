import React, { Component } from 'react'
import {ProductConsumer} from '../../context';
import Product from './Product';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';


export default class WomenProductList extends Component {
    render() {
        return (
            <React.Fragment>
                
                <div className="py-5">
                    <Menu></Menu>

                   <div className="container">
                       <div className="row">
                           <ProductConsumer>
                               {val => {
                                   return val.womenProducts.map(product => {
                                       return <Product key ={product.id} product={product}/>;
                                   });

                               }}
                           </ProductConsumer>
                       </div>
                   </div>
                   <Footer/>
               </div>
            </React.Fragment>
        )
    }
}
