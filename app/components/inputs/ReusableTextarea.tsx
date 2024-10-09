// components/ReusableTextarea.tsx
import React from 'react';

interface TextareaProps {
    id: string;
    name: string;
    placeholder: string;
    rows?: number;
    className?: string;
    defaultValue?: string;
}

const ReusableTextarea: React.FC<TextareaProps> = ({
    id,
    name,
    placeholder,
    rows = 5,
    className = '',
    defaultValue = '',
}) => {
    return (
        <textarea
            id={id}
            name={name}
            required
            className={`bg-transparent border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-xs md:text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-500 dark:text-gray-400 ${className}`}
            placeholder={placeholder}
            rows={rows}
            defaultValue={defaultValue}
        />
    );
};

export default ReusableTextarea;
