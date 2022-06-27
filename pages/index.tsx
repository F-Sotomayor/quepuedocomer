import { Button, Heading, Stack, useColorMode } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <Stack>
      <Heading>holi</Heading>
      <Button w={128} onClick={toggleColorMode}>
        oli
      </Button>
    </Stack>
  );
};

export default Home;
