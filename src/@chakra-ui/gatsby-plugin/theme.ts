import { extendTheme  } from "@chakra-ui/react";
import { createBreakpoints} from "@chakra-ui/theme-tools"

const breakpoints = createBreakpoints({
  sm: '400px',
  md: "600px",
  lg: "960px",
  xl: "1280px",
})


const theme = extendTheme(
  {
  
  styles: {
    global: {
      body: {
        backgroundColor: "gray.50",
        color: "gray.800"
      },
      fonts: {
        heading: "Open Sans",
      },
    }
  },
  breakpoints
  },
);

export default theme;
