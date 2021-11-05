/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { graphql } from "gatsby"
import { Box, Text,Flex, Image, Tag,TagLabel,Button } from "@chakra-ui/react";
import {changeDateFormat} from '../js/changeDateFormat.js'
import {Link} from 'gatsby-plugin-intl';
import Seo from "../components/seo"
import "../styles/style.css"

const ProjectDetails = ({data}) => {
  const [date, setDate] = useState("")
  useEffect(()=>{
    const date= changeDateFormat(data.blog.createdAt)
    setDate(date)
  },[])
  

  return (
    <>
      <Seo title={data.blog.title} image={data.blog.mainThumbnail.file.url?data.blog.mainThumbnail.file.url:''}/>
      {typeof(data.blog.title) ==="string"?
      <Flex w='100%' justify='center' mt='80px' mb='100px'>
        <Box maxW='760px' bg='white' pl='5' pr='5' pt='5' pb='5'>
          <Flex justify='center' w='100%'>
            <Text fontSize='15px' color='red'>{date}</Text>
          </Flex>
          <Box w='100%' textAlign='center' mt='10px' mb='10px'>
            <Text fontSize={{xl:"30", lg:"30", md:"30", sm:"20", base:"20"}} fontWeight='bold'>
              {data.blog.title }
            </Text>
          </Box>
          <Flex h='50px' pl='20px' mb='10px'>
            <Tag size="md" colorScheme="gray" borderRadius="full" h='38px'>
                <Text mr='5px'>#</Text>
                <TagLabel>{data.blog.tag}</TagLabel>
              </Tag>
          </Flex>
          <Flex w='100%' justify='center'>
            <Image
              src={data.blog.mainThumbnail.fluid.src}
              alt="tosenkyoThumbnail"
              fit='cover'
              h={{xl:"520px", lg:"520px", md:"400px", sm:"350px", base:"300px"}}   
            />
          </Flex>
          <Box color='gray.900' fontSize={{xl:"18", lg:"18", md:"18", sm:"15", base:"13"}} mt='4rem' mb='4rem' lineHeight={{xl:"10", lg:"10", md:"10", sm:"8", base:"6"}} ml={{base:"12px"}} mr={{base:"12px"}}>
            <Text dangerouslySetInnerHTML={{ __html: data.blog.content.childMarkdownRemark.html }} />
          </Box>
          <Flex w='90%' ml='auto' mr='auto' justify='center'>
            <Link to="/blog">
                <Text color='blue' fontSize='18px'>blog Top Page へ</Text>
            </Link>
          </Flex>
        </Box>
        
      </Flex>
      :""}
    </>
  )
}
 
export default ProjectDetails


export const query = graphql`
  query($slug: String!, $language:String) {
    blog: contentfulBlogHinagataMarkdown(slug: { eq: $slug }, node_locale:{eq:$language}) {
      id
      tag
      title
      createdAt
      mainThumbnail {
        fluid {
          src
        }
        file{
          url
        }
      }
      content{
        content
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
