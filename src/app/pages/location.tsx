import { motion } from 'framer-motion';
import React from 'react';


const Location = () => {


    return (
        <motion.div
            key="introduction"
            initial={{ opacity: 0, position: 'absolute', width: '100%', background: 'black', backgroundPosition: 'calc(100% - 50%)' }}
            animate={{
                opacity: 1,
                background: 'linear-gradient(to bottom, #666666 0%, #000000 87%)',
                backgroundSize: 'cover',
                backgroundPosition: 'calc(100% - 54%)',
                backgroundRepeat: 'no-repeat',
                transition: { duration: 2, backgroundPosition: { duration: 2 } }
            }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            className="flex flex-col items-center h-screen px-10 py-6 gap-5"
        >
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 2, duration: 1 } }}
                className="text-6xl text-gold font-hughIsLife font-medium leading-none"
            >
                Agenda
            </motion.h1>

            <div className="flex flex-col justify-between w-full h-[70%] mt-20">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 3, duration: 1 } }}
                    className="flex items-center justify-center gap-6 w-full"
                >
                    <motion.img
                        src="/outline-circle-flowers.svg"
                        className="w-[280px] h-[280px] rounded-full absolute z-0"
                        initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                        animate={{ opacity: 1, scale: 1, rotate: 5, transition: { delay: 4, duration: 1 } }}
                    />
                    <motion.div
                        className="flex flex-col justify-center text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0, transition: { delay: 5, duration: 1 } }}
                    >
                        <motion.p
                            className="text-white text-[5.7rem] leading-none font-amore m-0 p-0"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0, transition: { delay: 6, duration: 1 } }}
                        >
                            Akad
                        </motion.p>
                        <motion.p
                            className="text-gold text-xs -mt-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0, transition: { delay: 7, duration: 1 } }}
                        >
                            Sabtu, 12 September 2024 08.00 WIB
                        </motion.p>
                        <motion.hr
                            className="w-full bg-gold mx-auto my-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0, transition: { delay: 8, duration: 1 } }}
                        />
                        <motion.p
                            className="text-white text-xs"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0, transition: { delay: 9, duration: 1 } }}
                        >
                            Kediaman Mempelai Wanita
                        </motion.p>
                        <motion.p
                            className="text-gold text-xs"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0, transition: { delay: 10, duration: 1 } }}
                        >
                            Dusun Nambang, Wringginanom, Kec. Sambit, Kab. Ponorogo
                        </motion.p>
                    </motion.div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 3, duration: 1 } }}
                    className="flex items-center justify-center gap-6 w-full"
                >
                    <motion.img
                        src="/outline-circle-flowers.svg"
                        className="w-[280px] h-[280px] rounded-full absolute z-0"
                        initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                        animate={{ opacity: 1, scale: 1, rotate: 5, transition: { delay: 4, duration: 1 } }}
                    />
                    <motion.div
                        className="flex flex-col justify-center text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0, transition: { delay: 5, duration: 1 } }}
                    >
                        <motion.p
                            className="text-white text-[5.7rem] leading-none font-amore m-0 p-0"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0, transition: { delay: 6, duration: 1 } }}
                        >
                            Resepsi
                        </motion.p>
                        <motion.p
                            className="text-gold text-xs -mt-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0, transition: { delay: 7, duration: 1 } }}
                        >
                            Sabtu, 12 September 2024 08.00 WIB
                        </motion.p>
                        <motion.hr
                            className="w-full bg-gold mx-auto my-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0, transition: { delay: 8, duration: 1 } }}
                        />
                        <motion.p
                            className="text-white text-xs"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0, transition: { delay: 9, duration: 1 } }}
                        >
                            Kediaman Mempelai Pria
                        </motion.p>
                        <motion.p
                            className="text-gold text-xs"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0, transition: { delay: 10, duration: 1 } }}
                        >
                            Dusun Nambang, Wringginanom, Kec. Sambit, Kab. Ponorogo
                        </motion.p>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default Location;