import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import "./styles/index.scss";
import ScrollToTop from "./components/common/ScrollTop";
import "bootstrap/dist/js/bootstrap";

import { Route, Routes } from "react-router-dom";


import Crypto from "./pages/home/crypto";



import AboutUsV3 from "./pages/pages-menu/about-us-v3";


import ServiceV4 from "./pages/pages-menu/service-v4";
import ServiceDetails from "./pages/pages-menu/service-details";

import TeamV2 from "./pages/pages-menu/team-v2";

import FeaturesV1 from "./pages/pages-menu/features-v1";

import Testimonials from "./pages/pages-menu/testimonials";
import Faq from "./pages/pages-menu/faq";
import LogIn from "./pages/login";
import SignUp from "./pages/signup";
import NotFound from "./pages/404";
import PortfolioV4 from "./pages/portfolio/portfolio-v4";
import DynamicPortfolioDetails from "./pages/portfolio/portfolio-single";

import BlogV2 from "./pages/blog/blog-v2";
import DynamicBlogDetails from "./pages/blog/blog-single";
import ContactV2 from "./pages/contact/contact-v2";

import ScrollTopBehaviour from "./components/common/ScrollTopBehavier";
function App() {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="main-page-wrapper">
      <Routes>
        <Route path="/">
          <Route index element={<Crypto />} />
          <Route path="home/crypto" element={<Crypto />} />



          <Route path="pages-menu/about-us-v3" element={<AboutUsV3 />} />


          <Route path="pages-menu/service-v4" element={<ServiceV4 />} />
          <Route
            path="pages-menu/service-details"
            element={<ServiceDetails />}
          />


          <Route path="pages-menu/team-v2" element={<TeamV2 />} />


          <Route path="pages-menu/features-v1" element={<FeaturesV1 />} />


          <Route path="pages-menu/faq" element={<Faq />} />
          <Route path="pages-menu/testimonials" element={<Testimonials />} />
          <Route path="login" element={<LogIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="404" element={<NotFound />} />


          <Route path="portfolio/portfolio-v4" element={<PortfolioV4 />} />
          <Route path="portfolio/:id" element={<DynamicPortfolioDetails />} />


          <Route path="blog/blog-v2" element={<BlogV2 />} />
          <Route path="blog/:id" element={<DynamicBlogDetails />} />

          <Route path="contact/contact-v2" element={<ContactV2 />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ScrollTopBehaviour />

      <ScrollToTop />
    </div>
  );
}

export default App;
