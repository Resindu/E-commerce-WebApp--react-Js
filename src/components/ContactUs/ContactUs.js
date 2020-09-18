import React, { Component } from 'react'
import './ContactUs.css';
import Footer from '../Footer/Footer';

export default class ContactUs extends Component {
    render() {
        return (
            <div>
                <div className="contactusContainer">
                <h1 className="contactusitle">Contact Us</h1>
                <div className="form">
                    <input type="email" placeholder="work email" className="displayfeild"></input>
                    <input type="text" placeholder="what is this about" className="displayfeild "></input>
                    <input type="textarea" placeholder="your message" className=" displayfeild textarea"></input>
                    <button type='submit' className="contactusbtn">submit</button>

                </div>
                
            </div>
            <Footer/>


            </div>
            
        )
    }
}
