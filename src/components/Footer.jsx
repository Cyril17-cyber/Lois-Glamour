import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import PhoneIcon from "@material-ui/icons/Phone";
import FacebookIcon from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <div className="footer">
            <div className="top">
                <Link to='/' className="logo">
                <img src={logo} alt="logo"/>
                <h2>Lois Glamour</h2>
                </Link>

                <div className="contactLinks">
                <a href="mailto: loiscyril351@gmail.com"><EmailIcon /></a>
                <a href="tel: +2348189024153"><PhoneIcon /></a>
                <a href="https://www.facebook.com/lois.asogwa"><FacebookIcon /></a>
                <a href="https://www.instagram.com/loisglamour/"><Instagram /></a>
                </div>
            </div>

            <p className="conclusion">Made by <a href="https://cyril.herokuapp.com/">Cyril™</a>. Copyright ©{year}. All Right Reserved</p>
        </div>
    )
}

export default Footer;