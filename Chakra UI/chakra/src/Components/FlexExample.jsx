import { Flex, Spacer, Center, Square, Box } from '@chakra-ui/react'

function FlexExample() {
    return <>
        <Flex color='white'>
            <Center w='100px' bg='green.500'>
                <Text>Box 1</Text>
            </Center>
            <Square bg='blue.500' size='150px'>
                <Text>Box 2</Text>
            </Square>
            <Box flex='1' bg='tomato'>
                <Text>Box 3</Text>
            </Box>
        </Flex>
    </>
}

export default FlexExample;