import './App.css';
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
import { Box } from '@mui/material';
import ApplicationBar from './components/ApplicationBar';
import Community from './screens/Community';
import Blog from './screens/Blog';

function App() {
  return (
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
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
