import { Center, Container,HStack,Text, VStack,Box} from "@chakra-ui/react";
import Scrolling from "./scrolling";
export default function Items(){
    return<Center w={'full'} bg={'gray.100'} h='650px' pt={'100px'}>
            <Container maxW={'container.lg'} h='85%' border={'1px'} display='flex' alignItems='flexStart'>
            <VStack spacing={4} border='1px' w='full'  display={'flex'} alignItems='flexStart'>
            <HStack >
                <VStack spacing={0} alignItems='flexStart'>
                <Text fontSize='xl'as='b'letterSpacing='wider' color={'gray.600'} ml='-29px'>You'll love to</Text>
                <Text fontSize='xl'as='b'letterSpacing='wider' color={'gray.500'}>take these home</Text>
                <Box bg='red.500' w='80px' p={0.5} mt={2} color='white'></Box>
                </VStack>
            </HStack>
             {/* <Scrolling/> */}
            </VStack>
            </Container>
           </Center>;
}