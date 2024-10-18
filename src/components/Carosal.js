import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import slide1 from '../assets/slide1.svg';
import slide2 from '../assets/slide2.svg';
import slide3 from '../assets/slide3.svg';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';
function Carousel() {
    const data = [
        {
            img: slide1,
            header: "Latest News & Updates",
            text: "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus."
        },
        {
            img: slide2,
            header: "Latest News & Updates",
            text: "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus."
        },
        {
            img: slide3,
            header: "Latest News & Updates",
            text: "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus."
        }
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1); // For controlling slide direction
    // Go to next slide
    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };
    // Go to previous slide
    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    };
    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 6000);
        return () => clearInterval(slideInterval);
    }, []);
    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        },
        exit: (direction) => ({
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            transition: {
                duration: 0.000001
            }
        })
    };
    return (_jsxs("div", { className: "rounded-md relative w-full overflow-hidden", children: [_jsx(AnimatePresence, { initial: false, custom: direction, children: _jsx(motion.img, { src: data[currentIndex].img, custom: direction, variants: variants, initial: "enter", animate: "center", exit: "exit", className: "rounded w-full", alt: data[currentIndex].header }, currentIndex) }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" }), _jsxs("div", { className: "absolute bottom-7 left-[2rem] text-white z-10", children: [_jsx("h3", { className: "mb-3 text-lg font-semibold", children: data[currentIndex].header }), _jsx("p", { className: "text-sm", children: data[currentIndex].text })] }), _jsxs("div", { className: "flex justify-between absolute top-1/2 w-full px-4 transform -translate-y-1/2 z-10", children: [_jsx("button", { onClick: prevSlide, className: "bg-white text-black p-1 rounded-full shadow-lg", children: _jsx(NavigateBefore, {}) }), _jsx("button", { onClick: nextSlide, className: "bg-white text-black p-1 rounded-full shadow-lg", children: _jsx(NavigateNext, {}) })] }), _jsx("div", { className: "absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10", children: data.map((_, index) => (_jsx("div", { onClick: () => {
                        setDirection(index > currentIndex ? 1 : -1);
                        setCurrentIndex(index);
                    }, className: `cursor-pointer w-4 h-[0.4rem] rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}` }, index))) })] }));
}
export default Carousel;
