import { createTheme } from "@material-ui/core";
import { primaryColor } from "./colors";


const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: primaryColor,     
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export default theme