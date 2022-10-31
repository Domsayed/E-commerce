import {Flex } from '@chakra-ui/react'

const FormContainer=({children,width='xl'})=>{
    return(
        <Flex
            direction='column'
            boxShadow='xl'
            rounded='md'
            bgColor='gray.500'
            p='10'
            width={width}>
            {children}
        </Flex>
    )
}

export default FormContainer;