import { Flex, Image, Stack, Text } from "@chakra-ui/react";
import { FC } from "react";

export const BottomBar: FC = () => {
  return (
    <Stack
      direction="row"
      width="100%"
      height="8vh"
      backgroundColor="#F0F5F9"
      borderRadius={12}
      justify="space-around"
      align="center"
    >
      <Flex
        align="center"
        justify="center"
        borderRadius={12}
        height="50px"
        width="125px"
        backgroundColor="rgba(239, 106, 38, 0.31)"
      >
        <Image
          width="32px"
          height="32px"
          src="https://icongr.am/material/grid-large.svg?size=128&color=fc6011"
          alt="Home"
        />
        <Text marginLeft={4} fontSize={18} fontWeight={500} color="#fc6011">
          Home
        </Text>
      </Flex>
      <Flex align="center" height="60px">
        <Image
          width="32px"
          height="32px"
          src="https://icongr.am/material/account.svg?size=128&color=a1a1a1"
          alt="Account"
        />
      </Flex>
      <Flex align="center" height="60px">
        <Image
          width="32px"
          height="32px"
          src="https://icongr.am/material/bookmark.svg?size=128&color=a1a1a1"
          alt="Bookmarked"
        />
      </Flex>
      <Flex align="center" height="60px">
        <Image
          width="32px"
          height="32px"
          src="https://icongr.am/material/share-variant.svg?size=128&color=a1a1a1"
          alt="Shared"
        />
      </Flex>
    </Stack>
  );
};
