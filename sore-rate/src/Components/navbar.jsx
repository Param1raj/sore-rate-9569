import { Box, Center, Container, Button, Image, Heading, Menu, MenuButton, MenuList, MenuItem, Input, InputGroup, Icon, InputRightElement} from "@chakra-ui/react";
import { ChevronDownIcon,Search2Icon } from '@chakra-ui/icons'
import { FaCartPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
export default function Navbar() {

    return (
        <Center w='full' h='60px'>
            <Container maxW='container.lg' h='40px' p={0} display='flex' gap={4}>
                <NavLink to='/' style={{textDecoration:'none'}}>
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
                            City
                        </MenuButton>
                        <MenuList w='800px' display='flex' flexDirection='row' flexWrap='wrap' p='10px'>
                            <Input type='text' my='10px' placeholder="Search Your City" />
                            <MenuItem w='128px' p='0px' h='100px'>
                                <Box
                                    as='button'
                                    height='full'
                                    w='full'
                                    lineHeight='1.2'
                                    border='1px solid white'
                                    px='8px'
                                    borderRadius='10px'
                                    fontSize='14px'
                                    fontWeight='semibold'
                                    color='#4b4f56'
                                    bg='white'
                                    _hover={{
                                        border: '1px solid red',
                                        bg: 'white'
                                    }}
                                >
                                    Join Group
                                </Box>
                            </MenuItem>
                            <MenuItem w='128px' p='0px' h='100px'>
                                <Box
                                    as='button'
                                    height='full'
                                    w='full'
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
                                    Join Group
                                </Box></MenuItem>
                            <MenuItem w='128px' p='0px' h='100px'>
                                <Box
                                    as='button'
                                    height='full'
                                    w='full'
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
                                    Join Group
                                </Box></MenuItem>
                            <MenuItem w='128px' p='0px' h='100px'>
                                <Box
                                    as='button'
                                    height='full'
                                    w='full'
                                    lineHeight='1.2'
                                    // transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                                    border='1px solid white'
                                    px='8px'
                                    borderRadius='10px'
                                    fontSize='14px'
                                    fontWeight='semibold'
                                    // bg='#f5f6f7'
                                    // borderColor='#ccd0d5'
                                    color='#4b4f56'
                                    bg='white'
                                    _hover={{
                                        border: '1px solid red',
                                        bg: 'white'
                                    }}
                                >
                                    Join Group
                                </Box>
                            </MenuItem>
                            <MenuItem w='128px' p='0px' h='100px'>
                                <Box
                                    as='button'
                                    height='full'
                                    w='full'
                                    lineHeight='1.2'
                                    // transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                                    border='1px solid white'
                                    px='8px'
                                    borderRadius='10px'
                                    fontSize='14px'
                                    fontWeight='semibold'
                                    // bg='#f5f6f7'
                                    // borderColor='#ccd0d5'
                                    color='#4b4f56'
                                    bg='white'
                                    _hover={{
                                        border: '1px solid red',
                                        bg: 'white'
                                    }}
                                >
                                    Join Group
                                </Box></MenuItem>
                            <MenuItem w='128px' p='0px' h='100px'>
                                <Box
                                    as='button'
                                    height='full'
                                    w='full'
                                    lineHeight='1.2'
                                    // transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                                    border='1px solid white'
                                    px='8px'
                                    borderRadius='10px'
                                    fontSize='14px'
                                    fontWeight='semibold'
                                    // bg='#f5f6f7'
                                    // borderColor='#ccd0d5'
                                    color='#4b4f56'
                                    bg='white'
                                    _hover={{
                                        border: '1px solid red',
                                        bg: 'white'
                                    }}
                                >
                                    Join Group
                                </Box></MenuItem>
                            <MenuItem w='128px' p='0px' h='100px'>
                                <Box
                                    as='button'
                                    height='full'
                                    w='full'
                                    lineHeight='1.2'
                                    // transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                                    border='1px solid white'
                                    px='8px'
                                    borderRadius='10px'
                                    fontSize='14px'
                                    fontWeight='semibold'
                                    // bg='#f5f6f7'
                                    // borderColor='#ccd0d5'
                                    color='#4b4f56'
                                    bg='white'
                                    _hover={{
                                        border: '1px solid red',
                                        bg: 'white'
                                    }}
                                >
                                    Join Group
                                </Box></MenuItem>
                            <MenuItem w='128px' p='0px' h='100px'>
                                <Box
                                    as='button'
                                    height='full'
                                    w='full'
                                    lineHeight='1.2'
                                    // transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                                    border='1px solid white'
                                    px='8px'
                                    borderRadius='10px'
                                    fontSize='14px'
                                    fontWeight='semibold'
                                    // bg='#f5f6f7'
                                    // borderColor='#ccd0d5'
                                    color='#4b4f56'
                                    bg='white'
                                    _hover={{
                                        border: '1px solid red',
                                        bg: 'white'
                                    }}
                                >
                                    Join Group
                                </Box></MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Box>
                    <InputGroup>
                        <Input placeholder='Search for product' w='500px'/>
                        <InputRightElement children={<Search2Icon color='gray.500' />} />
                    </InputGroup>
                </Box>
                
                <Box display='flex' alignItems='center'>
                    <Icon as={FaCartPlus} mx='10px'/>
                    <NavLink to='/cart'style={{textDecoration:'none',color:'black'}}>Cart </NavLink>
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
                    _hover={{bg:"white",color:"red.500"}}
                    >
                    Login/Signup 
                    </Button>
                </Box>
            </Container>
        </Center>)
}
