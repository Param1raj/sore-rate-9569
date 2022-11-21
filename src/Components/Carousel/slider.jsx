import { MdCoronavirus } from 'react-icons/md';
import Carousel from 'react-bootstrap/Carousel';
import { IoChevronForwardCircle } from 'react-icons/io5';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Box, Alert, Icon, Link } from '@chakra-ui/react';
import styled from 'styled-components';
import './slider.css'
function UncontrolledExample() {

    return (
        <Container border={1} maxW={{base:"99%",sm:"95%",md:"95%",lg:"90%",xl:"85%"}} p={0} marginTop={{base:"10px",sm:"10px",md:"20px",lg:"25px",xl:"30px"}} ml={{base:"3px",sm:"3px",md:"auto",lg:"auto",xl:"auto"}} >
            <Box h={["","","","",'462px']}>
                <Carousel h={{base:'150px',sm:'150px',md:'215px',lg:'290px',xl:"420px"}} style={{ borderRadius: '30px'}} variant="dark">
                    <Carousel.Item style={{ height: '100%', borderRadius: '10px' }}>
                        <Box w='full' h='full' borderRadius={'30px'} >
                            <img
                                style={{ borderRadius: '30px', maxHeight: '100%' }}
                                className="d-block w-100"
                                src="https://s.rmjo.in/Fitness-Offer-HP-Web-%20(1).jpg"
                                alt="First slide"
                            />
                        </Box>
                    </Carousel.Item>
                    <Carousel.Item style={{ height: '100%', borderRadius: '10px' }}>
                        <Box w='full' h='full' borderRadius={'30px'}>
                            <img
                                style={{ borderRadius: '30px', maxHeight: '100%' }}
                                className="d-block w-100"
                                src="https://s.rmjo.in/Paytm-Bank-Desktop-banner-%20(1).jpg"
                                alt="Second slide"
                            />


                        </Box>
                    </Carousel.Item>
                    <Carousel.Item style={{ height: '100%', borderRadius: '10px' }}>
                        <Box w='full' h='full' borderRadius={'30px'}>
                            <img
                                style={{ borderRadius: '30px', maxHeight: '100%' }}
                                className="d-block w-100"
                                src='https://s.rmjo.in/AirOKWeb%20(1).png'
                                alt="Third slide"
                            />


                        </Box>
                    </Carousel.Item>

                    <Carousel.Item style={{ height: '100%', borderRadius: '10px' }}>
                        <Box w='full' h='full' borderRadius={'30px'}>
                            <img
                                style={{ borderRadius: '30px', maxHeight: '100%' }}
                                className="d-block w-100"
                                src='https://s.rmjo.in/AirOKWeb%20(1).png'
                                alt="Third slide"
                            />
                        </Box>
                    </Carousel.Item>
                </Carousel>
                <AlertBox>
                <Alert status='info' style={{display: 'flex', justifyContent:'center'}} fontSize= '12px'>
                    <Icon as={MdCoronavirus} />
                    Safety precautions during COVID-19. We’re taking additional steps and precautionary measures to protect our community from COVID-19.
                    <Link href='https://www.rentomojo.com/covid19-response' style={{ marginLeft: '10px', cursor: 'pointer' }}>Know more
                        <Icon as={IoChevronForwardCircle} /></Link>
                </Alert>
                </AlertBox>
            </Box>
        </Container>
    );
}

export default UncontrolledExample;



export const AlertBox = styled.div`
border-bottom-left-radius: 30px; 
border-bottom-right-radius: 30px; margin-top: -30px;
 z-index: -10;
  height: 60px;
//   padding-top: 27px;
  display: flex;
  justify-content:center;
  font-size: 12px;
  overflow:hidden;
@media all and (max-width:992px){
    opacity:0;
}
`