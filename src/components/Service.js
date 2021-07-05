import React from 'react';
import { faDesktop, faMobile, faAtlas, faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Services = () => {
    return (
        <div id="services" className="services">
            <h1 className="py-5">My Services</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
                            <h3>Front Developer</h3>
                            <p>I develop front website for companies or individual project. Everything
                            for the design or the effects on the website.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faAt} size="2x" /></div>
                            <h3>Back Developer</h3>
                            <p>I develop API for web applications. API in NodeJS, Symfony (API Platform)
                            or Python.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faAtlas} size="2x" /></div>
                            <h3>Full Stack Developer</h3>
                            <p>I'm Full Stack Developer. So I develop website, web application,
                                mobile application and Software.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faMobile} size="2x" /></div>
                            <h3>Mobile Developer</h3>
                            <p>I develop application mobile for iOS, Android and Windows Phone with
                            React Native, Ionic and Flutter.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
