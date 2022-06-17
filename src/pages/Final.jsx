import React from 'react'
import { Alert, AlertIcon, AlertTitle, AlertDescription,Button} from "@chakra-ui/react";
import {Link} from "react-router-dom"
const Final = () => {
  return (
    <div>
        <Alert
  status='success'
  variant='subtle'
  flexDirection='column'
  alignItems='center'
  justifyContent='center'
  textAlign='center'
  height='200px'
>
  <AlertIcon boxSize='40px' mr={0} />
  <AlertTitle mt={4} mb={1} fontSize='lg'>
    Your Order is placed
  </AlertTitle>
  <AlertDescription maxWidth='sm'>
    Thanks for Using Our Product. Our team will get back to you soon.
  </AlertDescription>
</Alert>
<br/>
<br/>
<br/>
<Link to="/home"><Button w="50%" bgColor='black' color='white'>GO HOME</Button></Link>
<br/>
<br/>
<br/>
    </div>
  )
}

export default Final