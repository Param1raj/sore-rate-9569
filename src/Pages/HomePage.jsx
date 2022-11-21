import {Box, Heading} from '@chakra-ui/react'
import Items from '../Components/scrollableItems';
import UncontrolledExample from '../Components/Carousel/slider';
import Boxes from '../Components/CatagoryBoxes';
// import Navbar from '../Components/navbar';
import Benefits from '../Components/BenefitOverView';
import Footer from '../Components/footer';
import Feedback from '../Components/feedback';
import NavbarBox from '../Components/Navbar/navbar';
export default function Home(){
    return <Box>
        <UncontrolledExample />
        <Boxes/>
        <Items/>
        <Benefits/>
        {/* <Feedback/> */}
        {/* <Footer/> */}
    </Box>;
}