import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Navbar from './components/Navigation/Navbar.js';
import Home from './components/Home/Home.js';
import WomenProductList from '../src/components/Products/WomenProductList';
import MenProductList from '../src/components/Products/MenProductList';
import Cart from '../src/components/Cart/Cart';
import AllProductList from '../src/components/Products/AllProductList';
import DecorationProductList from '../src/components/Products/DecorationProductList';
import ShoesProductList from '../src/components/Products/ShoeProductList';
import BagsProductList from '../src/components/Products/BagsProductList';
import AccessoriesProductList from '../src/components/Products/AccessoriesProductList';
import Detail from '../src/components/Detail';
import MyFavourites from '../src/components/MyFavourite/MyFavourites';
import Contact from '../src/components/ContactUs/ContactUs';



export default class App extends Component {
  render() {
    return (
   <React.Fragment>
     <Navbar/>
     <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path="/all" component={AllProductList} />
       <Route exact path="/women" component={WomenProductList} />
       <Route exact path="/men" component={MenProductList} />
       <Route exact path="/decoration" component={DecorationProductList} />
       <Route exact path="/shoes" component={ShoesProductList} />
       <Route exact path="/bags" component={BagsProductList} />
       <Route exact path="/accessories" component={AccessoriesProductList} />
       <Route exact path="/cart" component={Cart} />
       <Route exact path="/detail" component={Detail} />
       <Route exact path="/myfavourites" component={MyFavourites} />
       <Route exact path="/contact" component={Contact} />

     </Switch>     
   </React.Fragment>
    )
  }
}
