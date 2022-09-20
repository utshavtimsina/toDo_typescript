import React from 'react'
import { Iinput } from './Interface'
interface props {
    input: Iinput
    deleteItems(deleteTodo: string): void
}

const TodoList = ({ input, deleteItems }: props) => {
    return (
        <>
            <div className="todo_style">
                <li>{input.myInput}</li>
                <i onClick={() => { deleteItems(input.myInput) }} className="bi bi-x-square" />

            </div>

        </>
    )
}

export default TodoList