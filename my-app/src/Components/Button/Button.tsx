import React, { Children } from 'react';

interface Props {
    onClick: () => void;
    id: string;
    height?: string;
    width?: string;
    border?: string;
}

const Button: React.FC<Props> = ({  onClick, id, height, width, border,
}) => {
    return (
        <button 
        onClick={onClick}
        style={{
            height,
            width,
            border,
        }}
        >
        <div>{id}</div>
        </button>
    );
}

export default Button;