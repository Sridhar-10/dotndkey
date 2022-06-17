import React from 'react';
import { Box, Flex,Image ,Input,InputGroup,InputLeftElement, Stack,Button} from "@chakra-ui/react";
import { SearchIcon,BellIcon,HamburgerIcon} from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
   <Flex align="center" justify="center" gap={25}>
    <HamburgerIcon w={8} h={8} mr={20}/>
        <Box>
            <Image src='https://cdn.shopify.com/s/files/1/0361/8553/8692/files/unnamed_250x_200x_2x_260x_24408e11-6e3a-4a0c-8327-74d0455f7696_260x.jpg?v=1646547348'/>
        </Box>
    <Stack px={200}>
      <InputGroup>
         <InputLeftElement  children={<SearchIcon  color='gray.300' />}/>
         <Input  placeholder='Search' size='md' htmlSize={30} width='auto'/>
      </InputGroup>
    </Stack>
       <BellIcon w={8} h={8}/>
       <Link to="home"><Button colorScheme='black' variant='solid' bgColor='black'>HOME</Button></Link>
      <Link to="login"><Button colorScheme='black' variant='solid' bgColor='black'>LOGIN</Button></Link>
    </Flex>
    <br/>
    <hr/>
    </>
  )
}

export default Navbar