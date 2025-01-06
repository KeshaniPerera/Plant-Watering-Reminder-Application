import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import slide1 from '../assets/slide1.jpeg';
import slide2 from '../assets/slide2.jpeg';
import slide3 from '../assets/slide3.jpeg';

export const Carousel = () => {
    const slides = [
        {
            id: 1,
            img: slide1,
            text: "Caring for plants is a quiet reminder that the smallest actions—watering, nurturing, and tending—can lead to the most beautiful.",
        },
        {
            id: 2,
            img: slide2,
            text: "Each plant tells a story of resilience, thriving silently with just the right care, and teaching us to cherish life’s simplest moments.",
        },
        {
            id: 3,
            img: slide3,
            text: "Surrounding yourself with greenery is more than just decorating your space; it’s creating a living connection to the nature.",
        },
    ];

    return (
        <div
            id="carouselExampleCaptions"
            className="carousel slide min-w-full pl-10 pr-10"
            data-bs-ride="carousel"
        >
            <div className="carousel-indicators">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={index}
                        className={`bg-grey-500 ${index === 0 ? 'active' : ''}`}
                        aria-current={index === 0 ? 'true' : undefined}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>
            <div className="carousel-inner w-full ">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`carousel-item ${index === 0 ? 'active' : ''}`}
                    >
                        <div className="rounded-lg d-flex align-items-center bg-lightGreen">
                            <img
                                src={slide.img}
                                className="rounded w-48 object-cover h-24 "
                                alt={`Slide ${slide.id}`}
                            />
                            <div className="flex justify-center items-center w-full h-full">
                                <p className=" m-4 font-normal font-title  text-xl W-3/4 text-center font-semibold">
                                    {slide.text}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next text-grey-500"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};
