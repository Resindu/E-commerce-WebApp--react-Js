import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

export default class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                  <Link to="/" className="brandnamelink"><p className="brandname">angelStore</p></Link>

                  <ul class="navbar-nav">
                    <li class="nav-item">
                   <Link to ="/" className="brandnamelink"><p className="nav-link"> Home</p></Link>      
                    </li>
                    <li class="nav-item">
                   <Link to ="/all" className="brandnamelink"><p className="nav-link"> Shop</p></Link>      
                    </li>
                
                    <li class="nav-item">
                   <Link to ="/contact" className="brandnamelink"><p className="nav-link"> Contact</p></Link>      
                    </li>
                    <li class="nav-item">
                   <Link to ="/myfavourites" className="brandnamelink"><p className="nav-link">
                   <i className="fa fa-heart" style={{fontSize:24}}></i> </p></Link>      
                    </li>
                    <li class="nav-item">
                   <Link to ="/cart" className="brandnamelink"><p className="nav-link">
                   <i className="fa fa-shopping-cart" style={{fontSize:24}}></i> </p></Link>      
                    </li>
                   
                </ul>

                
            </nav>
        )
    }
}
