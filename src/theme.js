import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
      light: '#f5f5f5',
      dark: '#424242'
    },
  },
  typography:{
    h2: {
      fontFamily: "Courgette"
    },
    h4: {
      fontFamily: "Courgette",
    },
    h5: {
      fontFamily: "Courgette",
    },
    h6: {
      fontFamily: "Courgette"
    },
    useNextVariants: true,
    fontFamily: [ 
      'Roboto',
      'Courgette'
    ].join(','), 
  },
});

export default theme;
