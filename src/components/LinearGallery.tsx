import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';

const LinearGallery = ({ images, direction = 'left' }: { images: string[], direction?: 'left' | 'right' }) => {
    const duplicatedImages = [...images, ...images];
    const controls = useAnimation();

    useEffect(() => {
        const animate = async () => {
            await controls.start({
                x: direction === 'left' ? '-100%' : '100%',
                transition: { duration: 280, ease: 'linear' }
            });
            controls.set({ x: 0 });
            animate();
        };
        const timeoutId = setTimeout(() => {
            animate();
        }, 0);
        return () => clearTimeout(timeoutId);
    }, [controls, direction]);


    return (
        <div className="flex justify-center overflow-hidden">
            <motion.div
                className="grid grid-flow-col gap-4 p-4 w-max"
                animate={controls}
            >
                {duplicatedImages.map((src, index) => (
                    <motion.div
                        key={index}
                        className="relative w-52 h-52 overflow-hidden rounded-lg shadow-lg"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <Image
                            src={src}
                            alt={`Gallery image ${index + 1}`}
                            layout="fill"
                            objectFit="cover"
                            className="hover:scale-105 transition-transform duration-300"
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default LinearGallery;