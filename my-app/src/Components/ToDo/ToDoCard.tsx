import { render } from '@testing-library/react';
import React, {useState} from 'react';

interface Props {
    task: string[];
    description: string[]; 
    status: string; 
    id: string;
}

const TaskName = this.props.taskname;

function Map() {

}

const ToDoCard  = ({task, description, status, id,} : {task: string, description: string, status: string, id: string}) => {
    const TaskName = this.props.taskname;
    return (
        <div>
            <h1>{task}</h1>
            <p>{description}</p>
            <p>{status}</p>
            <p>{id}</p>
        </div>
    );
}

export default ToDoCard;