import { Box, Flex, Text, Input, Button } from '@chakra-ui/react'
import React from 'react';
import {EmailIcon, ChatIcon , InfoIcon ,AtSignIcon} from '@chakra-ui/icons'

const Footer = () => {
  return (
    <>
    <hr />
    <Flex textAlign="left" justify="center" align ="center" gap={200}>
      <Box>
        <Text as="samp" fontSize='2xl'>GET TO KNOWN AS</Text>
        <br/>
        <Text as="samp">ABOUT US</Text>
        <br/>
        <Text as="samp">CONTACT US</Text>
        <br/>
        <Text as="samp">EARTHCARE</Text>
        <br/>
        <Text as="samp">AFFILIATE PROGRAM</Text>
        <br/>
        <Text as="samp">TERMS & CONDITION</Text>
        <br/>
        <Text as="samp">REFUND & CANCELLATION</Text>
        <br/>
        <Text as="samp">PRIVACY POLICY</Text>
        <br/>
        <Text as="samp">ORDER & SHIPPING</Text>
        <br/>
        <Text as="samp">PAYMENT TERMS</Text>
        <br/>
        <Text as="samp">TERMS OF SERVIECE</Text>
        <br/>
        <Text as="samp">REFUND PILICY</Text>
      </Box>
      <Box pb={40}>
      <Text as="samp" fontSize='2xl'>ALSO AVAILABLE ON</Text>
        <br/>
        <Text as="samp">NYKAA</Text>
        <br/>
        <Text as="samp">AMAZON</Text>
        <br/>
        <Text as="samp">FLIPKART</Text>
        <br/>
        <Text as="samp">MYNTRA</Text>
        <br/>
        <Text as="samp">CROMA</Text>
      </Box>
      <Box pb={40}>
       <Text as="samp" fontSize='2xl'>STAY UPDATED</Text>
        <br/>
        <Flex>
          <Input  placeholder='example@example.com' size='md' htmlSize={30} width='auto' borderTop='none' borderLeft='none' borderRight='none'/>
          <Button colorScheme='black' variant='solid' bgColor='black'>SUBMIT</Button>
        </Flex>
        <br/>
        <Flex justify="center" align ="center" gap={10}>
           <Text as="samp" fontSize='2xl'>FOLLOW US</Text>
           <EmailIcon w={8} h={8}/>
           <ChatIcon  w={8} h={8}/>
           <InfoIcon  w={8} h={8}/>
        </Flex>
        <br/>
        <Flex>
            <AtSignIcon w={5} h={5}/>
            <Text as="samp" fontSize='1xl'> 2022 Dot & Key</Text>
        </Flex>
      </Box>
    </Flex>
    </>
  )
}

export default Footer