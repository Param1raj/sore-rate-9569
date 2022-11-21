import { GridItem,Box ,Image,Text,Button} from "@chakra-ui/react";
import { BiRupee } from 'react-icons/bi';

export default function GridItems({image,heading,price}){
    return <GridItem w='250px' h='340px'>
         <Box maxW='sm' borderRadius='lg' bg={'whiteAlpha.900'} overflow='hidden' p={2.5}>
        <Image src={image} alt='picture' />
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
                    heading
                }
            </Box>
            <Text mt={'10px'} color='gray.400'>Rent</Text>
            <Box display={'flex'} flexDirection='row'>
                <Box display={'flex'} flexDirection='row' alignItems={'center'} >
                    <BiRupee />
                    <Box as='span' color='gray.900' fontSize='sm'>{price}/mo</Box>
                </Box>
                <Button ml='70px' borderRadius={'0px'} w='80px' h={'30px'} colorScheme='red' variant='outline' _hover={{ bg: 'red', color: 'white' }}>
                    See More
                </Button>
            </Box>
        </Box>
    </Box>
    </GridItem>
    ;
}