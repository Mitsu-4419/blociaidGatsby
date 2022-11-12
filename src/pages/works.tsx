import * as React from "react"
import { Box,Heading, Flex,Wrap, WrapItem} from "@chakra-ui/react"

import Seo from "../components/seo"
import { useIntl } from "gatsby-plugin-intl";

import {WorkDetail}  from "../components/molecules/workDetail";
import janken from "../images/jankenGame.png"
import cryptotuber from "../images/cryptotuber_logoT.jpg"
import gamelive from "../images/gameLivelogo.png"
import cooktuber from "../images/CookTuber_logo.png"
import nonoshire from "../images/nonoshireLogo.png"
import blockaid from "../images/BlockAidHP.png"
import question from "../images/question.png"

const WorkPage = () => {
    const intl = useIntl()
    return(
  <>
    <Seo title='Works' description="Ko-rin Yamadaのポートフォリオページです"/>
    <Box pb='150' >
        <Flex justify='center' h='120px' alignItems='center'>
            <Heading fontSize={{xl:"4xl",lg:"4xl",md:"3xl", sm:"3xl",base:"2xl"}}>{intl.formatMessage({ id: "work-title" })}</Heading>
        </Flex>
        <Wrap ml='auto' mr='auto' w='100%' justify="center">
        <Box w={{xl:"44%", lg:"44%", md:"44%", sm:"99%",base:"99%"}} p='2'>
          <WrapItem mx="auto">
            <WorkDetail workYear="work1-year" imageUrl={janken} imageAlt='jankengame' workContent="work1-content" workTech1="work-main-tech" workTech2="work-main-tech1" link="https://jankengame-2cfec.firebaseapp.com/"/>
          </WrapItem >
          </Box>
          <Box w={{xl:"44%", lg:"44%", md:"44%", sm:"99%",base:"99%"}} p='2'>
          <WrapItem mx="auto">
            <WorkDetail workYear="work2-year" imageUrl={cryptotuber} imageAlt='cryptotuber' workContent="work2-content" workTech1="work-main-tech" workTech2="work-main-tech2" link="https://cryptotuber.com/#/"/>
          </WrapItem>
          </Box>
          <Box w={{xl:"44%", lg:"44%", md:"44%", sm:"99%",base:"99%"}} p='2'>
          <WrapItem mx="auto">
            <WorkDetail workYear="work3-year" imageUrl={gamelive} imageAlt='gamelive' workContent="work3-content" workTech1="work-main-tech" workTech2="work-main-tech3" link="https://gamelive.jp"/>
          </WrapItem>
          </Box>
          <Box w={{xl:"44%", lg:"44%", md:"44%", sm:"99%",base:"99%"}} p='2'>
          <WrapItem mx="auto">
            <WorkDetail workYear="work4-year" imageUrl={cooktuber} imageAlt='cooktuber' workContent="work4-content" workTech1="work-main-tech" workTech2="work-main-tech4" link="https://cooktuber.com"/>
          </WrapItem>
          </Box>
          <Box w={{xl:"44%", lg:"44%", md:"44%", sm:"99%",base:"99%"}} p='2'>
          <WrapItem mx="auto">
            <WorkDetail workYear="work5-year" imageUrl={nonoshire} imageAlt='nonoshire' workContent="work5-content" workTech1="work-main-tech" workTech2="work-main-tech5" link=""/>
          </WrapItem >
          </Box>
          <Box w={{xl:"44%", lg:"44%", md:"44%", sm:"99%",base:"99%"}} p='2'>
          <WrapItem mx="auto">
            <WorkDetail workYear="work6-year" imageUrl={blockaid} imageAlt='blockaid' workContent="work6-content" workTech1="work-main-tech" workTech2="work-main-tech6" link=""/>
          </WrapItem>
          </Box>
            {/* <WorkDetail workYear="work7-year" imageUrl={question} imageAlt='question' workContent="work7-content" workTech1="work-main-tech" workTech2="work-main-tech7" link=""/> */}
        </Wrap>
    </Box>
  </>
)
}

export default WorkPage
