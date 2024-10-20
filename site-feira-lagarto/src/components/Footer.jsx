import 'leaflet/dist/leaflet.css';
import { Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import Logo from '../assets/logo_site_sem_fundo.png';
import Github from '../assets/rede_social_icons/GitHub.png';
import LinkedIn from '../assets/rede_social_icons/LinkedIn.png';
import Instagram from '../assets/rede_social_icons/Instagram.png';

export function Footer() {

   const latitude = -10.9195371,
    longitude= -37.6664342,
    isIOS = () => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        return /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    };
   
    return(
        <Flex w="full" bgGradient='linear(to-b, primary.300, primary.400)'>

        <Flex w="full" borderWidth={2} borderColor="dark.400" p={10} my={5} mx={20}>
            
            <Stack alignItems="baseline">
            <Image src={Logo} objectFit="contain" w={90} h={90}/>
                
            <Flex flexDirection="column" alignItems="baseline">
            <Text fontWeight="bold">Endereço:</Text>
            <Text>Praça Paulo Vieira Menezes - Centro, Lagarto - SE, 49400-000</Text>
            </Flex>

            <Flex flexDirection="column" alignItems="baseline">
            <Text fontWeight="bold">Contatos:</Text>
            <Text>(7X) XXXXXXXXX</Text>
            <Text> info@relume.io</Text>   
            </Flex>

            <HStack>
            <Image cursor="pointer" onClick={()=> alert("Github")} src={Github} objectFit="contain" boxSize={22}/>
            <Image cursor="pointer" onClick={()=> alert("Instagram")} src={Instagram} objectFit="contain" boxSize={22}/>
            <Image cursor="pointer" onClick={()=> alert("LinkedIn")} src={LinkedIn} objectFit="contain" boxSize={22}/>

            </HStack>
            </Stack> 

            <Flex justifyContent="flex-end" w='full'>
            <Flex 
            w="400px" 
            h="300px" 
            onClick={()=> window.open(isIOS() ? `http://maps.apple.com/?ll=${latitude},${longitude}`: `https://www.google.com/maps?q=${latitude},${longitude}`)}
            >

            <MapContainer
                center={[latitude, longitude]}
                zoom={30}
                scrollWheelZoom={false}
                style={{ width: "100%", height: "100%" }}
            >

            <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            
            />
        
            <Marker position={[latitude, longitude]}>
            <Popup>
                Praça Paulo Vieira Menezes, Lagarto - SE
            </Popup>
            </Marker>
        </MapContainer>
        </Flex>
        </Flex>

        </Flex>
        </Flex>
    )
}