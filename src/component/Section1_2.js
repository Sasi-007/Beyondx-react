import React, { Component } from 'react'
import imgUrl_1 from '../images/Group 1.jpg';
import imgUrl_5 from '../images/devices.jpg';
import imgUrl_6 from '../images/noun_User Experience_497415.png';
import imgUrl_7 from '../images/noun_digital_1060211.png';
import imgUrl_8 from '../images/noun_visualization_1246402.png';
import imgUrl_9 from '../images/performance.png';
import imgUrl_10 from '../images/Untitled.jpg';


export default class Section1_2 extends Component {
    render() {
        return (
            <div className="section-1-2-wrapper" style={{backgroundImage: 'url("'+imgUrl_1+'")', backgroundRepeat:'no-repeat',    backgroundPosition: '-148px 77px'}}>
            <div className="section1">
               <span style={{fontSize: '32px'}}>We Offers</span>
               <br/><br/><br/>
               <span style={{fontWeight: '300', fontSize: '16px'}}>We love to work with startups because they are as passionate as we are about their products. We will help to find solution for you.<br/></span>
               <div className="list-buttons">
                  <ul className="unordered-buttons">
                     <div className="button1">
                        <li><img src={imgUrl_5} alt="bus"/></li>
                        <h4>Technology</h4>
                        <p>Start with Fresh</p>
                     </div>
                     <div className="button2">
                        <li><img src={imgUrl_6} alt="UX"/></li>
                        <h4>Experience</h4>
                        <p>Vision Development</p>
                     </div>
                     <div className="button3">
                        <li><img src={imgUrl_7} alt="Digital"/></li>
                        <h4>Digitalization</h4>
                        <p>Strong<br/> Computerization</p>
                     </div>
                     <div className="button4">
                        <li><img src={imgUrl_8} alt="Visualize"/></li>
                        <h4>Visualization</h4>
                        <p>Eminent scene <br/>draftsmen</p>
                     </div>
                     <div className="button5">
                        <li><img src={imgUrl_9} alt="Performance"/></li>
                        <h4>Branding</h4>
                        <p>Marketing & SEO</p>
                     </div>
                  </ul>
               </div>
            </div>
            <div className="section2">
               <div className="section2-left">
                  <p className="p1">Expert more than <br/>Design and Development</p>
                  <p className="p2">BeyondX is a complete creative suite platform equipped with designers, developers, artists, analysts and brand architects shaping solutions for all design and data challenges that confront start-ups and enterprises.</p>
               </div>
               <div className="section2-'right'">
                  <img src={imgUrl_10} alt="Pic"/>
               </div>
            </div>
         </div>
        )
    }
}
