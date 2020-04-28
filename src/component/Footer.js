import React, { Component } from 'react'
import imgUrl_18 from '../images/Group 27.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook,faInstagram,faLinkedin,faTwitter } from "@fortawesome/free-brands-svg-icons";




export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
            <div className="footer0">
               <div className="footer0-1">
                  <img src={imgUrl_18} alt="Brand Logo"/>
                  <p>We love to work with startups because they are as passionate as we are about their products. We will help to find solution for you.</p>
               </div>
               <div className="footer0-2">
                  <span className="footer0-2-head" style={{textAlign: 'center'}}>Contact details</span><br/><br/><br/>
                  <span className="footer0-2-l1">reach@beyondx.in</span>                        <br/><br/>
                  <span className="footer0-2-l2">+91 9790 8623 97</span>                        <br/><br/>
                  <span className="footer0-2-l3">+91 8903 0107 38</span>                        <br/><br/>
                  <span className="footer0-2-l4">101 Natesan nagar, Ramapuram, Chennai, India</span>                                        
               </div>
               <div class="footer0-3">
                  <span class="footer0-3-head">Follow us on</span><br/><br/><br/>
                  <button class="i-1">   <FontAwesomeIcon icon={faLinkedin} />           </button>
                  &nbsp;&nbsp;
                  <button class="i-2">                 <FontAwesomeIcon icon={faFacebook}/>           </button>
                  &nbsp;&nbsp;
                  <button class="i-3">                  <FontAwesomeIcon icon={faTwitter}/></button>
                  &nbsp;&nbsp;
                  <button class="i-4">                  <FontAwesomeIcon icon={faInstagram}/></button>
               </div>
            </div>
            <div className="footer1" style={{fontSize: '10px',fontWeight: '400'}}>
               <i className="fas fa-copyright"></i> Copyright 2020 - All rights reserved by <span style={{color: '#F07229'}}>BeyondX</span>
            </div>
         </div>
        )
    }
}
