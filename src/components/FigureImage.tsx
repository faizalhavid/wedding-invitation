import { motion } from "framer-motion";

const FigureImage = ({ image, alt, ...props }: { image: string; alt: string; }) => (
    <motion.img
        src={image}
        alt={alt}
        className="p-1 bg-white w-[85px]"
        style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)' }}
        {...props}
    />
);

export default FigureImage;