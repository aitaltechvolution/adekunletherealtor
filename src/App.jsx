import { BrowserRouter, Routes, Route, ScrollRestoration } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import PropertiesPage from "./pages/PropertiesPage";
import PropertyDetailPage from "./pages/PropertyDetailPage";
import ListingPage from "./pages/ListingPage";
import ContactPage from "./pages/ContactPage";
import FAQPage from "./pages/FAQPage";
import PolicyPage from "./pages/PolicyPage";

function ScrollToTop() {
  if (typeof window !== "undefined") {
    window.scrollTo(0, 0);
  }
  return null;
}

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/about" element={<Layout><AboutPage /></Layout>} />
        <Route path="/services" element={<Layout><ServicesPage /></Layout>} />
        <Route path="/properties" element={<Layout><PropertiesPage /></Layout>} />
        <Route path="/properties/:id" element={<Layout><PropertyDetailPage /></Layout>} />
        <Route path="/listing" element={<Layout><ListingPage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
        <Route path="/faq" element={<Layout><FAQPage /></Layout>} />
        <Route path="/policy" element={<Layout><PolicyPage /></Layout>} />
        <Route path="*" element={<Layout><HomePage /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}
