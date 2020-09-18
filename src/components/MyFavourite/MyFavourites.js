import React, { Component } from 'react';
import MyFavouritesList from './MyFavouritesList';
import {ProductConsumer} from '../../context';
import EmptyFav from '../MyFavourite/EmptyFav';



export default class MyFavourites extends Component {
    render() {
        return (
            <section>            
            <ProductConsumer>
            {value => {
                const myFavourites = value.myFavourites;
                if(myFavourites.length>0){
                    return(
                        <div>
                            <MyFavouritesList value={value}/>
                            <hr></hr>

                        </div>
                        
                    );
                }else{
                    return <EmptyFav/>


                }
            }}
           </ProductConsumer>
        </section>

        
      
          
        )
    }            
        
    
}
