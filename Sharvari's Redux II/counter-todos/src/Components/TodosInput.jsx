import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getError, getLoading, handleReset, postHandler } from '../Redux/TodosReducer/action';
import { Box, Button, Flex, Input } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

const TodosInput = ({handlePostReq}) => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handlePost = () => {
    let newObj = {
      title : title,
      completed : false,
    }
    if(title){
      handlePostReq(newObj);
    }
  }

  return (
    <Flex w={'40%'} m={'auto'} p={'0 20px'} gap={'10px'} justifyContent={'center'}>
      <Input fontSize={'20px'} onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Add a todo'/>
      <Button colorScheme={'blue'} onClick={handlePost}><AddIcon/></Button>
    </Flex>
  )
}

export default TodosInput