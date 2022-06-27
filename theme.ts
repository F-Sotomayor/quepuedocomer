import { extendTheme } from "@chakra-ui/react";
import { theme } from "@chakra-ui/theme";

export default extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
  colors: {
    primary: theme.colors.facebook,
  },
});
