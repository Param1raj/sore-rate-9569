
import { Center, Container, HStack, Text, VStack, Box, Grid,GridItem } from "@chakra-ui/react";
import {Link} from '@chakra-ui/react'
import { IoIosBed } from 'react-icons/io';
import {BsPhone} from 'react-icons/bs';
import {MdOutlineChairAlt} from 'react-icons/md';
import {VscLocation} from 'react-icons/vsc';
import {MdMiscellaneousServices} from 'react-icons/md';


export default function Benefits() {
    return (<Center w={'full'} h='650px' pt={'100px'} mb='200px'>
        <Container maxW={'container.lg'} h='85%' display='flex' alignItems='flexStart' >
            <VStack spacing={4} w='full' display='flex' alignItems='flexStart' >
                <HStack >
                    <VStack spacing={0} alignItems='flexStart'>
                        <Text fontSize='xl' as='b' letterSpacing='wider' color={'gray.600'} ml='-1px'>There's more</Text>
                        <Text fontSize='xl' textAlign={'left'}mt={'-10px'} as='b' letterSpacing='wider' color={'gray.500'} ml='-30px'>to renting</Text>
                        <Box bg='red.500' w='50px' p={0.5} mt='14' color='white'></Box>
                    </VStack>
                </HStack>
                <Grid templateColumns={'repeat(3,1fr)'} gap='10px' mb={54}>
                    <GridItem w='100%' h='250' >

                        <VStack spacing={2} display='flex' my='17%'  justifyContent='flexStart' alignItems='flexStart' >
                            <IoIosBed size={50} bg='gray.500' />
                            <Text fontSize={'17px'} fontFamily='Muli,sans-serif' textAlign='left' fontWeight='semibold' color={'gray.600'}>Finest-quality products</Text>
                            <Text fontSize={'14px'} fontFamily='Muli,sans-serif' textAlign='left'  fontWeight='medium'  color={'#717171'}>Quality matters to you, and us! That's why we do a strict quality-check for every product.</Text>
                        </VStack>

                    </GridItem>
                    <GridItem w='100%' h='250' >
                    <VStack spacing={2} display='flex' my='17%'  justifyContent='flexStart' alignItems='flexStart' >
                            <VscLocation size={50} bg='gray.500' />
                            <Text fontSize={'17px'} fontFamily='Muli,sans-serif' textAlign='left' fontWeight='semibold' color={'gray.600'}>Free relocation</Text>
                            <Text fontSize={'14px'} fontFamily='Muli,sans-serif' textAlign='left'  fontWeight='medium'  color={'#717171'}>Changing your house or even your city? We'll relocate your rented products for free.</Text>
                        </VStack>
                    </GridItem>
                    <GridItem w='100%' h='250' >
                    <VStack spacing={2} display='flex' my='17%'  justifyContent='flexStart' alignItems='flexStart' >
                            <MdMiscellaneousServices size={50} bg='gray.500' />
                            <Text fontSize={'17px'} fontFamily='Muli,sans-serif' textAlign='left' fontWeight='semibold' color={'gray.600'}>Free maintenance</Text>
                            <Text fontSize={'14px'} fontFamily='Muli,sans-serif' textAlign='left'  fontWeight='medium'  color={'#717171'}>Keeping your rented products in a spick and span condition is on us, so you can sit back and relax.</Text>
                        </VStack>
                    </GridItem>
                    <GridItem w='100%' h='250' >
                    <VStack spacing={2} display='flex' my='17%'  justifyContent='flexStart' alignItems='flexStart' >
                            <MdOutlineChairAlt size={50} bg='gray.500' />
                            <Text fontSize={'17px'} fontFamily='Muli,sans-serif' textAlign='left' fontWeight='semibold' color={'gray.600'}>Cancel anytime</Text>
                            <Text fontSize={'14px'} fontFamily='Muli,sans-serif' textAlign='left'  fontWeight='medium'  color={'#717171'}>Pay only for the time you use the product and close your subscription without any hassle.</Text>
                        </VStack>
                    </GridItem>
                    <GridItem w='100%' h='250' >
                    <VStack spacing={2} display='flex' my='17%'  justifyContent='flexStart' alignItems='flexStart' >
                            <IoIosBed size={50} bg='gray.500' />
                            <Text fontSize={'17px'} fontFamily='Muli,sans-serif' textAlign='left' fontWeight='semibold' color={'gray.600'}>Finest-quality products</Text>
                            <Text fontSize={'14px'} fontFamily='Muli,sans-serif' textAlign='left'  fontWeight='medium'  color={'#717171'}>Quality matters to you, and us! That's why we do a strict quality-check for every product.</Text>
                        </VStack>
                    </GridItem>
                    <GridItem w='100%' h='250' >
                    <VStack spacing={2} display='flex' my='17%'  justifyContent='flexStart' alignItems='flexStart' >
                            <BsPhone size={50} bg='gray.500' />
                            <Text fontSize={'17px'} fontFamily='Muli,sans-serif' textAlign='left' fontWeight='semibold' color={'gray.600'}>Keep upgrading</Text>
                            <Text fontSize={'14px'} fontFamily='Muli,sans-serif' textAlign='left'  fontWeight='medium'  color={'#717171'}>Bored of the same product? Upgrade to try another, newer design and enjoy the change!</Text>
                        </VStack>
                    </GridItem>
                </Grid>
                <Link to='https://www.rentomojo.com/benefits' as='b' textAlign={'left'} color='#1dbdc0'>Know More</Link>
            </VStack>
        </Container>
    </Center>);
}