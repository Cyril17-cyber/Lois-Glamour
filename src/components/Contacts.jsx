import React from "react";
import svgContacts from "../images/svgContact.svg";
import PhoneIcon from "@material-ui/icons/Phone";
import FacebookIcon from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";

function Contacts() {
    return (
        <div className="contacts">
            <img src={svgContacts} alt=""/>
            <div className="texts">
                <h2>Trying to reach me?</h2>
                <h4>You could reach me through:</h4>
            </div>
            <div className="links">
            <a href="mailto: loiscyril351@gmail.com">
            <EmailIcon />
            <h3>Loiscyril351@gmail.com</h3>
            </a>
                <a href="tel: +2348189024153">
                <PhoneIcon />
                <h3>+2348189024153</h3>
                </a>
                <a href="https://www.facebook.com/lois.asogwa">
                <FacebookIcon />
                <h3>
                    Lois Asogwa
                </h3>
                </a>
                <a href="https://www.instagram.com/loisglamour/">
                <Instagram />
                <h3>Lois Glamour</h3>
                </a>
            </div>
        </div>
    )
}

export default Contacts;