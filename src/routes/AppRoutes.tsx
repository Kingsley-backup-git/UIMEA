
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import LearnMore from "../pages/learnMore";
import FAQ from "../pages/faq";
import PrivacyPolicy from "../pages/privacyPolicy";
import TermsOfService from "../pages/termsOfService";
import NewsDetails from "../pages/newsDetails";
import Gallery from "../pages/gallery";
import Publications from "../pages/publications";
import Newsletters from "../pages/newsletters";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/news/:id" element={<NewsDetails />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/newsletters" element={<Newsletters />} />
      </Routes>
    </BrowserRouter>
  )
}
