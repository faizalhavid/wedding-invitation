import Image from "next/image";
import { use, useEffect, useState } from "react";
import { HeartIcon } from "@heroicons/react/16/solid";
import Fade from "@/components/Fade";
import { AnimatePresence, motion } from "framer-motion";
import Carousel from "@/components/Carousel";

export const Invitation = ({ guestName, showInvitation, setShowInvitation }: { guestName: string, showInvitation: boolean, setShowInvitation: (value: boolean) => void }) => {

    const images = [
        { src: '/images/invitation-1.jpg', alt: 'Invitation 1', objectPosition: 'calc(100% - 39%)' },
        { src: '/images/invitation-2.jpg', alt: 'Invitation 2', objectPosition: 'calc(100% - 10%)' },
    ];


    const handleButtonClick = () => {
        setShowInvitation(false);
    };



    return (
        <  motion.div
            key="invitation"
            initial={{ opacity: 0, position: 'absolute', width: '100%' }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            className="flex flex-col items-center justify-center h-screen bg-black"
        >
            <div className="relative w-full h-screen">
                <AnimatePresence>
                    {showInvitation && (
                        <motion.div
                            className="absolute z-20 top-0 left-0 right-0 flex flex-col gap-4 items-center justify-end p-4 bg-gradient-to-b to-black/0 from-black/50"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0, transition: { duration: 2, ease: "easeInOut" } }}
                            exit={{ opacity: 0, y: -20, transition: { duration: 1, ease: "easeInOut" } }}
                        >

                            <motion.p
                                className="text-3xl font-amore text-center text-white my-4 shadow-gold drop-shadow-xl w-full"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut", delay: 2 } }}
                                exit={{ opacity: 0, y: 20, transition: { duration: 1, ease: "easeInOut" } }}
                            >
                                Yth. Bapak / Ibu / Saudara / i <br />
                                <span className="text-gold font-hughIsLife text-4xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>
                                    {guestName}
                                </span>
                            </motion.p>
                        </motion.div>
                    )}
                </AnimatePresence>
                {/* <Carousel images={images} duration={5000} /> */}
                <div className="relative w-full h-full overflow-hidden z-0">
                    <video autoPlay muted loop className="w-full h-full object-cover object-center" style={{ filter: 'brightness(0.5)' }}>
                        <source src="https://videos.pexels.com/video-files/8776998/8776998-uhd_1440_2560_25fps.mp4" type="video/mp4" />

                    </video>
                </div>
                <AnimatePresence>
                    <motion.div
                        key="gradient"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            background: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5), transparent)',
                            transition: { duration: 2, ease: "easeInOut" }
                        }}
                        exit={{ opacity: 0, transition: { duration: 2, ease: "easeInOut" } }}
                        className="absolute inset-0"
                        style={{ zIndex: 1 }}
                    ></motion.div>
                </AnimatePresence>
                <AnimatePresence>
                    {showInvitation ? (
                        <motion.div
                            key="invitation"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { duration: 1, ease: "easeInOut", delay: 2 } }}
                            exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
                            className="absolute z-10 inset-0 flex flex-col gap-4 items-center justify-end p-4 bottom-16 max-w-[84%] mx-auto"
                        >
                            <div className="w-full text-center">
                                <motion.h1
                                    className="font-amore text-gold text-4xl tracking-widest xs:text-3xl"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut", delay: 2.2 } }}
                                >
                                    Undangan Pernikahan
                                </motion.h1>
                                <motion.h3
                                    className="font-amore text-gold text-4xl tracking-widest xs:text-3xl"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut", delay: 2.4 } }}
                                >
                                    12 September 2024
                                </motion.h3>
                            </div>
                            <motion.p
                                className="text-6xl font-hughIsLife text-center text-white w-full"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut", delay: 2.6 } }}
                                style={{ textShadow: '0px 0px 12px rgba(255, 236, 158, 0.5)' }}
                            >
                                &quot;Hajar dan Yusti&quot;
                            </motion.p>
                            <motion.button
                                className="px-8 py-2 mt-5 hover:bg-gold hover:text-black text-gold font-amore text-xl rounded-full shadow-gold drop-shadow-xl w-full border-2 border-gold xs:text-lg"
                                onClick={handleButtonClick}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut", delay: 2.8 } }}
                            >
                                Buka Undangan
                                <HeartIcon className="w-6 h-6 inline-block ml-2" />
                            </motion.button>
                        </motion.div>

                    ) : (
                        <motion.div
                            key="second"
                            initial={{ opacity: 0, backdropFilter: "blur(0px)", background: 'rgba(0, 0, 0, 0)' }}
                            animate={{ opacity: 1, backdropFilter: "blur(1px)", transition: { duration: 3, ease: "easeInOut" }, background: 'rgba(0, 0, 0, 0.6)' }}
                            exit={{ opacity: 0, backdropFilter: "blur(0px)", transition: { duration: 1, ease: "easeInOut" } }}
                            className="absolute z-10 inset-0 flex flex-col gap-4 items-center justify-center p-4 w-full backdrop-blur-xs"
                        >
                            <div className="text-center max-w-[80%] mx-auto">
                                <div className="w-full text-center">
                                    <h1 className="text-5xl font-amore text-gold">We Found Love</h1>
                                </div>
                                <p className="text-lg font-normal text-center text-white my-4 shadow-gold drop-shadow-xl w-full">
                                    وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةًۗ اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
                                </p>
                                <p className="text-xs font-normal text-center text-white my-4 shadow-gold drop-shadow-xl w-full">
                                    Dan di antara tanda-tanda kekuasaan-Nya diciptakan-Nya untukmu pasangan hidup dari jenismu sendiri supaya kamu dapat ketenangan hati dan dijadikannya kasih sayang di antara kamu. Sesungguhnya yang demikian menjadi tanda-tanda kebesaran-Nya bagi orang-orang yang berpikir.
                                    <br /> ( Q.S. Ar-Rum: 21 )
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>


            </div>
        </motion.div>
    );
};