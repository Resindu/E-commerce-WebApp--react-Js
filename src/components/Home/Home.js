import React, { Component } from 'react';
import './Home.css';
import img1  from '../../images/1.jpg';
import img2 from '../../images/3.jpg';
import img3 from '../../images/women1.jfif';
import img4 from '../../images/men3.jpg';
import img5 from '../../images/accessories.jpg';
import img6 from '../../images/shoes.jpg';
import {ProductConsumer} from '../../context';
import Product from '../Products/Product';
import PopularProducts from '../PopularProducts';
import Footer from '../Footer/Footer';

export default class Home extends Component {
    render() {
        return (
            <div>
               
               <div className="homecontainer">

                   <div className="background-image">
                   </div>

                   <div className="gallery">
                       <div className="row">
                           <div className="column">
                             
                               <img src={img3}/>                               
                               <div class="titletext"> women</div>


                               
                               <img src={img6}/>
                               <div class="titletext"> shoes</div> 

                               
                           </div>
                           <div className="column">
                               <img src={img5}/>
                               <div class="titletext"> Accessories</div>
                               <img src={img2}/>
                               <div class="titletext"> Bag</div> 

                           </div>
                           <div className="column">
                               <img src={img4}/>
                              <div class="titletext"> Men</div> 

                               <img src={img1}/>
                               <div class="titletext"> Decoration</div> 

                               
                           </div>
                       </div>
                   </div>
                   <div className="container">
                       <h2>Popular Products</h2>
                       <div className="row">
                    <ProductConsumer>
                               {value => {
                                   return value.popularProducts.map(product => {
                                       return <PopularProducts key ={product.id} product={product}/>;
                                   });

                               }} 
                    
                    </ProductConsumer>
                    </div>
                      

                   </div>
                   <Footer/>
                  
               </div>

                
            </div>
        )
    }
}
