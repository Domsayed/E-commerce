import {Box,Flex, Heading,Link,Icon,MenuButton,Menu,MenuList,MenuItem,Button} from '@chakra-ui/react'
import {Link as RouterLink ,useNavigate} from 'react-router-dom'
import { useState } from 'react';
import { HiMenuAlt3 , HiOutlineShoppingBag , HiUser} from "react-icons/hi";
import { IoChevronDown } from 'react-icons/io5';
import { useDispatch,useSelector } from 'react-redux';
import {logout} from '../actions/userActions'





const Header = ()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const [show ,setShow] =useState(false);

    const userLogin =useSelector((state)=>state.userLogin)
    const {userInfo}=userLogin;

    const logoutHandler=()=>{
        dispatch(logout());
        navigate('/');
    }

    return (
    
        <Flex
        as='header'
        align='center'
        justifyContent='space-between'
        wrap='wrap'
        py='6'
        px='6'
        bgColor='gray.500'
        w='100%'
        top='0'
        pos='fixed'
        zIndex='10'>
                <Heading 
                        as='header'
                        color='black'
                        fontWeight='bold'
                        letterSpacing='md'
                        size='md'>
                    <Link   as={RouterLink}  to='/' 
                       _hover={{color:'whiteAlpha.300', textDecoration:'none'}}>Rststore...</Link>
                </Heading>

                <Box 
                    display={{base:'block' , md :"none" , sm:'block'}}
                    onClick={()=> setShow(!show)}>
                    <Icon as={HiMenuAlt3}  w="6" h='7' _hover={{color:'whiteAlpha.300'}} />
                </Box>

                <Box
                    display={{base:'block'? 'block':'none', md:'flex'}}
                    width={{base:'full', md:'auto'}}
                    alignContent='center'>
                    <Link
                        as={RouterLink}
                        to="/cart"
                        fontWeight='bold'
                        fontSize="sm"
                        alignItems='center'
                        _hover={{color:'whiteAlpha.300'}}
                        mr='5'
                        color='black'
                        display='flex'>
                        <Icon as={ HiOutlineShoppingBag } w='5' h='4' mr='1' _hover={{color:'whiteAlpha.300'}}/>
                        CART</Link>
                            
                            
                        {userInfo ? (
					<Menu>
						<MenuButton
							as={Button}
							rightIcon={<IoChevronDown />}
							_hover={{ textDecor: 'none', opacity: '0.7' }}>
							{userInfo.name}   
						</MenuButton>
						<MenuList>
							<MenuItem as={RouterLink} to='/profile'>
								Profile
							</MenuItem>
							<MenuItem onClick={logoutHandler}>Logout</MenuItem>
						</MenuList>
					</Menu>
				) : (
					<Link
						as={RouterLink}
						to='/login'
						fontSize='sm'
						letterSpacing='wide'
						color='whiteAlpha.600'
						fontWeight='bold'
						textTransform='uppercase'
						mr='5'
						display='flex'
						alignItems='center'
						_hover={{ color: 'whiteAlpha.800' }}
						mt={{ base: 4, md: 0 }}>
						<Icon as={HiUser} mr='1' w='4' h='4' />
						Login
					</Link>
				)}

                {/* Admin Menu */}
				{userInfo && userInfo.isAdmin && (
					<Menu>
						<MenuButton
							ml='1'
                            pt='2'
                            paddingRight='2'
                            paddingLeft='2'
                            rounded='xl'
							bgColor='white'
							fontSize='md'
							fontWeight='semibold'
							as={Link}
							textTransform='uppercase'
							_hover={{ textDecoration: 'none', opacity: '0.7' }}>
							Manage <Icon as={IoChevronDown} />
						</MenuButton>
						<MenuList>
							<MenuItem as={RouterLink} to='/admin/userlist'>
								All Users
							</MenuItem>
							<MenuItem as={RouterLink} to='/admin/productlist'>
								All Products
							</MenuItem>
							<MenuItem as={RouterLink} to='/admin/orderlist'>
								All Orders
							</MenuItem>
						</MenuList>
					</Menu>
				)}
			</Box>
		</Flex>
	);
};

export default Header;
