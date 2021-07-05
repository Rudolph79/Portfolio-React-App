import React from "react";

const Experience = () => {
    return (
        <div id="experiences" className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1>Experiences</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>March -May 2021 (3 months)</h3>
                        <p>
                            I was in L'OREAL : Full Stack Developer (NodeJS and React JS). The tools were
                            Visual Studio Code Editor, Git and GitHub, Google Cloud, BigQuery ...<br />
                            I created an API and develop a crawler (web scrapping and web crawling).
                        </p>
                    </div>
                </div>
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>Mars 2019 - Mars 2021 (2 ans)</h3>
                        <p>
                            SNCF : Back Developer (Java, Java EE, NodeJS). The main goal of this mission was
                            to develop two applications for the trains and scripts for clean the databases
                        </p>
                    </div>
                </div>
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>December 2018 - March 2019</h3>
                        <p>
                            Led By Her : Develop a web application to allow women who have
                            suffered violence to return to the labor market through entrepreneurship
                            (Symfony 4, Bootstrap 4, HTML, CSS, jQuery).
                        </p>
                    </div>
                </div>
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>Août 2018 - Novembre 2018 (3 mois)</h3>
                        <p>
                            <strong>FUTURAMEDIA</strong> : Develop an application to allow
                            pharmacies to manage the videos themselves on their advertising
                            screens via an application in Symfony 4 (API Platform) and VueJS 2.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
