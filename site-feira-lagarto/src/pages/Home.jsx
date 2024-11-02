import { Footer, Nav } from "../components";
import { Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";

import Paisagem from "../assets/visao_panoramica.jpg";
import Mascote from "../assets/mascote_site_sunset.png"

export function Home() {
    const year = new Date().getFullYear();
    return (
        <Flex  w="100%"
        flexDirection="column"
        h="100%"
        bgGradient="linear(to-b, primary.100, primary.400)"
        alignItems="center"
        p={4}>

        <Nav/>
        <Flex alignItems="center" flexDirection="column" mt={4} w={{base: 300, sm: 500, md:800, lg:1000 }}>
        <Heading fontSize={{base:20, sm:28, md:32, lg: 48}} fontWeight="bold">É dia de feira meus amigos</Heading>

         <Text fontSize={18} textAlign="justify" >
         Lagarto, uma cidade rica em cultura e tradição, encontra na sua feira um pulsante centro de atividade econômica e social. 
         A feira não é apenas um espaço de comércio, mas um verdadeiro motor de crescimento, 
         promovendo inovação, sustentabilidade e fortalecimento da comunidade.
        Descubra como estes empreendedores, com suas histórias inspiradoras e dedicação incansável, 
        transformando Lagarto em um exemplo brilhante de progresso e resiliência. 
        </Text>


        <Image mt={4} borderRadius={55} src={Mascote} objectFit="contain" w={590} h={581}/>
        
        </Flex>

        <Flex flexDirection={{base: "column", sm: "column", md: "column", lg: "row"}} m={20}>
        <Image src={Paisagem} objectFit="contain" w={800} h={600}/>

        <VStack pl={20} alignItems="baseline">

        <Heading mb={5} fontSize={{base:20, sm:28, md:32, lg: 48}} fontWeight="bold">Breve Resumo de Lagarto</Heading>

        <Text fontSize={18} textAlign="justify" >
        Lagarto é uma cidade localizada no estado de Sergipe, na região Nordeste do Brasil. 
        Com uma população estimada em cerca de 105 mil habitantes, é a terceira maior cidade do estado, tanto em área quanto em população. 
        Situada a aproximadamente 75 km da capital, Aracaju, Lagarto é um importante polo econômico e cultural da região.
        </Text>

        <Text fontSize={18} textAlign="justify" >
        A economia de Lagarto é diversificada, com destaque para a agricultura, pecuária e comércio. 
        A feira de Lagarto é um dos principais motores econômicos da cidade, sendo um ponto de encontro de produtores locais e consumidores, 
        e oferecendo uma ampla variedade de produtos que vão desde alimentos frescos até artesanato e roupas. O comércio varejista é bastante forte,
         com lojistas que desempenham um papel crucial no desenvolvimento econômico da região.
        </Text>

        <Text fontSize={18} textAlign="justify" >
        Nos últimos anos, Lagarto tem passado por um processo de desenvolvimento urbano significativo, com melhorias na infraestrutura, 
        como pavimentação de ruas, ampliação do sistema de saneamento básico e investimento em mobilidade urbana. 
        Esses avanços têm contribuído para a melhoria da qualidade de vida dos moradores e para o crescimento econômico da região.
        </Text>
        </VStack>

        </Flex>

        <Footer/>

        <Text>© {year} Instituto Federal de Sergipe. All rights reserved.</Text>

        </Flex>
    )
}