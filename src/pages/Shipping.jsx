import { Image, Heading, Box, Flex, Radio, Button} from '@chakra-ui/react'
import React from 'react';
import { Link} from 'react-router-dom'

const Shipping = () => {
  return (
    <div>
        <Image src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Dot_Key_Logo.png?138326" h={100} w={200} m="auto"/>
        <br/>
        <br/>
        <br/>
        <Heading as='h4' size='md'>Shipping Method</Heading>
        <br/>
        <br/>
        <Box  h={150} w="50%" m="auto" align="center" justify="center" boxShadow= 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'>
            <Flex align="center" justify="center" gap={305}>
                   <Radio value="1">Free shipping(Cash on Delivery)</Radio>
                  
                   <Heading as='h4' size='md'>Free</Heading>
            </Flex>
            <br/>
            <br/>
            <hr/>
            <br/>
            <br/>

            <Flex align="center" justify="center" gap={305}>
                   <Radio value="1">Standard(3-5 Bussiness Days)</Radio>
                   
                   <Heading as='h4' size='md'>Rs:75</Heading>
            </Flex>

        </Box>
        <br/>
        <br/>
        <br/>
        <Link to="/payment"><Button colorScheme='black' variant='solid' bgColor='black' w="40%">Continue As Payment</Button></Link>
        <br/>
        <br/>
        <br/>
    </div>

  )
}

export default Shipping