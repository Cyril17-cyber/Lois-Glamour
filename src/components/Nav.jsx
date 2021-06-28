import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import PhoneIcon from "@material-ui/icons/Phone";
import FacebookIcon from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";

function Nav(props) {
    return (
        <nav>
            <Link to='/' className="logo">
                <img src={logo} alt="logo"/>
                <h2>Lois Glamour</h2>
            </Link>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/work'>Work</Link>
                <Link to='/contact'>Contact</Link>
            </div>
            <div className="social">
                <a href="mailto: loiscyril351@gmail.com"><EmailIcon /></a>
                <a href="tel: +2348189024153"><PhoneIcon /></a>
                <a href="https://www.facebook.com/lois.asogwa"><FacebookIcon /></a>
                <a href="https://www.instagram.com/loisglamour/"><Instagram /></a>
            </div>

            <div id="hamburger" onClick={props.clickBurger}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    )
}

export default Nav;