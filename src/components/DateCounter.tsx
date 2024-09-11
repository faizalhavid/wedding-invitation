import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

interface DateCounterProps {
    targetDate: string; // Target date in the format 'YYYY-MM-DD'
}

const DateCounter: React.FC<DateCounterProps> = ({ targetDate }) => {
    const [timeRemaining, setTimeRemaining] = useState<number | null>(null);

    useEffect(() => {
        const calculateTimeRemaining = () => {
            const now = new Date().getTime();
            const target = new Date(targetDate).getTime();
            const timeDifference = target - now;

            if (timeDifference >= 0) {
                setTimeRemaining(timeDifference);
            } else {
                setTimeRemaining(0);
            }
        };

        calculateTimeRemaining();
        const interval = setInterval(calculateTimeRemaining, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    const formatTime = (milliseconds: number) => {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const days = Math.floor(totalSeconds / (3600 * 24));
        const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        return `${days} hari : ${hours} jam : ${minutes} menit : ${seconds} detik`;
    };

    return (
        <div className="text-[1.45rem] font-amore font-medium text-white tracking-wide date-counter">
            {timeRemaining !== null ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1 } }}
                    className="flex flex-col items-center z-10 my-2"
                >

                    <p>{formatTime(timeRemaining)}</p>
                    <hr className="border-gold border-1 w-full mx-auto my-2" />
                </motion.div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default DateCounter;
