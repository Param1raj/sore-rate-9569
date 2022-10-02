import { Center, Container, Text, VStack, Box, Button, Image } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { useRef } from "react";
import { BiRupee } from 'react-icons/bi';
import { BsChevronRight } from 'react-icons/bs'
import { BsChevronLeft } from 'react-icons/bs';

const data = [
    {   id:'1',
        image:'https://p.rmjo.in/productSquare/8eblcfu5-500x500.jpg',
        heading:'Napster Metal Single Bed....',
        price:'290',
    },
    {   id:'2',
        image:'https://p.rmjo.in/productSquare/hs7hg508-500x500.jpg',
        heading:'Shaddle Show Rack Large',
        price:'189',
    },
    {id:'3',
        image:'https://p.rmjo.in/productSquare/py01t96m-500x500.jpg',
        heading:'Minion Bedside Table',
        price:'79',
    },
    {id:'4',
        image:'https://p.rmjo.in/productSquare/djbfgoay-500x500.jpg',
        heading:'Betty Dresser with Stool',
        price:'199',
    },
    {id:'5',
        image:'https://p.rmjo.in/productSquare/0a8lpvu1-500x500.jpg',
        heading:'Mocha Center Table',
        price:'69',
    },
    {id:'6',
        image:'https://p.rmjo.in/productSquare/n0fiqosf-500x500.jpg',
        heading:'Stuart Study Table',
        price:'149',
    },
    {id:'7',
        image:'https://p.rmjo.in/productSquare/jfd4uk64-500x500.jpg',
        heading:'Atticus Wooden Single ....',
        price:'290',
    },
    {id:'8',
        image:'https://p.rmjo.in/productSquare/0npj0a1d-500x500.jpg',
        heading:'Kipper Wooden Single Bed...',
        price:'690',
    },
    {id:'9',
        image:'https://p.rmjo.in/productSquare/eu26qig7-500x500.jpg',
        heading:'Megnum 1-door Wardro...',
        price:'259',
    }
]


