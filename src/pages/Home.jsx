
import React from 'react';
import NurHeader from '../components/NurHeader';
import NurFooter from '../components/NurFooter';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css'; 

const Home= () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    };

    return (
        <div className="home-page">
            <NurHeader/>
            <Slider {...settings}>
                <div className="image-slide">
                    <img src="/images/quran1.jpg" alt="Quran 1" />
                    <div className="text-overlay">
                        <p>"[This is] a blessed Book which We have revealed to you, [O Muhammad], 
                            that they might reflect upon its verses and that those of understanding would be reminded."(38:29).</p>
                    </div>
                </div>
                <div className="image-slide">
                    <img src="/images/quran2.jpg" alt="Quran 2" />
                    <div className="text-overlay">
                        <p>“and We have revealed the Book to you explaining clearly everything."(16:89).</p>
                    </div>
                </div>
                <div className="image-slide">
                    <img src="/images/quran3.jpg" alt="Quran 3" />
                    <div className="text-overlay">
                        <p></p>
                    </div>
                </div>
            </Slider>
            <div className="company-description">
               
                <p>
                    We are a leading company in our industry, committed to providing quality services and ensuring customer satisfaction. Our team of professionals is dedicated to delivering exceptional results and building lasting relationships with our clients.
                </p>
                <p>
                    Our mission is to innovate and continuously improve our services to meet the evolving needs of our customers. We value integrity, excellence, and teamwork, and we strive to make a positive impact in our community.
                </p>
            </div>
            <NurFooter/>
        </div>
    );
};

export default Home;
