import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Image,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import {Link} from 'react-router-dom';

export default function Login() {
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Flex gap={'20px'} direction={{base : 'column-reverse', sm: 'column-reverse', md : 'column-reverse', lg : 'row', xl : 'row', '2xl' : 'row'}} w={'90%'} m={'auto'} justifyContent={'space-around'}>
                <Box w={{base : '90%', sm : '90%', md : '90%', lg : '45%', xl : '45%', '2xl' : '45%'}} m={'auto'}>
                    <Image w={'100%'} src={'https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7885.jpg?w=740&t=st=1686802710~exp=1686803310~hmac=569c26f64f36aa9edadff4d4e5de3cbf312610c74cef99c2cdf5d9e513fc1524'} alt='signup-img'/>
                </Box>
                <Box w={{base : '90%', sm : '90%', md : '90%', lg : '45%', xl : '45%', '2xl' : '45%'}} m={'auto'}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'}>Welcome Back!!</Heading>
                        <Text fontSize={'lg'} color={'gray.600'}>
                            please login to continue👍
                        </Text>
                    </Stack>
                    <Box
                        mt={'10px'}
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <Stack spacing={4}>
                            <form action="">
                                <FormControl id="email">
                                    <FormLabel>Email address</FormLabel>
                                    <Input borderRadius={'none'} type="email" placeholder='Enter your email' />
                                </FormControl>
                                <FormControl id="password">
                                    <FormLabel>Password</FormLabel>
                                    <Input borderRadius={'none'} type="password" placeholder='Enter your password' />
                                </FormControl>
                                <Stack spacing={10}>
                                    <Stack
                                        m={'30px 0 -10px 0'}
                                        direction={{ base: 'column', sm: 'row' }}
                                        align={'start'}
                                        justify={'space-between'}>
                                        <Heading fontWeight={'600'} size={'sm'}>New here?</Heading>
                                        <Link to={'/signup'} style={{fontWeight : '600', color : '#499de2'}}>Signup</Link>
                                    </Stack>
                                    <Button
                                        borderRadius={'none'}
                                        type='submit'
                                        bg={'#d7b256'}
                                        color={'white'}
                                        _hover={{
                                            bg: '#efc969',
                                        }}>
                                        Sign in
                                    </Button>
                                </Stack>
                            </form>
                        </Stack>
                    </Box>
                </Box>
            </Flex>
        </Flex>
    );
}