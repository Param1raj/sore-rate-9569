import { Center, Container, HStack, Text, VStack, Box, Button } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { useRef } from "react";

export default function Items() {
    const styles = {
        '&::-webkit-scrollbar ': {
            display: 'none',
        }
    }
    const ref = useRef(null);
    return <Center w={'full'} bg={'gray.100'} h='650px' pt={'100px'}>
        <Box w='full'>
            <Container maxW={'container.lg'} h='85%' display='flex' alignItems='flexStart'>
                <VStack spacing={4} w='full' display={'flex'} alignItems='flexStart'>
                    <HStack >
                        <VStack spacing={0} alignItems='flexStart'>
                            <Text fontSize='xl' as='b' letterSpacing='wider' color={'gray.600'} ml='-29px'>You'll love to</Text>
                            <Text fontSize='xl' as='b' letterSpacing='wider' color={'gray.500'}>take these home</Text>
                            <Box bg='red.500' w='80px' p={0.5} mt={2} color='white'></Box>
                        </VStack>
                        <Box><Button variant={'outline'} onClick={(scrollOffset) => {
                                ref.current.scrollLeft += 200;
                        }}>Add</Button><Button onClick={() => {ref.current.scrollLeft += (-200); console.log(ref.current.scrollbar.length) }} variant={'outline'}>Remove</Button></Box>
                    </HStack>
                </VStack>
            </Container>
            <Box mt='100px' w='full' h={'300px'} mb={'50px'}>
                <Grid w='full' h='300px' templateColumns={'repeat(10,1fr)'} gap='10px' overflowX={'scroll'} className='scroll' sx={styles} onScroll={() => console.log('scroll')} ref={ref}>
                    <GridItem w='250px' h='250px'></GridItem>
                    <GridItem w='250px' h='250px' border='1px' bg='tomato'></GridItem>
                    <GridItem w='250px' h='250px' border='1px' bg='yellow'></GridItem>
                    <GridItem w='250px' h='250px' border='1px' bg='red'></GridItem>
                    <GridItem w='250px' h='250px' border='1px' bg='blue'></GridItem>
                    <GridItem w='250px' h='250px' border='1px' bg='green'></GridItem>
                    <GridItem w='250px' h='250px' border='1px' bg='gray'></GridItem>
                    <GridItem w='250px' h='250px' border='1px' bg='tomato'></GridItem>
                    <GridItem w='250px' h='250px' border='1px' bg='yellow'></GridItem>
                    <GridItem w='250px' h='250px' border='1px' bg='red'></GridItem>
                </Grid>
            </Box>
        </Box>
    </Center>;
}