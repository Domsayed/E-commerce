import {Link as RouterLink} from 'react-router-dom'
import {Flex,Link,Box,Heading,Image,Text, textDecoration} from '@chakra-ui/react'
import Rating from './Rating'

const ProductCard=({product})=>{
    return (
        <Link  as ={RouterLink} to={`/product/${product._id}`} _hover={{color:"Blue", textDecoration:"none"}}> 
        
            <Box 
                      maxW="sm"
                      bgColor="red.100"
                      borderRadius='1g'
                      overflow='hidden'
                     _hover={{shadow:'lg'}}>
                 <Image  
                    src={product.image}
                    alt={product.name}
                    h='720px'
                    w='full'
                    objectFit='cover'/>

                <Flex py='5' px='5' justifyContent='space-between' direction='column'>
                    <Heading as='h4' fontSize='sm' mb='sm'>{product.name}</Heading>

                     <Flex alignItems='center' justifyContent='space-between'>
                       <Rating value ={product.rating}/>
                      <Text fontWeight='bold' fontSize='sm' mb='sm'>₹{product.price}</Text>
                    </Flex>
                </Flex>
            </Box>
        </Link>
    )
}
export default ProductCard;
