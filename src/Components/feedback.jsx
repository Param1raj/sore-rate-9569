import { Box, Center, Container, Grid, VStack,Text,Button ,GridItem} from "@chakra-ui/react";
import { useRef } from "react";
import { BsChevronRight } from 'react-icons/bs';
import { BsChevronLeft } from 'react-icons/bs';
const data=[
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
]

export default function Feedback() {
    const styles = {
        '&::-webkit-scrollbar ': {
            display: 'none',
        }
    }
    const ref = useRef(null);
    return <Center w='full'>
           <Container border={'1px'} h='600px' maxW={'6xl'} >
            <Box display='flex'>
              <VStack  w='300px' border={'1px'}>
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
            </VStack>
            <Box>
                <Grid h='300px' templateColumns={'repeat(8,1fr)'} gap='10px' overflowX={'scroll'} sx={styles} ref={ref} scrollBehavior='smooth'>
                        {
                            data.map((ele)=><GridItem h='300px' w='300px' border='1px'></GridItem>)
                        }
                </Grid>
            </Box>
            </Box>
        </Container>
    </Center>;
}