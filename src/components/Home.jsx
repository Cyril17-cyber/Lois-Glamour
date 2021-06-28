import React, { useState } from "react";
import { Link } from "react-router-dom";
import profile from "../images/bg.png";
import brush from "../images/brush.png";
import salon from "../images/salon.png";
import makeup from "../images/makeup.png";
import face from "../images/face.png";
import bg2 from "../images/bg2.png";
import wide from "../images/wide.jpeg";
import { slideShow } from "./Arrays";
import ArrowIconLeft from "@material-ui/icons/ArrowBackIos";
import ArrowIconRight from "@material-ui/icons/ArrowForwardIosOutlined";
function Home() {
    const [current, setCurrent] = useState(0);
    const length = slideShow.length;

    function nextSlide() {
        setCurrent(current === length - 1? 0 : current + 1);
    }

    function prevSlide() {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    return(
        <div className="home">
            <div className="top">
                <div className="left">
                    <h1>Professional Makeup Artist</h1>

                    <p>A professional make up artist who's interested in giving ladies the confidence that comes with beauty. We're here to give you the confidence you need to own every event.</p>
                </div>
                <img src={profile} alt="profile"/>
            </div>

            <div className="mid">
                <div className="illustrations">
                    <div className="illustration">
                        <img src={makeup} alt=""/>
                        <div>
                        <h2>Face Transformation</h2>
                        <p>We offer bridal makeup, birthdays, nude makeup, wedding guests e.t.c.</p>
                        </div>
                    </div>
                    <div className="illustration">
                        <img src={face} alt=""/>
                        <div>
                        <h2>Brows Grooming</h2>
                        <p>We offer some of the best services in terms of professional brows grooming.</p>
                        </div>
                    </div>
                    <div className="illustration">
                        <img src={salon} alt=""/>
                        <div>
                        <h2>Gele Tying</h2>
                        <p>We offer some of the best services in terms of tying geles.</p>
                        </div>
                    </div>
                    <div className="illustration">
                        <img src={brush} alt=""/>
                        <div>
                        <h2>Makeup Tutorials</h2>
                        <p>We teach face transformations, brows grooming and gele tying to interested customers.</p>
                        </div>
                    </div>
                    <div className="illustration">
                        <img src={makeup} alt=""/>
                        <div>
                        <h2>Sales of Beauty Products</h2>
                        <p>We sell some of the top rated, NAFDAC registered beauty products which will leave your skin looking more beautiful than ever after use.</p>
                        </div>
                    </div>
                </div>
                <img src={bg2} alt="" className="image"/>
                <div className="texts">
                    <div className="textstop">
                    <h2>All Eyes Are On You</h2>
                    <p>Own every event, flaunt every look and slay every occasion. Lois Glam will leave you amazed and in awe after an appointment with us. Lois Glam is currently available to render services in certain places in Kaduna and Enugu.</p>
                    </div>
                    <Link to="/contact">Make an appointment</Link>
                </div>
            </div>

            <img src={wide} alt="" className="wide"/>

            <div className="works">
                <div className="texts">
                    <h2>My works</h2>
                    <p>Here's a little display some of the many things I do.</p>
                    <Link to='/work'>My Works</Link>
                </div>
                
                <div className="slideshow-container">
                    {slideShow.map((items, id) => {
                        return (
                            <div className={id === current ? 'slide active' : 'slide'} key={id}>
                                {id === current && <img src={items.img} alt="" />}
                            </div>
                        )
                    })}
                    <div className="buttons">
                    <ArrowIconLeft className="left-arrow" onClick={prevSlide} />
                    <ArrowIconRight className="right-arrow" onClick={nextSlide} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home;