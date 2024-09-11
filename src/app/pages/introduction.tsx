import { motion } from "framer-motion";
import FigureImage from "@/components/FigureImage";


const Introduction = () => {


    return (
        <motion.div
            key="introduction"
            initial={{ opacity: 0, width: '100%', background: 'black', backgroundPosition: 'calc(100% - 50%)', }}
            animate={{
                opacity: 1,
                background: 'linear-gradient(to bottom, #666666 0%, #000000 87%)',
                backgroundSize: 'cover',
                backgroundPosition: 'calc(100% - 54%)',
                backgroundRepeat: 'no-repeat',
                transition: { duration: 4, backgroundPosition: { duration: 7 } }
            }}
            exit={{ opacity: 0, transition: { duration: 2 } }}
            className="flex flex-col items-center justify-center h-screen px-10 py-6"
        >
            <motion.div
                initial={{ opacity: 0, scale: 1, rotate: -5 }}
                animate={{
                    opacity: 1,
                    scale: 1.2,
                    rotate: 5,
                    transition: {
                        opacity: { delay: 2, duration: 2, ease: "easeInOut" },
                        rotate: { delay: 2, duration: 25, ease: "easeInOut" },
                        scale: { delay: 2, duration: 25, ease: "easeInOut" }
                    }
                }}
                className="animated-color flex flex-col items-center justify-center h-full w-full bg-outline-flowers bg-cover bg-center absolute z-0"
            />

            <motion.img
                src="/pea-love.svg"
                alt="Outline Flowers"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 3, duration: 1 } }}
                className="h-[80px] w-[80px]"
                style={{ filter: 'drop-shadow(0 4px 6px #FFEC9E)' }}
            />
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 4, duration: 1 } }}
                className="text-[2.6rem] text-gold font-amore font-medium leading-none mt-12"
            >
                We Getting Married
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 5, duration: 1 } }}
                className="text-white text-center text-[0.7rem] font-light"
            >
                Atas rahmat Allah SWT, dua hati yang telah dipertemukan dalam cinta dan kesetiaan, kini bersatu dalam ikatan suci pernikahan. Kami memohon doa restu agar Allah SWT selalu melimpahkan berkah dan rahmat-Nya dalam setiap langkah kami menuju Jannah-Nya.
            </motion.p>
            <div className="flex flex-col items-center justify-center w-full gap-6 mt-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 6, duration: 1 } }}
                    className="flex items-center justify-start gap-6 w-full "
                >
                    <FigureImage
                        image="/images/groom.jpg" alt="Outline Flowers" />
                    <motion.div className="flex flex-col justify-center">
                        <motion.h1 className="text-gold text-center text-[1.7rem] font-hughIsLife"> &quot;Muhamad Hajar S.H &quot;</motion.h1>
                        <motion.img src="/line.svg" className="w-full" />
                        <motion.p className="text-white text-xs italic mt-2">Putra dari kedua <br />Bapak Munawar & Ibu Sanipah</motion.p>
                    </motion.div>
                </motion.div>
                <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 7, duration: 1 } }}
                    className="text-white font-amore text-center mt-5 text-xl"
                >
                    Dengan penuh cinta dan kasih sayang yang Allah anugerahkan,
                </motion.h3>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 8, duration: 1 } }}
                    className="flex items-center justify-start gap-6 w-full "
                >
                    <motion.div className="flex flex-col justify-center">
                        <motion.h1 className="text-gold text-center text-[1.65rem]  font-hughIsLife">&quot;Yusti Martena A.A, S.Si, S.Pd&quot;</motion.h1>
                        <motion.img src="/line.svg" className="w-full" />
                        <motion.p className="text-white text-xs italic mt-2">Putri dari kedua <br />Bapak Nurrohmani As, SPd. MM & Ibu Sri Rahayu, S.Pd</motion.p>
                    </motion.div>
                    <FigureImage image="/images/bride.jpg" alt="Outline Flowers" />
                </motion.div>

            </div>
        </motion.div >
    );
};

export default Introduction;


{/* <motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1, transition: { delay: 4, duration: 1 } }}
className="absolute left-5 top-40 flex flex-col items-center justify-center drop-shadow-sm"
>   <p className="text-xs text-white text-center">Mempelai Pria</p>
<p className="text-4xl font-hughIsLife font-medium text-white mb-3 text-shadow-gold">&quot; Muhammad Hajar, S.H &quot;</p>
<p className="text-xs text-white text-center">Putra dari kedua <br />Bapak Munawar & Ibu Sanipah</p>
<p className="text-xs text-white text-center">Sidoarjo</p>
</motion.div>
<motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1, transition: { delay: 4, duration: 1 } }}
className="absolute right-5 bottom-20 flex flex-col items-center justify-center"
>
<p className="text-xs text-white text-center">Mempelai Wanita</p>
<p className="text-4xl font-hughIsLife text-white mb-3 text-shadow-gold">&quot; Yusti Martena Afit Anova, S,Si, S.Pd &quot;</p>
<p className="text-xs text-white font-medium text-center">Putri dari kedua <br />Bapak Nurrohmani As, SPd. MM & Ibu Sri Rahayu, S.Pd</p>
<p className="text-xs text-white font-medium text-center">Ponorogo</p>
</motion.div> */}