import { Fragment, useState } from "react";
import "./navigation_style.css"
import {Link, Outlet} from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import {AiOutlineClose} from "react-icons/ai";
const Navigation=()=>{
    const [isMenuOpen,setIsMenuOpen]=useState(true);
    return (
        <Fragment>
            
        {!isMenuOpen &&  (
            <div className="navbar-hidden" >
                <ul className="navbar-hidden-list"> 
                    <Link className="navbar-hidden-list-links">Home</Link>
                    <Link className="navbar-hidden-list-links">About</Link>
                    <Link className="navbar-hidden-list-links">Contact</Link>
                    <Link className="navbar-hidden-list-links">Support Groups</Link>
                    <Link className="navbar-hidden-list-links">Clinical Trials</Link>
                </ul>
            </div>)
        }
            <div className="navbar-parent">
               <div className="navbar">
                <div className="navbar-logo"> 
                   ProstateNinja Logo
                    <Link className="navbar-logo-more" onClick={()=>setIsMenuOpen(!isMenuOpen)} to='/'>
                            {isMenuOpen?
                                <Fragment>
                                    <RxHamburgerMenu className="navbar-logo-more-icon"/>
                                </Fragment>
                            :<AiOutlineClose className="navbar-logo-more-icon"/>
                            }More
                           
                    </Link>
                </div>
                <div className="navbar-help">
                    <p>
                      Need Help ?
                      <br/>
                    <span>Every day,24 hours</span>
                    </p>
                </div>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    );
}

export default Navigation;