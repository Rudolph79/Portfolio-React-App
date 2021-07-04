import React from 'react';
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// AVATARS IMPORT
import avatar1 from '../images/avatars/avatar-1.png';
import avatar2 from '../images/avatars/avatar-2.png';
import avatar3 from '../images/avatars/avatar-3.png';
import avatar4 from '../images/avatars/avatar-4.png';

const TestimonialsCarousel = () => {
    return (
        <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={3000}
        >
            <>
                <div className="myCarousel">
                    <img src={avatar1} alt="EBANG MEZUI" />
                    <h3>EBANG MEZUI</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                </div>
            </>

            <>
                <div className="myCarousel">
                    <img src={avatar2} alt="ME MVE" />
                    <h3>ME MVE</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                </div>
            </>

            <>
                <div className="myCarousel">
                    <img src={avatar3} alt="Ariel RUDOLPH" />
                    <h3>Ariel RUDOLPH</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                </div>
            </>

            <>
                <div className="myCarousel">
                    <img src={avatar4} alt="Rudolph HARRY" />
                    <h3>Rudolph HARRY</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                </div>
            </>
        </Carousel>
    );
}

export default TestimonialsCarousel;
