import axios, { AxiosResponse } from 'axios';
import { Todo } from './constant';

export const addTodo = async(newTodo: Todo) => {
    let res: AxiosResponse<Todo> = await axios.post('http://localhost:8080/todos', newTodo);

}

export const getTodo =async () => {
    let res: AxiosResponse<Todo[]> = await axios.get('http://localhost:8080/todos');
    return res.data;
}

export const toggleTodo =async ( status: boolean, id?: number) => {
    let res: AxiosResponse<Todo> = await axios.patch(`http://localhost:8080/todos/${id}`, {status : !status});
    return res;
}