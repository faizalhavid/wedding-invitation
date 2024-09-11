import React from 'react';


interface BottomNavigatorProps {
    currentPage: number;
    totalPages: number;
    onNavigate: (page: number) => void;
    icons: React.ComponentType[];
}

const BottomNavigator: React.FC<BottomNavigatorProps> = ({ currentPage, totalPages, onNavigate, icons }) => {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white text-white flex justify-around p-4">
            {icons.map((Icon, index) => (
                <button
                    key={index}
                    onClick={() => onNavigate(index)}
                    className={`px-4 py-2 rounded ${currentPage === index ? 'bg-gray-600' : 'bg-gray-800'}`}
                >
                    <Icon />
                </button>
            ))}
        </div>
    );
};

export default BottomNavigator;