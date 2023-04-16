import axios from "axios";
import TodosInput from "./TodosInput";
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux/es/exports";
import shallowEqual from "react-redux/es/utils/shallowEqual";
import { getRequest, getRequestFailure, getRequestSuccess } from "../redux/Todos/action";

const Todos = () => {
    const { todos, isLoading } = useSelector(store => {
        return {
            todos: store.todosReducer.todos,
            isLoading: store.todosReducer.isLoading
        }
    }, shallowEqual);

    const dispatch = useDispatch();

    const fetchAndRender = () => {
        dispatch(getRequest());
        axios.get(`http://localhost:3000/todos`)
            .then(res => {
                // console.log(res.data)
                dispatch(getRequestSuccess(res.data));
            })
            .catch(err => {
                dispatch(getRequestFailure(err.message));
            });
    }

    useEffect(() => {
        fetchAndRender();
    }, [])

    return (
        <div>
            <h1>Todo App</h1>
            {/* add TodoInput component here */}
            <TodosInput />

            {/* map through the todos array and display the tasks */}
            {isLoading && <h1>Loading...</h1>}
            {todos.length > 0 && todos.map(el => {
                return <div key={el.id} data-testid="todos-wrapper">
                    <h3>{el.title} - {el.status ? "True" : 'False'}</h3>
                </div>
            })}
        </div>
    );
};

export default Todos;