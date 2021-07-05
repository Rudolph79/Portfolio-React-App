import React from 'react';
import author from '../harry.jpg';

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="profile-wrap">
                        <img className="profile-img" src={author} alt="Ariel Rudolph" />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading mb-">About me</h1>
                    <p>
                        I'm <strong>Ariel Rudolph Harry EBANG MEZUI ME MVE</strong>,<br />
                        I was born in Gabon, in <em>Libreville</em>.<br/>
                        I have always been passionate about mathematics and the physical
                        sciences. My primary schools were <strong>Gros Bouquet 1</strong>
                        (<em>Trois quartier</em>) and <strong>Sainte Marie</strong>
                        (<em>Affaires Etrangères</em>).
                    </p>
                    <p>
                        My secondary school was <strong>Sainte Marie</strong> and my high School was
                        <strong> Bessieux High School</strong> (<em>Boulevard Bessieux</em>).<br />
                        After my baccalaureate I went to the <strong>CPGE</strong> where I did 3 years
                        because I did 5/2.
                    </p>
                    <p>
                        The first engineering school was <strong>ISEP</strong>(<em>in Paris </em>
                        6<sup>th</sup> Area) and my second was <strong>Telecom ParisTech</strong> (<em>in
                        Paris</em>) 13<sup>rd</sup> Area.<br />
                        Following my studies, I became a Telecom and Signal Processing Engineer, then
                        a software Engineer.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
