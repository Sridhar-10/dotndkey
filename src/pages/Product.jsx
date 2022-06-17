import { Flex, Image,Heading, Box, Text,Select, Button} from '@chakra-ui/react'
import React from 'react'
import {StarIcon} from '@chakra-ui/icons'
import {Link} from 'react-router-dom'

const Product = () => {
  return (
    <div>
        <Flex align="center" justify="center" gap={25} h={750} w="80%" m="auto">
            <Image src="https://cdn.shopify.com/s/files/1/0361/8553/8692/products/ROSELOTION_360x.jpg?v=1655303248" h="80%"/>
            <Box>
                    <Heading as='h3' size='xl'>Hydrating Body Lotion with Hyaluronic Acid & Rose</Heading>
                    <br/>
                    <StarIcon  w={5} h={5}/>
                    <StarIcon  w={5} h={5}/>
                    <StarIcon  w={5} h={5}/>
                    <StarIcon  w={5} h={5}/>
                    <StarIcon  w={5} h={5}/>
                    <Text as='ins'ml={5} color="blue.400">33 Reviews</Text>
                    <br/>
                    <br/>
                    <Flex align="center" justify="center" gap={25}>
                        <Heading as='h3' size='xl' textDecoration="line-through">Rs: 595.00</Heading>
                        <Heading as='h3' size='xl'color="red">Rs: 387.00</Heading>
                    </Flex>
                    <Text as='ins'ml={5}>Inclusive of All Taxes</Text>
                    <br/>
                    <br/>
                            <Select size='lg' w="80%" m='auto'>
                                    <option value='300ml'>300ml</option>
                                    <option value='600ml'>600ml</option>
                            </Select>
                    <br/>
                    <br/>
                    <Link to="/shipping"><Button colorScheme='black' variant='solid' bgColor='black' w="80%">BUY NOW</Button></Link>
                    <br/>
                    <br/>
                    <Text as='abbr'>With nourishing Damask Rose oil, lavender & hyaluronic acid, this body 
                    serum lotion spreads evenly for hydrated, soft & dewy glowing skin.</Text>
                    <br/>
                    <br/>
                    <Text fontSize='2xl'>Feel the Love</Text>
                    <br/>
                    <br/>
                    <Flex align="center" justify="center" gap={25} m='auto'>
                        <Box align="center" justify="center">
                          <Image src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Hydrates_Skin.png?v=1636459852" h={70} w={70}/>
                          <Text as='abbr'>Hydrates Skin</Text>
                        </Box>
                        <Box align="center" justify="center">
                          <Image src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Reduces_Dark_Spots.png?v=1636459850" h={70} w={70}/>
                          <Text as='abbr'>Reduces Dark Spots</Text>
                        </Box>
                        <Box align="center" justify="center">
                          <Image src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Fades_Fine_Lines_Wrinkles.png?v=1636459850" h={70} w={70}/>
                          <Text as='abbr'>Fades Fine Lines</Text>
                        </Box>
                    </Flex>
            </Box>

        </Flex>
        <br/>
        <br/>
        <br/>
    </div>
  )
}

export default Product