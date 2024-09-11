import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface CarouselProps {
    images: { src: string; alt: string; objectPosition: string }[];
    duration: number;
}

const Carousel: React.FC<CarouselProps> = ({ images, duration }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, duration);

        return () => clearInterval(interval);
    }, [images.length, duration]);

    const variants = {
        enter: {
            opacity: 0,
        },
        center: {
            opacity: 1,
        },
        exit: {
            opacity: 0,
        },
    };

    return (
        <div className="relative w-full h-full overflow-hidden z-0">
            <AnimatePresence initial={false}>
                {images.map((image, index) => (
                    index === selectedIndex && (
                        <motion.div
                            key={index}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 1 }}
                            className="absolute inset-0 w-full h-screen"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                layout="fill"
                                objectFit="cover"
                                objectPosition={image.objectPosition}

                            />
                        </motion.div>
                    )
                ))}
            </AnimatePresence>
            <ul className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                {images.map((_, index) => (
                    <li
                        key={index}
                        className={`relative w-16 h-1 rounded-full bg-white/40 cursor-pointer ${index === selectedIndex ? 'bg-white' : ''}`}
                        onClick={() => setSelectedIndex(index)}
                        role="button"
                        tabIndex={0}
                        title={`Slide ${index + 1}`}
                        aria-label={`Slide ${index + 1}`}
                    >
                        {index === selectedIndex && (
                            <div
                                className="absolute top-0 left-0 h-full bg-white animate-fill"
                                style={{ animationDuration: `${duration}ms` }}
                            />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Carousel;