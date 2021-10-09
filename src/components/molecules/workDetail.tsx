import React, { memo, VFC } from 'react';
import { Box,Text, Heading, Flex,Link,Image   } from "@chakra-ui/react"
import { useIntl } from "gatsby-plugin-intl"

type Props = {
  workYear: string;
  imageAlt:string,
  imageUrl: string;
  workContent:string;
  workTech1:string;
  workTech2:string;
  link:string
};

export const WorkDetail: VFC<Props> = memo(props => {
  const { workYear, imageUrl, imageAlt, workContent,workTech1, workTech2, link} = props;
  
  const intl = useIntl()

  return (
    <>
       <Box w='90%' mr='auto' ml='auto' mt='40px' mb='40px' pt='30px'>
            <Flex justify='start' w='50%'>
                <Heading fontSize={{xl:"4xl",lg:"4xl",md:"3xl", sm:"3xl",base:"2xl"}}>{intl.formatMessage({ id: workYear })}</Heading>
            </Flex>
            <Flex w='100%'  mt='10' direction={{xl:"row", lg:"row", md:"column", sm:"column", base:"column"}}>
                <Flex  w={{xl:"50%", lg:"50%", md:"100%", sm:"100%", base:"100%"}} justify='center' alignItems='center'>
                    <Link href={link} isExternal>
                        <Image
                            src={imageUrl}
                            alt={imageAlt}
                            width={220}
                            quality={95} 
                        />
                    </Link>
                </Flex>
                <Box  w={{xl:"50%", lg:"50%", md:"100%", sm:"100%",base:"100%"}} bg='gray.100' p='5' mt={{md:"20px", sm:'20px',base:"10px"}} fontSize={{md:"18px",base:"13px"}}>
                    
                    {
                        intl.formatMessage({ id: workContent }).split('\n').map((str, index)=>{
                            return <Text key={index}>{str}<br /></Text>
                        }) 
                        }
                    
                    <Box mt='10px'>
                        <Text>{intl.formatMessage({ id: workTech1 })}：</Text>
                        <Text>{intl.formatMessage({ id: workTech2 })}</Text>
                    </Box>
                </Box>
            </Flex>
        </Box>
    </>
  );
});