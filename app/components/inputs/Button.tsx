// components/Button.tsx

import React from 'react';

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    className?: string;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    type = 'button',
    onClick,
    className = '',
    children,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`z-10 rounded-md bg-appTitleBgColor px-1.5 md:px-3.5 py-2.5 text-xs md:text-sm font-bold text-appWhite shadow-sm hover:bg-black ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
