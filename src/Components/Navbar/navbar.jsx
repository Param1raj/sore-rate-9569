// import { Box, Center, Container, Button, Image, Heading, Menu, MenuButton, MenuList, MenuItem, Input, InputGroup, Icon, InputRightElement } from "@chakra-ui/react";
import { ChevronDownIcon, Search2Icon } from '@chakra-ui/icons'
import { FaCartPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Box, Input, Menu, MenuButton, MenuList, useDisclosure, MenuItem, Image, Button, InputGroup, InputRightElement, Icon, Heading } from "@chakra-ui/react";
import Login from "../../Pages/Login";
import { useState, useRef, useEffect } from "react";
import axios from 'axios';
import { Container, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im';






export default function NavbarBox() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [array, setArray] = useState([]);
    const [auth, setAuth] = useState(false);
    const [num, setNum] = useState('');
    const [city, setCity] = useState(false);
    const [change, setChange] = useState('');
    const [query, setQuery] = useState("");
    const [visible, setVisible] = useState(false);
    const [side, setSide] = useState(false);


    const handleChange = (e) => {
        setQuery(e.target.value)
        console.log(e.target.value);
        axios.get("http://localhost:3001/Cities", {
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
        axios.get("http://localhost:3001/Cities").then((res) => setArray(res.data)).catch((err) => console.log(err));
    }, [])
    return <>
        {/* <Navbar bg="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
            </Container>
        </Navbar> */}

        <OuterBoxNavbar>
            <InnerBox>


                <SidebarBox side={side}>
                    <Content>
                        <ul style={{ textAlign: "left",
                        color: "white",
                        fontSize: "21px",listStyle: "none"}}>
                        <li> Home </li>
                        <li> Cart </li>
                        <li> <Button
                            size='md'
                            height='100%'
                            width='100%'
                            border='2px'
                            borderColor='red.500'
                            bg="red.500"
                            color={'white'}
                            _hover={{ bg: "white", color: "red.500" }}
                            onClick={onOpen}
                        >
                            {auth ? num : "Login/Signup"}
                        </Button>
                            <Login isOpen={isOpen} onClose={onClose} num={num} setNum={setNum} setAuth={setAuth} /> </li>
                    </ul>
                </Content>
            </SidebarBox>

            <Logo>
                <img src="	https://www.rentomojo.com/public/images/Home/new/logo.svg" alt="" />
                <div style={{ fontFamily: "sans-serif", fontWeight: 'bold', color: 'gray', fontSize: "21px" }}>rentomojo</div>
            </Logo>
            <ManupulatableDiv>
                <Box mx={2}>
                    <Menu>
                        <CityWrapper>
                        <MenuButton w='100%' as={Button} rightIcon={<ChevronDownIcon />} onClick={() => setVisible(!visible)} bg='white'>
                            {
                                !city ? "City" : change
                            }
                        </MenuButton>
                        </CityWrapper>
                        <MenuList w={visible ? '1050px' : "0px"} display='flex' flexDirection='row' flexWrap='wrap' p='0px'>
                            <Input type='text' my='10px' onChange={handleChange} placeholder="Search Your City" />
                            {
                                array.map((ele, i) => {
                                    return (<MenuItem w={visible ? "128px" : "0px"} key={ele.id} p='0px' h={visible ? '100px' : '0px'} >
                                        <Box
                                            as='button'
                                            onClick={() => HandleClick(ele.city)}
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
                                            <Box ml={visible ? "15px" : "0px"} boxSize={visible ? '80px' : "0px"} mb='0px' border={'1px'} borderColor='red' p='1' borderRadius={'full'}>
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
                        <InputBox>
                            <Input placeholder='Search for product' w='100%' />
                        </InputBox>
                        <InputRightElement children={<Search2Icon color='gray.500' />} />
                    </InputGroup>
                </Box>
                <NavLink to='/cart' style={{ textDecoration: 'none', color: 'black' }} ><Box display='flex' alignItems='center'>
                    <Icon as={FaCartPlus} mx='10px' />
                    Cart
                </Box></NavLink>
                <ButtonDiv >
                    <Button
                        size='md'
                        height='100%'
                        width='100%'
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
                </ButtonDiv>
            </ManupulatableDiv>
            <SideBarOption>
                <button onClick={() => setSide(!side)}>
                    <GiHamburgerMenu />
                </button>
            </SideBarOption>
        </InnerBox>
    </OuterBoxNavbar>

    </>  // <Center w='full' h='60px' mt={0} style={{ position: 'fixed', top: '0px', zIndex: '4', }} bg='white'>
    //     <Container maxW='6xl' h='40px' p={0} display='flex' gap={12} position='fixed'>
    //         <NavLink to='/' style={{ textDecoration: 'none' }}>
    //             <Box display='flex' alignItems='center' gap={2}>
    //                 <Image
    //                     boxSize='40px'
    //                     objectFit='cover'
    //                     src='https://www.rentomojo.com/public/images/Home/new/logo.svg'
    //                     alt='Dan Abramov'
    //                 />
    //                 <Heading as='h4' size='md' color='blackAlpha.700'>rentomojo</Heading>
    //             </Box>
    //         </NavLink>
    //         <Box mx={2}>
    //             <Menu>
    //                 <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bg='white'>
    //                     {
    //                         !city ? "City" : change
    //                     }
    //                 </MenuButton>
    //                 <MenuList w='1050px' display='flex' flexDirection='row' flexWrap='wrap' p='0px'>
    //                     <Input type='text' my='10px' onChange={handleChange} placeholder="Search Your City" />
    //                     {
    //                         array.map((ele) => {
    //                             return (<MenuItem w='128px' key={ele.id} p='0px' h='100px' >
    //                                 <Box
    //                                     as='button'
    //                                     onClick={()=>HandleClick(ele.city)}
    //                                     height='full'
    //                                     w='full'
    //                                     // p='10px'
    //                                     lineHeight='1.2'
    //                                     // transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
    //                                     border='1px solid white'
    //                                     px='8px'
    //                                     borderRadius='10px'
    //                                     fontSize='14px'
    //                                     fontWeight='semibold'
    //                                     // bg='#f5f6f7'
    //                                     // borderColor='#ccd0d5'
    //                                     bg='white'
    //                                     color='#4b4f56'
    //                                     _hover={{
    //                                         border: '1px solid red',
    //                                         bg: 'white'
    //                                     }}

    //                                 >
    //                                     <Box ml="15px" boxSize='80px' mb='0px' border={'1px'} borderColor='red' p='1' borderRadius={'full'}>
    //                                         <Image src={ele.Image} borderRadius={'100%'} alt='Dan Abramov' />
    //                                     </Box>
    //                                     {ele.city}
    //                                 </Box></MenuItem>)
    //                         })
    //                     }
    //                 </MenuList>
    //             </Menu>
    //         </Box>
    //         <Box>
    //             <InputGroup>
    //                 <Input placeholder='Search for product' w='500px' />
    //                 <InputRightElement children={<Search2Icon color='gray.500' />} />
    //             </InputGroup>
    //         </Box>

    //         <Box display='flex' alignItems='center'>
    //             <Icon as={FaCartPlus} mx='10px' />
    //             <NavLink to='/cart' style={{ textDecoration: 'none', color: 'black' }}>Cart </NavLink>
    //         </Box>
    //         <Box>
    //             <Button
    //                 size='md'
    //                 height='40px'
    //                 width='150px'
    //                 border='2px'
    //                 borderColor='red.500'
    //                 bg="red.500"
    //                 color={'white'}
    //                 _hover={{ bg: "white", color: "red.500" }}
    //                 onClick={onOpen}
    //             >
    //                 {auth ? num : "Login/Signup"}
    //             </Button>
    //             <Login isOpen={isOpen} onClose={onClose} num={num} setNum={setNum} setAuth={setAuth} />
    //         </Box>
    //     </Container>
    // </Center>)
}


export const OuterBoxNavbar = styled.div`
width:100%;
height:60px;
// border:1px solid black;
padding:10px;
`

export const InnerBox = styled.div`
    width:87%;
    height:100%;
    margin:auto;
    display:flex;
    gap: 20px;
    align-items:center;
    @media all and (max-width:1020px){
        width:100%;
        justify-content:space-between;
    }
`

export const Logo = styled.div`
    display:flex;
    align-items:center;
    gap:7px;
`
export const ManupulatableDiv = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
@media all and (max-width:1020px){
    opacity:0;
    width:0%;
}
`
export const InputBox = styled.div`
width:500px;
@media all and (max-width:1020px){
    width:0px;
}
`

export const InputGroupDiv = styled.div`
border: 1px solid #f5f1f1;
padding: 5px;
border-radius: 10px;
`


export const ButtonDiv = styled.div`
width:152px;
height:40px;
@media all and (max-width:1020px){
    width:0px;
    height:0px;
}
`


export const SideBarOption = styled.div`
width: 0px;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
font-size: 0px;
opacity:0;
@media all and (max-width:1020px){
opacity:1;
width: 78px;
height: 100%;
font-size: 26px;
}
`
export const Content = styled.div`
z-index:inherit;
padding:20px;

`

export const SidebarBox = styled.div`
width:${props => props.side ? "40vw" : "0px"};
z-index: 21;
position: absolute;
left:0px;
top:0px;
height: ${props => props.side ? "100vh" : "0px"};
background: red;
opacity:${props => props.side ? "1" : "0"};
transition: width 1s, transform 2s;
`

export const CityWrapper = styled.div`
 width:100px;
 @media all and (max-width:1020px){
    width:0px;
 }
`

export const CartWrapper = styled.div`
  width
`