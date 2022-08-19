import React from 'react';

interface ToDoCardProps {
    task: string;
    description: string; 
    status: string; 
    id: string;
}

interface ToDoCardListProps {
    todoItems: ToDoCardProps[]
}


const ToDoCard = ({task, description, status, id}:ToDoCardProps) => {
    return (
        <li>
            <h1>{task}</h1>
            <p>{description}</p>
            <p>{status}</p>
            <p>{id}</p>
        </li>
    );
}

const ToDoCardList = ({todoItems}:ToDoCardListProps) => {
    return (
        <div>
            {}
            <ul>
                {todoItems.map(data => {
                    return <ToDoCard task={data.task} description={data.description} status={data.status} id={data.id}/>

                })}
            </ul>
        </div>
    );
}

export default ToDoCardList;