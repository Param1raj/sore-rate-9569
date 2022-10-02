import { MdCoronavirus } from 'react-icons/md';
import Carousel from 'react-bootstrap/Carousel';
import {IoChevronForwardCircle} from 'react-icons/io5';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Box, Alert, Icon ,Link} from '@chakra-ui/react';
function UncontrolledExample() {

    return (
        <Container maxW='6xl' p={0} marginTop='60px'>
            <Box >
                <Carousel style={{ height: '430px', borderRadius: '30px' }} variant="dark">
                    <Carousel.Item style={{ height: '470px', borderRadius: '10px' }}>
                        <Box w='full' h='full' borderRadius={'30px'}>
                        <img
                            style={{ borderRadius: '30px',maxHeight:'100%'}}
                            className="d-block w-100"
                            src="https://s.rmjo.in/Fitness-Offer-HP-Web-%20(1).jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                        </Box>
                    </Carousel.Item>
                    <Carousel.Item style={{ height: '470px', borderRadius: '10px' }}>
                    <Box w='full' h='full' borderRadius={'30px'}>
                        <img
                            style={{ borderRadius: '30px',maxHeight:'100%' }}
                            className="d-block w-100"
                            src="https://s.rmjo.in/Paytm-Bank-Desktop-banner-%20(1).jpg"
                            alt="Second slide"
                        />
                    
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                        </Box>
                    </Carousel.Item>
                    <Carousel.Item style={{ height: '470px', borderRadius: '10px' }}>
                    <Box w='full' h='full' borderRadius={'30px'}>
                        <img
                            style={{ borderRadius: '30px',maxHeight:'100%' }}
                            className="d-block w-100"
                            src='https://s.rmjo.in/AirOKWeb%20(1).png'
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                        </Box>
                    </Carousel.Item>
                  
                    <Carousel.Item style={{ height: '470px', borderRadius: '10px' }}>
                    <Box w='full' h='full' borderRadius={'30px'}>
                        <img
                            style={{ borderRadius: '30px',maxHeight:'100%' }}
                            className="d-block w-100"
                            src='https://s.rmjo.in/AirOKWeb%20(1).png'
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                        </Box>
                    </Carousel.Item>
                </Carousel>
                <Alert status='info' style={{ borderBottomLeftRadius: '30px', borderBottomRightRadius: '30px', marginTop: '-30px', zIndex: '-10', height: '60px', paddingTop: '27px', display: 'flex', justifyContent: 'center',fontSize:'12px' }}>
                    <Icon as={MdCoronavirus} />
                    Safety precautions during COVID-19. We’re taking additional steps and precautionary measures to protect our community from COVID-19.  
                    <Link href='https://www.rentomojo.com/covid19-response' style={{marginLeft:'10px',cursor:'pointer'}}>Know more 
                    <Icon as={IoChevronForwardCircle}/></Link>
                </Alert>
            </Box>
        </Container>
    );
}

export default UncontrolledExample;