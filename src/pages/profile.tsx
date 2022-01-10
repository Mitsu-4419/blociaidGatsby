import * as React from "react"
import { Grid, GridItem, Box,Text, Heading, Flex,VStack } from "@chakra-ui/react"
import { StaticImage } from "gatsby-plugin-image"
import {Link} from "gatsby"
import Seo from "../components/seo"
import { useIntl } from "gatsby-plugin-intl"
import { ProfileText } from "../components/molecules/profileText"

const ProfilePage = () => {
  const intl = useIntl()
  return (
  <>
    <Seo title="Korin Yamada's profile" description="Korin Yamada のProfile ページです"/>
    <Grid
      templateRows="repeat(34, 1fr)"
      templateColumns="repeat(34, 1fr)"
      minH={{md:"900px", sm:"700px",base:"500px"}}
    >
      <GridItem rowSpan={{xl:2,lg:2,md:1, sm:1, base:1}} colSpan={34}></GridItem>
      <GridItem rowSpan={{xl:32,lg:32,md:33, sm:33, base:33}} colSpan={{xl:2,lg:2,md:1, sm:1,base:1}} ></GridItem>
      <GridItem rowSpan={{xl:4,lg:4,md:3, sm:3,base:0}} colSpan={{xl:30,lg:30,md:32, sm:32,base:32}} bg='white'>
          <Flex w='95%' h='100%' ml='auto' mr='auto' borderBottom='1px' borderBottomColor='blue.200' alignItems='center'>
            <Heading fontSize={{xl:"5xl", lg:"5xl", md:"4xl", sm:"4xl"}} ml='12'>Profile</Heading>
          </Flex>
      </GridItem>
      <GridItem rowSpan={{xl:34,lg:34,md:33, sm:33,base:33}} colSpan={{xl:2,lg:2,md:1, sm:1, base:1}}></GridItem>
      <GridItem rowSpan={{xl:20, lg:20, md:8, sm:7,base:7}} colSpan={{xl:11, lg:11, md:32, sm:32,base:32}}  bg='white' >
        <Flex w='100%' h='100%' justify='center' alignItems='center'>
            <Box w={{xl:280, lg:250, md:150, sm:150,base:120}}>
              <StaticImage
                  src="../images/CEOFace.png"
                  quality={95}
                  alt="CEOFace"
              />
            </Box>
        </Flex>
      </GridItem>
      <GridItem rowSpan={{xl:20, lg:20, md:16, sm:16,base:19}} colSpan={{xl:19, lg:19, md:32, sm:32,base:32}}  bg='white' >
        <Flex h='100%' alignItems='center' p='4'>
          <VStack align='start' spacing={{xl:3, lg:2, md:2, sm:2, base:2}} fontSize={{xl:"18", lg:"16", md:"15", sm:"12", base:"10"}}>
            <ProfileText year='prof1-year' content='prof1-content'></ProfileText>
            <ProfileText year='prof2-year' content='prof2-content'></ProfileText>
            <ProfileText year='prof3-year' content='prof3-content'></ProfileText>
            <Flex>
              <Text w='130px'>{intl.formatMessage({ id: "prof4-year" })}</Text>
              <Text>{intl.formatMessage({ id: "prof4-1-content" })}<br/>{intl.formatMessage({ id: "prof4-2-content" })}<br/>{intl.formatMessage({ id: "prof4-3-content" })}</Text>
            </Flex>
            <ProfileText year='prof5-year' content='prof5-content'></ProfileText>
            <Box mt='10px' mb='10px'>
              <Text>{intl.formatMessage({ id: "prof6-content" })}</Text>
            </Box>
            <Flex>
              <Text w='130px'>{intl.formatMessage({ id: "prof7-year" })}</Text>
              <Text>{intl.formatMessage({ id: "prof7-1-content" })}<br/>{intl.formatMessage({ id: "prof7-2-content" })}</Text>
            </Flex>
            <ProfileText year='prof8-year' content='prof8-content'></ProfileText>
            <ProfileText year='prof9-year' content='prof9-content'></ProfileText>
            <ProfileText year='prof11-year' content='prof11-content'></ProfileText>
            <ProfileText year='prof10-year' content='prof10-content'></ProfileText>
            <Link to='/blog/aboutme'><Text color='blue'>My Story</Text></Link>
          </VStack>
        </Flex>
      </GridItem>
      <GridItem rowSpan={6} colSpan={{xl:18,lg:18,md:19, sm:19, base:19}}  bg='white' p={{xl:"4",lg:"4",md:"2", sm:"1", base:"1"}}>
        <Box m='2' fontSize={{xl:"20", lg:"18", md:"16", sm:"14", base:"8"}}pl={{xl:"10", lg:"8", md:"6", sm:"4", base:"4"}} pr={{xl:"10", lg:"8", md:"6", sm:"4", base:"4"}}>
          <Text fontWeight={"bold"}>{intl.formatMessage({ id: "prof-certificate" })}</Text>
          <Text>
          {intl.formatMessage({ id: "prof-certificate-detail1" })}<br/>
          {intl.formatMessage({ id: "prof-certificate-detail2" })}
          </Text>
        </Box>
      </GridItem>
      <GridItem rowSpan={6} colSpan={{xl:12,lg:12,md:13, sm:13, base:13}}  bg='white' p={{xl:"4",lg:"4",md:"2", sm:"1", base:"1"}}>
        <Box m='2'fontSize={{xl:"20", lg:"18", md:"16", sm:"10", base:"8"}} pl={{xl:"10", lg:"8", md:"6", sm:"4",base:"4"}} pr={{xl:"10", lg:"8", md:"6", sm:"4", base:"4"}}>
            <Text fontWeight={"bold"}>{intl.formatMessage({ id: "prof-hobby" })}</Text>
            <Text>{intl.formatMessage({ id: "prof-hobby-detail" })}</Text>
        </Box>
      </GridItem>
      <GridItem rowSpan={{xl:2,lg:2,md:1, sm:1, base:1}} colSpan={{xl:30,lg:30,md:32, sm:32,base:32}}></GridItem>
    </Grid>
  </>)
}

export default ProfilePage
