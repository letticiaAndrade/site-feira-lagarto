import { Flex } from "@chakra-ui/react";
import { CardLojistas, Nav } from "../components";

import  Default from "../assets/logo_site_sem_fundo.png";


const listLojistas = [
    {
        id: 1,
        title: "Lojista1",
        image: Default,
        number: "5575998510396",
        description: "Esse é um testes para ver como se comporta a descrição de um card de um lojista aqui dentro do site da Feira de Lagarto. Tem que ficar muito bom mesmo."
        
    },
    {
        id: 2,
        title: "Lojista1",
        image: Default,
        number: "5575998510396",
        description: "Esse é um testes para ver como se comporta a descrição de um card de um lojista aqui dentro do site da Feira de Lagarto. Tem que ficar muito bom mesmo."
        
    },
    {
        id: 3,
        title: "Lojista1",
        image: Default,
        number: "5575998510396",
        description: "Esse é um testes para ver como se comporta a descrição de um card de um lojista aqui dentro do site da Feira de Lagarto. Tem que ficar muito bom mesmo."
        
    },
]

export function Convenience() {

    return (
        <Flex w="100%" flexDirection="column" h="100%" bgGradient='linear(to-b, primary.100, primary.400)' alignItems="center">
            <Nav/>
            <Flex wrap="wrap" >
                {listLojistas.map((lojista)=> (
                    <CardLojistas 
                    key={lojista.id}
                    title={lojista.title}
                    image={lojista.image}
                    number={lojista.number}
                    description={lojista.description}
                    />
                ))}
            </Flex>
        </Flex>
    )
}