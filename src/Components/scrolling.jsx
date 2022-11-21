import { useRef } from "react";
export default function Scrolling() {
  const ref = useRef(null)
  const scroll = (scrollOffset) => {
    ref.current.scrollX += scrollOffset;
  };
  return (
    <Box position={'relative'} right='500px'  >
      <Container maxW='container.lg'>
        <HStack>
          <VStack>
            <Button onClick={() => scroll(20)}>TEST</Button>
          </VStack>
        </HStack>
      </Container>
      <Box position={'absolute'} w='full'>
        <Grid w='full' ref={ref} templateColumns='repeat(5, 1fr)' gap={0} overflowX='scroll'>
          <GridItem w='200px' h='200px' bg='blue.100' border='1px' />
          <GridItem w='200px' h='200px' bg='blue.200' border='1px' />
          <GridItem w='200px' h='200px' bg='blue.300' border='1px' />
          <GridItem w='200px' h='200px' bg='blue.400' border='1px' />
          <GridItem w='200px' h='200px' bg='blue.500' border='1px' />
        </Grid>
      </Box>
    </Box>

  );
}