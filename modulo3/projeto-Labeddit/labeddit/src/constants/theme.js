import { createTheme } from "@material-ui/core";
import { primaryColor, secondColor, neutralColor } from "./colors";


const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: primaryColor,     
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: secondColor,
      dark: '#ba000d',
      contrastText: '#fff',
    },
    neutral: {
      light: '#ff7961',
      main: neutralColor,
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export default theme