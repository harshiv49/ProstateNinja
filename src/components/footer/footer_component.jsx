import { Fragment } from "react";
import './footer_styles.css'
import { Outlet } from "react-router";

import {TiSocialTwitterCircular,TiSocialLinkedinCircular,TiSocialFacebookCircular} from 'react-icons/ti';
import {AiOutlineInstagram} from 'react-icons/ai'
import {IoIosArrowDropup,IoIosMail} from 'react-icons/io'

import {IoLocationSharp,IoCallSharp} from 'react-icons/io5'


const Footer=()=>{
    return (
        <Fragment>
        <Outlet/>
        <div className="footer-parent">
            <div className="footer" >
                <div className="footer-contact-details-container-parent">
                    <h3 className="footer-contact-details-heading">PROSTATE NINJA HEADQUATERS<br></br>AT USA</h3>
                    <div className="footer-contact-details-container"> 
                        <div className="footer-contact-details-elements">
                       {/* here is a hard fix for now */}
                            <IoLocationSharp className="footer-contact-details-elements-icon1"></IoLocationSharp>
                           <div className="footer-contact-details-elements-headings">
                                <p className="footer-contact-details-elements-heading1">Office Address</p>
                                <p className="footer-contact-details-elements-heading2">Massachusetts Hall Cambridge MA,0213</p>
                           </div>
                            
                        </div>
                        <div className="footer-contact-details-elements">

                            <IoIosMail className="footer-contact-details-elements-icon"></IoIosMail>
                           <div className="footer-contact-details-elements-headings">
                                <p className="footer-contact-details-elements-heading1">Email Us</p>
                                <p className="footer-contact-details-elements-heading2">oosadhi@gmail.com</p>
                           </div>
                            
                        </div>
                        <div className="footer-contact-details-elements">

                            <IoCallSharp className="footer-contact-details-elements-icon"></IoCallSharp>
                           <div className="footer-contact-details-elements-headings">
                                <p className="footer-contact-details-elements-heading1">Call or Chat</p>
                                <p className="footer-contact-details-elements-heading2">1 (234) 456-892</p>
                           </div>
                            
                        </div>
                     </div>  
                       
                    
                </div>
                <div className="footer-quick-links-container">
                    <h3 className="footer-quick-links-heading">Quick Links</h3>
                    <ul className="footer-quick-links-list">
                        <li className="footer-quick-links-active">Home </li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Support Groups</li>
                        <li>Find a Screening</li>
                    </ul>
                </div>


                <div className="footer-social-media-links-container">
                    <ul className="footer-social-media-links-list">
                        <AiOutlineInstagram className="footer-social-media-links-instagram"/>
                        <TiSocialFacebookCircular/>
                        <TiSocialTwitterCircular/>
                        <TiSocialLinkedinCircular/>
                    </ul>
                    <p className="footer-social-media-links-info">Created by ProstateNinja inc., a startup seeking to improve<br></br> prostate cancer information and outcomes</p>
                    <IoIosArrowDropup className="footer-social-media-links-up-arrow"/>
                </div>
            </div>
        </div>
        </Fragment>
    );
}

export default Footer;