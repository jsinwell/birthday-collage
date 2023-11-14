import React, { useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './ImageCollage.css';

function ImageCollage() {
    const handleDragStart = (e) => e.preventDefault();

    useEffect(() => {
        // Trigger a resize event after a slight delay
        const timer = setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 100);

        // Clean up the timer when the component is unmounted
        return () => clearTimeout(timer);
    }, []);

    const items = [
        <img className="carousel-img" src={process.env.PUBLIC_URL + '/IMG_0151.jpeg'} onDragStart={handleDragStart} role="presentation" />,
        <img className="carousel-img" src={process.env.PUBLIC_URL + '/IMG_0481.jpeg'} onDragStart={handleDragStart} role="presentation" />,
        <img className="carousel-img" src={process.env.PUBLIC_URL + '/IMG_0493.jpeg'} onDragStart={handleDragStart} role="presentation" />,
        <img className="carousel-img" src={process.env.PUBLIC_URL + '/IMG_0501.jpeg'} onDragStart={handleDragStart} role="presentation" />,
        <img className="carousel-img" src={process.env.PUBLIC_URL + '/IMG_0561.jpg'} onDragStart={handleDragStart} role="presentation" />,
        <img className="carousel-img" src={process.env.PUBLIC_URL + '/IMG_0590.jpeg'} onDragStart={handleDragStart} role="presentation" />,
        <img className="carousel-img" src={process.env.PUBLIC_URL + '/IMG_0699.jpg'} onDragStart={handleDragStart} role="presentation" />,
        <img className="carousel-img" src={process.env.PUBLIC_URL + '/IMG_0712.jpg'} onDragStart={handleDragStart} role="presentation" />,
        <img className="carousel-img" src={process.env.PUBLIC_URL + '/IMG_0752.jpeg'} onDragStart={handleDragStart} role="presentation" />,
        <img className="carousel-img" src={process.env.PUBLIC_URL + '/IMG_0753.jpeg'} onDragStart={handleDragStart} role="presentation" />,
        <img className="carousel-img" src={process.env.PUBLIC_URL + '/IMG_0804.jpg'} onDragStart={handleDragStart} role="presentation" />,
        <img className="carousel-img" src={process.env.PUBLIC_URL + '/IMG_1398.jpeg'} onDragStart={handleDragStart} role="presentation" />,
        <img className="carousel-img" src={process.env.PUBLIC_URL + '/IMG_1400.jpeg'} onDragStart={handleDragStart} role="presentation" />,
        <img className="carousel-img" src={process.env.PUBLIC_URL + '/IMG_1779.jpg'} onDragStart={handleDragStart} role="presentation" />,
        <img className="carousel-img" src={process.env.PUBLIC_URL + '/IMG_1813.jpeg'} onDragStart={handleDragStart} role="presentation" />,
        <img className="carousel-img" src={process.env.PUBLIC_URL + '/IMG_2254.jpeg'} onDragStart={handleDragStart} role="presentation" />,
        <img className="carousel-img" src={process.env.PUBLIC_URL + '/IMG_2296.jpeg'} onDragStart={handleDragStart} role="presentation" />,
        <img className="carousel-img" src={process.env.PUBLIC_URL + '/IMG_2345.jpeg'} onDragStart={handleDragStart} role="presentation" />,
        <img className="carousel-img" src={process.env.PUBLIC_URL + '/IMG_2371.jpeg'} onDragStart={handleDragStart} role="presentation" />,
        <img className="carousel-img" src={process.env.PUBLIC_URL + '/IMG_2773.jpg'} onDragStart={handleDragStart} role="presentation" />,
        <img className="carousel-img" src={process.env.PUBLIC_URL + '/IMG_2975.jpeg'} onDragStart={handleDragStart} role="presentation" />,
        <img className="carousel-img" src={process.env.PUBLIC_URL + '/IMG_3079.jpg'} onDragStart={handleDragStart} role="presentation" />,
        <img className="carousel-img" src={process.env.PUBLIC_URL + '/IMG_3578.jpg'} onDragStart={handleDragStart} role="presentation" />,
        <img className="carousel-img" src={process.env.PUBLIC_URL + '/IMG_3659.jpg'} onDragStart={handleDragStart} role="presentation" />,
        <img className="carousel-img" src={process.env.PUBLIC_URL + '/IMG_3661.jpg'} onDragStart={handleDragStart} role="presentation" />,
        <img className="carousel-img" src={process.env.PUBLIC_URL + '/IMG_4130.jpg'} onDragStart={handleDragStart} role="presentation" />,
        <img className="carousel-img" src={process.env.PUBLIC_URL + '/IMG_4439.jpeg'} onDragStart={handleDragStart} role="presentation" />,
        <img className="carousel-img" src={process.env.PUBLIC_URL + '/IMG_4659.jpg'} onDragStart={handleDragStart} role="presentation" />,
        <img className="carousel-img" src={process.env.PUBLIC_URL + '/IMG_5484.jpg'} onDragStart={handleDragStart} role="presentation" />,
        <img className="carousel-img" src={process.env.PUBLIC_URL + '/IMG_4124.png'} onDragStart={handleDragStart} role="presentation" />,
        <img className="carousel-img" src={process.env.PUBLIC_URL + '/IMG_4238.jpg'} onDragStart={handleDragStart} role="presentation" />,
        <img className="carousel-img" src={process.env.PUBLIC_URL + '/IMG_4245.jpg'} onDragStart={handleDragStart} role="presentation" />,
        <img className="carousel-img" src={process.env.PUBLIC_URL + '/IMG_4394.jpg'} onDragStart={handleDragStart} role="presentation" />,
        <img className="carousel-img" src={process.env.PUBLIC_URL + '/IMG_4402.jpeg'} onDragStart={handleDragStart} role="presentation" />,
        <img className="carousel-img" src={process.env.PUBLIC_URL + '/IMG_4418.jpg'} onDragStart={handleDragStart} role="presentation" />,
        <img className="carousel-img" src={process.env.PUBLIC_URL + '/IMG_4432.jpg'} onDragStart={handleDragStart} role="presentation" />,
        <img className="carousel-img" src={process.env.PUBLIC_URL + '/IMG_4510.jpeg'} onDragStart={handleDragStart} role="presentation" />,
        <img className="carousel-img" src={process.env.PUBLIC_URL + '/IMG_4604.jpg'} onDragStart={handleDragStart} role="presentation" />,
        <img className="carousel-img" src={process.env.PUBLIC_URL + '/IMG_4648.jpeg'} onDragStart={handleDragStart} role="presentation" />,
        <img className="carousel-img" src={process.env.PUBLIC_URL + '/IMG_4654.jpeg'} onDragStart={handleDragStart} role="presentation" />,
        <img className="carousel-img" src={process.env.PUBLIC_URL + '/IMG_7215.jpg'} onDragStart={handleDragStart} role="presentation" />,

            
    ];

    return (
        <AliceCarousel
        autoWidth
        mouseTracking
        items={items}
        responsive={{
            0: {
                items: 1
            },
            1024: {
                items: 3
            }
        }}
        controlsStrategy="responsive"
    />
    
    );
}

export default ImageCollage;
