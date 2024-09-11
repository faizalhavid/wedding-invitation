import React, { useState, useEffect } from 'react';

interface FadeProps {
    in: boolean;
    children: React.ReactNode;
    timeout?: number;
}

const Fade: React.FC<FadeProps> = ({ in: inProp, children, timeout = 500 }) => {
    const [visible, setVisible] = useState(inProp);

    useEffect(() => {
        if (inProp) {
            setVisible(true);
        } else {
            const timer = setTimeout(() => setVisible(false), timeout);
            return () => clearTimeout(timer);
        }
    }, [inProp, timeout]);

    return (
        <div
            style={{
                transition: `opacity ${timeout}ms ease-in-out`,
                opacity: inProp ? 1 : 0,
                display: visible ? 'block' : 'none',
            }}
        >
            {children}
        </div>
    );
};

export default Fade;