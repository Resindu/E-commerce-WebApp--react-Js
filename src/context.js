import React, { Component } from 'react';
import {popularProducts,bagProducts,accessryProducts,womenProducts,menProducts,decorationProducts,shoeProducts,detailProducts} from '../src/data';

const ProductContext = React.createContext();
//provider
//consumer

class ProductProvider extends Component {
    state = {
        womenProducts:[],
        menProducts:[],
        decorationProducts:[],
        shoeProducts:[],
        accessryProducts:[],
        bagProducts:[],
        popularProducts:[],
        products:[],
        detailProducts:{},
        myFavourites:[],
        cart:[],
        cartSubTotal:0,
        cartTax:0,
        cartTotal:0
    };
    

    
    componentDidMount = ()=>{
        this.setProducts();
    }
    
    setProducts = ()=>{
        let tempWomenProducts=[];
        let tempMenProducts=[];
        let tempdecorationProducts=[];
        let tempshoeProducts=[];
        let tempaccessryProducts=[];
        let tempbagProducts=[];
        let temppopularProducts=[];
        let tempProducts=[];

        womenProducts.forEach(item => {
            const singleItem = {...item};
            tempWomenProducts = [...tempWomenProducts,singleItem]
        })

        menProducts.forEach(item => {
            const singleItem = {...item};
            tempMenProducts = [...tempMenProducts,singleItem]
        })
        decorationProducts.forEach(item => {
            const singleItem = {...item};
            tempdecorationProducts = [...tempdecorationProducts,singleItem]
        })
        shoeProducts.forEach(item => {
            const singleItem = {...item};
            tempshoeProducts = [...tempshoeProducts,singleItem]
        })
        accessryProducts.forEach(item => {
            const singleItem = {...item};
            tempaccessryProducts = [...tempaccessryProducts,singleItem]
        })
        bagProducts.forEach(item => {
            const singleItem = {...item};
            tempbagProducts = [...tempbagProducts,singleItem]
        })

        popularProducts.forEach(item => {
            const singleItem = {...item};
            temppopularProducts = [...temppopularProducts,singleItem]
        })

        this.setState(()=>{
            return {
                womenProducts:tempWomenProducts,
                menProducts:tempMenProducts,
                decorationProducts:tempdecorationProducts,
                shoeProducts:tempshoeProducts,
                accessryProducts:tempaccessryProducts,
                bagProducts:tempbagProducts,
                popularProducts:temppopularProducts,
                products:[...tempProducts,...tempMenProducts,...tempWomenProducts,...tempdecorationProducts,...tempshoeProducts,...tempaccessryProducts,...tempbagProducts]

            }
        })

    }
    handleDetails = id => {
        const product = this.state.products.find(item => item.id === id);
        this.setState(()=>{
            return {detailProducts:product}
        })

    };

    addToCart = (id)=>{
        let tempCartProducts = [...this.state.products];
        let selectedProduct = tempCartProducts.find(item => item.id === id);
        let index = tempCartProducts.indexOf(selectedProduct);
        let product = tempCartProducts[index];
        product.inCart=true;
        product.count=1;
        product.total=product.price;
        this.setState(()=>{
           return { cart:[...this.state.cart,product]};
        },()=>this.addTotals())
    }

    addToMyFavourites = (id)=>{
        let tempCartProducts = [...this.state.products];
        let selectedProduct = tempCartProducts.find(item => item.id === id);
        let index = tempCartProducts.indexOf(selectedProduct);
        let product = tempCartProducts[index];
        
        
        this.setState(()=>{
           return { myFavourites:[...this.state.myFavourites,product]};
        },()=>this.addTotals())
    }

    increment = (id)=>{
        let tempCartProducts = [...this.state.cart]
        let selectedProduct = tempCartProducts.find(item => item.id === id);
        let index = tempCartProducts.indexOf(selectedProduct);
        let product = tempCartProducts[index]
        product.count = product.count+1;
        product.total = product.price * product.count;

        this.setState(()=>{
            return{
                cart:[...tempCartProducts]
            }
        },()=>this.addTotals())

    }
    decrement = (id)=>{
        const tempCart = [...this.state.cart]
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index]

        product.count = product.count - 1;

        if(product.count === 0){
            this.removeItem(id);

            
        }else{
            product.total = product.price * product.count;
        

        this.setState(()=>{
            return{
                cart:[...tempCart]
            }
        },()=>this.addTotals())
    }

    }

    removeItem = (id)=>{

        let tempCartItem = [...this.state.cart];
        let remainingProducts = tempCartItem.filter(item => item.id !== id);

        let tempProducts = [...this.state.products];
        let removingProduct = tempProducts.find(item => item.id === id);
        let index = tempProducts.indexOf(removingProduct);
        let removedproduct = tempProducts[index];
        removedproduct.count = 0;
        removedproduct.total=0;
        removedproduct.inCart = false;
        
        this.setState(()=>{
            return{
                cart:[...remainingProducts]

            }
        })

    }
    removeFavItem = (id)=>{
        let tempFavProduct = [...this.state.myFavourites];
        let selectedProd = tempFavProduct.filter(item => item.id !== id);

        this.setState(()=>{
            return{
                myFavourites:[...selectedProd]
            }
        })

    }
    clearCart = ()=>{
        let tempproduct = [...this.state.cart];
        let prod = tempproduct.map(item =>{
            item.inCart = false
        })
        this.setState(()=>{
            return{
                cart:[]
            }

        })
       
    }

    addTotals = ()=>{
        let subTotal = 0;
        this.state.cart.map(item => {
            subTotal = subTotal+ item.total;
        })
        const tempTax = subTotal*0.1;
        const tax = parseFloat(tempTax.toFixed(2))
        const total = subTotal + tax;
        this.setState(()=>{
            return{
                cartSubTotal:subTotal,
                cartTax:tax,
                cartTotal:total
            }
        })

    }
    
    
    render() {
        return (
            <ProductContext.Provider 
            value={{
                ...this.state,
            handleDetails:this.handleDetails,
            addToCart:this.addToCart,
            increment:this.increment,
            decrement:this.decrement,
            addTotals:this.addTotals,
            clearCart:this.clearCart,
            removeItem:this.removeItem,
            addToMyFavourites:this.addToMyFavourites,
            removeFavItem:this.removeFavItem
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};