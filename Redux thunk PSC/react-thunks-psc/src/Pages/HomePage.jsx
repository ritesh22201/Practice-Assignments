import React, { useEffect } from 'react';
import {Box, Button, Heading} from '@chakra-ui/react';
import Nav from '../Components/Nav';
import TodoInput from '../Components/TodoInput';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../Redux/action';
import Row from '../Components/Row';

const HomePage = () => {

  const dispatch = useDispatch();
  const {todos} = useSelector(store => store.todosReducer);

  useEffect(() => {
    dispatch(getTodos());
  }, [])

  return (
    <Box m={'auto'} w={'35%'}>
        <Heading m={'20px 0'} size={'lg'}>My Todos</Heading>
        <Nav/>
        <TodoInput/>
        {todos.reverse().map((el, ind) => {
          return <Row key={el.id} ind = {ind} data = {el}/>
        })}
        
    </Box>
  )
}

export default HomePage