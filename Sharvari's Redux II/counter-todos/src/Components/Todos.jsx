import React from 'react'
import TodosInput from './TodosInput'
import TodosItem from './TodosItem'
import { Heading } from '@chakra-ui/react'

const Todos = () => {
  return (
    <div>
      <Heading m={'20px'} as={'h2'} size={'lg'}>My Todos</Heading>
      <TodosItem/>
    </div>
  )
}

export default Todos