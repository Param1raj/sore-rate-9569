import {
    Center, Container, VStack, Divider, Flex, Grid, GridItem, Text, Box, Image,
    Button, Link, HStack
} from "@chakra-ui/react";
import { IoChevronForward } from 'react-icons/io5'
import { useState } from "react";
import { IoMdPaperPlane } from 'react-icons/io';
import {RiFacebookCircleLine} from 'react-icons/ri';
import {TiSocialTwitterCircular} from 'react-icons/ti';
import {AiOutlineYoutube} from 'react-icons/ai';
import {GrLinkedinOption} from 'react-icons/gr';
import {ImInstagram} from 'react-icons/im';
import {AiOutlineGlobal} from 'react-icons/ai';
import {BsChevronUp} from 'react-icons/bs';
export default function Footer() {
    const styles = {
        display: 'flex',
        justifyContent: 'flexStart',
        alignItems: 'flexStart'
    }
    const HeadingStyles = {
        fontFamily: 'Muli,sans-serif',
        fontWeight: 'semibold',
        color: 'gray.500',
        textAlign: 'left'
    }
    const textStyles = {
        fontSize: 'xs',
        color: 'gray.400',
        lineHeight: '4',
        textAlign: 'left'
    }
    // const [till,setTill] =useState(document.body.scrollHeight);
    const gotoTop=()=>{
        // setTill(till-209)
        window.scrollTo(0,0);
    }  
    const [show, setShow] = useState(false);

    // const ref = useRef(null)
    return (<Center w='full' h='auto' bg={'gray.100'}>
        <Container maxW={'container.lg'} h='80%' pt='100px'>
            <VStack >
                <VStack h={'auto'} p='0' w='full' sx={styles} spacing={2}>
                    <Text fontFamily='Muli,sans-serif' fontWeight={'semibold'} color='gray.500' fontSize='sm' textAlign={'left'} >Opt For RentoMojo In Gurgaon And Improve Your Quality Of Life</Text>
                    <VStack spacing={3}>
                        <Text sx={textStyles}>RentoMojo is a top-rated appliance rental brand, committed to providing our customers in Gurgaon the very best in furniture, appliances, and electronics. Purchasing a furniture piece, an appliance, or a gadget from the store will cost you thousands of rupees. Instead, you can rent the same item from us at a very reasonable monthly fee.</Text>
                        <Text sx={textStyles}>RentoMojo is a top-rated appliance rental brand, committed to providing our customers in Gurgaon the very best in furniture, appliances, and electronics. Purchasing a furniture piece, an appliance, or a gadget from the store will cost you thousands of rupees. Instead, you can rent the same item from us at a very reasonable monthly fee.</Text>
                        <Text sx={textStyles}>RentoMojo is a top-rated appliance rental brand, committed to providing our customers in Gurgaon the very best in furniture, appliances, and electronics. Purchasing a furniture piece, an appliance, or a gadget from the store will cost you thousands of rupees. Instead, you can rent the same item from us at a very reasonable monthly fee.</Text>
                    </VStack>
                    <Box mt={'10px'} display={'flex'} alignItems="flex-start" p='0'>
                        {
                            !show ? <Button p='0' onClick={() => setShow(true)}>Read More <IoChevronForward /></Button> : <VStack display={'flex'} alignItems="flex-start" p='0'>
                                <VStack spacing={3}>
                                    <VStack p='0' w='full' spacing={2} sx={styles} >
                                        <Text fontFamily='Muli,sans-serif' fontWeight={'semibold'} color='gray.500' fontSize='sm' textAlign={'left'} >Rent The Best Furniture, Appliances, And Electronics</Text>
                                        <Text sx={textStyles}>We source our furniture, appliances, and electronics from leading brands. You get to use top-rated, quality-checked products when you rent from us.</Text>
                                    </VStack>
                                    <VStack pl={20}>
                                        <ul>
                                            <li><Text sx={textStyles}>Furniture on rent: RentoMojo offers home furniture from reputable brands. We have furniture for every room in your apartment.</Text></li>
                                            <li><Text sx={textStyles}>Appliances on rent: We offer appliances made by top brands like Panasonic, Samsung, and Haier. We have everything your home needs, including fridge, microwave, washing machine, air conditioner, cooler, cooktop, and so much more.</Text></li>
                                            <li><Text sx={textStyles}>Electronics on rent: Smart gadgets have become a necessity these days. RentoMojo offers the best laptops, tablets, smartphones, and smart home devices available.</Text></li>
                                            <li><Text sx={textStyles}>Furniture & appliance packages on rent: We offer pre-selected furniture and appliance package combos on rent in Gurgaon. These packages are available at an added discount.</Text></li>
                                        </ul>
                                    </VStack>
                                </VStack>
                                <VStack spacing={3}>
                                    <VStack spacing={2} p='0' w='full' sx={styles}>
                                        <Text fontFamily='Muli,sans-serif' fontWeight={'semibold'} color='gray.500' fontSize='sm' textAlign={'left'} >Rent The Best Furniture, Appliances, And Electronics</Text>
                                        <Text sx={textStyles}>We source our furniture, appliances, and electronics from leading brands. You get to use top-rated, quality-checked products when you rent from us.</Text>
                                    </VStack>
                                    <VStack pl={20}>
                                        <ul>
                                            <li><Text sx={textStyles}>Furniture on rent: RentoMojo offers home furniture from reputable brands. We have furniture for every room in your apartment.</Text></li>
                                            <li><Text sx={textStyles}>Appliances on rent: We offer appliances made by top brands like Panasonic, Samsung, and Haier. We have everything your home needs, including fridge, microwave, washing machine, air conditioner, cooler, cooktop, and so much more.</Text></li>
                                            <li><Text sx={textStyles}>Electronics on rent: Smart gadgets have become a necessity these days. RentoMojo offers the best laptops, tablets, smartphones, and smart home devices available.</Text></li>
                                            <li><Text sx={textStyles}>Furniture & appliance packages on rent: We offer pre-selected furniture and appliance package combos on rent in Gurgaon. These packages are available at an added discount.</Text></li>
                                        </ul>
                                    </VStack>
                                </VStack>
                                <VStack spacing={3}>
                                    <VStack spacing={2} p='0' w='full' sx={styles}>
                                        <Text fontFamily='Muli,sans-serif' fontWeight={'semibold'} color='gray.500' fontSize='sm' textAlign={'left'} >Rent The Best Furniture, Appliances, And Electronics</Text>
                                        <Text sx={textStyles}>We source our furniture, appliances, and electronics from leading brands. You get to use top-rated, quality-checked products when you rent from us.</Text>
                                    </VStack>
                                    <VStack pl={20}>
                                        <ul>
                                            <li><Text sx={textStyles}>Furniture on rent: RentoMojo offers home furniture from reputable brands. We have furniture for every room in your apartment.</Text></li>
                                            <li><Text sx={textStyles}>Appliances on rent: We offer appliances made by top brands like Panasonic, Samsung, and Haier. We have everything your home needs, including fridge, microwave, washing machine, air conditioner, cooler, cooktop, and so much more.</Text></li>
                                            <li><Text sx={textStyles}>Electronics on rent: Smart gadgets have become a necessity these days. RentoMojo offers the best laptops, tablets, smartphones, and smart home devices available.</Text></li>
                                            <li><Text sx={textStyles}>Furniture & appliance packages on rent: We offer pre-selected furniture and appliance package combos on rent in Gurgaon. These packages are available at an added discount.</Text></li>
                                        </ul>
                                    </VStack>
                                </VStack>
                                <VStack spacing={3}>
                                    <VStack spacing={2} p='0' w='full' sx={styles}>
                                        <Text fontFamily='Muli,sans-serif' fontWeight={'semibold'} color='gray.500' fontSize='sm' textAlign={'left'} >Rent The Best Furniture, Appliances, And Electronics</Text>
                                        <Text sx={textStyles}>We source our furniture, appliances, and electronics from leading brands. You get to use top-rated, quality-checked products when you rent from us.</Text>
                                    </VStack>
                                    <VStack pl={20}>
                                        <ul>
                                            <li><Text sx={textStyles}>Furniture on rent: RentoMojo offers home furniture from reputable brands. We have furniture for every room in your apartment.</Text></li>
                                            <li><Text sx={textStyles}>Appliances on rent: We offer appliances made by top brands like Panasonic, Samsung, and Haier. We have everything your home needs, including fridge, microwave, washing machine, air conditioner, cooler, cooktop, and so much more.</Text></li>
                                            <li><Text sx={textStyles}>Electronics on rent: Smart gadgets have become a necessity these days. RentoMojo offers the best laptops, tablets, smartphones, and smart home devices available.</Text></li>
                                            <li><Text sx={textStyles}>Furniture & appliance packages on rent: We offer pre-selected furniture and appliance package combos on rent in Gurgaon. These packages are available at an added discount.</Text></li>
                                        </ul>
                                    </VStack>
                                </VStack>
                                <Button p='0' onClick={() => setShow(false)}>Read Less <IoChevronForward /></Button>
                            </VStack>
                        }</Box>
                </VStack>
                <Grid h={'auto'} w="full" mt={'100px'} templateColumns="repeat(4,1fr)">
                    <GridItem>
                        <VStack sx={styles}>
                            <Text fontSize={'sm'} sx={HeadingStyles} fontWeight='normal' >RENTOMOJO</Text>
                            <VStack spacing={2} display='flex' alignItems={'flex-start'}>
                                <Link to='' color={'gray.500'} fontSize='sm'>About Us</Link>
                                <Link to='' color={'gray.500'} fontSize='sm'>Culture</Link>
                                <Link to='' color={'gray.500'} fontSize='sm'>Investors</Link>
                                <Link to='' color={'gray.500'} fontSize='sm'>Careers</Link>
                                <Link to='' color={'gray.500'} fontSize='sm'>Contact</Link>
                                <Link to='' color={'gray.500'} fontSize='sm'>Our Benefits</Link>
                                <Link to='' color={'gray.500'} fontSize='sm'>Sitemap</Link>
                            </VStack>
                        </VStack>
                    </GridItem>
                    <GridItem>
                        <VStack sx={styles} >
                            <Text fontSize={'sm'} sx={HeadingStyles}>INFORMATION</Text>
                            <VStack spacing={2} display='flex' alignItems={'flex-start'}>
                                <Link to='' color={'gray.500'} fontSize='sm'>About Us</Link>
                                <Link to='' color={'gray.500'} fontSize='sm'>Culture</Link>
                                <Link to='' color={'gray.500'} fontSize='sm'>Investors</Link>
                            </VStack>
                        </VStack>
                    </GridItem>
                    <GridItem>
                        <VStack sx={styles}>
                            <Text fontSize={'sm'} sx={HeadingStyles}>POLICIES</Text>
                            <VStack spacing={2} display='flex' alignItems={'flex-start'}>
                                <Link to='' color={'gray.500'} fontSize='sm'>Shipping Policy</Link>
                                <Link to='' color={'gray.500'} fontSize='sm'>Cancellation & Return</Link>
                                <Link to='' color={'gray.500'} fontSize='sm'>Privacy Policy</Link>
                                <Link to='' color={'gray.500'} fontSize='sm'>Rental Terms & Conditions</Link>
                                <Link to='' color={'gray.500'} fontSize='sm'>Referral Terms & Conditions</Link>

                            </VStack>
                        </VStack>
                    </GridItem>
                    <GridItem>
                        <VStack sx={styles}>
                            <Text fontSize={'sm'} sx={HeadingStyles}>Need help</Text>
                            <VStack spacing={2} display='flex' alignItems={'flex-start'}>
                                <Box as='button' fontSize={'xs'} borderRadius='md' color='gray.500' border={'1px'} px={4} h={10}>
                                    Chat with us (9AM - 6PM)
                                </Box>
                                <Box display={'flex'} flexDirection='row' alignItems={'center'}><IoMdPaperPlane />
                                    <Link to='' color='gray.500' fontSize='sm' ml={'10px'}>jo@rentomojo.com</Link></Box>
                                <Text color={'gray.600'}>DOWNLOAD APP</Text>
                                <Box display={'flex'} flexDirection='row' mt={'-20px'} alignItems='center'>
                                    <Link to=''><Image w='100px' h='40px' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/800px-Google_Play_Store_badge_EN.svg.png" alt='applink' /></Link>
                                    <Link to=''>
                                        <Image  w='98px' h='47px' mt='-5px' src='https://www.pngmart.com/files/10/Download-On-The-App-Store-PNG-Clipart.png' alt='applink' /></Link></Box>
                            </VStack>
                        </VStack>
                    </GridItem>
                </Grid>
                <Divider orientation='horizontal' border='2px' />
                <Flex h={'100px'}  borderColor={'black'} w='full' alignItems={'center'} justifyContent='space-between'>
                    <Text fontSize={'xs'} color='gray.400' >© 2022. Edunetwork Pvt. Ltd.</Text>
                    <HStack spacing={'5px'} display='flex' alignItems={'center'}>
                        <RiFacebookCircleLine size={30} bg='gray.400'/>
                        <TiSocialTwitterCircular size={37} color='gray.400'/>
                        <GrLinkedinOption size={30}/>
                        <AiOutlineYoutube size={40} color='gray.400'/>
                        <ImInstagram size={25} color='gray.400'/>
                        <AiOutlineGlobal size={30} color='gray.400'/>
                    </HStack>
                    <Box display={'flex'} flexDirection='row' alignItems={'center'}><Link to='' color={'gray.400'} onClick={()=> gotoTop()}>Goto top </Link><BsChevronUp /></Box>
                </Flex>
            </VStack>
        </Container>
    </Center>
    )
}