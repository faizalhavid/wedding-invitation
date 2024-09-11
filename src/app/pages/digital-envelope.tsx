import Gallery from "@/components/LinearGallery";
import { motion } from "framer-motion";

const DigitalEnvelope = () => {
    const images = [
        '/images/introduction.jpg',
        '/images/invitation-1.jpg',
        '/images/invitation-2.jpg',
        '/images/calendar.jpg',
        '/images/introduction.jpg',
        '/images/invitation-1.jpg',
        '/images/invitation-2.jpg',
        '/images/calendar.jpg',
        '/images/introduction.jpg',
        '/images/invitation-1.jpg',
        '/images/invitation-2.jpg',
        '/images/calendar.jpg',
        '/images/introduction.jpg',
        '/images/invitation-1.jpg',
        '/images/invitation-2.jpg',
        '/images/calendar.jpg',
    ]
    return (
        <motion.div
            key="digital-envelope"
            initial={{ opacity: 0, position: 'absolute', width: '100%' }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            className="flex flex-col items-center justify-center h-screen bg-black"
        >
            <motion.div
                className="absolute z-10 bg-gradient-to-t from-black/20 via-black/80 to-black/20 h-screen w-full"
                initial={{ backgroundPosition: '0% 0%' }}
                animate={{ backgroundPosition: '100% 100%' }}
                transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
            >
            </motion.div>


            <div className="overflow-x-hidden whitespace-nowrap flex flex-col items-center justify-center absolute z-0">
                <Gallery images={images} direction="right" />
                <Gallery images={images} />
                <Gallery images={images} direction="right" />
            </div>
            <motion.div
                className="flex flex-col items-center justify-center absolute z-20 gap-8 px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
            >
                <motion.h1 className="text-6xl text-gold font-hughIsLife font-medium leading-none mt-5">
                    &quot;Amplop Digital&quot;
                </motion.h1>


                <motion.img
                    src="/images/qr.png"
                    className="w-[180px] rounded-lg"
                />

                <motion.p
                    className="text-xs text-center text-white my-4 shadow-gold drop-shadow-xl w-full max-w-[80%]"
                >
                    Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.
                </motion.p>


            </motion.div>


        </motion.div>
    );
};

export default DigitalEnvelope;