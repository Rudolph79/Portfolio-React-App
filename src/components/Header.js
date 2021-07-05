import React from 'react';
import ReactTyped from "react-typed";
import { Link } from 'react-scroll';

const Header = () => {
    return (
        <div id="home" className="header-wraper">
            <div className="main-info">
                <h1>Web development and websites promotions</h1>
                <ReactTyped
                    className="typed-text"
                    strings={[
                        "Front End Developer : ", "HTML 5,", "CSS 3,", "JavaScript,", "ES6, 7 and 8", "and jQuery...",
                        "Back End Developer : ", "PHP 5 and 7,", "Java 8,", "Python,", "NodeJS...",
                        "Frameworks : ", "Symfony 2,3,4 and 5,", "Angular 7 and 8,", "VueJS 2,", " and React JS...",
                        "Mobile Developer : ", "React Native, ", "Ionic, ", "and Flutter...",
                        "Technologies : ", "AWS, ", "GitHub", "GitLab", "Jenkins", "Docker ...",
                        "Thanks ... and restart"
                    ]}
                    typeSpeed={30}
                    backSpeed={10}
                    loop
                />
                <Link smoth={true} to="contact" offset={-110} className="btn-main-offer">
                    Contact Me
                </Link>
            </div>
        </div>
    );
}

export default Header;
