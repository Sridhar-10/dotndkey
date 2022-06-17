import { Image, Heading, Flex, Box, Text, Button} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'


const Bodycare = () => {
  return (
    <div>
        <Image src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/2-SPREAD-THE-LOVE-Desktop-Final_3.png?v=1638165803" w="60%" m='auto'/>
        <Heading as='h4' size='md'>Just in</Heading>
        <br/>
        <Heading as='h3' size='xl'>BODYCARE</Heading>
        <br/>
        <br/>
        <Flex  align="center" justify="center" gap={25}>
            <Box>
                <Image src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/ROSE_2.png?v=1636617537" />
                <Text as='abbr'>Body Butter</Text>
            </Box>
            <Box>
                <Image src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/0_1.png?v=1636623319" />
                <Text as='abbr'>Serum Lotion</Text>
            </Box>
            <Box>
                <Image src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1.3_d0fb05cd-1610-4b66-ad0d-391d4aad2676.png?v=1636537323" />
                <Text as='abbr'>Body Scrub</Text>
            </Box>
        </Flex>
        <br/>
        <br/>
        <Image src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/3-Model-Image-Desktop_2_1ac15045-7c83-4680-9bd8-6d5a5878a0c4.png?v=1636955347" w="70%" m='auto'/>
        <br/>
        <br/>

        <Text as='i'>Body</Text>
        <br/>
        <Heading as='h3' size='xl'>SCRUB</Heading>
        <Text as='i' color="red">Buff' that Ruff'</Text>
        <br/>
        <br/>
        <Flex align="center" justify="center" gap={35}>
                <Box h='auto' w={300} boxShadow= 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'>
                    <Image src='https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-14.jpg?v=1646477249' w='100%'/>
                    <Text as='abbr'>Vitamin C & Avalon Lemon</Text>
                    <br/>
                    <Text as='abbr'>Sugar Body Scrub</Text>
                    <br/>
                    <Flex align="center" justify="center" gap={25}>
                    <Text as='del'>Rs:545.00</Text>
                    <Text as='abbr' color='red'>Rs:490.01</Text>
                    </Flex>
                    <br/>
                    <Button w="100%" bgColor='black'color='white'>ADD TO CART</Button>
                </Box>
                <Box h='auto' w={300} boxShadow= 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'>
                    <Image src='https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-13.jpg?v=1646477177' w='100%'/>
                    <Text as='abbr'>Damask Rose & Lavender</Text>
                    <br/>
                    <Text as='abbr'>Gel Body Scrub</Text>
                    <br/>
                    <Flex align="center" justify="center" gap={25}>
                    <Text as='del'>Rs:545.00</Text>
                    <Text as='abbr' color='red'>Rs:490.01</Text>
                    </Flex>
                    <br/>
                    <Button w="100%" bgColor='black'color='white'>ADD TO CART</Button>
                </Box>
        </Flex>

        <br/>
        <br/>

        <Text as='i'>SERUM</Text>
        <br/>
        <Heading as='h3' size='xl'>LOTIONS</Heading>
        <Text as='i' color="red">Hydration's your bae</Text>
        <br/>
        <br/>
        <Flex align="center" justify="center" gap={35}>
            <Link to="/product">
                    <Box h='auto' w={300} boxShadow= 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'>
                        <Image src='https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_5_1f30698f-72cf-4165-8bca-302aa29817e2.jpg?v=1646477193' w='100%'/>
                        <Text as='abbr'>Damask Rose & Lavender</Text>
                        <br/>
                        <Text as='abbr'>Hydrating Hyaluronic Body Lotion</Text>
                        <br/>
                        <Flex align="center" justify="center" gap={25}>
                        <Text as='del'>Rs:595.00</Text>
                        <Text as='abbr' color='red'>Rs:535.00</Text>
                        </Flex>
                        <br/>
                        <Button w="100%" bgColor='black'color='white'>ADD TO CART</Button>
                    </Box>
            </Link>
                <Box h='auto' w={300} boxShadow= 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'>
                    <Image src='https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-11_2.jpg?v=1646477397' w='100%'/>
                    <Text as='abbr'>Avalon Lemon & Verbena</Text>
                    <br/>
                    <Text as='abbr'>Vitamin C Glow Body Lotion</Text>
                    <br/>
                    <Flex align="center" justify="center" gap={25}>
                    <Text as='del'>Rs:545.00</Text>
                    <Text as='abbr' color='red'>Rs:490.01</Text>
                    </Flex>
                    <br/>
                    <Button w="100%" bgColor='black'color='white'>ADD TO CART</Button>
                </Box>
        </Flex>
        <br/>
        <br/>
        <Text as='i'>BODY</Text>
        <br/>
        <Heading as='h3' size='xl'>BUTTER</Heading>
        <Text as='i' color="red">Buttery, melt-in goodness</Text>
        <br/>
        <br/>
        <Flex align="center" justify="center" gap={35}>
                <Box h='auto' w={300} boxShadow= 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'>
                    <Image src='https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-6.jpg?v=1644862704' w='100%'/>
                    <Text as='abbr'>Cocoa & French Vanilla</Text>
                    <br/>
                    <Text as='abbr'>Rich Body Butter With 10% SHEA</Text>
                    <br/>
                    <Flex align="center" justify="center" gap={25}>
                    <Text as='del'>Rs:595.00</Text>
                    <Text as='abbr' color='red'>Rs:505.00</Text>
                    </Flex>
                    <br/>
                    <Button w="100%" bgColor='black'color='white'>ADD TO CART</Button>
                </Box>
                <Box h='auto' w={300} boxShadow= 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'>
                    <Image src='https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_2.png?v=1644862556' w='100%'/>
                    <Text as='abbr'>Damask Rose & Lavender</Text>
                    <br/>
                    <Text as='abbr'>Velvet Body Butter With 5% SHEA</Text>
                    <br/>
                    <Flex align="center" justify="center" gap={25}>
                    <Text as='del'>Rs:595.00</Text>
                    <Text as='abbr' color='red'>Rs:505.01</Text>
                    </Flex>
                    <br/>
                    <Button w="100%" bgColor='black'color='white'>ADD TO CART</Button>
                </Box>
        </Flex>
        <br/>
        <br/>
        <Text as='i'>OUR</Text>
        <br/>
        <Heading as='h3' size='xl'>COMBOS</Heading>
        <br/>
        <br/>
        <Flex align="center" justify="center" gap={35}>
                <Box h='auto' w={300} boxShadow= 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'>
                    <Image src='https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3_8.jpg?v=1643717568' w='100%'/>
                    <Text as='abbr'>Citrus Crush Combo</Text>
                    <br/>
                    <Flex align="center" justify="center" gap={25}>
                    <Text as='del'>Rs:1140.00</Text>
                    <Text as='abbr' color='red'>Rs:1026.00</Text>
                    </Flex>
                    <br/>
                    <Button w="100%" bgColor='black'color='white'>ADD TO CART</Button>
                </Box>
                <Box h='auto' w={300} boxShadow= 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'>
                    <Image src='https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_9.jpg?v=1643714860' w='100%'/>
                    <Text as='abbr'>Rosy Affair Combo</Text>
                    <br/>
                    <Flex align="center" justify="center" gap={25}>
                    <Text as='del'>Rs:1140.00</Text>
                    <Text as='abbr' color='red'>Rs:1026.01</Text>
                    </Flex>
                    <br/>
                    <Button w="100%" bgColor='black'color='white'>ADD TO CART</Button>
                </Box>
        </Flex>
        <br/>
        <br/>
        <br/>
    </div>
  )
}

export default Bodycare