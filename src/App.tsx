import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import Index from "./pages/Index";
import Marketplace from "./pages/Marketplace";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CartPage from "./pages/Cart";
import CheckoutPage from "./pages/Checkout";
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import DashboardPage from './pages/Dashboard';
import SuccessPage from './pages/Success';
import FailPage from './pages/Fail';
import CancelPage from './pages/Cancel';
import SummerCollectionPage from './pages/collections/SummerCollection';
import EidCollectionPage from './pages/collections/EidCollection';
import StoreLocatorPage from './pages/StoreLocator';

const App = () => {
  return (
    <React.StrictMode>
      <TooltipProvider>
        <AuthProvider>
          <CartProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/payment/success" element={<SuccessPage />} />
                <Route path="/payment/fail" element={<FailPage />} />
                <Route path="/payment/cancel" element={<CancelPage />} />
                <Route path="/collections/summer-2025" element={<SummerCollectionPage />} />
                <Route path="/collections/eid-2025" element={<EidCollectionPage />} />
                <Route path="/store-locator" element={<StoreLocatorPage />} />
              </Routes>
            </BrowserRouter>
          </CartProvider>
        </AuthProvider>
      </TooltipProvider>
    </React.StrictMode>
  );
};

export default App;
