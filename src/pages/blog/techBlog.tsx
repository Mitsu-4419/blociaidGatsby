import React, {useState} from "react";
import { Button, Box,Text, Flex,Wrap,WrapItem} from "@chakra-ui/react"
import {Link} from 'gatsby-plugin-intl';
import Seo from "../../components/seo"
import { BlogCard } from "../../components/molecules/blogCard"
import { graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"


export default function TechBlog({data}){
    const [blogFlag, setblogFlag] = useState("all")
    const intl = useIntl()
 
    const onClickChangeTech = (()=>{
        if(blogFlag=="Tech"){
            setblogFlag("all")
        }else{
         setblogFlag("Tech")
        }
    })
    const onClickChangeAtCoder = (()=>{
         if(blogFlag=="AtCoder"){
             setblogFlag("all")
         }
         else{
         setblogFlag("AtCoder")
         }
         
     })
     const onClickChangComputerScience = (()=>{
         if(blogFlag=="ComputerScience"){
             setblogFlag("all")
         }
         else{
         setblogFlag("ComputerScience")
         }
         
     })
     
  return(
  <>
  <Seo title="Ko-rin Yamada Blog" description='元医師、現エンジニアのKo-rin YamadaのBlog Siteです。エンジニアや鹿児島生活に関して書いています。'/>
    <Box pb='150px'>
        
        <Flex w='90%' ml='auto' mr='auto' h={{xl:"150px",lg:"150px",md:"120px",sm:"100px", base:"100px"}}  justify='center' alignItems='center'>
            <Text fontWeight='bold' fontSize={{xl:"60",lg:"60",md:"50", sm:"30", base:"30"}}>Tech Blog</Text>
        </Flex>
        <Flex justify='center' mb='5'>
            <Link to='/blog'>
                <Text as='em' color='blue.400'>{intl.formatMessage({ id: "blogLink1" })}</Text>
            </Link>
        </Flex>
        <Box minH='90vh' maxWidth={{xl:"1280px",}} ml='auto' mr='auto' pt='40px' pl='24px' pr='24px'  bg='white' shadow='sm'> 
            <Flex w='100%' ml='auto' mr='auto'>
                    <Button _hover={{bg:'blue.100'}} fontSize={{xl:"16px",lg:"16px",md:"16px",sm:"14px",base:"12px"}}  bgColor={blogFlag=="MyLife"?'blue.100':"gray.50"}  h='100%' minH='42px' w='33%' onClick={onClickChangeTech}>{intl.formatMessage({ id: "blogTag5" })}</Button>
                    <Button _hover={{bg:'blue.100'}} fontSize={{xl:"16px",lg:"16px",md:"16px",sm:"14px",base:"12px"}} bgColor={blogFlag=="Kagoshima"?'blue.100':"gray.50"}   h='100%' minH='42px' w='33%' onClick={onClickChangeAtCoder}>{intl.formatMessage({ id: "blogTag6" })}</Button>
                    <Button _hover={{bg:'blue.100'}} fontSize={{xl:"16px",lg:"16px",md:"16px",sm:"14px",base:"12px"}} bgColor={blogFlag =='"TechStudy"'?'blue.100':"gray.50"}    h='100%' minH='42px' w='33%' onClick={onClickChangComputerScience}>{intl.formatMessage({ id: "blogTag7" })}</Button>
            </Flex>
            <Box mt='40px'>
                <Wrap  ml='auto' mr='auto' w='100%'>
                {data.allContentfulBlogHinagataMarkdown.nodes.map(content=>{
                    if(blogFlag=="all" && typeof(content.title)==="string"){
                        return <Box w={{xl:"24.3%", lg:"32.4%", md:"48.3%", sm:"99%",base:"99%"}} p='2' key={content.id}>
                        <WrapItem key={content.id} mx="auto" >
                           <BlogCard key={content.id} id={content.slug} title={content.title} imageUrl={content.mainThumbnail.fluid.src} tag={content.tag} postDate={content.postDate} book={content.book}/>
                       </WrapItem>
                      </Box>
                    }else if(blogFlag==content.tag && typeof(content.title)==="string"){
                        return <Box w={{xl:"24.3%", lg:"32.4%", md:"48.3%", sm:"99%", base:"99%"}} p='2' key={content.id}>
                        <WrapItem key={content.id} mx="auto" >
                           <BlogCard key={content.id} id={content.slug} title={content.title} imageUrl={content.mainThumbnail.fluid.src} tag={content.tag} postDate={content.postDate} book={content.book}/>
                       </WrapItem>
                      </Box>
                    }
                   
                }
                 )}
                </Wrap>
            </Box>
        </Box>
    </Box>
  </>)
}


export const query = graphql`
    query ContentfulTecjQuery($language:String) {
        allContentfulBlogHinagataMarkdown(sort: {fields: postDate, order: DESC} filter: {node_locale: {eq:$language}, tech: {eq: true}}) {
        nodes {
            slug
            title
            createdAt
            postDate
            mainThumbnail {
                fluid {
                    src
                }
            }
            tag
            book
            id
        }
    }
}

`