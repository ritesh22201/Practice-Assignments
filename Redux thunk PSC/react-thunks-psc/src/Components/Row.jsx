import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodos, getTodos, toggleTodos, updateTodos } from '../Redux/action';
import Edit from './Edit';

const Row = ({ind, data}) => {

  // const { todos } = useSelector(store => store.todosReducer);
  const {id, title, status} = data;
  const dispatch = useDispatch();
  const [hide, setHide] = useState(false);

  const handleToggle = (id, status) => {
    dispatch(toggleTodos(id, status)).then(() => dispatch(getTodos()));
  }

  const handleDelete = (id) => {
    dispatch(deleteTodos(id)).then(() => dispatch(getTodos()));
  }

  // const handleEdit = (id) => {
  //   ;
  //   dispatch(updateTodos(id, ));
  // }

  return (
    <Box display={'flex'} flexDirection={'column'} gap={'10px'}>
        <Flex borderRadius={'8px'} boxShadow= 'rgba(0, 0, 0, 0.24) 0px 3px 8px' alignItems={'center'} justifyContent={'space-between'} p={'20px'}>
          <Flex gap={'10px'}>
            <Heading size={'md'}>{ind + 1}. </Heading>
            {hide ? <Edit setHide={setHide} data = {data}/> :
            <Heading size={'md'}>{title} </Heading>
            }
          </Flex>
          <Flex gap={'10px'}>
            <Button onClick={() => setHide(prev => !prev)}><EditIcon/></Button>
            <Button onClick={() => handleToggle(id, status)}>{status ? 'Completed' : 'Pending'}</Button>
            <Button onClick={() => handleDelete(id)}><DeleteIcon/></Button>
          </Flex>
        </Flex>
    </Box>
  )
}

export default Row