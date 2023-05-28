import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getLoading, getTodosData, handleReset, postHandler, todosToggle } from '../Redux/TodosReducer/action';
import TodosInput from './TodosInput';
import { Box, Button, Flex, Heading, Spinner } from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'

const TodosItem = () => {
  const dispatch = useDispatch();
  const { todos, isLoading, isError } = useSelector(store => store.todosReducer);
  // const [todosData, setTodosData] = useState([]);

  const getTodos = (val, status) => {
    dispatch(getLoading());
    return axios.get(`http://localhost:3000/todos?${val}=${status}`)
      .then(res => {
        dispatch(getTodosData(res.data));
      })
      .catch(err => {
        dispatch(getError());
      })
  }

  // const getReq = () => {
  //   axios.get(`http://localhost:3000/todos`)
  //     .then(res => {
  //       dispatch(getTodosData(res.data));
  //     })
  //     .catch(err => {
  //       dispatch(getError());
  //     })
  // }

  useEffect(() => {
    getTodos()
  }, [])

  const handlePostReq = (newObj) => {
    dispatch(getLoading());
    axios.post(' http://localhost:3000/todos', newObj)
      .then(res => {
        dispatch(postHandler(res.data));
        getTodos()
      })
      .catch(() => {
        dispatch(getError())
      })

    dispatch(handleReset());
  }

  const handleDelete = (id) => {
    dispatch(getLoading());
    axios.delete(`http://localhost:3000/todos/${id}`)
      .then(res => {
        getTodos();
      })
      .catch(() => {
        dispatch(getError())
      })
  }

  const handleToggle = (id, completed) => {
    let updatedTodos = {
      completed: !completed
    }

    axios.patch(`http://localhost:3000/todos/${id}`, updatedTodos)
      .then(res => {
        getTodos()
        // dispatch(todosToggle(res.data))
      })
      .catch(() => {
        dispatch(getError());
      })
  }

  if (isLoading) {
    return <Spinner
      mt={'160px'}
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='blue.500'
      size='xl'
    />
  }

  if (isError) {
    return <Heading as={'h2'} size={'lg'}>Something went wrong. Please refresh the page.</Heading>
  }

  return (
    <Box>
      <TodosInput handlePostReq={handlePostReq} />
      <Flex borderRadius={'8px'} boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' w={'40%'} justifyContent={'space-between'} m='10px auto 20px auto' p={'20px'}>
        <Button onClick={() => getTodos('', '')}>All :</Button>
        <Button onClick={() => getTodos('completed', true)}>Completed : </Button>
        <Button onClick={() => getTodos('completed', false)}>Pending : </Button>
      </Flex>
      {todos.map((el, i) => {
        return <Flex borderRadius={'8px'} boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' alignItems={'center'} justifyContent={'space-between'} m='10px auto' key={el.id} w='40%' p='20px 15px'>
          <Flex alignItems={'center'}>
            <Heading size={'md'}>{i + 1}.</Heading>
            <Heading ml={'15px'} as={'h2'} size={'md'}>{el.title}</Heading>
          </Flex>
          <Box>
            <Button colorScheme='blue' mr={'10px'}><EditIcon /></Button>
            <Button mr={'10px'} colorScheme={el.completed ? 'green' : 'yellow'} onClick={() => handleToggle(el.id, el.completed)}>{el.completed ? 'Completed' : 'Pending'}</Button>
            <Button mr={'10px'} colorScheme='red' onClick={() => handleDelete(el.id)}><DeleteIcon /></Button>
          </Box>
        </Flex>
      })}
    </Box>
  )
}

export default TodosItem