import React, {FC, useState} from 'react';
import {ITodo} from "../types/types";

interface TodoItemProps {
    todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({todo}) => {
    const [isCompleted, setIsCompleted] = useState<boolean>(todo.completed)
    return (
        <div>
            <input type="checkbox" checked={isCompleted} onChange={()=>setIsCompleted(!isCompleted)}/>
            {todo.id}. {todo.title}
        </div>
    );
};

export default TodoItem;