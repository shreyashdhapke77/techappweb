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
import { Box, PaletteMode, Snackbar } from '@mui/material';
import ApplicationBar from './components/ApplicationBar';
import Community from './screens/Community';
import Blog from './screens/Blog';
import Advertise from './screens/Advertise';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { teal, cyan } from '@mui/material/colors';
import Footer from './screens/Footer';

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {
    // This is intentional
  },
});

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        // palette values for light mode
        primary: cyan,
        divider: cyan[500],
        background: {
          default: '#efefef',
          paper: '#fff',
        },
        text: {
          primary: '#000000',
          // secondary: cyan[200],
        },
        icon: {
          default: 'blue'
        }
      }
      : {
        // palette values for dark mode
        primary: teal,
        divider: teal[500],
        background: {
          default: '#222',
          paper: '#111',
        },
        text: {
          primary: '#fff',
          // secondary: grey[500],
        },
        icon: {
          default: 'blue'
        }
      }
      ),
      },
});

function App() {

  const [mode, setMode] = React.useState<PaletteMode>('light');
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
        <Footer />
      </BrowserRouter>
     </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
