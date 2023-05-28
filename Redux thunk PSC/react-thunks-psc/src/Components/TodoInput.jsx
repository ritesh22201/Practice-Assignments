import { Box, Button, Flex, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import {AddIcon} from '@chakra-ui/icons';
import { useDispatch } from 'react-redux';
import { postDataSuccess, postTodos } from '../Redux/action';

const TodoInput = () => {
  const [inputVal, setInputVal] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    const newObj = {
      title : inputVal,
      status : false
    }

    dispatch(postTodos(newObj));
    setInputVal('');
  }

  return (
    <Flex gap={'10px'} m={'30px 0'}>
      <Input value={inputVal} onChange={(e) => setInputVal(e.target.value)} type='text' placeholder='Add a todo'/>
      <Button onClick={handleAdd}><AddIcon/></Button>
    </Flex>
  )
}

export default TodoInput