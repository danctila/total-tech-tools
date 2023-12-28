import { extendTheme } from "@chakra-ui/react";
import "@fontsource/play";

const theme = extendTheme({
  fonts: {
    heading: `'Play', sans-serif`,
    body: `'Play', sans-serif`,
  },
});

export default theme;
