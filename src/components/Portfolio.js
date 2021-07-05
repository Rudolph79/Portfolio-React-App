import React from 'react';
import Connexion from '../images/Connexion.png';
import Covid19 from '../images/Covid-19.png';
import EasyMPC from '../images/EasyMPC.png';
import EmarhFreelance from '../images/EMARHFreelance.png';
import Hello from '../images/HelloFromParis.png';
import Ecommerce from '../images/React-E-commerce.png';
import ReactMovies from '../images/ReactMovie.png';
import SendInmage from '../images/SendImage.png';
import ToDoList from '../images/ToDoList.png';
import MonstersRolodex from '../images/MonstersRolodex.png';
import "react-popupbox/dist/react-popupbox.css";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';

const Portfolio = () => {
    // EMARH ECOMMERCE
    const emarhCommercePopup = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={Ecommerce} alt={Ecommerce} />
                <p>
                    E-commerce Application to buy some articles for house. You can register
                    and log in. Choose items add them to the cart and pay for them with Stripe.
                    And there is an admin area.<br />
                    Technologies : <strong>MongoDB, Express, React, NodeJS</strong>
                </p>
                <p>
                    <b>GitHub: </b>
                    <a href="#" className="hyper-link" onClick={() =>
                        window.open("https://github.com/Rudolph79/reactreserve")}>
                        https://github.com/Rudolph79/reactreserve
                    </a>
                </p>

                <p>
                    <b>Website: </b>
                    <a href="#" className="hyper-link" onClick={() =>
                        window.open("https://emarh-e-commerce-react-reserve.herokuapp.com/")}>
                        https://emarh-e-commerce-react-reserve.herokuapp.com
                    </a>
                </p>

            </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Emarh E-commerce"
                }
            }
        })
    }

    // EMARH FREELANCE
    const emarhFreelancePopup = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={EmarhFreelance} alt={EmarhFreelance} />
                <p>
                    Application for Freelance. With this app you can register and log in. Create
                    customers and assign invoices to them. You have a button to search for customers
                    or invoices with pagination<br />
                    Technologies : <strong>Symfony 4, Api Platform and React.</strong>
                </p>
                <p>
                    <b>GitHub: </b>
                    <a href="#" className="hyper-link" onClick={() =>
                        window.open("https://github.com/Rudolph79/freelance-symfony-reactjs")}>
                        https://github.com/Rudolph79/freelance-symfony-reactjs
                    </a>
                </p>

                <p>
                    <b>Website: </b>
                    <a href="#" className="hyper-link" onClick={() =>
                        window.open("https://symfony-react-freelance.herokuapp.com/#/")}>
                        https://symfony-react-freelance.herokuapp.com
                    </a>
                </p>

            </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Emarh Freelance"
                }
            }
        })
    }

    // COVID-19
    const covid19Popup = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={Covid19} alt={Covid19} />
                <p>
                    Covid-19 has raged around the world and continues to be rife even though
                    we believe all the lights are on the green. It remains a pandemic that must
                    be eradicated.<br />
                    This is an application that shows statistics on the number of sick, cured and
                    dead around the world<br/>
                    Technologies : <strong>React</strong>
                </p>
                <p>
                    <b>GitHub: </b>
                    <a href="#" className="hyper-link" onClick={() =>
                        window.open("https://github.com/Rudolph79/covid-19_heroku")}>
                        https://github.com/Rudolph79/covid-19_heroku
                    </a>
                </p>

                <p>
                    <b>Website: </b>
                    <a href="#" className="hyper-link" onClick={() =>
                        window.open("https://goofy-mirzakhani-d398db.netlify.app/")}>
                        https://goofy-mirzakhani-d398db.netlify.app
                    </a>
                </p>

            </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Covid-19 Application"
                }
            }
        })
    }


    // HELLO FROM PARIS
    const helloFromParisPopup = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={Hello} alt={Hello} />
                <p>
                    Just a Hello from Paris with the time and the year. I love PSG (Paris-Saint-Germain)
                    football Team. Paris Go head. Paris is moving forward<br />
                    Technologies : <strong>Symfony 4</strong>
                </p>
                <p>
                    <b>GitHub: </b>
                    <a href="#" className="hyper-link" onClick={() =>
                        window.open("https://github.com/Rudolph79?tab=repositories")}>
                        Pas encore disponible
                    </a>
                </p>

                <p>
                    <b>Website: </b>
                    <a href="#" className="hyper-link" onClick={() =>
                        window.open("https://hello-app-93793.herokuapp.com/")}>
                        https://hello-app-93793.herokuapp.com
                    </a>
                </p>

            </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Say Hello"
                }
            }
        })
    }

    // TODO_LIST
    const todoListPopup = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={ToDoList} alt={ToDoList} />
                <p>
                    Today we sometimes want several things in the day but the difference
                    between what is planned to be done during the day and what is achieved
                    there is a lot of difference. The first cause is forgetting, hence a ToDO List.<br />
                    Technologies : <strong>React</strong>
                </p>
                <p>
                    <b>GitHub: </b>
                    <a href="#" className="hyper-link" onClick={() =>
                        window.open("https://github.com/Rudolph79/Todo-List-React")}>
                        https://github.com/Rudolph79/Todo-List-React
                    </a>
                </p>

                <p>
                    <b>Website: </b>
                    <a href="#" className="hyper-link" onClick={() =>
                        window.open("https://rudolph79.github.io/Todo-List-React/")}>
                        https://rudolph79.github.io/Todo-List-React
                    </a>
                </p>

            </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Todo-List"
                }
            }
        })
    }

    // EASY MPC
    const EasyMPCPopup = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={EasyMPC} alt={EasyMPC} />
                <p>
                    EasyMPC, Maths Physics and chemistry for everyone. From the youngest
                    to the most senior. From the first to the last classes.<br />
                    Technologies : <strong>HTML, CSS </strong>and <strong>JavaScript</strong>
                </p>
                <p>
                    <b>GitHub: </b>
                    <a href="#" className="hyper-link" onClick={() =>
                        window.open("https://github.com/Rudolph79?tab=repositories")}>
                        Repo non disponible.
                    </a>
                </p>

                <p>
                    <b>Website: </b>
                    <a href="#" className="hyper-link" onClick={() =>
                        window.open("http://www.easympc.com/")}>
                        http://www.easympc.com
                    </a>
                </p>

            </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Easy MPC"
                },
                fadeIn: true,
                fadeInSpeed: 500
            }
        })
    }

    const popupboxConfigEasyMPC = {
        titleBar: {
            enable: true,
            text: "Easy MPC"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // REACT MOVIES
    const ReactMoviesPopup = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={ReactMovies} alt={ReactMovies} />
                <p>
                    React Movies is a Web Application to search a movie that You want. You can have
                    the title, the description, the revenue, the rate, running time and the budget<br />
                    Technologies : <strong>React</strong>
                </p>
                <p>
                    <b>GitHub: </b>
                    <a href="#" className="hyper-link" onClick={() =>
                        window.open("https://github.com/Rudolph79/react-rmdb-netlify")}>
                        https://github.com/Rudolph79/react-rmdb-netlify
                    </a>
                </p>

                <p>
                    <b>Website: </b>
                    <a href="#" className="hyper-link" onClick={() =>
                        window.open("https://optimistic-pare-7f8df9.netlify.app/")}>
                        https://optimistic-pare-7f8df9.netlify.app
                    </a>
                </p>

            </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "React Movies"
                },
                fadeIn: true,
                fadeInSpeed: 500
            }
        })
    }

    // SEND IMAGE
    const SendImagesPopup = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={SendInmage} alt={SendInmage} />
                <p>
                    If you see a beautiful image, you can share this image to your friends freely.
                    It's fun to share beautiful or funny images. Be free and be cool.<br />
                    Technologies : <strong>NodeJS</strong>
                </p>
                <p>
                    <b>GitHub: </b>
                    <a href="#" className="hyper-link" onClick={() =>
                        window.open("https://github.com/Rudolph79?tab=repositories")}>
                        Repo non disponible.
                    </a>
                </p>

                <p>
                    <b>Website: </b>
                    <a href="#" className="hyper-link" onClick={() =>
                        window.open("https://react-cloudinary-sendgrid.herokuapp.com/")}>
                        https://react-cloudinary-sendgrid.herokuapp.com
                    </a>
                </p>

            </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Send Image"
                },
                fadeIn: true,
                fadeInSpeed: 500
            }
        })

    }

    // CONNEXION
    const ConnexionPopup = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={Connexion} alt={Connexion} />
                <p>
                    This application was just to test how create an NodeJS API and connect
                    to the React front. Test JWT for the token. You can register and login.<br />
                    Technologies : <strong>NodeJS, React</strong>
                </p>
                <p>
                    <b>GitHub: </b>
                    <a href="#" className="hyper-link" onClick={() =>
                        window.open("https://github.com/Rudolph79?tab=repositories")}>
                        Repo non disponible.
                    </a>
                </p>

                <p>
                    <b>Website: </b>
                    <a href="#" className="hyper-link" onClick={() =>
                        window.open("https://obscure-scrubland-98143.herokuapp.com/register")}>
                        https://obscure-scrubland-98143.herokuapp.com/register
                    </a>
                </p>

            </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Connexion with React and NodeJS"
                },
                fadeIn: true,
                fadeInSpeed: 500
            }
        })
    }

    // MONSTERS
    const MonstersPopup = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={MonstersRolodex} alt={MonstersRolodex} />
                <p>
                    A monsters Web Application to use a free API to retrieve data and show with ReactJS.
                    With this application we can search a monster.<br />
                    Technologies : <strong>React</strong>
                </p>
                <p>
                    <b>GitHub: </b>
                    <a href="#" className="hyper-link" onClick={() =>
                        window.open("https://github.com/Rudolph79/monsters-rolodex")}>
                        https://github.com/Rudolph79/monsters-rolodex
                    </a>
                </p>

                <p>
                    <b>Website: </b>
                    <a href="#" className="hyper-link" onClick={() =>
                        window.open("https://rudolph79.github.io/monsters-rolodex")}>
                        https://rudolph79.github.io/monsters-rolodex
                    </a>
                </p>

            </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Introduce Monsters in React"
                },
                fadeIn: true,
                fadeInSpeed: 500
            }
        })
    }


    return (
        <div id="portfolio" className="portfolio-wrapper mt-5">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Portfolio</h1>
                <div className="image-box-wrapper">
                    <div className="row align-items-center">
                        <div className="col col-lg-3 col-md-4 col-sm-12 portfolio-image-box" onClick={emarhCommercePopup}>
                            <img className="portfolio-image" src={Ecommerce} alt={Ecommerce} />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>

                        <div className="col col-lg-3 col-md-4 col-sm-12 portfolio-image-box" onClick={emarhFreelancePopup}>
                            <img className="portfolio-image" src={EmarhFreelance} alt={EmarhFreelance} />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>

                        <div className="col col-lg-3 col-md-4 col-sm-12 portfolio-image-box" onClick={covid19Popup}>
                            <img className="portfolio-image" src={Covid19} alt={Covid19} />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>

                        <div className="col col-lg-3 col-md-4 col-sm-12 portfolio-image-box" onClick={helloFromParisPopup}>
                            <img className="portfolio-image" src={Hello} alt={Hello} />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>

                        <div className="col col-lg-3 col-md-4 col-sm-12 portfolio-image-box" onClick={todoListPopup}>
                            <img className="portfolio-image" src={ToDoList} alt={ToDoList} />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>

                        <div className="col col-lg-3 col-md-4 col-sm-12 portfolio-image-box" onClick={EasyMPCPopup}>
                            <img className="portfolio-image" src={EasyMPC} alt={EasyMPC} />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>

                        <div className="col col-lg-3 col-md-4 col-sm-12 portfolio-image-box" onClick={ReactMoviesPopup}>
                            <img className="portfolio-image" src={ReactMovies} alt={ReactMovies} />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>

                        <div className="col col-lg-3 col-md-4 col-sm-12 portfolio-image-box" onClick={SendImagesPopup}>
                            <img className="portfolio-image" src={SendInmage} alt={SendInmage} />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>

                        <div className="col col-lg-3 col-md-4 col-sm-12 portfolio-image-box" onClick={ConnexionPopup}>
                            <img className="portfolio-image" src={Connexion} alt={Connexion} />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>

                        <div className="col col-lg-3 col-md-4 col-sm-12 portfolio-image-box" onClick={MonstersPopup}>
                            <img className="portfolio-image" src={MonstersRolodex} alt={MonstersRolodex} />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigEasyMPC} />
        </div>
    );
}

export default Portfolio;
