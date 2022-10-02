import {Box, Heading} from '@chakra-ui/react'
import Items from '../Components/scrollableItems';
import Carousal from '../Components/slider';
import Boxes from '../Components/CatagoryBoxes';
import Navbar from '../Components/navbar';
import Benefits from '../Components/BenefitOverView';
import Footer from '../Components/footer';
export default function Home(){
    return <Box>
        <Heading>Home</Heading>
        <Navbar/>
        <Carousal/>
        <Boxes/>
        <Items/>
        <Benefits/>
        <Footer/>
    </Box>;
}