import React from 'react';
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    RedditShareButton,
    RedditIcon,
    LinkedinShareButton,
    LinkedinIcon
} from "react-share";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>1 rue Pajol 75018, Paris</p>
                        </div>
                        <div className="d-flex">
                            <a href="#">+ 33 7 55 43 40 40</a>
                        </div>
                        <div className="d-flex">
                            <p>emarh-code7986@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a href="#" className="footer-nav">Home</a>
                                <br />
                                <a href="#" className="footer-nav">About me</a>
                                <br />
                                <a href="#" className="footer-nav">Services</a>
                            </div>

                            <div className="col">
                                <a href="#" className="footer-nav">Experience</a>
                                <br />
                                <a href="#" className="footer-nav">Portfolio</a>
                                <br />
                                <a href="#" className="footer-nav">Contacts</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton url={"http://www.youtube.com"}
                                                 quote={"FullStack Developer"}
                                                 hashtag="#javascript">
                                <FacebookIcon className="mx-3" size={36} />
                            </FacebookShareButton>

                            <TwitterShareButton url={"http://www.youtube.com"}
                                                quote={"FullStack Developer"}
                                                hashtag="#javascript">
                                <TwitterIcon className="mx-3" size={36} />
                            </TwitterShareButton>

                            <RedditShareButton url={"http://www.youtube.com"}
                                               quote={"FullStack Developer"}
                                               hashtag="#javascript">
                                <RedditIcon className="mx-3" size={36} />
                            </RedditShareButton>

                            <LinkedinShareButton url={"http://www.youtube.com"}
                                             quote={"FullStack Developer"}
                                             hashtag="#javascript">
                                <LinkedinIcon className="mx-3" size={36} />
                            </LinkedinShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbbs;New horizon | All rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
