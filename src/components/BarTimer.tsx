import React from 'react';

interface BarTimerProps {
    countPage: number;
    time: number;
    start: boolean;
    currentPage: number;
}

const ProgressBar: React.FC<{ index: number; countPage: number; time: number; isActive: boolean }> = ({ index, countPage, time, isActive }) => (
    <div
        className="relative h-1 rounded-full bg-white overflow-hidden"
        style={{
            width: `${100 / countPage}%`
        }}
    >
        <div
            className={`absolute bottom-0 left-0 top-0 ${isActive ? 'bg-gold animate-fill' : 'bg-white'}`}
            style={{
                animationDuration: `${time}s`,
                animationDelay: `${index * (time / countPage)}s`
            }}
        ></div>
    </div>
);

const BarTimer: React.FC<BarTimerProps> = ({ countPage, time, start, currentPage }) => {
    return (
        start && (
            <div className="w-full absolute top-0 left-0 right-0 z-50 flex flex-row justify-between gap-2 py-3 px-2 items-center h-20">
                {Array.from({ length: countPage }).map((_, index) => (
                    <ProgressBar
                        key={`progress-bar-${index}-${countPage}-${time}`}
                        index={index}
                        countPage={countPage}
                        time={time}
                        isActive={index === currentPage}
                    />
                ))}
            </div>
        )
    );
};

export default BarTimer;