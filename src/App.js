
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from './Components/ScrollToTop';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/home/index.js'
import LayoutWithHeaderFooter from './Components/LayoutHeadFoot.js'
import SignupComponent from './Components/pages/register/CreateAccount.js'
import SignupPage from './Components/pages/register/SignupPage.js'
import VerifyAccount from './Components/pages/register/VerifyAccount.js'
import SuccessPage from './Components/pages/register/SuccessPage.js'
import CreateProfile from './Components/pages/register/CreateProfile.js'
import LoginPage from './Components/pages/register/LoginPage.js'
import ForgotPassword from './Components/pages/register/ForgotPassword.js'
import ResetEmail from './Components/pages/register/ResetEmail.js'
import ResetEmaResetPasswordil from './Components/pages/register/ResetPassword.js'
import FilterCardGallery from  './Components/profiles/recently-joined-members/index.js'
import SearchById from './Components/profiles/search-by-id/index.js'
import CustomSearch from './Components/profiles/custom-search/index.js'
import ProfilePage from './Components/profiles/others-profiles/index.js'
import MyProfilePage from './Components/profiles/my-profile/index.js'
import Contact from './Components/profiles/contact/index.js'
import ReportMisuseForm from './Components/profiles/report/index.js'
import PartnerSearch from './Components/profiles/search-partner/index.js'
import SearchPartnerById from './Components/profiles/search-partner-id'
import EditProfileForm from './Components/profiles/edit-your-profile/index.js'
import ChatApp from './Components/profiles/Chat-ui/index.js'
import Notifications from './Components/profiles/Notification/index.js'
import PrivacyPolicy from './Components/profiles/Policy/Privacy/index.js'
import TermsOfUse from './Components/profiles/Policy/Terms-of-use/index.js'
import HowToUse from './Components/profiles/Policy/How-to-use/index.js'
import Links from './links-delete/Links.js'
import BlogPage from './Components/profiles/Blog/index.js'
import BlogDetail from './Components/profiles/blog-post/index.js'
import PricingPlanCard from './Components/profiles/pricing/index.js'

function App() {
  return (
   <Router>
    <ScrollToTop/>
    {/* <Header/> */}
    <Routes>
    <Route path="/" element={
          <LayoutWithHeaderFooter>
            <Home />
          </LayoutWithHeaderFooter>
        } />

    <Route path="create-account/" element={<SignupComponent/>} />
    <Route path="sing-up/" element={<SignupPage/>} />
    <Route path="verify-account/" element={<VerifyAccount/>} />
    <Route path="success/" element={<SuccessPage/>} />
    <Route path="create-profile/" element={<CreateProfile/>} />
    <Route path="login/" element={<LoginPage/>} />
    <Route path="fogot-password/" element={<ForgotPassword/>} />
    <Route path="reset-email/" element={<ResetEmail/>} />
    <Route path="reset-password/" element={<ResetEmaResetPasswordil/>} />
    <Route path="recently-joined-matches/" element={ <FilterCardGallery/>  } />
    <Route path="search-id" element={ <SearchById/>  } />
    <Route path="custom-search" element={ <CustomSearch/>  } />
    <Route path="profile-page" element={ <ProfilePage/>  } />
    <Route path="my-profile" element={ <MyProfilePage/>  } />
    <Route path="contact-us" element={ <Contact/>  } />
    <Route path="report-misuse-form" element={ <ReportMisuseForm/>  } />
    <Route path="search-partner" element={ <PartnerSearch/>  } />
    <Route path="search-partner-id" element={ <SearchPartnerById/>  } />
    <Route path="edit-profile-form" element={ <EditProfileForm/>  } />
    <Route path="chat" element={ <ChatApp/>  } />
    <Route path="notifications" element={ <Notifications/>  } />
    <Route path="privacy-policy" element={ <PrivacyPolicy/>  } />
    <Route path="terms-of-use" element={ <TermsOfUse/>  } />
    <Route path="how-to-use" element={ <HowToUse/>  } />
    <Route path="links" element={ <Links/>  } />
    {/* <Route path="blog" element={ <BlogPage/>  } />
    <Route path="blog-post" element={ <BlogDetail/>  } /> */}
    <Route path="blog" element={<BlogPage />} />
        <Route path="blog/:id" element={<BlogDetail />} />
    <Route path="pricing" element={ <PricingPlanCard/>  } />
    </Routes>
    {/* <Footer/> */}
   </Router>
  );
}

export default App;
