import { Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { FC } from "react";

export const Recipe: FC = () => {
  return (
    <Stack
      height="55vh"
      width="65vw"
      backgroundColor="#ffae85"
      borderRadius={12}
      padding={4}
    >
      <Flex
        justify="flex-end"
        align="flex-start"
        transform="translateY(-15vh)"
        right={0}
        position="absolute"
      >
        <Image src="./pasta.png" alt="Pasta" width="35vw" height="30vh" />
      </Flex>
      <Flex height="90px" align="flex-end">
        <span
          style={{
            width: "3px",
            height: "24px",
            backgroundColor: "#FC6011",
            display: "flex",
          }}
        ></span>
        <Text marginLeft={2} color="#FC6011" fontSize={18}>
          Pasta
        </Text>
      </Flex>
      <Flex w="90%" textAlign="left">
        <Heading marginTop={4}>Italian Pasta with Meatballs</Heading>
      </Flex>
      <Flex>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In odit, est
        eius rerum corrupti officia ex ipsam quis porro modi, voluptate amet.
      </Flex>
      <Flex width="100%" justify="space-between">
        <Flex width="80px" justify="space-around" align="center">
          <Image
            src="https://icongr.am/material/campfire.svg?size=128&color=2b2b2b"
            alt="Cook"
            height="18px"
            width="18px"
          />
          <Text>20min</Text>
        </Flex>
        <Flex width="60px" justify="space-around" align="center">
          <Image
            src="https://icongr.am/material/campfire.svg?size=128&color=2b2b2b"
            alt="Cook"
            height="18px"
            width="18px"
          />
          <Text>5kg</Text>
        </Flex>
      </Flex>
      <Flex justify="space-between">
        <Flex width="40%" marginTop={8}>
          <Button height="60px" width="100%">
            +
          </Button>
        </Flex>
        <Flex width="60%" marginLeft={4} marginTop={8}>
          <Button height="60px" colorScheme="orange" width="100%">
            View Recipe
          </Button>
        </Flex>
      </Flex>
    </Stack>
  );
};
