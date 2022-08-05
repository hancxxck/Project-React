import { render } from '@testing-library/react';
import React, {useState} from 'react';

interface Props {
    task: string[];
    description: string[]; 
    status: string; 
    id: string;
}

const data = [
    { task: "code", description: "do some coding", status: "in progress", id: "1"},
    { task: "clean", description: "do some cleaning", status: "not started", id: "2"},

]

const ToDoCard = ({task, description, status, id,} : {task: string, description: string, status: string, id: string}) => {
    return (
        <div>
            <ul>
                {data.map(data => {
                    return (
                        <li>
                    <h1>{data.task}</h1>
                    <p>{data.description}</p>
                    <p>{data.status}</p>
                    <p>{data.id}</p>
                </li>
                )})}
            </ul>
        </div>
    );
}

export default ToDoCard;