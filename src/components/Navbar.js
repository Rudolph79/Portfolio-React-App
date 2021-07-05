import React from 'react';
import logo from '../logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
                    {/* <span className="navbar-toggler-icon"></span> */}
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <Link smoth={true} to="home" offset={-110} className="nav-link" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link smoth={true} to="about" offset={-110} className="nav-link" href="#">About me</Link>
                        </li>
                        <li className="nav-item">
                            <Link smoth={true} to="services" offset={-110} className="nav-link" href="#">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link smoth={true} to="experiences" offset={-110} className="nav-link" href="#">Experiences</Link>
                        </li>
                        <li className="nav-item">
                            <Link smoth={true} to="portfolio" offset={-110} className="nav-link" href="#">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link smoth={true} to="testimonials" className="nav-link" href="#">Testimonials</Link>
                        </li>
                        <li className="nav-item">
                            <Link smoth={true} to="contact" className="nav-link" href="#">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
