import { Container,  Box,SimpleGrid, Center,Image} from "@chakra-ui/react";
import {GoPackage} from 'react-icons/go';
// import { Icon } from "@chakra-ui/react";
import {IoIosBed} from 'react-icons/io'
import {GiWashingMachine} from 'react-icons/gi'
import {BsPhone} from 'react-icons/bs'
export default function Boxes(){
    return (
        <Container maxW="container.lg" p={0}>
            <SimpleGrid
            // bg='gray.50'
            columns={{ base:2,sm: 3, md: 4,lg:6 }}
            h='100%'
            spacing='8'
            // p='10'
            my={4}
            textAlign='center'
            rounded='lg'
            color='gray.500'

            //import {ic_king_bed} from 'react-icons-kit/md/ic_king_bed'
            >
            <Center boxShadow='xs' p='6' transition={'all 1000ms ease'} rounded='md' bg='white'_hover={{boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px'}}>
                <GoPackage size={50}  />
            </Center>
            <Center boxShadow='xs' p='6' transition={'all 1000ms ease'} rounded='md' bg='white'_hover={{boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px'}}>
                <IoIosBed size={50}/>
            </Center>
            <Center boxShadow='xs' p='6' transition={'all 1000ms ease'} rounded='md' bg='white'_hover={{boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px'}}>
                <GiWashingMachine size={40}/>
            </Center>
            <Center boxShadow='xs' p='6' transition={'all 1000ms ease'} rounded='md' bg='white'_hover={{boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px'}}>
                <BsPhone size={40}/>
            </Center>
            <Center boxShadow='xs' p='6' transition={'all 1000ms ease'} rounded='md' bg='white'_hover={{boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px'}}>
                <Image src='https://cdn.iconscout.com/icon/premium/png-64-thumb/exercise-cycle-2383047-2014905.png' w={50}/>

            </Center>
            <Center boxShadow='xs' p='6' transition={'all 1000ms ease'} rounded='md' bg='white'_hover={{boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px'}}>
            <Image src='https://cdn.iconscout.com/icon/premium/png-64-thumb/study-desk-2989165-2486358.png' w={10} color='gray'/>
            </Center>
            </SimpleGrid>
        </Container>
      )
};
    