import DateCounter from "@/components/DateCounter";
import { motion } from "framer-motion";
import Image from "next/image";


const Calendar = () => {

    const startDateEvent = new Date('2024-12-12T01:00:00Z').toISOString().replace(/-|:|\.\d\d\d/g, '');
    const endDateEvent = new Date('2024-12-12T05:00:00Z').toISOString().replace(/-|:|\.\d\d\d/g, '');

    return (
        <motion.div
            key="calendar"
            initial={{ opacity: 0, position: 'relative', width: '100%' }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            className="flex flex-col items-center h-screen py-5 relative"
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 1, duration: 1 } }}
                className="flex flex-col text-center z-10 mt-10 items-center justify-center"
            >
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: 1.2, duration: 0.8 } }}
                    className="text-6xl font-amore font-medium text-gold "
                >
                    Tanggal Acara
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: 1.4, duration: 0.8 } }}
                    className="text[1rem] tracking-wide font-amore font-medium text-white"
                >
                    Hitung Mundur acara kami
                    &quot; <span className="text-gold">12 September 2024 </span>&quot;
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: 1.6, duration: 0.8 } }}
                >
                    <DateCounter targetDate="2024-12-12" />
                </motion.div>

            </motion.div>
            <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 1.8, duration: 0.8 } }}
                className="bg-white text-black font-medium text-xs py-2 w-[60%] mt-5 rounded-xl hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gold absolute bottom-12 z-10"
                onClick={() => window.open(`https://calendar.google.com/calendar/u/0/r/eventedit?text=Hari+Pernikahan+Hajar+dan+Yusti+💕&dates=${startDateEvent}/${endDateEvent}&details=Save+the+date+for+wedding+day+on+December+12th%2C+2024&location=Jl.Kenangan+No.48,+Ambengambeng,+Ngingas,+Kec.+Waru,+Kabupaten+Sidoarjo,+Jawa+Timur+61256&sf=true&output=xml`, '_blank')}
            >
                <Image src="/google-calendar.png" alt="Google Calendar" width={15} height={15} className="inline-block mr-2" />
                Tambahkan ke Google Calendar
            </motion.button>
            <motion.div
                initial={{ opacity: 0, filter: 'grayscale(100%)' }}
                animate={{
                    opacity: 1,
                    filter: 'grayscale(0%)',
                    transition: { duration: 4 }
                }}
                className="absolute top-0 left-0 w-full h-full z-0"
                style={{
                    background:
                        'linear-gradient(to bottom, rgba(0, 0, 0, 1) 5%, rgba(0, 0, 0, 0.5) 25%, rgba(0, 0, 0, 0.1) 50%, transparent 70%),url(/images/calendar.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'calc(100% - 45%)',
                    backgroundRepeat: 'no-repeat'
                }}
            />

        </motion.div>
    );
}

export default Calendar;
