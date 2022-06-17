import React from 'react'
import {Box, Text,Stack,InputGroup,InputLeftElement,Input, Button} from '@chakra-ui/react'
import {EmailIcon} from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
<div>
    <Text as='samp' fontSize='40px'>LOGIN</Text>
    <br/>
    <br/>
<Box w="25%" justify="center" m="auto">
    <Stack spacing={4}>
            <InputGroup>
                <InputLeftElement children={<EmailIcon color='red' />}/>
                <Input  placeholder='Google Login' bgColor='red.300' color='white'/>
            </InputGroup>

            <InputGroup>
                <InputLeftElement color='blue'fontSize='1.2em'children='F'/>
                <Input placeholder='Facebook Login'  bgColor='blue.300'/>
            </InputGroup>
    </Stack>
<br/>
     <Text as='samp' fontSize='20px' mr={300} type="email">Email</Text>
     <Input/>
     <Text as='samp' fontSize='20px' mr={270} type="password">Password</Text>
     <Input/>
     <br/>
     <br/>
     <Link to="/home"><Button w="100%" bgColor='black' color='white'>SIGN IN</Button></Link>
    
     <br/>
     <br/>

     <Text as='samp' fontSize='18px'>Don't have an account? Sign up here.</Text>
</Box>
<br/>
<br/>
<br/>
<br />
<br/>

</div>
  )
}

export default Login