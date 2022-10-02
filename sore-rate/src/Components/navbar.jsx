import { Box, Center, Container, Button, Image, Heading, Menu, MenuButton, MenuList, MenuItem, Input, InputGroup, Icon, InputRightElement } from "@chakra-ui/react";
import { ChevronDownIcon, Search2Icon } from '@chakra-ui/icons'
import { FaCartPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import Login from "../Pages/Login";
import { useState, useRef, useEffect } from "react";
import axios from 'axios';
export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [array, setArray] = useState([]);
    const [auth, setAuth] = useState(false);
    const [num, setNum] = useState('');
    const [city, setCity] = useState(false);
    const [change, setChange] = useState('');
    const [query, setQuery] = useState("");

    const handleChange = (e) => {
        setQuery(e.target.value)
        console.log(e.target.value);
        axios.get("http://localhost:3000/Cities", {
            params: {
                q: query,
            }
        }).then((res) => setArray(res.data)).catch((err) => console.log(err));
    }
    const HandleClick = (val) => {
        setCity(true);
        setChange(val);
        console.log(change)
    }
    useEffect(() => {
        axios.get("http://localhost:3000/Cities").then((res) => setArray(res.data)).catch((err) => console.log(err));
        // console.log(array)
    }, [])
    return (
        <Center w='full' h='60px' mt={0} style={{ position: 'fixed', top: '0px', zIndex: '4', }} bg='white'>
            <Container maxW='6xl' h='40px' p={0} display='flex' gap={12} position='fixed'>
                <NavLink to='/' style={{ textDecoration: 'none' }}>
                    <Box display='flex' alignItems='center' gap={2}>
                        <Image
                            boxSize='40px'
                            objectFit='cover'
                            src='https://www.rentomojo.com/public/images/Home/new/logo.svg'
                            alt='Dan Abramov'
                        />
                        <Heading as='h4' size='md' color='blackAlpha.700'>rentomojo</Heading>
                    </Box>
                </NavLink>
                <Box mx={2}>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bg='white'>
                            {
                                !city ? "City" : change
                            }
                        </MenuButton>
                        <MenuList w='1050px' display='flex' flexDirection='row' flexWrap='wrap' p='0px'>
                            <Input type='text' my='10px' onChange={handleChange} placeholder="Search Your City" />
                            {
                                array.map((ele) => {
                                    return (<MenuItem w='128px' key={ele.id} p='0px' h='100px' >
                                        <Box
                                            as='button'
                                            onClick={()=>HandleClick(ele.city)}
                                            height='full'
                                            w='full'
                                            // p='10px'
                                            lineHeight='1.2'
                                            // transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                                            border='1px solid white'
                                            px='8px'
                                            borderRadius='10px'
                                            fontSize='14px'
                                            fontWeight='semibold'
                                            // bg='#f5f6f7'
                                            // borderColor='#ccd0d5'
                                            bg='white'
                                            color='#4b4f56'
                                            _hover={{
                                                border: '1px solid red',
                                                bg: 'white'
                                            }}

                                        >
                                            <Box ml="15px" boxSize='80px' mb='0px' border={'1px'} borderColor='red' p='1' borderRadius={'full'}>
                                                <Image src={ele.Image} borderRadius={'100%'} alt='Dan Abramov' />
                                            </Box>
                                            {ele.city}
                                        </Box></MenuItem>)
                                })
                            }
                        </MenuList>
                    </Menu>
                </Box>
                <Box>
                    <InputGroup>
                        <Input placeholder='Search for product' w='500px' />
                        <InputRightElement children={<Search2Icon color='gray.500' />} />
                    </InputGroup>
                </Box>

                <Box display='flex' alignItems='center'>
                    <Icon as={FaCartPlus} mx='10px' />
                    <NavLink to='/cart' style={{ textDecoration: 'none', color: 'black' }}>Cart </NavLink>
                </Box>
                <Box>
                    <Button
                        size='md'
                        height='40px'
                        width='150px'
                        border='2px'
                        borderColor='red.500'
                        bg="red.500"
                        color={'white'}
                        _hover={{ bg: "white", color: "red.500" }}
                        onClick={onOpen}
                    >
                        {auth ? num : "Login/Signup"}
                    </Button>
                    <Login isOpen={isOpen} onClose={onClose} num={num} setNum={setNum} setAuth={setAuth} />
                </Box>
            </Container>
        </Center>)
}
