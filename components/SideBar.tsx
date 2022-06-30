import { Stack, Flex, Image, Text } from "@chakra-ui/react";
import { FC } from "react";

export const SideBar: FC = () => {
  return (
    <Stack
      w="15vw"
      h="90vh"
      backgroundColor="#F0F5F9"
      align="center"
      paddingY={4}
      borderTopLeftRadius={24}
      color="#a1a1a1"
      fontSize={18}
    >
      <Flex width="50px" justify="center" height="50px">
        <Image
          src="https://icongr.am/material/menu.svg?size=128&color=currentColor"
          w="24px"
          h="24px"
          alt="Menu"
          cursor="pointer"
        />
      </Flex>
      <Flex width="50px" justify="center" height="50px">
        <Image
          src="https://icongr.am/material/search-web.svg?size=128&color=currentColor"
          w="24px"
          h="24px"
          alt="Search"
          cursor="pointer"
        />
      </Flex>
      <Flex justify="center" height="250px" align="center" width="300px">
        <Text transform="rotate(-90deg)">
          <a href="#">What i have Refrigerator</a>
        </Text>
      </Flex>
      <Flex width="50px" justify="center" height="125px" align="center">
        <Text transform="rotate(-90deg)">
          <a href="#">Snacks</a>
        </Text>
      </Flex>
      <Flex width="50px" justify="center" height="125px" align="center">
        <Text transform="rotate(-90deg)">
          <a href="#">Drinks</a>
        </Text>
      </Flex>
      <Flex width="50px" justify="center" height="125px" align="center">
        <Text transform="rotate(-90deg)">
          <a href="#">Food</a>
        </Text>
      </Flex>
    </Stack>
  );
};
