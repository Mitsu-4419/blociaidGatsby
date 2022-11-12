import React, {memo} from "react"
import { Box, Text,Flex} from "@chakra-ui/react";

import Seo from "../components/seo"
import { RadarChart } from "../js/RadarChart.js";
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = memo(() => {

  return(
   <>
    <Seo title='Home' description="元医師、現エンジニアのKorin Yamada のPortofolio Siteです。"/>
    <Box bgColor='white' pb='100' >
      <Flex w='95%' h={{xl:"350px",lg:"350px",md:"330px",sm:"300px",base:"280px"}} mr='auto' ml='auto'  justify='center' alignItems='center'>
          <Box w={{xl:"250px",lg:"230px",md:"220px",sm:"200px",base:"150px"}}  h={{xl:"250px",lg:"230px",md:"220px",sm:"200px",base:"150px"}}>
              <StaticImage  src="../images/surgeon.png" alt="surgeonFace" />
          </Box>
      </Flex>
         <Box w='100%' textAlign='center' h='20'>
           <Text fontSize={{xl:40,lg:40,md:38, sm:38}} color='gray.700' fontWeight='bold'>Skills</Text>
         </Box>
         <Flex w="95%" mr='auto' ml='auto' justify='center' height={{xl:400, lg:300}} direction={{xl:"row", lg:"row", md:"column", sm:"column", base:"column"}}>
           <Box m={{xl:'35', lg:'25', md:'35', sm:'35', base:"2"}} w={{xl:"400", lg:"300", md:"350", sm:"300", base:"300"}} h={{xl:"400", lg:"300", md:"350", sm:"300", base:"300"}}>
             <RadarChart chartType='front'/>
           </Box>
           <Box m={{xl:'35', lg:'25', md:'35', sm:'35',base:"2"}}  w={{xl:"400", lg:"300", md:"350", sm:"300",base:"300"}} h={{xl:"400", lg:"300", md:"350", sm:"300", base:"300"}}>
             <RadarChart chartType='backend' />
           </Box>
           <Box m={{xl:'35', lg:'25', md:'35', sm:'35', base:"2"}}  w={{xl:"400", lg:"300", md:"350", sm:"300", base:"300"}} h={{xl:"400", lg:"300", md:"350", sm:"300", base:"300"}}>
             <RadarChart chartType='others'/>
           </Box>
         </Flex>
    </Box>
  </>
  )
})

export default IndexPage