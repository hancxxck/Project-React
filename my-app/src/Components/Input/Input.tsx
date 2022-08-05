import React, {FC, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
}

const Input: FC<InputProps> = ({ id }) => {
    return (
        <div>
        <div className="input-wrapper">
            <input id={id}></input>
        </div>
        </div>
    );
};

export default Input; 