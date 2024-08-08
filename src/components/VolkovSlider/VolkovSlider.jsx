/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import Zoom from 'react-medium-image-zoom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-medium-image-zoom/dist/styles.css';


const VolkovSlider = ({ data }) => {

    React.useEffect(() => {
        document.querySelector("body").classList.add("index3");
    }, []);


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        zoom: true,



    };
    return (
        <Slider {...settings}>
            {data.photos.map(photoData => (
                <div>
                    <Zoom>
                        <img
                            alt=""
                            //    src="/assets/img/portfolio/project2/2.jpg"
                            src={photoData.image}
                            style={{ width: '100%' }}
                        />
                    </Zoom>
                </div>

            ))}

        </Slider>
    );
};

export default VolkovSlider;
