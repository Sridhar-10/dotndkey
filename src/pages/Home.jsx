import { Box, Flex, Image, Text, Heading, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Flex  align="center" justify="center" gap={25}>
          <Link to="/bodycare">
          <Box boxShadow= 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'>
            <Image src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Untitled-1_6_256x256_18109629-935e-4b4a-b57d-bafd137dfc3d.jpg?v=1652335902"/>
            <Text as='abbr'>BODYCARE</Text>
          </Box>
          </Link>
          <Box boxShadow= 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'>
            <Image src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/2_10_256x256_8bff7558-6bbe-48bf-ab39-7374e49719bf.jpg?v=1652335951"/>
            <Text as='abbr'>HAIRCARE</Text>
          </Box>
          <Link to="/nutrition">
          <Box boxShadow= 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'>
            <Image src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/3_11_256x256_e7c09569-74b4-4d0c-9051-26ab4e442e4a.jpg?v=1652335973"/>
            <Text as='abbr'>NUTRITION</Text>
          </Box>
          </Link>
          <Box boxShadow= 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'>
            <Image src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1_19_256x256_9865ad78-1e72-4e98-bc3e-4e23cf20f9f1.jpg?v=1652335996"/>
            <Text as='abbr'>SERUM</Text>
          </Box>
          <Box boxShadow= 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'>
            <Image src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Untitled-1_7_256x256_e1449924-9374-406e-b826-3f1c0613bcec.jpg?v=1652336019"/>
            <Text as='abbr'>MOISTURIZER</Text>
          </Box>
        </Flex>
        <br/>
        <br/>
        <Image src='https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Probiotic_Home_Page_Banner-01_1_15b4bffa-e658-4693-9b64-cfc9efcb99cb.jpg?v=1653990558' w='90%' m='auto'/>
        <br />
        <Heading as='h4' size='md'>Loved By</Heading>
        <br/>
        <Heading as='h2' size='2xl'>Over 10 Lakh Customers</Heading>
        <br/>
        <br/>
        <Image src='https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Sale_Banner1600_500.jpg?v=1654626718' w='60%' m='auto' borderRadius={10}/>
        <br/>
        <Heading as='h4' size='md'>OUR</Heading>
        <br/>
        <Heading as='h2' size='2xl'>BEST SELLERS</Heading>
        <br/>
        <br/>
        <Flex  align="center" justify="center" gap={25}>
          <Box h='auto' w={300} boxShadow= 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'>
            <Image src='https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1-Vit-C-Moisturizer-A_-Listing-NEW_e75ddb63-7d9e-4e71-bb35-0e050969a6b1.jpg?v=1654856343' w='100%'/>
            <Text as='abbr'>Vitamin C Moisturizer With Kakadu Plum & Vitamin E| Fades Pigmentation & Dark...</Text>
            <br/>
            <Flex align="center" justify="center" gap={25}>
               <Text as='del'>Rs:595.00</Text>
               <Text as='abbr' color='red'>Rs:565.01</Text>
            </Flex>
            <br/>
            <Button w="100%" bgColor='black'color='white'>ADD TO CART</Button>
          </Box>
          <Box h='auto' w={300} boxShadow= 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'>
            <Image src='https://cdn.shopify.com/s/files/1/0361/8553/8692/products/PROBIOTICS.jpg?v=1655302709' w='100%'/>
            <Text as='abbr'>CICA Niacinamide Night Gel With Green Tea, Tea Tree Oil & Hyaluronic| Reduces...</Text>
            <br/>
            <Flex align="center" justify="center" gap={25}>
               <Text as='del'>Rs:595.00</Text>
               <Text as='abbr' color='red'>Rs:565.01</Text>
            </Flex>
            <br/>
            <Button w="100%" bgColor='black'color='white'>ADD TO CART</Button>
          </Box>
          <Box h='auto' w={300} boxShadow= 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'>
            <Image src='https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Website1_1.jpg?v=1655128942' w='100%'/>
            <Text as='abbr'>Cica + Niacinamide Face Sunscreen SPF 50 PA+++| Broad Spectrum UV...</Text>
            <br/>
            <Flex align="center" justify="center" gap={25}>
               <Text as='del'>Rs:595.00</Text>
               <Text as='abbr' color='red'>Rs:506.00</Text>
            </Flex>
            <br/>
            <Button w="100%" bgColor='black'color='white'>ADD TO CART</Button>
          </Box>
          <Box h='auto' w={300} boxShadow= 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'>
            <Image src='https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1-GreenClayListing_1.jpg?v=1649655908' w='100%'/>
            <Text as='abbr'>20% Vitamin C Serum with Blood Orange | For Skin Glow | Fades Pigmentation...</Text>
            <br/>
            <Flex align="center" justify="center" gap={25}>
               <Text as='del'>Rs:665.00</Text>
               <Text as='abbr' color='red'>Rs:632.00</Text>
            </Flex>
            <br/>
            <Button w="100%" bgColor='black'color='white'>ADD TO CART</Button>
          </Box>
        </Flex>
        <br/>
        <Heading as='h4' size='md'>IN THE</Heading>
        <br/>
        <Heading as='h2' size='2xl'>SPOT LIGHT</Heading>
        <br/>
        <br/>
        <Flex h={400} w='90%' align="center" justify="center" gap={25} m='auto' pb={5}>
          <Image src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/5th_May_4_Block-02_1.jpg?v=1654594415" w='30%'h='100%' borderRadius={20}/>
          <Image src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/5th_May_4_Block-01_2.jpg?v=1654594421" w='60%' h='100%' borderRadius={20}/>
        </Flex>
        <Flex h={400} w='90%' align="center" justify="center" gap={25} m='auto'>
        <Image src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/VIT_C_BANNER_2.jpg?v=1651059557" w='60%' h='100%' borderRadius={20}/>
        <Image src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Hair_Damage_Control_small_2_1.jpg?v=1652694729" w='30%'h='100%' borderRadius={20}/>
        </Flex>
        <br/>
        <Box w='80%' align="center" justify="center" m='auto'>
        <Text as='em'  fontSize='40px'>CLEAN BEAUTY</Text>
        <br/>
        <Text as='em'  fontSize='30px'>WITH UNCOMPROMISED EFFICACY</Text>
        <br/>
        <Text as='em'  fontSize='30px'>At Dot & Key, we strive to find the missing "dots" in your skincare regime and are obsessed with providing solutions or "keys" to these.</Text>
        <br/>
        <br/>
        <Text as='em'  fontSize='30px'>Our revolutionary products are crafted with utmost care and love for you. By blending luxurious botanicals with high performance actives, we bring to you clean formulations that are absolutely safe, delightfully gentle and unquestionably effective.</Text>
       </Box>
       <Flex align="center" justify="center" gap={25}>
        <Image src='https://cdn.shopify.com/s/files/1/0361/8553/8692/files/3-ICONS.png?v=1645770027' h={150} w={150}/>
        <Image src='https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1-ICONS_b6233563-9f3e-43f6-b158-5205886e2120.png?v=1645779546' h={150} w={150}/>
        <Image src='https://cdn.shopify.com/s/files/1/0361/8553/8692/files/4-ICONS.png?v=1645770027' h={150} w={150}/>
        <Image src='https://cdn.shopify.com/s/files/1/0361/8553/8692/files/2-ICONS.png?v=1645770027' h={150} w={150}/>
       </Flex>
    </div>
  )
}

export default Home