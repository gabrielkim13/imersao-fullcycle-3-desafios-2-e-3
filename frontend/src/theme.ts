import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#FFCD00",
      contrastText: "#242526",
    },
    background: {
      default: "#242526",
    },
  },
});

export default theme;
