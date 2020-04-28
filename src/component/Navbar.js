import React, { Component } from 'react'
import imgUrl_3 from '../images/Group 23.png';



export default class Navbar extends Component {
    render() {
        return (
            <div className="header">  
            <div className="header-left">
               <img src={imgUrl_3} alt="BrandLogo" className="responsive"/>
            </div>
            <div className="header-right">
               <span className="header1">
               <a href="#">We offers</a>
               </span>
               <span className="header2">
               <a href="#">Our Clients</a>
               </span>
               <button>Contact Us</button>
            </div>
         </div>
        )
    }
}
