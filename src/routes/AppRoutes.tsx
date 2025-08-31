
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import LearnMore from "../pages/learnMore";
import FAQ from "../pages/faq";
import PrivacyPolicy from "../pages/privacyPolicy";
import TermsOfService from "../pages/termsOfService";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </BrowserRouter>
  )
}
