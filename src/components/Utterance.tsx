import { motion } from "framer-motion";

const Utterance = ({ name, utterance }: { name: string, utterance: string }) => {

    return (
        <motion.div
            animate={{
                opacity: 1,
                transition: { duration: 2, backgroundPosition: { duration: 2 } }
            }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            className="flex flex-col"
        >
            <motion.p className="text-white text-sm font-semibold">
                {name}
            </motion.p>
            <motion.p className="text-white text-xs font-light text-justify">
                {utterance}
            </motion.p>
        </motion.div>
    );
}

export default Utterance;