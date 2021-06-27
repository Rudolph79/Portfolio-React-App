import React from 'react';
import ReactTyped from "react-typed";

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Web development and websites promotions</h1>
                <ReactTyped
                    className="typed-text"
                    strings={[
                        "Front Developer : ", "HTML 5,", "CSS 3,", "JavaScript,", "and jQuery...",
                        "Back Developer : ", "PHP 5 & 7,", "Java,", "Python,", "NodeJS...",
                        "Frameworks : ", "Symfony 2,3,4 and 5,", "Angular,", "VueJS,", " and React JS...",
                        "Mobile Development : ", "React Native, ", "Ionic, ", "and Flutter...",
                        "Technologies : ", "AWS, ", "GitHub", "GitLab", "Jenkins", "Docker ..."
                    ]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn-main-offer">
                    Contact Me
                </a>
            </div>
        </div>
    );
}

export default Header;
