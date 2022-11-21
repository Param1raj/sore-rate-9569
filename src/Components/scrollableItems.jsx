import { Center, Container, Text, VStack, Box, Button } from "@chakra-ui/react";
import { Grid,GridItem } from "@chakra-ui/react";
import { useRef } from "react";
import { BsChevronRight } from 'react-icons/bs'
import { BsChevronLeft } from 'react-icons/bs';
import GridItems from "./GridItems";
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
    return <Center w={'full'} bg={'gray.100'} h='fit-content' mt={'20px'} pt={{base:"40px",sm:"40px",md:"45px",lg:"45px",xl:"50px"}}>
        <Box w='full' >
            <Container maxW={'6xl'} h='85%' display='flex' alignItems='flex-start'>
                    <Box display={'flex'} w='full' flexDirection='row' justifyContent={'space-between'} pl='20px'>
                        {/* Heading */}
                        <VStack spacing={0} alignItems='flexStart'>
                            <Text fontSize={{base:'20px',sm:"19px",md:"20px",lg:"20px",xl:"21px"}} as='b' letterSpacing='wider' color={'gray.600'} textAlign="left">You'll love to</Text>
                            <Text fontSize={{base:'20px',sm:"19px",md:"20px",lg:"20px",xl:"21px"}} as='b' letterSpacing='wider' textAlign="left" color={'gray.500'}>take these home</Text>
                            <Box bg='red.500' w='80px' p={0.5} mt={2} color='white'></Box>
                        </VStack>

                        {/* button */}
                        <Box style={{display: "flex",flexWrap: "wrap",justifyContent: "end"}}>
                            <Button borderRadius='50%' boxSize={{base:'60px',sm:"60px",md:"65px",lg:"67px",xl:"70px"}} onClick={() => { ref.current.scrollLeft += (-200); }} variant={'outline'}>
                                <BsChevronLeft size={30} />
                            </Button>
                            <Button variant={'outline'} onClick={() => {
                                ref.current.scrollLeft += 200;
                            }} borderRadius='50%'  boxSize={{base:'60px',sm:"60px",md:"65px",lg:"67px",xl:"70px"}}>
                                <BsChevronRight size={30} />
                            </Button>
                        </Box>
                    </Box>
            </Container>
            <Box mt={{base:'40px',sm:"30px",md:"30px",lg:"40px",xl:"40px"}} w='full' h={'370px'} mb={{base:'40px',sm:"30px",md:"30px",lg:"40px",xl:"40px"}} >
                <Grid w='full' h='370px' templateColumns={'repeat(10,1fr)'} gap='10px' overflowX={'hidden'}         className='scroll' sx={styles} ref={ref} scrollBehavior='smooth'>
                        <GridItem w={{base:'0px',sm:"0px",md:"0px",lg:"0px",xl:"120px"}} h={{base:'0px',sm:"0px",md:"0px",lg:"0px",xl:"250px"}}></GridItem>
                        {
                            data.map((ele)=>{
                                return <GridItems image={ele.image} heading={ele.heading} price={ele.price}/>
                            })
                        }
                </Grid>
            </Box>
        </Box>
    </Center>;
}