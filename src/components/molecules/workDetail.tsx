import React, { memo, VFC } from "react"
import { Box, Text, Flex, Link, Image, VStack, Center } from "@chakra-ui/react"
import { useIntl } from "gatsby-plugin-intl"

type Props = {
  workYear: string
  imageAlt: string
  imageUrl: string
  workContent: string
  workTech1: string
  workTech2: string
  link: string
}

export const WorkDetail: VFC<Props> = memo(props => {
  const {
    workYear,
    imageUrl,
    imageAlt,
    workContent,
    workTech1,
    workTech2,
    link,
  } = props

  const intl = useIntl()

  return (
    <>
      <Box w="100%">
        <Box w="100%" bg="white" borderRadius="10px" shadow="l" p="10px">
          {/* <Flex justify='start' w='50%'>
                <Heading fontSize={{xl:"4xl",lg:"4xl",md:"3xl", sm:"3xl",base:"2xl"}}>{intl.formatMessage({ id: workYear })}</Heading>
            </Flex> */}
          <VStack>
            <Box
              w="100%"
              p="2"
              mt={{ md: "5px", sm: "5px", base: "5px" }}
              fontSize={{ md: "13px", base: "13px" }}
            >
              {imageUrl && (
                <Link href={link} isExternal>
                  <Box ml="auto" mr="auto">
                    <Image
                      src={imageUrl}
                      alt={imageAlt}
                      width={180}
                      height={180}
                      margin="auto"
                      quality={95}
                    />
                  </Box>
                </Link>
              )}
              <Box mt="14px" p="3px">
                {intl
                  .formatMessage({ id: workContent })
                  .split("\n")
                  .map((str, index) => {
                    return (
                      <Text key={index}>
                        {str}
                        <br />
                      </Text>
                    )
                  })}
              </Box>
              <Box mt="12px">
                <Text>{intl.formatMessage({ id: workTech1 })}：</Text>
                <Text fontWeight={600}>
                  {intl.formatMessage({ id: workTech2 })}
                </Text>
              </Box>
            </Box>
          </VStack>
        </Box>
      </Box>
    </>
  )
})
