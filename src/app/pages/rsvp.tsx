import Utterance from "@/components/Utterance";
import { motion } from "framer-motion";
import { useState } from "react";

const RSVP = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const utterancesPerPage = 3;

    const utterances = [
        { name: 'Dian', utterance: 'Selamat menempuh hidup baru, semoga menjadi keluarga yang sakinah, mawaddah, warahmah.' },
        { name: 'Rizal', utterance: 'Semoga menjadi keluarga yang sakinah, mawaddah, warahmah, dan diberikan keberkahan.' },
        { name: 'Rizal', utterance: 'Semoga menjadi keluarga yang sakinah, mawaddah, warahmah, dan diberikan keberkahan.' },
        { name: 'Rizal', utterance: 'Semoga menjadi keluarga yang sakinah, mawaddah, warahmah, dan diberikan keberkahan.' },
        { name: 'Rizal', utterance: 'Semoga menjadi keluarga yang sakinah, mawaddah, warahmah, dan diberikan keberkahan.' },
        { name: 'Rizal', utterance: 'Semoga menjadi keluarga yang sakinah, mawaddah, warahmah, dan diberikan keberkahan.' },
        { name: 'Rizal', utterance: 'Semoga menjadi keluarga yang sakinah, mawaddah, warahmah, dan diberikan keberkahan.' },
        { name: 'Rizal', utterance: 'Semoga menjadi keluarga yang sakinah, mawaddah, warahmah, dan diberikan keberkahan.' },
    ];

    const indexOfLastUtterance = currentPage * utterancesPerPage;
    const indexOfFirstUtterance = indexOfLastUtterance - utterancesPerPage;
    const currentUtterances = utterances.slice(indexOfFirstUtterance, indexOfLastUtterance);

    const handleNextPage = () => {
        if (currentPage < Math.ceil(utterances.length / utterancesPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <motion.div
            key="rsvp"
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
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 2, duration: 1 } }}
                className="flex flex-col items-center justify-center h-full w-full bg-outline-flowers bg-cover bg-center absolute z-0"
            />
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 2, duration: 1 } }}
                className="text-6xl text-gold font-hughIsLife font-medium leading-none"
            >
                Doa dan Ucapan
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 4, duration: 1 } }}
                className="text-white text-center text-sm font-light"
            >
                Sapa dan kirim ucapan beserta doa yang terbaik untuk mereka yang berbahagia, sembari mengkonfirmasi kehadiran anda pada acara pernikahan kedua mempelai.
            </motion.p>
            <motion.form
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 6, duration: 1 } }}
                className="flex flex-col gap-4 w-full max-w-[500px] z-10"
            >
                <motion.input
                    type="text"
                    placeholder="Nama Lengkap"
                    className="bg-transparent border-b border-white text-white text-sm focus:outline-none focus:border-gold"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <motion.textarea
                    placeholder="Doa dan Ucapan"
                    className="bg-transparent border-b border-white text-white text-sm h-32 focus:outline-none focus:border-gold"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <motion.button
                    className="px-8 py-2 mt-5 hover:bg-gold hover:text-black text-gold font-amore text-xl rounded-full shadow-gold drop-shadow-xl w-full border-2 border-gold xs:text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut", delay: 2.8 } }}
                >
                    Kirim Ucapan
                </motion.button>
            </motion.form>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 8, duration: 1 } }}
                className="flex flex-col gap-4 w-full max-w-[500px] z-10"
            >
                {currentUtterances.map((utterance, index) => (
                    <Utterance key={index} name={utterance.name} utterance={utterance.utterance} />
                ))}
                <div className="flex justify-between mt-4">
                    <button
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-gold text-black rounded disabled:opacity-50"
                    >
                        Previous
                    </button>
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === Math.ceil(utterances.length / utterancesPerPage)}
                        className="px-4 py-2 bg-gold text-black rounded disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default RSVP;