import './App.css';
import * as React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './screens/HomePage';
import AboutPage from './screens/AboutPage';
import FindWorker from './screens/FindWorker';
import BecomeWorker from './screens/BecomeWorker';
import TermsCondition from './screens/TermsCondition';
import ContactUs from './screens/ContactUs';
import RateUs from './screens/RateUs';
import UserProfile from './screens/UserProfile';
import UserAccount from './screens/UserAccount';
import Dashboard from './screens/Dashboard';
import { Box, PaletteMode } from '@mui/material';
import ApplicationBar from './components/ApplicationBar';
import Community from './screens/Community';
import Blog from './screens/Blog';
import Advertise from './screens/Advertise';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { amber, teal, deepOrange, grey, cyan } from '@mui/material/colors';
import { APP_BG_DARK, APP_BG_LIGHT } from './utils/colors';

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {
    // This is intentional
  },
});


// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//   },
// });
// background: {
//   default: APP_BG_LIGHT,
//   paper: deepOrange[900],
// },
// text: {
//   primary: APP_BG_LIGHT,
//   secondary: teal[800],
// },
const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        // palette values for dark mode
        primary: teal,
        divider: teal[200],
        background: {
          default: APP_BG_DARK,
          paper: teal[50],
        },
        text: {
          primary: '#fff',
          // secondary: grey[500],
        },
      }
      : {
        // palette values for light mode
        primary: cyan,
        divider: cyan[200],
        background: {
          default: APP_BG_LIGHT,
          paper: '#fff',
        },
        text: {
          primary: '#fff',
          // secondary: cyan[200],
        },
      }
      ),
      },
});

function App() {

  const [mode, setMode] = React.useState<PaletteMode>('dark');
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );

  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <ApplicationBar />
        <Box sx={{mt: 4, textAlign: 'center'}}>
          <Routes>
            <Route index={true} element={<HomePage />}></Route>
            <Route index={true} path={'findWorker'} element={<FindWorker />}></Route>
            <Route index={true} path={'becomeWorker'} element={<BecomeWorker />}></Route>
            <Route index={true} path={'about'} element={<AboutPage />}></Route>
            <Route index={true} path={'termsCondition'} element={<TermsCondition />}></Route>
            <Route index={true} path={'contactUs'} element={<ContactUs />}></Route>
            <Route index={true} path={'rateUs'} element={<RateUs />}></Route>
            <Route index={true} path={'userProfile'} element={<UserProfile />}></Route>
            <Route index={true} path={'userAccount'} element={<UserAccount />}></Route>
            <Route index={true} path={'dashboard'} element={<Dashboard />}></Route>
            <Route index={true} path={'blog'} element={<Blog />}></Route>
            <Route index={true} path={'community'} element={<Community />}></Route>
            <Route index={true} path={'advertise'} element={<Advertise />}></Route>
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
