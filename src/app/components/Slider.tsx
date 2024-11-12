"use client";
import { useEffect, useRef, useState } from 'react';

// Define the type for a single slide
interface Slide {
    image: string;
    header: string;
}

// Define the type for the props
interface SliderProps {
    slides: Slide[]; // slides is an array of Slide objects
}

export default function Slider({ slides }: SliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startPosition, setStartPosition] = useState(0);
    const sliderRef = useRef(null);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true);
        setStartPosition(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;
        const currentPosition = e.touches[0].clientX;
        const difference = startPosition - currentPosition;

        if (difference > 50) {
            nextSlide();
            setIsDragging(false);
        } else if (difference < -50) {
            prevSlide();
            setIsDragging(false);
        }
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartPosition(e.clientX);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        const currentPosition = e.clientX;
        const difference = startPosition - currentPosition;

        if (difference > 50) {
            nextSlide();
            setIsDragging(false);
        } else if (difference < -50) {
            prevSlide();
            setIsDragging(false);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 10000); // Change slide every 10 seconds
        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

    return (
        <div
            className="overflow-hidden relative w-full h-auto min-h-[350px] m-0 p-0"
            ref={sliderRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={() => setIsDragging(false)}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`min-w-full flex items-center justify-center relative ${index === currentIndex ? 'active' : ''}`}
                    >
                        <img
                            src={slide.image}
                            alt={slide.header}
                            className="w-full h-full object-cover"
                        />

                        <div className="absolute top-[40%] left-[5%] transform -translate-y-1/2 text-white text-left w-[80%] max-w-[400px] p-5 md:p-8 lg:w-[40%]">
                            <div className="flex flex-col items-center justify-center space-y-4 md:space-y-6">
                                <div className="w-full text-center md:text-left">
                                    <div className="text-white text-xs md:text-sm">DESIGN &amp; FURNITURE</div>
                                    <div className="mt-2 mb-4">
                                        <h1 className="text-xl font-bold text-white md:text-2xl lg:text-3xl xl:text-4xl">
                                            Custom Furniture<br />Installment Plan with 0% Interest for 12 Months
                                        </h1>
                                    </div>
                                    <p className="text-sm text-white md:text-base font-weight-bold">
                                        We offer a wide range of services,<br />
                                        including interior design,<br />
                                        custom furniture production and installation<br />
                                    </p>
                                </div>
                                <div>
                                    <button id="bitrix24-button" className="px-4 py-2 bg-yellow-400 text-white rounded-md hover:bg-yellow-500 text-sm md:text-base">
                                        REQUEST A CALL
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2.5 h-2.5 rounded-full bg-white opacity-50 transition-opacity duration-300 ${index === currentIndex ? 'opacity-100' : ''}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
}