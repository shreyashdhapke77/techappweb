import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './screens/HomePage';
import AboutPage from './screens/AboutPage';
import FindWorker from './screens/FindWorker';
import BecomeWorker from './screens/BecomeWorker';
import TermsCondition from './screens/TermsCondition';
import ContactUs from './screens/ContactUs';
import RateUs from './screens/RateUs';
import LeaveFeedback from './screens/LeaveFeedback';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route index={true} element={<HomePage />}></Route>
          <Route index={true} path={'findWorker'} element={<FindWorker />}></Route>
          <Route index={true} path={'becomeWorker'} element={<BecomeWorker />}></Route>
          <Route index={true} path={'about'} element={<AboutPage />}></Route>
          <Route index={true} path={'termsCondition'} element={<TermsCondition />}></Route>
          <Route index={true} path={'contactUs'} element={<ContactUs />}></Route>
          <Route index={true} path={'rateUs'} element={<RateUs />}></Route>
          <Route index={true} path={'leaveFeedback'} element={<LeaveFeedback />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
