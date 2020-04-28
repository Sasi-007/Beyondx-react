import React, { Component } from 'react'
import imgUrl_2 from '../images/quote.jpg';
import imgUrl_17 from '../images/logo123.jpg';











export default class Section4 extends Component {
    render() {
        return (
            
            <div className="section4" style={{width: '100%',float: 'left', textAlign: 'center', backgroundImage: 'url("'+imgUrl_2+'")', backgroundRepeat: 'no-repeat'}}>
            <div className="heading-4" style={{width: '100%', float: 'left', textAlign: 'center'}}>
               <p>What they say</p>
            </div>
            <div className="sub-heading-4" style={{width: '100%', float: 'left', textAlign: 'center',fontSize: '16px', fontWeight: '300'}}>
               <p>Based upon the information you provide, available  developers give estimates.<br/>
                  The average + 15% Codable fee = Your Quote
               </p>
            </div>
            <div className="quotes-4" style={{width: '100%', float: 'left', textAlign: 'center'}}>
               <p>"I must say the documentation was great and so  it is fun to work with it! Thank you for your great job here ,<br/>
                  guys ! Keep up the good work" 
               </p>
            </div>
            <div className="payment-4" style={{width: '100%', float: 'left',textAlign: 'center'}}>
               <p className="p1" style={{fontSize: '18px', fontWeight: '700'}}>Castel bales</p>
               <div className="p2" style={{textAlign: 'center', fontSize: '18px', fontWeight: '700'}}>
                  <p>Complete CRM support and  maintainence</p>
               </div>
               <img src={imgUrl_17} alt="logo"/><br/>
               <div id="myProgress">
                  <div id="myBar"></div>
               </div>
               <br/>
                {/* if want to work progress bar please enable the button
                  <button onclick="move()">Click Me</button>                     */}
            </div>
         </div>
        )
    }
}
