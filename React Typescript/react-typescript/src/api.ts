import axios from "axios";
import { Todo } from "./constants";

export type NewTodoType = {
    title : string,
    status : boolean
}

export const addTodo = async(newTodo: Todo) => {
    try {
       await axios.post('http://localhost:8080/todos', newTodo);
    } catch (error) {
        console.log(error)
    }
}

export const getTodos = async() => {
    let res = await axios.get('http://localhost:8080/todos');
    return res.data;
}

export const toggleTodo = async(id: number, status: boolean) => {
    await axios.patch(`http://localhost:8080/todos/${id}`, {status : !status});
}