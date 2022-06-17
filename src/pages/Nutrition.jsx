import React from 'react'
import {Image, Flex, Box , Heading,Text} from '@chakra-ui/react';
import {StarIcon} from '@chakra-ui/icons'



const Nutrition = () => {
  return (
    <div>
        <Image src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/desktop-banner-.2_1_1.png?v=1647001813" w="100%"m="auto"/>
        <Flex align="center" justify="center" gap={25}>
            <Box>
                <Image src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/482-x-574-daily-balance-image_ec7ee15e-7131-4ea7-999b-3581c401bfdf.png?v=1628254032"h={500} />
            </Box>
            <Box>
                <Heading as='h4' size='md'>Your Daily Health Balance</Heading> 
                <br/>
                <Image src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/310X642_slider-claim-image.png?v=1626112083"/>
            </Box>
        </Flex>
        <br/>
        <Flex align="center" justify="center" gap={55} >
            <Box h='auto' w={300}>
                <Image src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/IKWI_Gummies_Happy-Hair_Box_3D_Final-_2.png?v=1637837508" w="100%"/>
                <Heading as='h4' size='md'>IKWI HAPPY HAIR GUMMIES</Heading> 
                <Text as='abbr'>Quantity:30</Text>
                <br/>
                <br/>
                <Flex align="center" justify="center" >
                   <Text as='abbr' mr={75}>Rs:645</Text>
                   <StarIcon  w={5} h={5}/>
                   <Text as='abbr'>5.0/5</Text>
                </Flex>
            </Box>
            <Box h="auto" w={300}>
                <Image src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/stress_bd483231-e6f1-4041-8897-dba7f96bafa1.png?v=1637835959"  w="100%"/>
                <Heading as='h4' size='md'>IKWI STRESS LESS GUMMIES</Heading> 
                <Text as='abbr'>Quantity:30</Text>
                <br/>
                <br/>
                <Flex align="center" justify="center" >
                   <Text as='abbr' mr={75}>Rs:595</Text>
                   <StarIcon  w={5} h={5}/>
                   <Text as='abbr'>4.9/5</Text>
                </Flex>
            </Box>
        </Flex>
        <br/>
        <br/>
        <Flex  align="center" justify="left" gap={25} h={500}>
            <Image src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/310-x-680-The-balance-girl-image_859ddf91-d286-4242-b6f0-db2ecf7715c4.png?v=1626112811" h="100%"/>
            <Image src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/457-x-150-The-balace-claim-image_88c343cb-792c-4c2e-bdf0-dc0e0bbf7ac5.png?v=1628254215" h="60%"/>
            <Image src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/430-x-738-seasaw-img_75cbd547-3255-4d8a-bc0b-e779768f7c2e.png?v=1626110718" h="100%"/>

        </Flex>
    </div>
  )
}

export default Nutrition