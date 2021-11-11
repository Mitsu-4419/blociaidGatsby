import React, {memo, useEffect, useState} from "react"
import { Box, Text,Flex, AspectRatio,Image} from "@chakra-ui/react";

import Seo from "../components/seo"
import { RadarChart } from "../js/RadarChart.js";
// import topMovie from '../media/topPage3.mp4';
import FadeIn from 'react-fade-in';
import Surgeon from "../images/surgeon.png"

const IndexPage = memo(() => {
  // const [fadeinFlag, setfadeinFlag]= useState(false)
  // useEffect(()=>{
  //   setTimeout(() => { setfadeinFlag(true) },5500)
  // },[])
  
  return(
   <>
    <Seo title='Home' description="元医師、現エンジニアのKorin Yamada のPortofolio Site, Blog です。"/>
    <Box bgColor='white' pb='100' >
      <Flex w='95%' h={{xl:"400px",lg:"400px",md:"350px",sm:"300px",base:"280px"}} mr='auto' ml='auto'  justify='center' alignItems='center'>
          <Box w={{xl:"280px",lg:"280px",md:"240px",sm:"220px",base:"200px"}} >
            {/* <AspectRatio maxW="400px" ratio={3 / 3}> */}
            {/* <video
                title="topPageVideo"
                src={topMovie}
                playsInline
                muted
              /> */}
              <Image w={{lg:"250px",md:"230px",sm:"200px",base:"150px"}} h={{lg:"250px",md:"230px",sm:"200px",base:"150px"}} src={Surgeon} alt="surgeonFace" />
            {/* </AspectRatio> */}
          </Box>
      </Flex>
         <FadeIn>
         <Box w='100%' textAlign='center' h='20' mt='10'>
           <Text fontSize={{xl:42,lg:42,md:38, sm:38}} color='gray.700' fontWeight='bold'>Skills</Text>
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
       </FadeIn>

    </Box>
  </>
  )
})

export default IndexPage


{/* <Flex w='95%' h={{xl:fadeinFlag?"400px":"800px",lg:fadeinFlag?"400px":"800px",md:fadeinFlag?"350px":"700px",sm:fadeinFlag?"300px":"500px", base:fadeinFlag?"280px":"480px"}} mr='auto' ml='auto'  justify='center' alignItems='center'>
<Box w={{xl:fadeinFlag?"280px":"500px",lg:fadeinFlag?"280px":"500px",md:fadeinFlag?"240px":"420px",sm:fadeinFlag?"220px":"350px",base:fadeinFlag?"200px":"330px"}} >
  <AspectRatio maxW="400px" ratio={3 / 3}>
  <video
      title="topPageVideo"
      src={topMovie}
      playsInline
      muted
    />
  </AspectRatio>
</Box>
</Flex> */}