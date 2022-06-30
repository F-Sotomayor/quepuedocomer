import { Flex, Text, useColorMode } from "@chakra-ui/react";
import type { NextPage } from "next";
import { BottomBar } from "../components/BottomBar";
import { ItemFilter } from "../components/ItemFilter";
import { Recipe } from "../components/Recipe";
import { SideBar } from "../components/SideBar";

const Home: NextPage = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <Flex padding={2} direction="column">
      <Flex>
        <Flex>
          <SideBar />
        </Flex>
        <Flex flex={1} direction="column" padding={4} width="100%">
          <Text fontSize={18} fontWeight={500}>
            Simple recipy with your
            <span style={{ color: "#FC6011" }}> fridge&apos;s ingredients</span>
          </Text>
          <Flex
            width="100%"
            justify="space-evenly"
            marginTop={6}
            height="8vh"
            align="center"
          >
            <ItemFilter altImage="All" icon="all.png" text="ALL" />
            <ItemFilter altImage="All" icon="all.png" text="Chinese" />
            <ItemFilter altImage="All" icon="all.png" text="Pizza" />
            <ItemFilter altImage="All" icon="all.png" text="Spicy" />
          </Flex>
          <Flex flex={0.95} justify="center" align="flex-end">
            <Recipe />
          </Flex>
        </Flex>
      </Flex>
      <BottomBar />
    </Flex>
  );
};

export default Home;
