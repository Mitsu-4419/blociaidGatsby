import * as React from "react"
import { memo, VFC } from "react";
import { Flex,Text,} from "@chakra-ui/react";
import { useIntl } from "gatsby-plugin-intl"

type Props = {
  year: string;
  content:string,
};

export const ProfileText: VFC<Props> = memo(props => {
  const { year, content} = props;
  const intl = useIntl()

  return (
    <>
     <Flex>
            <Text w='130px'>{intl.formatMessage({ id: year })}</Text>
            <Text>{intl.formatMessage({ id: content })}</Text>
      </Flex>
    </>
  );
});