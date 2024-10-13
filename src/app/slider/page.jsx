// components/CustomSlider.js
import Slider from "react-slick";
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion"; // Import motion from framer-motion
import truck_one from "../../asset/image/truck_one.jpg";
import truck_two from "../../asset/image/truck_two.jpg";
import truck_three from "../../asset/image/truck_three.jpg";
import truck_six from "../../asset/image/transportation-1495618_1280.jpg";

// Custom Previous Arrow
const PreviousArrow = ({ className, style, onClick }) => (
    <div
        className={`${className} absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer z-10`}
        style={{
            ...style,
            width: "50px",
            height: "50px",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}
        onClick={onClick}
    >
        {/* <span className="text-black text-lg"><FaArrowLeft /></span> */}
    </div>
);

const NextArrow = ({ className, style, onClick }) => (
    <div
        className={`${className} absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer z-10`}
        style={{
            ...style,
            width: "50px",
            height: "50px",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}
        onClick={onClick}
    >
        {/* <span className="text-black text-lg"><FaArrowRight /></span> */}
    </div>
);

const CustomSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <NextArrow />,
        prevArrow: <PreviousArrow />,
        appendDots: (dots) => (
            <div>
                <ul style={{ margin: "0px" }}>{dots}</ul>
            </div>
        ),
        customPaging: (i) => (
            <div
                style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: "white",
                }}
            />
        ),
    };

    return (
        <div className="mx-auto my-1 py-2 bg-black shadow-lg opacity-90 relative">
            <Slider {...settings}>
                {[
                    { src: truck_six, title: "Soft and Attractive Slider - Slide 1", description: "Lorem ipsum dolor sit amet consectetur adipisicing." },
                    { src: truck_three, title: "Soft and Attractive Slider - Slide 2", description: "Lorem ipsum dolor sit amet consectetur adipisicing." },
                    { src: truck_one, title: "Soft and Attractive Slider - Slide 3", description: "Lorem ipsum dolor sit amet consectetur adipisicing." }
                ].map((slide, index) => (
                    <div className="p-1 relative" key={index}>
                        <Image
                            className="w-full h-[500px] object-cover rounded-lg"
                            src={slide.src}
                            alt={`Slide ${index + 1}`}
                        />
                        <motion.div
                            className="absolute top-64 left-1/2 transform -translate-x-1/2 text-center"
                            initial={{ opacity: 0, translateY: 20 }} // Initial state
                            whileInView={{ opacity: 1, translateY: 0 }} // State when in view
                            transition={{ duration: 0.5 }} // Transition duration
                        >
                            <p className="text-4xl font-[Butler] text-white">{slide.title}</p>
                            <p className="text-white text-2xl">{slide.description}</p>
                        </motion.div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CustomSlider;
