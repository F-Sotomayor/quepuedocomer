import { Text, Flex, Stack } from "@chakra-ui/react";
import { FC } from "react";
import { ItemFilter } from "./ItemFilter";

export const FilterBar: FC = () => {
  return (
    <Stack height="30vh" padding={4}>
      <Text fontSize={18} fontWeight={500} height="6vh">
        Simple recipy with your
        <span style={{ color: "#FC6011" }}> fridge&apos;s ingredients</span>
      </Text>
      <Flex width="100%" justify="space-evenly" height="12vh" align="center">
        <ItemFilter altImage="All" icon="all.png" text="ALL" />
        <ItemFilter altImage="All" icon="all.png" text="Chinese" />
        <ItemFilter altImage="All" icon="all.png" text="Pizza" />
        <ItemFilter altImage="All" icon="all.png" text="Spicy" />
      </Flex>
    </Stack>
  );
};
