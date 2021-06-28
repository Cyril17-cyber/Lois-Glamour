import React from "react";
import logo from "../images/logo.jpg";

function About() {
    return (
        <div className="about">
            <img src={logo} alt=""/>

            <div className="texts">
                <h4>
                Hello Beauties‼ 
                </h4>
                <p>
                I'm Lois. A professional make up artist, who's interested in giving ladies the confidence that comes with beauty...
                </p>
                <p>
                <span>Lois Glam</span> is here to service all your beauty needs. We're here to give you the confidence you need to own every event...
                </p>
                <h4>We provide these services:</h4>
                <ul>
                    <li>Makeup Tutorials</li>
                    <li>Gele Tying</li>
                    <li>Brows grooming</li>
                    <li>Face Transformation(bridal makeup, birthdays, nude makeup, wedding guests e.t.c.</li>
                    <li>Sales of Beauty Products</li>
                </ul>
                <p>
                    If you're looking for a stunning look for that engagement session, wedding, birthday, headshot, date night, book me as your makeup artist🥰
                </p>
                <div className="conclusion">
                    <h2>Lois Glam</h2>
                    <p>...giving you that stunning look 🤭</p>
                </div>
            </div>
        </div>
    )
}

export default About;