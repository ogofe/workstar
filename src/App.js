import { Footer, Navigation } from "./components";
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import ContactPage from './pages/Contact';
import HomePage from './pages/Homepage';
import RecruitmentPage from './pages/Registration';
import PrivacyPolicyPage from './pages/Privacy';
import FaqsPage from './pages/Faqs';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navigation />
      <main id="main-content-wrapper">
        <Routes>
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/work-for-us" element={<RecruitmentPage />} />
          <Route path="/faqs" element={<FaqsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
