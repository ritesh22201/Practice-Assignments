import React from 'react'
import {Box, Button, Flex} from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const Nav = () => {
  const {todos} = useSelector(store => store.todosReducer);
  const completed = todos.filter(el => el.status === true);
  const pending = todos.filter(el => el.status === false);

  return (
    <Flex justifyContent={'space-between'}>
        <Button>All : {todos.length}</Button>
        <Button>Completed : {completed.length}</Button>
        <Button>Pending : {pending.length}</Button>
    </Flex>
  )
}

export default Nav