export default function Items() {
    const styles = {
        '&::-webkit-scrollbar ': {
            display: 'none',
        }
    }
    const ref = useRef(null);
    return <Center w={'full'} bg={'gray.100'} h='650px' >
        <Box w='full' >
            <Container maxW={'6xl'} h='85%' display='flex' alignItems='flex-start'>
                
                    <Box display={'flex'} w='full' flexDirection='row' justifyContent={'space-between'} pl='20px'>
                        <VStack spacing={0} alignItems='flexStart'>
                            <Text fontSize='xl' as='b' letterSpacing='wider' color={'gray.600'} ml='-29px'>You'll love to</Text>
                            <Text fontSize='xl' as='b' letterSpacing='wider' color={'gray.500'}>take these home</Text>
                            <Box bg='red.500' w='80px' p={0.5} mt={2} color='white'></Box>
                        </VStack>
                        <Box>
                            <Button borderRadius='50%' boxSize={'70px'} onClick={() => { ref.current.scrollLeft += (-200); }} variant={'outline'}>
                                <BsChevronLeft size={30} />
                            </Button>
                            <Button variant={'outline'} onClick={() => {
                                ref.current.scrollLeft += 200;
                            }} borderRadius='50%' mr={'20px'} boxSize={'70px'}>
                                <BsChevronRight size={30} />
                            </Button>
                        </Box>
                    </Box>
              
            </Container>
            <Box mt='50px' w='full' h={'370px'} mb={'50px'} >
                <Grid w='full' h='370px' templateColumns={'repeat(10,1fr)'} gap='10px' overflowX={'scroll'} className='scroll' sx={styles} ref={ref} scrollBehavior='smooth'>
                    <GridItem w='120px' h='250px'></GridItem>
                    {/* <GridItem w='250px' h='340px'>
                        <Box maxW='sm' borderRadius='lg' bg={'whiteAlpha.900'} overflow='hidden' p={2.5}>
                            <Image src='https://p.rmjo.in/productSquare/8eblcfu5-500x500.jpg' alt='picture' />
                            <Box p='2' display={'flex'} flexDirection='column' alignItems='flex-start' >
                                <Box
                                    mt='1'
                                    fontWeight='semibold'
                                    as='h6'
                                    lineHeight='tight'
                                    noOfLines={1}
                                    // border='1px'
                                    textAlign={'left'}
                                >
                                    Napster Metal Single Bed....
                                </Box>
                                <Text mt={'10px'} color='gray.400'>Rent</Text>
                                <Box display={'flex'} flexDirection='row'>
                                    <Box display={'flex'} flexDirection='row' alignItems={'center'} >
                                        <BiRupee />
                                        <Box as='span' color='gray.900' fontSize='sm'>290/mo</Box>
                                    </Box>
                                    <Button ml='70px' borderRadius={'0px'} w='80px' h={'30px'} colorScheme='red' variant='outline' _hover={{ bg: 'red', color: 'white' }}>
                                        See More
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </GridItem> */}
                    {
                        data.map((ele)=>{
                            return <GridItem w='250px' h='340px'>
                            <Box maxW='sm' borderRadius='lg' bg={'whiteAlpha.900'} overflow='hidden' p={2.5}>
                                <Image src={ele.image} alt='picture' />
                                <Box p='2' display={'flex'} flexDirection='column' alignItems='flex-start' >
                                    <Box
                                        mt='1'
                                        fontWeight='semibold'
                                        as='h6'
                                        lineHeight='tight'
                                        noOfLines={1}
                                        // border='1px'
                                        textAlign={'left'}
                                    >
                                        {
                                            ele.heading
                                        }
                                    </Box>
                                    <Text mt={'10px'} color='gray.400'>Rent</Text>
                                    <Box display={'flex'} flexDirection='row'>
                                        <Box display={'flex'} flexDirection='row' alignItems={'center'} >
                                            <BiRupee />
                                            <Box as='span' color='gray.900' fontSize='sm'>{ele.price}/mo</Box>
                                        </Box>
                                        <Button ml='70px' borderRadius={'0px'} w='80px' h={'30px'} colorScheme='red' variant='outline' _hover={{ bg: 'red', color: 'white' }}>
                                            See More
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                            </GridItem>
                        })
                    }

                    {/* <GridItem w='250px' h='340px'>
                        <Box maxW='sm' borderRadius='lg' bg={'whiteAlpha.900'} overflow='hidden' p={2.5}>
                            <Image src='https://p.rmjo.in/productSquare/8eblcfu5-500x500.jpg' alt='picture' />
                            <Box p='2' display={'flex'} flexDirection='column' alignItems='flex-start' >
                                <Box
                                    mt='1'
                                    fontWeight='semibold'
                                    as='h6'
                                    lineHeight='tight'
                                    noOfLines={1}
                                    // border='1px'
                                    textAlign={'left'}
                                >
                                    Napster Metal Single Bed....
                                </Box>
                                <Text mt={'10px'} color='gray.400'>Rent</Text>
                                <Box display={'flex'} flexDirection='row'>
                                    <Box display={'flex'} flexDirection='row' alignItems={'center'} >
                                        <BiRupee />
                                        <Box as='span' color='gray.900' fontSize='sm'>290/mo</Box>
                                    </Box>
                                    <Button ml='70px' borderRadius={'0px'} w='80px' h={'30px'} colorScheme='red' variant='outline' _hover={{ bg: 'red', color: 'white' }}>
                                        See More
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </GridItem>
                    <GridItem w='250px' h='340px'>
                        <Box maxW='sm' borderRadius='lg' bg={'whiteAlpha.900'} overflow='hidden' p={2.5}>
                            <Image src='https://p.rmjo.in/productSquare/8eblcfu5-500x500.jpg' alt='picture' />
                            <Box p='2' display={'flex'} flexDirection='column' alignItems='flex-start' >
                                <Box
                                    mt='1'
                                    fontWeight='semibold'
                                    as='h6'
                                    lineHeight='tight'
                                    noOfLines={1}
                                    // border='1px'
                                    textAlign={'left'}
                                >
                                    Napster Metal Single Bed....
                                </Box>
                                <Text mt={'10px'} color='gray.400'>Rent</Text>
                                <Box display={'flex'} flexDirection='row'>
                                    <Box display={'flex'} flexDirection='row' alignItems={'center'} >
                                        <BiRupee />
                                        <Box as='span' color='gray.900' fontSize='sm'>290/mo</Box>
                                    </Box>
                                    <Button ml='70px' borderRadius={'0px'} w='80px' h={'30px'} colorScheme='red' variant='outline' _hover={{ bg: 'red', color: 'white' }}>
                                        See More
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </GridItem>
                    <GridItem w='250px' h='340px'>
                        <Box maxW='sm' borderRadius='lg' bg={'whiteAlpha.900'} overflow='hidden' p={2.5}>
                            <Image src='https://p.rmjo.in/productSquare/8eblcfu5-500x500.jpg' alt='picture' />
                            <Box p='2' display={'flex'} flexDirection='column' alignItems='flex-start' >
                                <Box
                                    mt='1'
                                    fontWeight='semibold'
                                    as='h6'
                                    lineHeight='tight'
                                    noOfLines={1}
                                    // border='1px'
                                    textAlign={'left'}
                                >
                                    Napster Metal Single Bed....
                                </Box>
                                <Text mt={'10px'} color='gray.400'>Rent</Text>
                                <Box display={'flex'} flexDirection='row'>
                                    <Box display={'flex'} flexDirection='row' alignItems={'center'} >
                                        <BiRupee />
                                        <Box as='span' color='gray.900' fontSize='sm'>290/mo</Box>
                                    </Box>
                                    <Button ml='70px' borderRadius={'0px'} w='80px' h={'30px'} colorScheme='red' variant='outline' _hover={{ bg: 'red', color: 'white' }}>
                                        See More
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </GridItem>
                    <GridItem w='250px' h='340px'>
                        <Box maxW='sm' borderRadius='lg' bg={'whiteAlpha.900'} overflow='hidden' p={2.5}>
                            <Image src='https://p.rmjo.in/productSquare/8eblcfu5-500x500.jpg' alt='picture' />
                            <Box p='2' display={'flex'} flexDirection='column' alignItems='flex-start' >
                                <Box
                                    mt='1'
                                    fontWeight='semibold'
                                    as='h6'
                                    lineHeight='tight'
                                    noOfLines={1}
                                    // border='1px'
                                    textAlign={'left'}
                                >
                                    Napster Metal Single Bed....
                                </Box>
                                <Text mt={'10px'} color='gray.400'>Rent</Text>
                                <Box display={'flex'} flexDirection='row'>
                                    <Box display={'flex'} flexDirection='row' alignItems={'center'} >
                                        <BiRupee />
                                        <Box as='span' color='gray.900' fontSize='sm'>290/mo</Box>
                                    </Box>
                                    <Button ml='70px' borderRadius={'0px'} w='80px' h={'30px'} colorScheme='red' variant='outline' _hover={{ bg: 'red', color: 'white' }}>
                                        See More
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </GridItem>
                    <GridItem w='250px' h='340px'>
                        <Box maxW='sm' borderRadius='lg' bg={'whiteAlpha.900'} overflow='hidden' p={2.5}>
                            <Image src='https://p.rmjo.in/productSquare/8eblcfu5-500x500.jpg' alt='picture' />
                            <Box p='2' display={'flex'} flexDirection='column' alignItems='flex-start' >
                                <Box
                                    mt='1'
                                    fontWeight='semibold'
                                    as='h6'
                                    lineHeight='tight'
                                    noOfLines={1}
                                    // border='1px'
                                    textAlign={'left'}
                                >
                                    Napster Metal Single Bed....
                                </Box>
                                <Text mt={'10px'} color='gray.400'>Rent</Text>
                                <Box display={'flex'} flexDirection='row'>
                                    <Box display={'flex'} flexDirection='row' alignItems={'center'} >
                                        <BiRupee />
                                        <Box as='span' color='gray.900' fontSize='sm'>290/mo</Box>
                                    </Box>
                                    <Button ml='70px' borderRadius={'0px'} w='80px' h={'30px'} colorScheme='red' variant='outline' _hover={{ bg: 'red', color: 'white' }}>
                                        See More
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </GridItem>
                    <GridItem w='250px' h='340px'>
                        <Box maxW='sm' borderRadius='lg' bg={'whiteAlpha.900'} overflow='hidden' p={2.5}>
                            <Image src='https://p.rmjo.in/productSquare/8eblcfu5-500x500.jpg' alt='picture' />
                            <Box p='2' display={'flex'} flexDirection='column' alignItems='flex-start' >
                                <Box
                                    mt='1'
                                    fontWeight='semibold'
                                    as='h6'
                                    lineHeight='tight'
                                    noOfLines={1}
                                    // border='1px'
                                    textAlign={'left'}
                                >
                                    Napster Metal Single Bed....
                                </Box>
                                <Text mt={'10px'} color='gray.400'>Rent</Text>
                                <Box display={'flex'} flexDirection='row'>
                                    <Box display={'flex'} flexDirection='row' alignItems={'center'} >
                                        <BiRupee />
                                        <Box as='span' color='gray.900' fontSize='sm'>290/mo</Box>
                                    </Box>
                                    <Button ml='70px' borderRadius={'0px'} w='80px' h={'30px'} colorScheme='red' variant='outline' _hover={{ bg: 'red', color: 'white' }}>
                                        See More
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </GridItem>
                    <GridItem w='250px' h='340px'>
                        <Box maxW='sm' borderRadius='lg' bg={'whiteAlpha.900'} overflow='hidden' p={2.5}>
                            <Image src='https://p.rmjo.in/productSquare/8eblcfu5-500x500.jpg' alt='picture' />
                            <Box p='2' display={'flex'} flexDirection='column' alignItems='flex-start' >
                                <Box
                                    mt='1'
                                    fontWeight='semibold'
                                    as='h6'
                                    lineHeight='tight'
                                    noOfLines={1}
                                    // border='1px'
                                    textAlign={'left'}
                                >
                                    Napster Metal Single Bed....
                                </Box>
                                <Text mt={'10px'} color='gray.400'>Rent</Text>
                                <Box display={'flex'} flexDirection='row'>
                                    <Box display={'flex'} flexDirection='row' alignItems={'center'} >
                                        <BiRupee />
                                        <Box as='span' color='gray.900' fontSize='sm'>290/mo</Box>
                                    </Box>
                                    <Button ml='70px' borderRadius={'0px'} w='80px' h={'30px'} colorScheme='red' variant='outline' _hover={{ bg: 'red', color: 'white' }}>
                                        See More
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </GridItem>
                    <GridItem w='250px' h='340px'>
                        <Box maxW='sm' borderRadius='lg' bg={'whiteAlpha.900'} overflow='hidden' p={2.5}>
                            <Image src='https://p.rmjo.in/productSquare/8eblcfu5-500x500.jpg' alt='picture' />
                            <Box p='2' display={'flex'} flexDirection='column' alignItems='flex-start' >
                                <Box
                                    mt='1'
                                    fontWeight='semibold'
                                    as='h6'
                                    lineHeight='tight'
                                    noOfLines={1}
                                    // border='1px'
                                    textAlign={'left'}
                                >
                                    Napster Metal Single Bed....
                                </Box>
                                <Text mt={'10px'} color='gray.400'>Rent</Text>
                                <Box display={'flex'} flexDirection='row'>
                                    <Box display={'flex'} flexDirection='row' alignItems={'center'} >
                                        <BiRupee />
                                        <Box as='span' color='gray.900' fontSize='sm'>290/mo</Box>
                                    </Box>
                                    <Button ml='70px' borderRadius={'0px'} w='80px' h={'30px'} colorScheme='red' variant='outline' _hover={{ bg: 'red', color: 'white' }}>
                                        See More
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </GridItem> */}
                </Grid>
            </Box>
        </Box>
    </Center>;
}