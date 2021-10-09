/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo,VFC} from "react";
import {Flex,Box,Text,VStack, Link } from "@chakra-ui/react";
import { EmailIcon } from '@chakra-ui/icons'
import { StaticImage } from "gatsby-plugin-image";

export const Footer: VFC = memo(() => {
  
  return (
    <>
    <Flex
        as="nav"
        bg="blue.800"
        justify="center"
        padding={{ base: 3, md: 5 }}
        h={{ xl:"180px", lg:"180px", md: "140px", sm:"140px", base:"70px"}}
    >
        <VStack>
            <Flex justify='center' mt='auto' mb='auto' w={{xl:"50%",lg:"50%",md:"50%",sm:"50%", base:"40%"}}>
                <Link href="https://twitter.com/KodoOjiEngineer" isExternal>
                    <Box w={{xl:"60px", lg:"60px", md:"50px", sm:"50px", base:"40px"}} ml="5" mr="5">
                        <StaticImage alt="twitter" src="../../../images/twitterLogo.png" quality={95}></StaticImage>
                    </Box>
                </Link>
                <Link href="https://www.facebook.com/mitsutomo.yamada">
                    <Box w={{xl:"60px", lg:"60px", md:"50px", sm:"50px", base:"40px"}} ml="5" mr="5">
                        <StaticImage alt="facebook" src="../../../images/facebookLogo.png" quality={95}></StaticImage>
                    </Box>
                </Link>
                <Link href="https://www.linkedin.com/in/mitsutomo-yamada/">
                    <Box w={{xl:"60px", lg:"60px", md:"50px", sm:"50px", base:"40px"}} ml="5" mr="5">
                        <StaticImage alt="linkedin" src="../../../images/linkedinLogo.png" quality={95}></StaticImage>
                    </Box>
                </Link>
            </Flex>
            <Flex alignItems='center' color='white' display={{sm:"block",base:"none"}} ml='auto' mr='auto'>
                <Flex >
                <EmailIcon w={5} h={5} mr='2' color='white'/>
                <Text fontSize='18'>m.yamada@blockaid-tokyo.com</Text>
                </Flex>
            </Flex>
            <Flex alignItems='center' color='white' display={{sm:"block",base:"none"}}>
                <Text fontSize='14'>@2021 built by Gatsby</Text>
            </Flex>
        </VStack>
    </Flex>
    </>
  );
});