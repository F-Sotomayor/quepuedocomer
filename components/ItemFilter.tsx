import { Image, Stack, Text } from "@chakra-ui/react";
import { FC } from "react";

interface Props {
  icon: string;
  text: string;
  altImage: string;
}

export const ItemFilter: FC<Props> = ({ icon, text, altImage }) => {
  return (
    <Stack
      height="90px"
      width="70px"
      align="center"
      justify="center"
      backgroundColor="#F0F5F9"
      marginRight={4}
      borderRadius={12}
    >
      <Image src={icon} alt={altImage} height="40px" width="40px" />
      <Text>{text}</Text>
    </Stack>
  );
};
