import{ Flex ,Spinner} from '@chakra-ui/react'

const Loader = ()=> {
    return (
         
    <Flex alignItems='center' justifyContent='center'>
    <Spinner 
    thickness='4px'
    speed='0.5s'
    emptyColor='black.500'
    color='gray'
    size='xl'
    label='loading..'/> 
    </Flex>);

}
export default Loader;