import * as React from "react"
import { Box,Text,Flex,VStack  } from "@chakra-ui/react"

import Seo from "../components/seo"
import { useIntl } from "gatsby-plugin-intl"

const ContactPage = () => {
  const intl = useIntl()
  return(
  <>
    <Seo title='contact'/>
    <Flex  minH={{md:"900px", sm:"800px",base:"600px"}} w='100%' justify='center' alignItems='center'>
        <Box boxShadow='xl' w={{ md:"60%", sm:"90%", base:"90%"}} h='350px'>
            <Flex bgColor='white'  w='100%' h='100%' textAlign='center' alignItems='center' justify='center' fontSize='xl'>
                <VStack spacing={12} fontSize={{xl:"28px", lg:"24px", md:"22px", sm:"18px",base:"16px"}}>
                    <Text> {intl.formatMessage({ id:"contact1" })}</Text>
                    <Text> {intl.formatMessage({ id:"contact2" })}</Text>
                    <Text fontSize={{xl:"30px", lg:"25px", md:"23px", sm:"15px"}}>m.yamada@blockaid-tokyo.com</Text>
                </VStack>
            </Flex>
        </Box>
    </Flex>
  </>)
}

export default ContactPage
