import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Menu.css';

export default function Menu() {
        return (
            <nav class="navbar navbar-expand-lg">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
             <Link to ="/all" className="munustyle"><p className="nav-link menuUppecase"> All</p></Link>      
              </li>
              <li class="nav-item">
             <Link to ="/women" className="munustyle"><p className="nav-link menuUppecase"> Women</p></Link>      
              </li>
              <li class="nav-item">
             <Link to ="/men" className="munustyle"><p className="nav-link menuUppecase"> Men</p></Link>      
              </li>
              <li class="nav-item">
             <Link to ="/decoration" className="munustyle"><p className="nav-link menuUppecase"> Decoration</p></Link>      
              </li>
              <li class="nav-item">
             <Link to ="/bags" className="munustyle"><p className="nav-link menuUppecase"> Bags</p></Link>      
              </li>
              <li class="nav-item">
             <Link to ="/shoes" className="munustyle"><p className="nav-link menuUppecase"> Shoes</p></Link>      
              </li>
              <li class="nav-item">
             <Link to ="/accessories" className="munustyle"><p className="nav-link menuUppecase"> Accessories</p></Link>      
              </li>
              
              
             
          </ul>

          
      </nav>
        )
    
}
