import React, { Component } from 'react'
import imgUrl_11 from '../images/A-Run.jpg';
import imgUrl_12 from '../images/Schwerkraft.jpg';
import imgUrl_13 from '../images/Table-Tenis-Tournament.jpg';
import imgUrl_14 from '../images/Castle-Bakes_01_Cups_Mock-up_s.jpg';
import imgUrl_15 from '../images/Aura-Wellness-Centre.jpg';
import imgUrl_16 from '../images/Circle-Technologies.jpg';




export default class Section3 extends Component {
    render() {
        return (
            <div className="section3">
            <div className="heading-3">
               <p>Client & Partners</p>
            </div>
            <div className="sub-heading-3">
               <p>Want to expose your portfolio to more customers? Nominate your file for use in our Free File of the Month marketing promotions!</p>
               <br/><br/>
            </div>
            <br/>
            <div className="images-3">
               <div style={{width: '16%', float: 'right'}}>
                  <img src={imgUrl_11} alt="Run"/>    
               </div>
               <div style={{width: '16%', float: 'right'}}>
                  <img src={imgUrl_12} alt="Image2"/>    
               </div>
               <div style={{width: '16%', float: 'right'}}>
                  <img src={imgUrl_13} alt="Tennis image"/>    
               </div>
               <div style={{width: '16%', float: 'right'}}>
                  <img src={imgUrl_14} alt="Castle image"/>    
               </div>
               <div style={{width: '16%', float: 'right'}}>
                  <img src={imgUrl_15} alt="Wellness image"/>                    
               </div>
               <div style={{width: '16%', float: 'right'}}>
                  <img src={imgUrl_16} alt="Circle image"/>                    
               </div>
            </div>
         </div>
        )
    }
}
