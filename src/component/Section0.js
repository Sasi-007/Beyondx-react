import React, { Component } from 'react'
import imgUrl_4 from '../images/Group 46.jpg';


export default class Section0 extends Component {
    render() {
        return (
            <div className="section0">
            <div className="section0-left">
               <span className="head"> WELCOME TO BEYOND TECHNOLOGY VISION</span>   <br/><br/>
               <span className="heading">STAND OUT AMONG<br/> YOUR COMPETITORS</span>
               <br/>
               <br/><br/><br/><br/>
               <button>Stand Out</button>
            </div>
            <div className="section0-right">
               <img src={imgUrl_4} alt="section-image"/><br/><br/><br/><br/><br/><br/>
            </div>
         </div>
        )
    }
}
