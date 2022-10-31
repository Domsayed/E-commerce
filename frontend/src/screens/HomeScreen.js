import {Grid,Heading, } from '@chakra-ui/react';
import { useEffect, } from 'react';
import {useSelector,useDispatch} from 'react-redux';



import ProductCard from '../components/ProductCard';
import { listProducts } from '../actions/productAction';
import Loader from '../components/Loader'
import Message from '../components/Message'

const HomeScreen = () => {
	const dispatch = useDispatch();

	const productList = useSelector((state) => state.productList);
	const { loading, products, error } = productList;

	useEffect(() => {
		dispatch(listProducts());
	}, [dispatch]);


   
    return (
        <>
             <Heading as='h2' mb='8' fontSize='xl' py='6'>Latest Product </Heading>

            {loading 
             ? (
                <Loader/>
            ):error ? (
                <Message type='error'>{error}</Message>
            ):(

                <Grid templateColumns='1fr 1fr 1fr 1fr' gap='8'>
                  {products.map((product) => (
                    <ProductCard product={product} key={product._id}/>
                   ))}
                </Grid>
            )}
            
       </>

    );
};


export default HomeScreen;