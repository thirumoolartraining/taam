import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from "./components/ScrollToTop";
import { WhatsAppButton } from "./components/Header";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Main Pages
import Machinery from "./pages/Machinery";
import SpareParts from "./pages/SpareParts";
import BrowseCategory from "./pages/BrowseCategory";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import RequestQuote from "./pages/RequestQuote";
import QuoteConfirmation from "./pages/QuoteConfirmation";
import ShopNow from "./pages/ShopNow";

// Machinery Pages
import Tractors from "./pages/machinery/Tractors";
import Tillers from "./pages/machinery/Tillers";
import Sprayers from "./pages/machinery/Sprayers";
import Harvesters from "./pages/machinery/Harvesters";
import Ploughs from "./pages/machinery/Ploughs";

// Service Pages
import Maintenance from "./pages/services/Maintenance";

// E-commerce Pages
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import ProductDetail from "./pages/ProductDetail";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsAndConditions from "./pages/legal/TermsAndConditions";
import ShippingPolicy from "./pages/legal/ShippingPolicy";
import CancellationRefundPolicy from "./pages/legal/CancellationRefundPolicy";
import AboutUs from "./pages/AboutUs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <ScrollToTop />
        <WhatsAppButton />
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Main Pages */}
          <Route path="/machinery" element={<Machinery />} />
          <Route path="/spare-parts" element={<SpareParts />} />
          <Route path="/spare-parts/category/:category" element={<BrowseCategory />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/request-quote" element={<RequestQuote />} />
          <Route path="/quote-confirmation" element={<QuoteConfirmation />} />
          <Route path="/shop-now" element={<ShopNow />} />
          
          {/* Machinery Sub-pages */}
          <Route path="/machinery/tractors" element={<Tractors />} />
          <Route path="/machinery/tillers" element={<Tillers />} />
          <Route path="/machinery/sprayers" element={<Sprayers />} />
          <Route path="/machinery/harvesters" element={<Harvesters />} />
          <Route path="/machinery/ploughs" element={<Ploughs />} />
          
          {/* Service Sub-pages */}
          <Route path="/services/maintenance" element={<Maintenance />} />
          <Route path="/services/repairs" element={<Maintenance />} />
          <Route path="/services/installation" element={<Maintenance />} />
          <Route path="/services/training" element={<Maintenance />} />
          <Route path="/services/warranty" element={<Maintenance />} />
          <Route path="/services/financing" element={<Maintenance />} />
          
          {/* E-commerce Routes */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          
          {/* Product Detail Routes */}
          <Route path="/product/:category/:id" element={<ProductDetail />} />
          
          {/* Legal Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/cancellation-refund-policy" element={<CancellationRefundPolicy />} />
          
          {/* About Us */}
          <Route path="/about-us" element={<AboutUs />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
