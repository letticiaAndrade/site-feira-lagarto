import { useLocation } from 'react-router-dom';
import {CaretRight} from "@phosphor-icons/react";
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Image, Link, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

import Logo from '../assets/logo_site_sem_fundo.png';

export function Nav() {
    const location = useLocation();
    const currentPath = location.pathname;
    return (
        <Box w='full' >
          <Flex borderBottomWidth={2} px={20} borderBottomColor="dark.100" alignItems="center" justifyContent="space-between">

            <Link href="/" color="primary.400" fontWeight="bold" fontSize="xl">
            <Image src={Logo} objectFit="contain" w={90} h={90}/>
            </Link>

            <Flex alignItems="center">
            
              <Breadcrumb spacing='8px' separator={<CaretRight color="primary.400" />}>
            <BreadcrumbItem isCurrentPage={currentPath === "/"}>
         <BreadcrumbLink href="/" color="primary.400">Início</BreadcrumbLink>
        </BreadcrumbItem>
  
        <BreadcrumbItem>
        <BreadcrumbLink color="primary.400">
        <Menu >
                <MenuButton>
                  Lojistas
                </MenuButton>
                <MenuList>
                  <MenuItem as={Link} href="/service1">Service 1</MenuItem>
                  <MenuItem as={Link} href="/service2">Service 2</MenuItem>
                  <MenuItem as={Link} href="/service3">Service 3</MenuItem>
                </MenuList>
              </Menu>
              </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage={currentPath === "/culture"}>
          <BreadcrumbLink  color="primary.400" href='/culture'>Cultura</BreadcrumbLink>
         </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage={currentPath === "/services"}>
          <BreadcrumbLink color="primary.400" href='#'>Serviços</BreadcrumbLink>
         </BreadcrumbItem>

         <BreadcrumbItem isCurrentPage={currentPath === "/contact"}>
          <BreadcrumbLink href="/contact" color="primary.400">Contato</BreadcrumbLink>
         </BreadcrumbItem>
        </Breadcrumb>
            </Flex>
          </Flex>
        </Box>
      );
    }

