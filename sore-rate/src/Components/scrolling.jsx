import { useRef } from "react";
import { Box, Button, Container, HStack, VStack ,Grid,GridItem} from "@chakra-ui/react";
export default function Scrolling(){
    const ref = useRef(null)
    const scroll = (scrollOffset) => {
        ref.current.scrollX += scrollOffset;
      };
    return (
    <Box >
    <Container maxW='container.lg'>
      <HStack>
        <VStack>
          <Button onClick={()=>scroll(20)}>TEST</Button>
        </VStack>
      </HStack>
    </Container>
    <Box >
    <Grid w='full' ref={ref} templateColumns='repeat(5, 1fr)' gap={1} overflowX='scroll' whiteSpace={'nowrap'} position={'absolute'} left='12'>
                <GridItem w='100%' h='200px' bg='blue.100' border='1px'/>
                <GridItem w='100%' h='200px' bg='blue.200' border='1px'/>
                <GridItem w='100%' h='200px' bg='blue.300' border='1px'/>
                <GridItem w='100%' h='200px' bg='blue.400' border='1px'/>
                <GridItem w='100%' h='200px' bg='blue.500' border='1px'/>
    </Grid>
    </Box>
  </Box>

    );
}