import { Flex, Stack, Text, useColorMode } from "@chakra-ui/react";
import type { NextPage } from "next";
import { BottomBar } from "../components/BottomBar";
import { FilterBar } from "../components/FilterBar";
import { ItemFilter } from "../components/ItemFilter";
import { Recipe } from "../components/Recipe";
import { SideBar } from "../components/SideBar";

const Home: NextPage = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <Stack padding={2}>
      <Stack direction="row" maxH="100vh" maxW="100vw">
        <SideBar />
        <Flex direction="column">
          <FilterBar />
          <Flex width="100%" flex={1} justify="center">
            <Recipe />
          </Flex>
        </Flex>
      </Stack>
      <BottomBar />
    </Stack>
  );
};

export default Home;
